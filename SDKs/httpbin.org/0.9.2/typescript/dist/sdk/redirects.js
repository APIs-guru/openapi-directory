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
var Redirects = /** @class */ (function () {
    function Redirects(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * deleteRedirectTo - 302/3XX Redirects to the given URL.
    **/
    Redirects.prototype.deleteRedirectTo = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/redirect-to";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 302:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getAbsoluteRedirectN - Absolutely 302 Redirects n times.
    **/
    Redirects.prototype.getAbsoluteRedirectN = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAbsoluteRedirectNRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/absolute-redirect/{n}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 302:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRedirectN - 302 Redirects n times.
    **/
    Redirects.prototype.getRedirectN = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRedirectNRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/redirect/{n}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 302:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRedirectTo - 302/3XX Redirects to the given URL.
    **/
    Redirects.prototype.getRedirectTo = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRedirectToRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/redirect-to";
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 302:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRelativeRedirectN - Relatively 302 Redirects n times.
    **/
    Redirects.prototype.getRelativeRedirectN = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRelativeRedirectNRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/relative-redirect/{n}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 302:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * patchRedirectTo - 302/3XX Redirects to the given URL.
    **/
    Redirects.prototype.patchRedirectTo = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/redirect-to";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "patch" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 302:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRedirectTo - 302/3XX Redirects to the given URL.
    **/
    Redirects.prototype.postRedirectTo = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRedirectToRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/redirect-to";
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
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 302:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRedirectTo - 302/3XX Redirects to the given URL.
    **/
    Redirects.prototype.putRedirectTo = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRedirectToRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/redirect-to";
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
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 302:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * traceRedirectTo - 302/3XX Redirects to the given URL.
    **/
    Redirects.prototype.traceRedirectTo = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/redirect-to";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "trace" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 302:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return Redirects;
}());
export { Redirects };
