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
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { GetHeadersFromRequest } from "../internal/utils/headers";
import { GetHeadersFromResponse } from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
var Servers = [
    "https://openbanking.org.uk",
    "https://openbanking.org.uk/open-banking/v3.1/cbpii",
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
    // CreateFundsConfirmationConsents - Create Funds Confirmation Consent
    SDK.prototype.CreateFundsConfirmationConsents = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateFundsConfirmationConsentsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/funds-confirmation-consents";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers) };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 201:
                    if (MatchContentType(contentType, "application/json; charset=utf-8")) {
                        res.obFundsConfirmationConsentResponse1 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    if (MatchContentType(contentType, "application/json; charset=utf-8")) {
                        res.obErrorResponse1 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 403:
                    if (MatchContentType(contentType, "application/json; charset=utf-8")) {
                        res.obErrorResponse1 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 405:
                    break;
                case 406:
                    break;
                case 415:
                    break;
                case 429:
                    break;
                case 500:
                    if (MatchContentType(contentType, "application/json; charset=utf-8")) {
                        res.obErrorResponse1 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CreateFundsConfirmations - Create Funds Confirmation
    SDK.prototype.CreateFundsConfirmations = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateFundsConfirmationsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/funds-confirmations";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers) };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 201:
                    if (MatchContentType(contentType, "application/json; charset=utf-8")) {
                        res.obFundsConfirmationResponse1 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    if (MatchContentType(contentType, "application/json; charset=utf-8")) {
                        res.obErrorResponse1 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 403:
                    if (MatchContentType(contentType, "application/json; charset=utf-8")) {
                        res.obErrorResponse1 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 405:
                    break;
                case 406:
                    break;
                case 415:
                    break;
                case 429:
                    break;
                case 500:
                    if (MatchContentType(contentType, "application/json; charset=utf-8")) {
                        res.obErrorResponse1 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteFundsConfirmationConsentsConsentId - Delete Funds Confirmation Consent
    SDK.prototype.DeleteFundsConfirmationConsentsConsentId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteFundsConfirmationConsentsConsentIdRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/funds-confirmation-consents/{ConsentId}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers) };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 204:
                    break;
                case 400:
                    if (MatchContentType(contentType, "application/json; charset=utf-8")) {
                        res.obErrorResponse1 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 403:
                    if (MatchContentType(contentType, "application/json; charset=utf-8")) {
                        res.obErrorResponse1 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 405:
                    break;
                case 406:
                    break;
                case 429:
                    break;
                case 500:
                    if (MatchContentType(contentType, "application/json; charset=utf-8")) {
                        res.obErrorResponse1 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetFundsConfirmationConsentsConsentId - Get Funds Confirmation Consent
    SDK.prototype.GetFundsConfirmationConsentsConsentId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetFundsConfirmationConsentsConsentIdRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/funds-confirmation-consents/{ConsentId}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers) };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json; charset=utf-8")) {
                        res.obFundsConfirmationConsentResponse1 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    if (MatchContentType(contentType, "application/json; charset=utf-8")) {
                        res.obErrorResponse1 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 403:
                    if (MatchContentType(contentType, "application/json; charset=utf-8")) {
                        res.obErrorResponse1 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 405:
                    break;
                case 406:
                    break;
                case 429:
                    break;
                case 500:
                    if (MatchContentType(contentType, "application/json; charset=utf-8")) {
                        res.obErrorResponse1 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
