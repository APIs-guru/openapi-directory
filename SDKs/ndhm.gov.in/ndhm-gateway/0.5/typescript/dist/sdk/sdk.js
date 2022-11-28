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
import axios from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
export var ServerList = [
    "https://dev.ndhm.gov.in/gateway",
];
export function WithServerURL(serverURL, params) {
    return function (sdk) {
        if (params != null) {
            serverURL = utils.ReplaceParameters(serverURL, params);
        }
        sdk._serverURL = serverURL;
    };
}
export function WithClient(client) {
    return function (sdk) {
        sdk._defaultClient = client;
    };
}
var SDK = /** @class */ (function () {
    function SDK() {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var _this = this;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        opts.forEach(function (o) { return o(_this); });
        if (this._serverURL == "") {
            this._serverURL = ServerList[0];
        }
        if (!this._defaultClient) {
            this._defaultClient = axios.create({ baseURL: this._serverURL });
        }
        if (!this._securityClient) {
            this._securityClient = this._defaultClient;
        }
    }
    /**
     * getV05Certs - Get certs for JWT verification
    **/
    SDK.prototype.getV05Certs = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/certs";
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
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.certs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getV05Heartbeat - Get consent request status
    **/
    SDK.prototype.getV05Heartbeat = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/heartbeat";
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
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.heartbeatResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * getV05HiServicesServiceId - Get bridge service details/profile by the serviceId provided.
     *
     * This API is meant for displaying the bridge service details by the serviceId provided .
     *
    **/
    SDK.prototype.getV05HiServicesServiceId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV05HiServicesServiceIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v0.5/hi-services/{service-id}", req.pathParams);
        var client = this._defaultClient;
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.serviceProfileResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getV05WellKnownOpenidConfiguration - Get openid configuration
    **/
    SDK.prototype.getV05WellKnownOpenidConfiguration = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/.well-known/openid-configuration";
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
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.openIdConfiguration = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postV05CareContextsDiscover - Discover patient's accounts
     *
     * Request for patient care context discover, made by CM for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
     *   1. **At least one of the verified identifier matches**
     *   2. **Name (fuzzy), gender matches**
     *   3. **If YoB was given, age band(+-2) matches**
     *   4. **If unverified identifiers were given, one of them matches**
     *   5. **If more than one patient records would be found after aforementioned steps, then patient who matches most verified and unverified identifiers would be returned.**
     *   6. **If there would be still more than one patients (after ranking) error would be returned**
     *   7. **Intended HIP should be able to resolve and identify results returned in the subsequent link confirmation request via the specified transactionId**
     *   8. **Intended HIP should store the discovery results with transactionId and care contexts discovered for subsequent link initiation**
     *
    **/
    SDK.prototype.postV05CareContextsDiscover = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05CareContextsDiscoverRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/care-contexts/discover";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05CareContextsOnDiscover - Response to patient's account discovery request
     *
     * Result of patient care-context discovery request at HIP end. If a matching patient found with zero or more care contexts associated, it is specified as result attribute. If the prior discovery request, resulted in errors then it is specified in the error attribute. Reasons of errors can be
     *   1. **more than one definitive match for the given request**
     *   2. **no verified identifer was specified**
     *
    **/
    SDK.prototype.postV05CareContextsOnDiscover = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05CareContextsOnDiscoverRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/care-contexts/on-discover";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05ConsentRequestsInit - Create consent request
     *
     * Creates a consent request to get data about a patient by HIU user.
    **/
    SDK.prototype.postV05ConsentRequestsInit = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05ConsentRequestsInitRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/consent-requests/init";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05ConsentRequestsOnInit - Response to consent request
     *
     * Result of consent request creation for a patient. **consentRequest.id** represents the consentrequest id created by CM. The result must contain either **consentRequest** or the **error** caused. <br/>
     *   Reasons for error may be
     *   * Invalid references (e.g patient id, hiu id), purpose, hiTypes, ranges, persmission
     *
    **/
    SDK.prototype.postV05ConsentRequestsOnInit = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05ConsentRequestsOnInitRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/consent-requests/on-init";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05ConsentRequestsOnStatus - Result of consent request status
     *
     * Result of consent request done previously. Status of request can be GRANTED,  DENIED, EXPIRED. If the request was GRANTED, then
     *
    **/
    SDK.prototype.postV05ConsentRequestsOnStatus = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05ConsentRequestsOnStatusRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/consent-requests/on-status";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05ConsentRequestsStatus - Get consent request status
     *
     * Get status of consent request done previously
    **/
    SDK.prototype.postV05ConsentRequestsStatus = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05ConsentRequestsStatusRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/consent-requests/status";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05ConsentsFetch - Get consent artefact
    **/
    SDK.prototype.postV05ConsentsFetch = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05ConsentsFetchRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/consents/fetch";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05ConsentsHipNotify - Consent notification
     *
     * Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED, REVOKED and EXPIRED status notifications will be sent to HIP.
     *   1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available.
     *   2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked.
     *   3. If the consent has expired, then status=EXPIRED, and consentId specifies which consent artefact has expired. Note, this is also responsibility of the HIP to keep track of consent expiry. Any data request on expired consent artefact must not be done.
     *
    **/
    SDK.prototype.postV05ConsentsHipNotify = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05ConsentsHipNotifyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/consents/hip/notify";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05ConsentsHipOnNotify - Consent notification
     *
     * This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration.
     *
    **/
    SDK.prototype.postV05ConsentsHipOnNotify = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05ConsentsHipOnNotifyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/consents/hip/on-notify";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05ConsentsHiuNotify - Consent notification
     *
     * Health information user will get notified about the consent request granted or denied, consent revoked, consent expired.
     * 1. For consent request grant, status=GRANTED, consentRequestId=<consent-request-id>, and consentArtefacts is an array of generated consent artefact Ids.
     * 2. For consent request expiry, status=EXPIRED, consentRequestId=<consent-request-id>
     * 3. For consent request denied, status=DENIED, consentRequestId=<consent-request-id>
     * 4. For consent revocation, status=REVOKED, consentArtefacts is an array of revoked consent artefact ids
     *
    **/
    SDK.prototype.postV05ConsentsHiuNotify = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05ConsentsHiuNotifyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/consents/hiu/notify";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05ConsentsHiuOnNotify - Consent notification
     *
     * This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.
     *
    **/
    SDK.prototype.postV05ConsentsHiuOnNotify = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05ConsentsHiuOnNotifyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/consents/hiu/on-notify";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05ConsentsOnFetch - Result of fetch request for a consent artefact
     *
     * Must contain either consentDetail or error. Possible reason of errors are
     * 1. consentId passed through /fetch is invalid
     *
    **/
    SDK.prototype.postV05ConsentsOnFetch = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05ConsentsOnFetchRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/consents/on-fetch";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05HealthInformationCmOnRequest - Health information data request
     *
     * Callback API for acknowledgement of Health information request of HIU. CM calls this API when it has validated the Health Information request given the consent id. Either the **hiRequest** or **error** would need to be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are
     *   1. **Invalid consent artefact id**
     *   2. **Consent has expired**
     *   3. **Date ranges are invalid**
     *
    **/
    SDK.prototype.postV05HealthInformationCmOnRequest = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05HealthInformationCmOnRequestRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/health-information/cm/on-request";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05HealthInformationCmRequest - Health information data request
     *
     * Request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via /on-request.
     *
    **/
    SDK.prototype.postV05HealthInformationCmRequest = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05HealthInformationCmRequestRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/health-information/cm/request";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05HealthInformationHipOnRequest - Health information data request
     *
     * API called by HIP to acknowledge Health information request receipt. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.
     *
    **/
    SDK.prototype.postV05HealthInformationHipOnRequest = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05HealthInformationHipOnRequestRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/health-information/hip/on-request";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05HealthInformationHipRequest - Health information data request
     *
     * API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**.
     *
    **/
    SDK.prototype.postV05HealthInformationHipRequest = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05HealthInformationHipRequestRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/health-information/hip/request";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05HealthInformationNotify - Notifications corresponding to events during data flow
     *
     * API called by HIU and HIP during data-transfer.
     * 1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
     * 2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
     * 3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
     * 4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED]
     *
    **/
    SDK.prototype.postV05HealthInformationNotify = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05HealthInformationNotifyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/health-information/notify";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05LinksLinkAddContexts - API for HIP initiated care-context linking for patient
     *
     * API to submit care-context to CM for HIP initiated linking. The API must accompany the "accessToken" fetched in the users/auth process.
     *   1. subsequent usage for accessToken may be invalid if it was meant for one-time usage or if it expired
     *
    **/
    SDK.prototype.postV05LinksLinkAddContexts = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05LinksLinkAddContextsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/links/link/add-contexts";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05LinksLinkConfirm - Token submission by Consent Manager for link confirmation
     *
     * API to submit the token that was sent by HIP during the link request.
     *
    **/
    SDK.prototype.postV05LinksLinkConfirm = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05LinksLinkConfirmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/links/link/confirm";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05LinksLinkInit - Link patient's care contexts
     *
     * Request from CM to links care contexts associated with only one patient
     *   1. **Validate account reference number and care context reference number**
     *   2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
     *       and were these care contexts discovered or not for a given patient**
     *   3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
     *   4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**
     *
    **/
    SDK.prototype.postV05LinksLinkInit = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05LinksLinkInitRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/links/link/init";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05LinksLinkOnAddContexts - callback API for HIP initiated patient linking /link/add-context
     *
     * If the accessToken is valid for purpose of linking, and specified details provided, CM will send "acknoweldgement.status" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then "error" attribute conveys so.
     *   1. **accessToken must be valid and must be for the purpose of linking**
     *
    **/
    SDK.prototype.postV05LinksLinkOnAddContexts = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05LinksLinkOnAddContextsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/links/link/on-add-contexts";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05LinksLinkOnConfirm - Token authenticated by HIP, indicating completion of linkage of care-contexts
     *
     * Returns a list of linked care contexts with patient reference number.
     *   1. **Validated and linked account reference number**
     *   2. **Validated that the token sent from Consent Manager is same as the one generated by HIP**
     *   3. **Verified that same Consent Manager which made the link request is sending the token**
     *   4. **Results of unmasked linked care contexts with patient reference number**
     *
    **/
    SDK.prototype.postV05LinksLinkOnConfirm = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05LinksLinkOnConfirmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/links/link/on-confirm";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05LinksLinkOnInit - Response to patient's care context link request
     *
     * Result of patient care-context link request from HIP end. This happens in context of previous discovery of patient found at HIP end, therefore the link requests ought to be in reference to the patient reference and care-context references previously returned by the HIP. The correlation of discovery and link request is maintained through the transactionId. HIP should have
     *   1. **Validated transactionId in the request to check whether there was a discovery done previously, and the link request corresponds to returned patient care care context references**
     *   2. **Before returning the response, HIP should have sent an authentication request to the patient(eg: OTP verification)**
     *   3. **HIP should communicate the mode of authentication of a successful request**
     *   4. **HIP subsequently should expect the token passed via /link/confirm against the link.referenceNumber passed in this call**
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     * The error section in the body, represents the potential errors that may have occurred. Possible reasons:
     *   1. **Patient reference number is invalid**
     *   2. **Care context reference numbers are invalid**
     *
    **/
    SDK.prototype.postV05LinksLinkOnInit = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05LinksLinkOnInitRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/links/link/on-init";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05PatientsFind - Identify a patient by her consent-manager user-id
     *
     * This API is meant for identify to patient given her consent-manager-user-id
     *
    **/
    SDK.prototype.postV05PatientsFind = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05PatientsFindRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/patients/find";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05PatientsOnFind - Identification result for a consent-manager user-id
     *
     * If a patient is found then patient.name contains the patients name.
     * Otherwise, patient is not provided, and possibly error is raised for invalid requests
     * Note in addition to the "Authorization" header, one of the following headers must be specified
     * 1. specify **X-HIU-ID** if the requester is HIU (identified from /find requester.id)
     * 2. specify **X-HIP-ID** if the requester is HIP (identified from /find requester.id)
     *
    **/
    SDK.prototype.postV05PatientsOnFind = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05PatientsOnFindRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/patients/on-find";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05PatientsProfileOnShare - Response to patient's share profile request
     *
     * Result of patient share profile request at HIP end.
     *
    **/
    SDK.prototype.postV05PatientsProfileOnShare = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05PatientsProfileOnShareRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/patients/profile/on-share";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05PatientsProfileShare - Share patient profile details
     *
     * Request for sharing patient's profile details to HIP
     *
    **/
    SDK.prototype.postV05PatientsProfileShare = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05PatientsProfileShareRequest(req);
        }
        var baseURL = operations.PostV05PatientsProfileShareServerList[0];
        if (req.serverUrl) {
            baseURL = req.serverUrl;
        }
        var url = baseURL.replace(/\/$/, "") + "/v0.5/patients/profile/share";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05PatientsSmsNotify - API for HIP to send SMS notifications to patients
     *
     * API to send SMS notifications to patient with custom deeplink.
     *
    **/
    SDK.prototype.postV05PatientsSmsNotify = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05PatientsSmsNotifyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/patients/sms/notify";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05PatientsSmsOnNotify - Acknowledgment response for SMS notification sent to patient by HIP
     *
     * If the SMS notification is successfully sent to patient then "status" will be "ACKNOWLEDGED" with no error.
     * If the SMS notification is failed then "status" will be "ERRORED" with error.
     *
    **/
    SDK.prototype.postV05PatientsSmsOnNotify = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05PatientsSmsOnNotifyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/patients/sms/on-notify";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05Sessions - Get access token
    **/
    SDK.prototype.postV05Sessions = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05SessionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/sessions";
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.sessionResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postV05SubscriptionRequestsCmInit - Request for subscription
     *
     * creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role
    **/
    SDK.prototype.postV05SubscriptionRequestsCmInit = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05SubscriptionRequestsCmInitRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/subscription-requests/cm/init";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05SubscriptionRequestsCmOnInit - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
     *
     * This callback API acknowledges the request for subscription from a HIU, and sends back a "id" that will be used when the patient/user approves or denies the subscription.
     *
    **/
    SDK.prototype.postV05SubscriptionRequestsCmOnInit = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05SubscriptionRequestsCmOnInitRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/subscription-requests/cm/on-init";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05SubscriptionRequestsHiuNotify - Notification for subscription grant/deny/revoke
     *
     * This API is used by CM to notify a HIU to grant or deny a request for subscription, and also to notify that in case an existing subscription is revoked or expired. For notifying that a particular subscription request was GRANTED or DENIED, the **subscriptionRequestId** is passed.
     *
    **/
    SDK.prototype.postV05SubscriptionRequestsHiuNotify = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05SubscriptionRequestsHiuNotifyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/subscription-requests/hiu/notify";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05SubscriptionRequestsHiuOnNotify - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
     *
     * This API is called by HIU as acknowledgement to subscription request relevant notifications.
     *
    **/
    SDK.prototype.postV05SubscriptionRequestsHiuOnNotify = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05SubscriptionRequestsHiuOnNotifyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/subscription-requests/hiu/on-notify";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05SubscriptionsHiuNotify - Notification to HIU on basis of a granted subscription
     *
     * This API is used by CM to notify a HIU for notification relevant to subscription. Notifications are sent to subscribed HIUs whenever a new care-context is linked or new data is available on an existing linked care-context.
     * 1. if event.category = LINK, then only care-contexts are passed when new care-contexts are linked for patient.
     * 2. If event.category = DATA, then hiTypes are passed. Care-context is passed only if the subscribed HIU has any valid consent for that care-context
     *
    **/
    SDK.prototype.postV05SubscriptionsHiuNotify = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05SubscriptionsHiuNotifyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/subscriptions/hiu/notify";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05SubscriptionsHiuOnNotify - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
     *
     * This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.
     *
    **/
    SDK.prototype.postV05SubscriptionsHiuOnNotify = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05SubscriptionsHiuOnNotifyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/subscriptions/hiu/on-notify";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05UsersAuthConfirm - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
     *
     * This API is called by HIP/HIUs to confirm authentication of users. The transactionId returned by the previous callback API /users/auth/on-init must be sent. If Authentication is successful the callback API will send an "access token" for subsequent purpose specific API calls. Note only **credential.authCode** or **credential.demographic** should be sent
     *   1. demographic details are only required for  demographic auth as of now.
     *   2. demographic details are required only in MEDIATED cases and if the **auth.mode** so demands. e.g. if **auth.mode** is DEMOGRAPHICS. Usually for demographic authentication, the name, gender and DOB must be exactly as specified in User Account.
     *   3. demographic.identifier is optional, however maybe required if authentication so mandates.
     *   4. credential.authCode is required for other MEDIATED authentication like MOBILE_OTP, AADHAAR_OTP.
     *
    **/
    SDK.prototype.postV05UsersAuthConfirm = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05UsersAuthConfirmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/users/auth/confirm";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05UsersAuthFetchModes - Get a patient's authentication modes relevant to specified purpose
     *
     * This API is meant for identify supported authentication modes for a patient given a specific purpose
     *
    **/
    SDK.prototype.postV05UsersAuthFetchModes = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05UsersAuthFetchModesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/users/auth/fetch-modes";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05UsersAuthInit - Initialize authentication from HIP
     *
     * This API is called by HIPs to initiate authentication of users. A transactionId is retuned by the corresponding callback API for confirmation of user auth.
     *
    **/
    SDK.prototype.postV05UsersAuthInit = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05UsersAuthInitRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/users/auth/init";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05UsersAuthNotify - notification API in case of DIRECT mode of authentication by the CM
     *
     * This API is called by CM to confirm authentication of users. The transactionId returned is same as that passed in /auth/on-init. The "auth.status" conveys whether the request was GRANTED or DENIED.
     *
     *   1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
     *   2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
     *   3. The payload is conditional to the purpose of auth. If purpose specified in /auth/init is KYC or KYC_AND_LINK, then patient details are passed. **auth.accessToken** is passed only if the purpose is LINK or KYC_AND_LINK.
     *
    **/
    SDK.prototype.postV05UsersAuthNotify = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05UsersAuthNotifyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/users/auth/notify";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05UsersAuthOnConfirm - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
     *
     * This API is called by CM to confirm authentication of users.
     *
     *   1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
     *   2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
     *
    **/
    SDK.prototype.postV05UsersAuthOnConfirm = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05UsersAuthOnConfirmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/users/auth/on-confirm";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05UsersAuthOnFetchModes - Identification result for a consent-manager user-id
     *
     * If a patient is found then **auth** attribute contains the supported modes for the specified purpose.
     * Otherwise, error is raised for invalid requests or for non-existent id.
     * Note in addition to the "Authorization" header, one of the following headers must be specified
     * 1. **X-HIU-ID** if the requester is HIU (identified from /auth/fetch-modes requester.id)
     * 2. **X-HIP-ID** if the requester is HIP (identified from /auth/fetch-modes requester.id)
     *
    **/
    SDK.prototype.postV05UsersAuthOnFetchModes = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05UsersAuthOnFetchModesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/users/auth/on-fetch-modes";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05UsersAuthOnInit - Response to user authentication initialization from HIP
     *
     * If the patient's id is valid, CM will return a transactionId as initialization of user auth. If the request is valid, then 'auth.mode' will convey how the authentication should be done. The authentication can be *mediated* or *direct*. For mediated authentication modes, HIP or HIU is epected to send over relevant code (OTP/token) or demographic info via subsequent API call to /auth/confirm. for direct authentication case, CM will notify requester through/users/auth/notify API.
     *
     *   1. **auth.mode** conveys whats the mode of authentication is, and what is expected from HIP/HIU in the subsequent /auth/confirm API call. Possible values
     *       1. MOBILE_OTP - auth via OTP to registered mobile. Mediated.
     *       2. AADHAAR_OTP - auth initiated with Aadhaar with OTP. Mediated.
     *       3. DEMOGRAPHICS - auth initiated with demographic verification
     *       4. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS. In this case, the HIP/HIU is not expected to call subsequent /auth/confirm call. CM will do direct authentication with the User (e.g. Mobile App, SMS etc) and will notify requester
     *   2. **meta.expiry** conveys the expiry time of the token and the authentication session
     *   3. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     * The error section in the body, represents the potential errors that may have occurred. Possible reasons:
     *   1. Patient id is invalid
     *
    **/
    SDK.prototype.postV05UsersAuthOnInit = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05UsersAuthOnInitRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/users/auth/on-init";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
     * postV05UsersAuthOnNotify - callback API by HIU/HIPs as acknowledgement of auth notification
     *
     * This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication.
     *
    **/
    SDK.prototype.postV05UsersAuthOnNotify = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV05UsersAuthOnNotifyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v0.5/users/auth/on-notify";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
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
    return SDK;
}());
export { SDK };
