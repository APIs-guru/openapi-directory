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
var File = /** @class */ (function () {
    function File(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * getFile - Get File from Project.  Works for Regular and Remote Files
     *
     * Get File from Project.  Works for Regular and Remote Files
    **/
    File.prototype.getFile = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetFileRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/1.1/workgroups/{workgroup_id}/projects/{project_id}/files/{file_id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/x-yaml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/csv")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/x-yaml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.fileResponseVo = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/x-json-smile")) {
                        res.fileResponseVo = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/x-yaml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/csv")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/x-yaml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.httpStatusVo = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/x-json-smile")) {
                        res.httpStatusVo = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getFileTags - List Tags from Workgroup and Project.
     *
     * List Tags from Workgroup and Project.
    **/
    File.prototype.getFileTags = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetFileTagsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/1.1/workgroups/{workgroup_id}/projects/{project_id}/fileTags", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/x-yaml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/csv")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/x-yaml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.fileTagResponseVo = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/x-json-smile")) {
                        res.fileTagResponseVo = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/x-yaml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/csv")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/x-yaml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.httpStatusVo = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/x-json-smile")) {
                        res.httpStatusVo = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getFiles - List Files from Project.  Works for Regular and Remote Files
     *
     * List Files from Project.  Works for Regular and Remote Files
    **/
    File.prototype.getFiles = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetFilesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/1.1/workgroups/{workgroup_id}/projects/{project_id}/files", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/x-yaml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/csv")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/x-yaml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.fileResponseVo = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/x-json-smile")) {
                        res.fileResponseVo = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/x-yaml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/csv")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/x-yaml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.httpStatusVo = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/x-json-smile")) {
                        res.httpStatusVo = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * uploadFile - Upload File to Project.  A multipart/form-data request with a name "file"
     *
     * Upload File to Project.  A multipart/form-data request with a name "file"
    **/
    File.prototype.uploadFile = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UploadFileRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/1.1/workgroups/{workgroup_id}/projects/{project_id}/files", req.pathParams);
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
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/x-yaml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/csv")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/x-yaml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.fileResponseVo = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/x-json-smile")) {
                        res.fileResponseVo = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/x-yaml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/csv")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/x-yaml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.httpStatusVo = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/x-json-smile")) {
                        res.httpStatusVo = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return File;
}());
export { File };
