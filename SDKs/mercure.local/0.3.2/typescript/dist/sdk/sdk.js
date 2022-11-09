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
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { GetHeadersFromRequest } from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";
var Servers = [
    "http://mercure.local",
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
export function WithSecurity(security) {
    if (!(security instanceof utils.SpeakeasyBase)) {
        security = new Security(security);
    }
    return function (sdk) {
        sdk.security = security;
    };
}
// SDK Documentation: https://mercure.rocks/spec - The Mercure protocol specification
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
    // GetWellKnownMercure - Subscribe to updates
    /**
     * https://mercure.rocks/spec#subscription - Subscription specification
    **/
    SDK.prototype.GetWellKnownMercure = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWellKnownMercureRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/.well-known/mercure";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 400:
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetWellKnownMercureSubscriptions - Active subscriptions
    /**
     * https://mercure.rocks/spec#subscription-api - Subscription API
    **/
    SDK.prototype.GetWellKnownMercureSubscriptions = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/.well-known/mercure/subscriptions";
        var client = this.securityClient;
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
                    if (MatchContentType(contentType, "application/ld+json")) {
                        res.subscriptions = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetWellKnownMercureSubscriptionsTopic - Active subscriptions for the given topic
    /**
     * https://mercure.rocks/spec#subscription-api - Subscription API
    **/
    SDK.prototype.GetWellKnownMercureSubscriptionsTopic = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWellKnownMercureSubscriptionsTopicRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/.well-known/mercure/subscriptions/{topic}", req.pathParams);
        var client = this.securityClient;
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
                    if (MatchContentType(contentType, "application/ld+json")) {
                        res.subscriptions = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetWellKnownMercureSubscriptionsTopicSubscriber - Active subscription for the given topic and subscriber
    /**
     * https://mercure.rocks/spec#active-subscriptions - Subscription API
    **/
    SDK.prototype.GetWellKnownMercureSubscriptionsTopicSubscriber = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWellKnownMercureSubscriptionsTopicSubscriberRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/.well-known/mercure/subscriptions/{topic}/{subscriber}", req.pathParams);
        var client = this.securityClient;
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
                    if (MatchContentType(contentType, "application/ld+json")) {
                        res.subscriptions = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PostWellKnownMercure - Publish an update
    /**
     * https://mercure.rocks/spec#publication - Publishing specification
    **/
    SDK.prototype.PostWellKnownMercure = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostWellKnownMercureRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/.well-known/mercure";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 400:
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return SDK;
}());
export { SDK };
