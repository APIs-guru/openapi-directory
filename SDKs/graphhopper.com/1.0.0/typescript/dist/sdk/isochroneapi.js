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
var IsochroneApi = /** @class */ (function () {
    function IsochroneApi(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * getIsochrone - Isochrone Endpoint
     *
     * ### Example
     * You can get an example response via:
     *
     * ```
     * curl "https://graphhopper.com/api/1/isochrone?point=51.131108,12.414551&key=[YOUR_KEY]"
     * ```
     *
     * Don't forget to replace the placeholder with your own key.
     *
     * ### Introduction
     * ![Isochrone screenshot](./img/isochrone-example.png)
     *
     * An isochrone of a location is ''a line connecting points at which a vehicle arrives at the same time'', see Wikipedia.
     * With the same API you can also calculate isodistances, just use the parameter distance_limit instead of time_limit`.
     *
     * ### Use Cases
     * Some possible areas in which this API may be useful to you:
     *
     * - real estate analysis
     * - realtors
     * - vehicle scheduling
     * - geomarketing
     * - reach of electric vehicles
     * - transport planning
     * - logistics (distribution and retail network planning)
     *
     * ### API Clients and Examples
     * See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#isochrone).
     *
    **/
    IsochroneApi.prototype.getIsochrone = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetIsochroneRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/isochrone";
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
                        res.isochroneResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                default:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.ghError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return IsochroneApi;
}());
export { IsochroneApi };
