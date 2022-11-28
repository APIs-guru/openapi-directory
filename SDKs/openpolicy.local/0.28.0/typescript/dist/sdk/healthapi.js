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
var HealthApi = /** @class */ (function () {
    function HealthApi(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * getHealth - Health
     *
     * This API endpoint verifies that the server is operational.
     *
     * The response from the server is either 200 or 500:
     * - **200** - OPA service is healthy. If `bundles` is true, then all configured bundles have been activated. If `plugins` is true, then all plugins are in an 'OK' state.
     * - **500** - OPA service is *not* healthy. If `bundles` is true, at least one of configured bundles has not yet been activated. If `plugins` is true, at least one plugins is in a 'not OK' state.
     *
     * ---
     * **Note**
     * This check is only for initial bundle activation. Subsequent downloads will not affect the health check.
     *
     * Use the **status** endpoint (in the (management API)[management.html]) for more fine-grained bundle status monitoring.
     *
     * ---
     *
     * https://www.openpolicyagent.org/docs/latest/management/#bundles - Bundles
    **/
    HealthApi.prototype.getHealth = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetHealthRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/health";
        var client = this._defaultClient;
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
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return HealthApi;
}());
export { HealthApi };
