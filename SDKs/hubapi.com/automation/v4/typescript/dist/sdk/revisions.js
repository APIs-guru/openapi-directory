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
var Revisions = /** @class */ (function () {
    function Revisions(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetById - Get a revision for a custom action
     *
     * Returns the given version of a custom workflow action.
    **/
    Revisions.prototype.getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetById = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/automation/v4/actions/{appId}/{definitionId}/revisions/{revisionId}", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.actionRevision = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                default:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getAutomationV4ActionsAppIdDefinitionIdRevisionsGetPage - Get all revisions for a custom action
     *
     * Returns a list of revisions for a custom workflow action.
    **/
    Revisions.prototype.getAutomationV4ActionsAppIdDefinitionIdRevisionsGetPage = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/automation/v4/actions/{appId}/{definitionId}/revisions", req.pathParams);
        var client = utils.CreateSecurityClient(this._defaultClient, req.security);
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
                        res.collectionResponseActionRevisionForwardPaging = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                default:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return Revisions;
}());
export { Revisions };
