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
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
var Servers = [
    "http://mbus.local",
    "https://mbus.local/",
];
export function WithServerURL(serverURL, params) {
    return function (sdk) {
        if (params != null) {
            serverURL = utils.ReplaceParameters(serverURL, params);
        }
        sdk.serverURL = serverURL;
    };
}
export function WithClient(client) {
    return function (sdk) {
        sdk.defaultClient = client;
    };
}
var SDK = /** @class */ (function () {
    function SDK() {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var _this = this;
        opts.forEach(function (o) { return o(_this); });
        if (this.serverURL == "") {
            this.serverURL = Servers[0];
        }
        if (!this.defaultClient) {
            this.defaultClient = axios.create({ baseURL: this.serverURL });
        }
        if (!this.securityClient) {
            if (this.security) {
                this.securityClient = CreateSecurityClient(this.defaultClient, this.security);
            }
            else {
                this.securityClient = this.defaultClient;
            }
        }
    }
    // Get - Gets data from the slave identified by {address}
    SDK.prototype.Get = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mbus/get/{device}/{baudrate}/{address}", req.pathParams);
        var client = this.defaultClient;
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/xml")) {
                        res.mbusData = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    if (MatchContentType(contentType, "text/plain")) {
                        res.textError = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 404:
                    if (MatchContentType(contentType, "text/plain")) {
                        res.textError = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetMulti - Gets data from the slave identified by {address}, and supports multiple responses from the slave
    SDK.prototype.GetMulti = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMultiRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mbus/getMulti/{device}/{baudrate}/{address}/{maxframes}", req.pathParams);
        var client = this.defaultClient;
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/xml")) {
                        res.mbusData = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    if (MatchContentType(contentType, "text/plain")) {
                        res.textError = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 404:
                    if (MatchContentType(contentType, "text/plain")) {
                        res.textError = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // Hat - Gets Raspberry Pi Hat information
    SDK.prototype.Hat = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mbus/hat";
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.hat = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 404:
                    if (MatchContentType(contentType, "text/plain")) {
                        res.textError = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // HatOff - Turns off power to the M-Bus
    SDK.prototype.HatOff = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mbus/hat/off";
        var client = this.defaultClient;
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 404:
                    if (MatchContentType(contentType, "text/plain")) {
                        res.textError = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // HatOn - Turns on power to the M-Bus
    SDK.prototype.HatOn = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mbus/hat/on";
        var client = this.defaultClient;
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 404:
                    if (MatchContentType(contentType, "text/plain")) {
                        res.textError = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // MbusApi - Returns this API specification
    SDK.prototype.MbusApi = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mbus/api";
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "text/x-yaml")) {
                        res.yaml = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 404:
                    if (MatchContentType(contentType, "text/plain")) {
                        res.textError = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // Scan - Scan the specified device for slaves
    SDK.prototype.Scan = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ScanRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/mbus/scan/{device}/{baudrate}", req.pathParams);
        var client = this.defaultClient;
        return client
            .post(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "text/plain")) {
                        res.slaves = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    if (MatchContentType(contentType, "text/plain")) {
                        res.textError = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 404:
                    if (MatchContentType(contentType, "text/plain")) {
                        res.textError = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
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
