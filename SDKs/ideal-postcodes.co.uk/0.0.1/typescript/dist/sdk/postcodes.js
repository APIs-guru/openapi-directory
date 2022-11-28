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
var Postcodes = /** @class */ (function () {
    function Postcodes(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * postcodeToAddresses - postcodeToAddresses
     *
     * Returns the complete list of addresses for a postcode.
     *
     * Postcode searches are space and case insensitive.
     *
     * ### Postcode not found
     *
     * Please note: For postcodes that do not exist, your key is not charged, the API returns a 404 response with a response body
     *
     * ```
     * {
     *   "code": 4040,
     *   "message": "Postcode not found"
     * }
     * ```
     *
     * ### Testing
     *
     * To test your implementation of our API we have a range of test postcodes that yield both successful and unsuccessful responses to your request. They are the following:
     *
     * - `ID1 1QD` Returns a successful postcode lookup response `2000`
     * - `ID1 KFA` Returns "postcode not found", error `4040`
     * - `ID1 CLIP` Returns "no lookups remaining", error `4020`
     * - `ID1 CHOP` Returns "daily (or individual) lookup limit breached", error `4021`
     *
     * Test requests will undergo usual authentication and restriction rules (individual and daily lookup limits) to surface any problems you may have during implementation. However, it will not count towards a postcode lookup on your key.
     *
     * ### Multiple Residence Dataset & Pagination
     *
     * For keys which use the Multiple Residence dataset, there are a small number of postcodes which yield more than Royal Mail's maximum allowed return (of 100 addresses) per request. Multiple Residence data users have the option of paginating postcode queries if the limit is reached.
     *
     * #### Multiple Residence: Additional Query Parameters
     *
     * | Property | Description                                                                          |
     * | -------- | ------------------------------------------------------------------------------------ |
     * | `page`   | 0 indexed indicator of the page of results to receive. Defaults to `0`               |
     *
     * #### Multiple Residence: Additional Response Fields
     *
     * | Property | Description                                                                               |
     * | -------- | ----------------------------------------------------------------------------------------- |
     * | `page`   | `number` Indicates current page number                                                    |
     * | `total`  | `number` Indicates the maximum number of delivery points plus residences at this postcode |
     * | `limit`  | `number` Maximum number of results per request. Fixed at 100 for this method              |
     *
     * ### Pricing
     *
     * Per lookup charges are applied. Empty responses are not charged.
     *
     * ### Data Source
     *
     * Royal Mail (Postcode Address File), Ordnance Survey (Code-Point Open).
     *
    **/
    Postcodes.prototype.postcodeToAddresses = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostcodeToAddressesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/postcodes/{postcode}", req.pathParams);
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
                        res.postcodeToAddressResponseSchema = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponseSchema = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
    return Postcodes;
}());
export { Postcodes };
