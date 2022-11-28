var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
var Autocomplete = /** @class */ (function () {
    function Autocomplete(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * addressAutocomplete - addressAutocomplete
     *
     * Use `/autocomplete` to retrieve address suggestions for a partial string.
     *
     * ### Implementing Autocomplete
     *
     * Retrieving addresses using autocomplete is a 2 step process.
     *
     * 1. Retrieve partial address suggestions via `/autocomplete/addresses`
     * 2. Retrieve the entire address by following the URL provided by the suggestion
     *
     * Step 2 will decrement your lookup balance.
     *
     * Please note, this API is [not intended to be a free standalone resource](#pricing).
     *
     * ### Testing
     *
     * `ID1 1QD` will return address suggestions, that when retrieved via `/udprn/:id` will not affect your balance.
     *
     * ### Notes
     *
     * #### Suggestion Format
     *
     * The suggestion format is prone to change over time. Attempts to parse the suggestion may result in your integration breaking. Instead use the suggestion as is.
     *
     * #### Querying with a Postcode
     *
     * If a postcode is passed as a query, all addresses for that postcode will be listed as the result if the limit parameter is not supplied. If a postcode forms only part of the query, your autocomplete results will be filtered by that postcode.
     *
     * #### Authentication
     *
     * When using the autocomplete API, low request latency is essential in delivering a speedy list of suggestions to the user. For this reason we recommend using query string authentication (i.e. `api_key=foo`) rather than HTTP Header authentication (i.e. `Authorization: IDEALPOSTCODES api_key="foo"`). The latter will incur additional latency as most browsers will trigger a preflight OPTIONS request for each key press.
     *
     * #### Querying Multiple Residence
     *
     * For Multiple Residence enabled keys, any Multiple Residence households will also return a UMPRN id, which can be retrieved with the `/umprn/` endpoint. Note that Multiple Residence households will always have a parent premise with a UDPRN, and a single UDPRN premise may have many Multiple Residence households with different UMPRNs. For instance:
     *
     * ```
     * {
     *   "result": {
     *     "hits": [
     *       {
     *         "suggestion": "10 Downings, London, E6",
     *         "urls": {
     *           "udprn": "/v1/udprn/7944730"
     *         },
     *         "udprn": 7944730
     *       },
     *       {
     *         "suggestion": "10 Downing Grove, Hull, HU9",
     *         "urls": {
     *           "udprn": "/v1/udprn/11168744",
     *           "umprn": "/v1/umprn/882919"
     *         },
     *         "udprn": 11168744,
     *         "umprn": 882919
     *       }
     *     ]
     *   },
     *   "code": 2000,
     *   "message": "Success"
     * }
     * ```
     *
     * ### Rate Limiting
     *
     * You can make up to 3000 requests to the autocomplete API within a 5 minute span. The HTTP Header contains information on your current rate limit.
     *
     * | Header                  | Description |
     * | ----------------------- | -------------------------------------------------------------------------------------- |
     * | `X-RateLimit-Limit`     | The maximum number of requests that can be made in 5 minutes                           |
     * | `X-RateLimit-Remaining` | The remaining requests within the current rate limit window                            |
     * | `X-RateLimit-Reset`     | The time when the rate limit window resets in Unix Time (seconds) or UTC Epoch seconds |
     *
     * ### Pricing
     *
     * This API currently does not affect your balance. However, subsequent searches require a paid request (e.g. a UDPRN search). This paid request, will yield the complete address.
     *
     * Please note, this API is not intended as a standalone free resource. Integrations that consistently make autocomplete requests without a paid request to resolve an address may be disrupted via tightened rate limits. Continued misuse will result in account suspension.
     *
     * ### Data Source
     *
     * Royal Mail (Postcode Address File).
     *
    **/
    Autocomplete.prototype.addressAutocomplete = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AddressAutocompleteRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/autocomplete/addresses";
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.addressAutocompleteResponseSchema = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.addressLookupResponseSchema = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 402:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.addressLookupResponseSchema = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.addressLookupResponseSchema = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.addressLookupResponseSchema = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return Autocomplete;
}());
export { Autocomplete };
