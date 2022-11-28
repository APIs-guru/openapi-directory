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
var Addresses = /** @class */ (function () {
    function Addresses(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * addressSearch - addressSearch
     *
     * Returns a list of addresses that match the query ordered by relevance score.
     * This query accepts an optional limit and page query (defaults to 10 and 0 respectively).
     *
     * If a valid postcode is passed as the query string, the entire address list
     * for that postcode is returned as the result. Note, in these cases, limit
     * parameter is ignored and fixed at 100. If your key is configured to return
     * Multiple Residence data, you may need to query more pages to return the
     * entire list as more than 100 delivery points or residences may be returned.
     *
     * ### Testing
     *
     * - **ID1 1QD** Returns a successful query response `2000`
     * - **ID1 KFA** Returns an empty query response `2000`
     * - **ID1 CLIP** Returns "no lookups remaining" error `4020`
     * - **ID1 CHOP** Returns "daily (or individual) lookup limit breached" error `4021`
     *
     * Test requests will undergo usual authentication and restriction rules (individual and daily lookup limits) to surface any problems you may have during implementation. However, it will not count towards a postcode lookup on your key.
     *
     * ### Notes
     *
     * This is not an address autocomplete method. Each request that returns an address incurs a lookup charge.
     *
     * If a valid postcode is passed as the query string, the entire address list for that postcode is passed as a result. Note, in these cases, limit and page parameters are ignored.
     *
     * ### Pricing
     *
     * Per lookup charges apply. Queries which find no match are not charged.
     *
     * ### Data Source
     *
     * Royal Mail (Postcode Address File), Ordnance Survey (Code-Point Open).
     *
    **/
    Addresses.prototype.addressSearch = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AddressSearchRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/addresses";
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
                        res.addressSearchResponseSchema = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
    /**
     * updrnToAddress - updrnToAddress
     *
     * ### Returns an address identified via its UDPRN.
     *
     * You may find it useful to store UDPRN information as it can be used to retrieve the most recent information for an address. It can also be used to test for a "decommissioned" address.
     *
     * ### Testing
     *
     * To test your implementation of our API we have a range of test UDPRNs that yield both successful and unsuccessful responses to your request. They are the following:
     *
     * - `0` Returns a successful UDPRN lookup response `2000`
     * - `-1` Returns "UDPRN not found", error `4044`
     * - `-2` Returns "no lookups remaining", error `4020`
     * - `-3` Returns "daily (or individual) lookup limit breached", error `4021`
     *
     * Test requests will undergo usual authentication and restriction rules (individual and daily lookup limits) to surface any problems you may have during implementation. However, it will not count towards a postcode lookup on your key.
     *
     * ### Pricing
     *
     * Per lookup charges apply. Empty responses are not charged.
     *
     * ### Data Source
     *
     * Royal Mail (Postcode Address File), Ordnance Survey (Code-Point Open).
     *
    **/
    Addresses.prototype.updrnToAddress = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdrnToAddressRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/addresses/{udprn}", req.pathParams);
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
                        res.udprnToAddressResponseSchema = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
    return Addresses;
}());
export { Addresses };
