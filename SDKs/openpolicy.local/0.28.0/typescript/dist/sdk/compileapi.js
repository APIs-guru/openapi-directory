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
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
var CompileApi = /** @class */ (function () {
    function CompileApi(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * postCompile - Compile
     *
     * This API endpoint allows you to partially evaluate Rego queries and obtain a simplified version of the policy. The example below assumes that OPA has been given the following policy (use `PUT /v1/policies/{path}`):
     *
     * ```yaml
     * package example
     * allow {
     *   input.subject.clearance_level >= data.reports[_].clearance_level
     * }
     * ```
     * Compile API **request body** so that it contain the following fields:
     *
     * | Field | Type | Required | Description |
     * | --- | --- | --- | --- |
     * | `query` | `string` | Yes | The query to partially evaluate and compile. |
     * | `input` | `any` | No | The input document to use during partial evaluation (default: undefined). |
     * | `unknowns` | `array[string]` | No | The terms to treat as unknown during partial evaluation (default: `["input"]`]). |
     *
     * For example:
     *
     * ```json
     * {
     *   "query": "data.example.allow == true",
     *   "input": {
     *     "subject": {
     *       "clearance_level": 4
     *     }
     *   },
     *   "unknowns": [
     *     "data.reports"
     *     ]
     * }
     * ```
     * ### Partial evaluation
     * In some cases, the result of partial valuation is a conclusive, unconditional answer. See [the guidance](https://www.openpolicyagent.org/docs/latest/rest-api/#unconditional-results-from-partial-evaluation) for details.
     *
     * https://blog.openpolicyagent.org/partial-evaluation-162750eaf422 - Partial evaluation article
    **/
    CompileApi.prototype.postCompile = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostCompileRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v1/compile";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.postCompile200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.fourHundred = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.fourHundred = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return CompileApi;
}());
export { CompileApi };
