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
var Udprn = /** @class */ (function () {
    function Udprn(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * lookupUdprn - lookupUDPRN
     *
     * Returns an address identified via its Unique Delivery Point Reference
     * Number (UDPRN).
     *
     * You may find it useful to store UDPRN information as it can be used to
     * retrieve the most recent information for an address. It can also be used
     * to test for a "decommissioned" address.
     *
     * UDPRNs are an eight digit unique numeric code (e.g. 25962203) for any
     * premise on the Postcode Address File. It's essentially a unique identifier
     * for every address in the UK that Royal Mail has in its database.
     *
     * ### Testing
     *
     * To test your implementation of our API we have a range of test UDPRNs
     * that yield both successful and unsuccessful responses to your request.
     * They are the following
     *
     * - <code>0</code> Returns a successful UDPRN lookup response <code>2000</code>
     * - <code>-1</code> Returns "UDPRN not found", error <code>4044</code>
     * - <code>-2</code> Returns "no lookups remaining", error <code>4020</code>
     * - <code>-3</code> Returns "daily (or individual) lookup limit breached", error <code>4021</code>
     *
     * Test requests will undergo usual authentication and restriction rules (
     * individual and daily lookup limits) to surface any problems you may have
     * during implementation. However, it will not count towards a postcode
     * lookup on your key.
     *
     * ### Pricing
     *
     * Per lookup charges apply. Empty responses are not charged.
     *
     * ### Data Source
     *
     * Royal Mail (Postcode Address File), Ordnance Survey (Code-Point Open)
     *
    **/
    Udprn.prototype.lookupUdprn = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.LookupUdprnRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/udprn/{udprn}", req.pathParams);
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
                        res.addressLookupResponseSchema = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponseSchema = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 402:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponseSchema = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponseSchema = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponseSchema = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return Udprn;
}());
export { Udprn };
