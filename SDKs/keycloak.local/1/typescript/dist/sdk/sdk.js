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
import { Security } from "./models/shared";
export var ServerList = [
    "http://keycloak.local",
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
export function WithSecurity(security) {
    if (!(security instanceof utils.SpeakeasyBase)) {
        security = new Security(security);
    }
    return function (sdk) {
        sdk._security = security;
    };
}
/* SDK Documentation: https://github.com/keycloak/keycloak/tree/6.0.1/core/src/main/java/org/keycloak/representations - Schema source code*/
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
            if (this._security) {
                this._securityClient = utils.CreateSecurityClient(this._defaultClient, this._security);
            }
            else {
                this._securityClient = this._defaultClient;
            }
        }
    }
    /**
     * deleteRealm - Delete the realm
    **/
    SDK.prototype.deleteRealm = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmAdminEvents - Delete all admin events
    **/
    SDK.prototype.deleteRealmAdminEvents = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmAdminEventsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/admin-events", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmAttackDetectionBruteForceUsers - Clear any user login failures for all users   This can release temporary disabled users
    **/
    SDK.prototype.deleteRealmAttackDetectionBruteForceUsers = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmAttackDetectionBruteForceUsersRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/attack-detection/brute-force/users", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmAttackDetectionBruteForceUsersUserId - Clear any user login failures for the user   This can release temporary disabled user
    **/
    SDK.prototype.deleteRealmAttackDetectionBruteForceUsersUserId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmAttackDetectionBruteForceUsersUserIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/attack-detection/brute-force/users/{userId}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmAuthenticationConfigId - Delete authenticator configuration
    **/
    SDK.prototype.deleteRealmAuthenticationConfigId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmAuthenticationConfigIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/config/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmAuthenticationExecutionsExecutionId - Delete execution
    **/
    SDK.prototype.deleteRealmAuthenticationExecutionsExecutionId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmAuthenticationExecutionsExecutionIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/executions/{executionId}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmAuthenticationFlowsId - Delete an authentication flow
    **/
    SDK.prototype.deleteRealmAuthenticationFlowsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmAuthenticationFlowsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmAuthenticationRequiredActionsAlias - Delete required action
    **/
    SDK.prototype.deleteRealmAuthenticationRequiredActionsAlias = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmAuthenticationRequiredActionsAliasRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/required-actions/{alias}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmClientScopesId1ProtocolMappersModelsId2 - Delete the mapper
    **/
    SDK.prototype.deleteRealmClientScopesId1ProtocolMappersModelsId2 = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmClientScopesId1ProtocolMappersModelsId2Request(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmClientScopesId - Delete the client scope
    **/
    SDK.prototype.deleteRealmClientScopesId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmClientScopesIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmClientScopesIdScopeMappingsClientsClient - Remove client-level roles from the client’s scope.
    **/
    SDK.prototype.deleteRealmClientScopesIdScopeMappingsClientsClient = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmClientScopesIdScopeMappingsClientsClientRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "delete", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmClientScopesIdScopeMappingsRealm - Remove a set of realm-level roles from the client’s scope
    **/
    SDK.prototype.deleteRealmClientScopesIdScopeMappingsRealm = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmClientScopesIdScopeMappingsRealmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "delete", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmClientsId1ProtocolMappersModelsId2 - Delete the mapper
    **/
    SDK.prototype.deleteRealmClientsId1ProtocolMappersModelsId2 = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmClientsId1ProtocolMappersModelsId2Request(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id1}/protocol-mappers/models/{id2}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmClientsId - Delete the client
    **/
    SDK.prototype.deleteRealmClientsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmClientsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.deleteRealmClientsIdDefaultClientScopesClientScopeId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmClientsIdDefaultClientScopesClientScopeIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/default-client-scopes/{clientScopeId}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmClientsIdNodesNode - Unregister a cluster node from the client
    **/
    SDK.prototype.deleteRealmClientsIdNodesNode = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmClientsIdNodesNodeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/nodes/{node}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.deleteRealmClientsIdOptionalClientScopesClientScopeId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmClientsIdOptionalClientScopesClientScopeIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/optional-client-scopes/{clientScopeId}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmClientsIdRolesRoleName - Delete a role by name
    **/
    SDK.prototype.deleteRealmClientsIdRolesRoleName = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmClientsIdRolesRoleNameRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmClientsIdRolesRoleNameComposites - Remove roles from the role’s composite
    **/
    SDK.prototype.deleteRealmClientsIdRolesRoleNameComposites = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmClientsIdRolesRoleNameCompositesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/composites", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "delete", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmClientsIdScopeMappingsClientsClient - Remove client-level roles from the client’s scope.
    **/
    SDK.prototype.deleteRealmClientsIdScopeMappingsClientsClient = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmClientsIdScopeMappingsClientsClientRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "delete", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmClientsIdScopeMappingsRealm - Remove a set of realm-level roles from the client’s scope
    **/
    SDK.prototype.deleteRealmClientsIdScopeMappingsRealm = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmClientsIdScopeMappingsRealmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/realm", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "delete", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.deleteRealmClientsInitialAccessId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmClientsInitialAccessIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients-initial-access/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.deleteRealmComponentsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmComponentsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/components/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.deleteRealmDefaultDefaultClientScopesClientScopeId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmDefaultDefaultClientScopesClientScopeIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/default-default-client-scopes/{clientScopeId}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.deleteRealmDefaultGroupsGroupId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmDefaultGroupsGroupIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/default-groups/{groupId}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.deleteRealmDefaultOptionalClientScopesClientScopeId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmDefaultOptionalClientScopesClientScopeIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/default-optional-client-scopes/{clientScopeId}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmEvents - Delete all events
    **/
    SDK.prototype.deleteRealmEvents = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmEventsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/events", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.deleteRealmGroupsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmGroupsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/groups/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmGroupsIdRoleMappingsClientsClient - Delete client-level roles from user role mapping
    **/
    SDK.prototype.deleteRealmGroupsIdRoleMappingsClientsClient = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmGroupsIdRoleMappingsClientsClientRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "delete", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmGroupsIdRoleMappingsRealm - Delete realm-level role mappings
    **/
    SDK.prototype.deleteRealmGroupsIdRoleMappingsRealm = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmGroupsIdRoleMappingsRealmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/realm", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "delete", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmIdentityProviderInstancesAlias - Delete the identity provider
    **/
    SDK.prototype.deleteRealmIdentityProviderInstancesAlias = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmIdentityProviderInstancesAliasRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmIdentityProviderInstancesAliasMappersId - Delete a mapper for the identity provider
    **/
    SDK.prototype.deleteRealmIdentityProviderInstancesAliasMappersId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmIdentityProviderInstancesAliasMappersIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/mappers/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmRolesByIdRoleId - Delete the role
    **/
    SDK.prototype.deleteRealmRolesByIdRoleId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmRolesByIdRoleIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmRolesByIdRoleIdComposites - Remove a set of roles from the role’s composite
    **/
    SDK.prototype.deleteRealmRolesByIdRoleIdComposites = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmRolesByIdRoleIdCompositesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}/composites", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "delete", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmRolesRoleName - Delete a role by name
    **/
    SDK.prototype.deleteRealmRolesRoleName = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmRolesRoleNameRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmRolesRoleNameComposites - Remove roles from the role’s composite
    **/
    SDK.prototype.deleteRealmRolesRoleNameComposites = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmRolesRoleNameCompositesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/composites", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "delete", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmSessionsSession - Remove a specific user session.
    **/
    SDK.prototype.deleteRealmSessionsSession = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmSessionsSessionRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/sessions/{session}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmUsersId - Delete the user
    **/
    SDK.prototype.deleteRealmUsersId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmUsersIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmUsersIdConsentsClient - Revoke consent and offline tokens for particular client from user
    **/
    SDK.prototype.deleteRealmUsersIdConsentsClient = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmUsersIdConsentsClientRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/consents/{client}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmUsersIdCredentialsCredentialId - Remove a credential for a user
    **/
    SDK.prototype.deleteRealmUsersIdCredentialsCredentialId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmUsersIdCredentialsCredentialIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/credentials/{credentialId}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmUsersIdFederatedIdentityProvider - Remove a social login provider from user
    **/
    SDK.prototype.deleteRealmUsersIdFederatedIdentityProvider = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmUsersIdFederatedIdentityProviderRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/federated-identity/{provider}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.deleteRealmUsersIdGroupsGroupId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmUsersIdGroupsGroupIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/groups/{groupId}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmUsersIdRoleMappingsClientsClient - Delete client-level roles from user role mapping
    **/
    SDK.prototype.deleteRealmUsersIdRoleMappingsClientsClient = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmUsersIdRoleMappingsClientsClientRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "delete", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteRealmUsersIdRoleMappingsRealm - Delete realm-level role mappings
    **/
    SDK.prototype.deleteRealmUsersIdRoleMappingsRealm = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRealmUsersIdRoleMappingsRealmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/realm", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "delete", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * get - Get themes, social providers, auth providers, and event listeners available on this server
    **/
    SDK.prototype.get = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/";
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.serverInfoRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getIdName - Need this for admin console to display simple name of provider when displaying client detail   KEYCLOAK-4328
    **/
    SDK.prototype.getIdName = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetIdNameRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{id}/name", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getIdName2XxApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealm - Get the top-level representation of the realm   It will not include nested information like User and Client representations.
    **/
    SDK.prototype.getRealm = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.realmRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmAdminEvents - Get admin events   Returns all admin events, or filters events based on URL query parameters listed here
    **/
    SDK.prototype.getRealmAdminEvents = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmAdminEventsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/admin-events", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.adminEventRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmAttackDetectionBruteForceUsersUserId - Get status of a username in brute force detection
    **/
    SDK.prototype.getRealmAttackDetectionBruteForceUsersUserId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmAttackDetectionBruteForceUsersUserIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/attack-detection/brute-force/users/{userId}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getRealmAttackDetectionBruteForceUsersUserId2XxApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmAuthenticationAuthenticatorProviders - Get authenticator providers   Returns a list of authenticator providers.
    **/
    SDK.prototype.getRealmAuthenticationAuthenticatorProviders = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmAuthenticationAuthenticatorProvidersRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/authenticator-providers", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getRealmAuthenticationAuthenticatorProviders2XxApplicationJsonObjects = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmAuthenticationClientAuthenticatorProviders - Get client authenticator providers   Returns a list of client authenticator providers.
    **/
    SDK.prototype.getRealmAuthenticationClientAuthenticatorProviders = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmAuthenticationClientAuthenticatorProvidersRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/client-authenticator-providers", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getRealmAuthenticationClientAuthenticatorProviders2XxApplicationJsonObjects = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmAuthenticationConfigDescriptionProviderId - Get authenticator provider’s configuration description
    **/
    SDK.prototype.getRealmAuthenticationConfigDescriptionProviderId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmAuthenticationConfigDescriptionProviderIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/config-description/{providerId}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.authenticatorConfigInfoRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmAuthenticationConfigId - Get authenticator configuration
    **/
    SDK.prototype.getRealmAuthenticationConfigId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmAuthenticationConfigIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/config/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.authenticatorConfigRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmAuthenticationExecutionsExecutionId - Get Single Execution
    **/
    SDK.prototype.getRealmAuthenticationExecutionsExecutionId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmAuthenticationExecutionsExecutionIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/executions/{executionId}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmAuthenticationFlows - Get authentication flows   Returns a list of authentication flows.
    **/
    SDK.prototype.getRealmAuthenticationFlows = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmAuthenticationFlowsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/flows", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.authenticationFlowRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmAuthenticationFlowsFlowAliasExecutions - Get authentication executions for a flow
    **/
    SDK.prototype.getRealmAuthenticationFlowsFlowAliasExecutions = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmAuthenticationFlowsFlowAliasExecutionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{flowAlias}/executions", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmAuthenticationFlowsId - Get authentication flow for id
    **/
    SDK.prototype.getRealmAuthenticationFlowsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmAuthenticationFlowsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.authenticationFlowRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmAuthenticationFormActionProviders - Get form action providers   Returns a list of form action providers.
    **/
    SDK.prototype.getRealmAuthenticationFormActionProviders = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmAuthenticationFormActionProvidersRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/form-action-providers", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getRealmAuthenticationFormActionProviders2XxApplicationJsonObjects = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmAuthenticationFormProviders - Get form providers   Returns a list of form providers.
    **/
    SDK.prototype.getRealmAuthenticationFormProviders = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmAuthenticationFormProvidersRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/form-providers", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getRealmAuthenticationFormProviders2XxApplicationJsonObjects = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmAuthenticationPerClientConfigDescription - Get configuration descriptions for all clients
    **/
    SDK.prototype.getRealmAuthenticationPerClientConfigDescription = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmAuthenticationPerClientConfigDescriptionRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/per-client-config-description", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getRealmAuthenticationPerClientConfigDescription2XxApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmAuthenticationRequiredActions - Get required actions   Returns a list of required actions.
    **/
    SDK.prototype.getRealmAuthenticationRequiredActions = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmAuthenticationRequiredActionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/required-actions", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.requiredActionProviderRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmAuthenticationRequiredActionsAlias - Get required action for alias
    **/
    SDK.prototype.getRealmAuthenticationRequiredActionsAlias = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmAuthenticationRequiredActionsAliasRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/required-actions/{alias}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.requiredActionProviderRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmAuthenticationUnregisteredRequiredActions - Get unregistered required actions   Returns a list of unregistered required actions.
    **/
    SDK.prototype.getRealmAuthenticationUnregisteredRequiredActions = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmAuthenticationUnregisteredRequiredActionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/unregistered-required-actions", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getRealmAuthenticationUnregisteredRequiredActions2XxApplicationJsonObjects = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientRegistrationPolicyProviders - Base path for retrieve providers with the configProperties properly filled
    **/
    SDK.prototype.getRealmClientRegistrationPolicyProviders = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientRegistrationPolicyProvidersRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-registration-policy/providers", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.componentTypeRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientScopes - Get client scopes belonging to the realm   Returns a list of client scopes belonging to the realm
    **/
    SDK.prototype.getRealmClientScopes = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientScopesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.clientScopeRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientScopesId1ProtocolMappersModelsId2 - Get mapper by id
    **/
    SDK.prototype.getRealmClientScopesId1ProtocolMappersModelsId2 = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientScopesId1ProtocolMappersModelsId2Request(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.protocolMapperRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientScopesId - Get representation of the client scope
    **/
    SDK.prototype.getRealmClientScopesId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientScopesIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.clientScopeRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientScopesIdProtocolMappersModels - Get mappers
    **/
    SDK.prototype.getRealmClientScopesIdProtocolMappersModels = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientScopesIdProtocolMappersModelsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/protocol-mappers/models", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.protocolMapperRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientScopesIdProtocolMappersProtocolProtocol - Get mappers by name for a specific protocol
    **/
    SDK.prototype.getRealmClientScopesIdProtocolMappersProtocolProtocol = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientScopesIdProtocolMappersProtocolProtocolRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/protocol-mappers/protocol/{protocol}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.protocolMapperRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientScopesIdScopeMappings - Get all scope mappings for the client
    **/
    SDK.prototype.getRealmClientScopesIdScopeMappings = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientScopesIdScopeMappingsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.mappingsRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientScopesIdScopeMappingsClientsClient - Get the roles associated with a client’s scope   Returns roles for the client.
    **/
    SDK.prototype.getRealmClientScopesIdScopeMappingsClientsClient = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientScopesIdScopeMappingsClientsClientRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientScopesIdScopeMappingsClientsClientAvailable - The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
    **/
    SDK.prototype.getRealmClientScopesIdScopeMappingsClientsClientAvailable = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientScopesIdScopeMappingsClientsClientAvailableRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}/available", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientScopesIdScopeMappingsClientsClientComposite - Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
    **/
    SDK.prototype.getRealmClientScopesIdScopeMappingsClientsClientComposite = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientScopesIdScopeMappingsClientsClientCompositeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}/composite", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientScopesIdScopeMappingsRealm - Get realm-level roles associated with the client’s scope
    **/
    SDK.prototype.getRealmClientScopesIdScopeMappingsRealm = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientScopesIdScopeMappingsRealmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientScopesIdScopeMappingsRealmAvailable - Get realm-level roles that are available to attach to this client’s scope
    **/
    SDK.prototype.getRealmClientScopesIdScopeMappingsRealmAvailable = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientScopesIdScopeMappingsRealmAvailableRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm/available", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientScopesIdScopeMappingsRealmComposite - Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
    **/
    SDK.prototype.getRealmClientScopesIdScopeMappingsRealmComposite = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientScopesIdScopeMappingsRealmCompositeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm/composite", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientSessionStats - Get client session stats   Returns a JSON map.
    **/
    SDK.prototype.getRealmClientSessionStats = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientSessionStatsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-session-stats", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getRealmClientSessionStats2XxApplicationJsonObjects = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClients - Get clients belonging to the realm   Returns a list of clients belonging to the realm
    **/
    SDK.prototype.getRealmClients = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.clientRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsId1ProtocolMappersModelsId2 - Get mapper by id
    **/
    SDK.prototype.getRealmClientsId1ProtocolMappersModelsId2 = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsId1ProtocolMappersModelsId2Request(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id1}/protocol-mappers/models/{id2}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.protocolMapperRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsId - Get representation of the client
    **/
    SDK.prototype.getRealmClientsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.clientRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdCertificatesAttr - Get key info
    **/
    SDK.prototype.getRealmClientsIdCertificatesAttr = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdCertificatesAttrRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/certificates/{attr}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.certificateRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdClientSecret - Get the client secret
    **/
    SDK.prototype.getRealmClientsIdClientSecret = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdClientSecretRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/client-secret", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.credentialRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdDefaultClientScopes - Get default client scopes.
    **/
    SDK.prototype.getRealmClientsIdDefaultClientScopes = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdDefaultClientScopesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/default-client-scopes", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.clientScopeRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdEvaluateScopesGenerateExampleAccessToken - Create JSON with payload of example access token
    **/
    SDK.prototype.getRealmClientsIdEvaluateScopesGenerateExampleAccessToken = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/evaluate-scopes/generate-example-access-token", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.accessToken = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdEvaluateScopesProtocolMappers - Return list of all protocol mappers, which will be used when generating tokens issued for particular client.
    **/
    SDK.prototype.getRealmClientsIdEvaluateScopesProtocolMappers = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdEvaluateScopesProtocolMappersRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/evaluate-scopes/protocol-mappers", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.clientScopeEvaluateResourceProtocolMapperEvaluationRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGranted - Get effective scope mapping of all roles of particular role container, which this client is defacto allowed to have in the accessToken issued for him.
    **/
    SDK.prototype.getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGranted = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/evaluate-scopes/scope-mappings/{roleContainerId}/granted", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGranted - Get roles, which this client doesn’t have scope for and can’t have them in the accessToken issued for him.
    **/
    SDK.prototype.getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGranted = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/evaluate-scopes/scope-mappings/{roleContainerId}/not-granted", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getRealmClientsIdInstallationProvidersProviderId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdInstallationProvidersProviderIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/installation/providers/{providerId}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
    **/
    SDK.prototype.getRealmClientsIdManagementPermissions = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdManagementPermissionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/management/permissions", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.managementPermissionReference = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdOfflineSessionCount - Get application offline session count   Returns a number of offline user sessions associated with this client   {      "count": number  }
    **/
    SDK.prototype.getRealmClientsIdOfflineSessionCount = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdOfflineSessionCountRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/offline-session-count", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getRealmClientsIdOfflineSessionCount2XxApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdOfflineSessions - Get offline sessions for client   Returns a list of offline user sessions associated with this client
    **/
    SDK.prototype.getRealmClientsIdOfflineSessions = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdOfflineSessionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/offline-sessions", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.userSessionRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdOptionalClientScopes - Get optional client scopes.
    **/
    SDK.prototype.getRealmClientsIdOptionalClientScopes = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdOptionalClientScopesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/optional-client-scopes", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.clientScopeRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdProtocolMappersModels - Get mappers
    **/
    SDK.prototype.getRealmClientsIdProtocolMappersModels = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdProtocolMappersModelsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/protocol-mappers/models", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.protocolMapperRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdProtocolMappersProtocolProtocol - Get mappers by name for a specific protocol
    **/
    SDK.prototype.getRealmClientsIdProtocolMappersProtocolProtocol = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdProtocolMappersProtocolProtocolRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/protocol-mappers/protocol/{protocol}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.protocolMapperRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdRoles - Get all roles for the realm or client
    **/
    SDK.prototype.getRealmClientsIdRoles = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdRolesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdRolesRoleName - Get a role by name
    **/
    SDK.prototype.getRealmClientsIdRolesRoleName = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdRolesRoleNameRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdRolesRoleNameComposites - Get composites of the role
    **/
    SDK.prototype.getRealmClientsIdRolesRoleNameComposites = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdRolesRoleNameCompositesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/composites", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdRolesRoleNameCompositesClientsClient - An app-level roles for the specified app for the role’s composite
    **/
    SDK.prototype.getRealmClientsIdRolesRoleNameCompositesClientsClient = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdRolesRoleNameCompositesClientsClientRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/composites/clients/{client}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdRolesRoleNameCompositesRealm - Get realm-level roles of the role’s composite
    **/
    SDK.prototype.getRealmClientsIdRolesRoleNameCompositesRealm = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdRolesRoleNameCompositesRealmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/composites/realm", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdRolesRoleNameGroups - Return List of Groups that have the specified role name
    **/
    SDK.prototype.getRealmClientsIdRolesRoleNameGroups = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdRolesRoleNameGroupsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/groups", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.groupRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdRolesRoleNameManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
    **/
    SDK.prototype.getRealmClientsIdRolesRoleNameManagementPermissions = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdRolesRoleNameManagementPermissionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/management/permissions", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.managementPermissionReference = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdRolesRoleNameUsers - Return List of Users that have the specified role name
    **/
    SDK.prototype.getRealmClientsIdRolesRoleNameUsers = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdRolesRoleNameUsersRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/users", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.userRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdScopeMappings - Get all scope mappings for the client
    **/
    SDK.prototype.getRealmClientsIdScopeMappings = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdScopeMappingsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.mappingsRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdScopeMappingsClientsClient - Get the roles associated with a client’s scope   Returns roles for the client.
    **/
    SDK.prototype.getRealmClientsIdScopeMappingsClientsClient = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdScopeMappingsClientsClientRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdScopeMappingsClientsClientAvailable - The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
    **/
    SDK.prototype.getRealmClientsIdScopeMappingsClientsClientAvailable = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdScopeMappingsClientsClientAvailableRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}/available", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdScopeMappingsClientsClientComposite - Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
    **/
    SDK.prototype.getRealmClientsIdScopeMappingsClientsClientComposite = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdScopeMappingsClientsClientCompositeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}/composite", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdScopeMappingsRealm - Get realm-level roles associated with the client’s scope
    **/
    SDK.prototype.getRealmClientsIdScopeMappingsRealm = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdScopeMappingsRealmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/realm", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdScopeMappingsRealmAvailable - Get realm-level roles that are available to attach to this client’s scope
    **/
    SDK.prototype.getRealmClientsIdScopeMappingsRealmAvailable = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdScopeMappingsRealmAvailableRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/realm/available", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdScopeMappingsRealmComposite - Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
    **/
    SDK.prototype.getRealmClientsIdScopeMappingsRealmComposite = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdScopeMappingsRealmCompositeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/realm/composite", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdServiceAccountUser - Get a user dedicated to the service account
    **/
    SDK.prototype.getRealmClientsIdServiceAccountUser = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdServiceAccountUserRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/service-account-user", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.userRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdSessionCount - Get application session count   Returns a number of user sessions associated with this client   {      "count": number  }
    **/
    SDK.prototype.getRealmClientsIdSessionCount = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdSessionCountRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/session-count", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getRealmClientsIdSessionCount2XxApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdTestNodesAvailable - Test if registered cluster nodes are available   Tests availability by sending 'ping' request to all cluster nodes.
    **/
    SDK.prototype.getRealmClientsIdTestNodesAvailable = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdTestNodesAvailableRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/test-nodes-available", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.globalRequestResult = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmClientsIdUserSessions - Get user sessions for client   Returns a list of user sessions associated with this client
    **/
    SDK.prototype.getRealmClientsIdUserSessions = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsIdUserSessionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/user-sessions", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.userSessionRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getRealmClientsInitialAccess = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmClientsInitialAccessRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients-initial-access", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.clientInitialAccessPresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getRealmComponents = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmComponentsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/components", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.componentRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getRealmComponentsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmComponentsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/components/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.componentRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmComponentsIdSubComponentTypes - List of subcomponent types that are available to configure for a particular parent component.
    **/
    SDK.prototype.getRealmComponentsIdSubComponentTypes = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmComponentsIdSubComponentTypesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/components/{id}/sub-component-types", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.componentTypeRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getRealmCredentialRegistrators = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmCredentialRegistratorsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/credential-registrators", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getRealmCredentialRegistrators2XxApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmDefaultDefaultClientScopes - Get realm default client scopes.
    **/
    SDK.prototype.getRealmDefaultDefaultClientScopes = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmDefaultDefaultClientScopesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/default-default-client-scopes", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.clientScopeRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmDefaultGroups - Get group hierarchy.
    **/
    SDK.prototype.getRealmDefaultGroups = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmDefaultGroupsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/default-groups", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.groupRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmDefaultOptionalClientScopes - Get realm optional client scopes.
    **/
    SDK.prototype.getRealmDefaultOptionalClientScopes = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmDefaultOptionalClientScopesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/default-optional-client-scopes", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.clientScopeRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmEvents - Get events   Returns all events, or filters them based on URL query parameters listed here
    **/
    SDK.prototype.getRealmEvents = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmEventsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/events", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.eventRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmEventsConfig - Get the events provider configuration   Returns JSON object with events provider configuration
    **/
    SDK.prototype.getRealmEventsConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmEventsConfigRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/events/config", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.realmEventsConfigRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getRealmGroupByPathPath = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmGroupByPathPathRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/group-by-path/{path}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.groupRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmGroups - Get group hierarchy.
    **/
    SDK.prototype.getRealmGroups = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmGroupsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/groups", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.groupRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmGroupsCount - Returns the groups counts.
    **/
    SDK.prototype.getRealmGroupsCount = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmGroupsCountRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/groups/count", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getRealmGroupsCount2XxApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getRealmGroupsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmGroupsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/groups/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.groupRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmGroupsIdManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
    **/
    SDK.prototype.getRealmGroupsIdManagementPermissions = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmGroupsIdManagementPermissionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/management/permissions", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.managementPermissionReference = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmGroupsIdMembers - Get users   Returns a list of users, filtered according to query parameters
    **/
    SDK.prototype.getRealmGroupsIdMembers = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmGroupsIdMembersRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/members", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.userRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmGroupsIdRoleMappings - Get role mappings
    **/
    SDK.prototype.getRealmGroupsIdRoleMappings = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmGroupsIdRoleMappingsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.mappingsRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmGroupsIdRoleMappingsClientsClient - Get client-level role mappings for the user, and the app
    **/
    SDK.prototype.getRealmGroupsIdRoleMappingsClientsClient = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmGroupsIdRoleMappingsClientsClientRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmGroupsIdRoleMappingsClientsClientAvailable - Get available client-level roles that can be mapped to the user
    **/
    SDK.prototype.getRealmGroupsIdRoleMappingsClientsClientAvailable = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmGroupsIdRoleMappingsClientsClientAvailableRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}/available", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmGroupsIdRoleMappingsClientsClientComposite - Get effective client-level role mappings   This recurses any composite roles
    **/
    SDK.prototype.getRealmGroupsIdRoleMappingsClientsClientComposite = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmGroupsIdRoleMappingsClientsClientCompositeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}/composite", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmGroupsIdRoleMappingsRealm - Get realm-level role mappings
    **/
    SDK.prototype.getRealmGroupsIdRoleMappingsRealm = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmGroupsIdRoleMappingsRealmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/realm", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmGroupsIdRoleMappingsRealmAvailable - Get realm-level roles that can be mapped
    **/
    SDK.prototype.getRealmGroupsIdRoleMappingsRealmAvailable = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmGroupsIdRoleMappingsRealmAvailableRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/realm/available", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmGroupsIdRoleMappingsRealmComposite - Get effective realm-level role mappings   This will recurse all composite roles to get the result.
    **/
    SDK.prototype.getRealmGroupsIdRoleMappingsRealmComposite = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmGroupsIdRoleMappingsRealmCompositeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/realm/composite", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmIdentityProviderInstances - Get identity providers
    **/
    SDK.prototype.getRealmIdentityProviderInstances = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmIdentityProviderInstancesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.identityProviderRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmIdentityProviderInstancesAlias - Get the identity provider
    **/
    SDK.prototype.getRealmIdentityProviderInstancesAlias = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmIdentityProviderInstancesAliasRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.identityProviderRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmIdentityProviderInstancesAliasExport - Export public broker configuration for identity provider
    **/
    SDK.prototype.getRealmIdentityProviderInstancesAliasExport = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmIdentityProviderInstancesAliasExportRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/export", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmIdentityProviderInstancesAliasManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
    **/
    SDK.prototype.getRealmIdentityProviderInstancesAliasManagementPermissions = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmIdentityProviderInstancesAliasManagementPermissionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/management/permissions", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.managementPermissionReference = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmIdentityProviderInstancesAliasMapperTypes - Get mapper types for identity provider
    **/
    SDK.prototype.getRealmIdentityProviderInstancesAliasMapperTypes = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmIdentityProviderInstancesAliasMapperTypesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/mapper-types", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmIdentityProviderInstancesAliasMappers - Get mappers for identity provider
    **/
    SDK.prototype.getRealmIdentityProviderInstancesAliasMappers = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmIdentityProviderInstancesAliasMappersRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/mappers", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.identityProviderMapperRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmIdentityProviderInstancesAliasMappersId - Get mapper by id for the identity provider
    **/
    SDK.prototype.getRealmIdentityProviderInstancesAliasMappersId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmIdentityProviderInstancesAliasMappersIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/mappers/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.identityProviderMapperRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmIdentityProviderProvidersProviderId - Get identity providers
    **/
    SDK.prototype.getRealmIdentityProviderProvidersProviderId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmIdentityProviderProvidersProviderIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/identity-provider/providers/{provider_id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getRealmKeys = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmKeysRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/keys", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.keysMetadataRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmRoles - Get all roles for the realm or client
    **/
    SDK.prototype.getRealmRoles = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmRolesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmRolesByIdRoleId - Get a specific role’s representation
    **/
    SDK.prototype.getRealmRolesByIdRoleId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmRolesByIdRoleIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmRolesByIdRoleIdComposites - Get role’s children   Returns a set of role’s children provided the role is a composite.
    **/
    SDK.prototype.getRealmRolesByIdRoleIdComposites = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmRolesByIdRoleIdCompositesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}/composites", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmRolesByIdRoleIdCompositesClientsClient - Get client-level roles for the client that are in the role’s composite
    **/
    SDK.prototype.getRealmRolesByIdRoleIdCompositesClientsClient = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmRolesByIdRoleIdCompositesClientsClientRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}/composites/clients/{client}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmRolesByIdRoleIdCompositesRealm - Get realm-level roles that are in the role’s composite
    **/
    SDK.prototype.getRealmRolesByIdRoleIdCompositesRealm = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmRolesByIdRoleIdCompositesRealmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}/composites/realm", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmRolesByIdRoleIdManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
    **/
    SDK.prototype.getRealmRolesByIdRoleIdManagementPermissions = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmRolesByIdRoleIdManagementPermissionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}/management/permissions", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.managementPermissionReference = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmRolesRoleName - Get a role by name
    **/
    SDK.prototype.getRealmRolesRoleName = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmRolesRoleNameRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmRolesRoleNameComposites - Get composites of the role
    **/
    SDK.prototype.getRealmRolesRoleNameComposites = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmRolesRoleNameCompositesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/composites", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmRolesRoleNameCompositesClientsClient - An app-level roles for the specified app for the role’s composite
    **/
    SDK.prototype.getRealmRolesRoleNameCompositesClientsClient = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmRolesRoleNameCompositesClientsClientRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/composites/clients/{client}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmRolesRoleNameCompositesRealm - Get realm-level roles of the role’s composite
    **/
    SDK.prototype.getRealmRolesRoleNameCompositesRealm = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmRolesRoleNameCompositesRealmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/composites/realm", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmRolesRoleNameGroups - Return List of Groups that have the specified role name
    **/
    SDK.prototype.getRealmRolesRoleNameGroups = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmRolesRoleNameGroupsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/groups", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.groupRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmRolesRoleNameManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
    **/
    SDK.prototype.getRealmRolesRoleNameManagementPermissions = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmRolesRoleNameManagementPermissionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/management/permissions", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.managementPermissionReference = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmRolesRoleNameUsers - Return List of Users that have the specified role name
    **/
    SDK.prototype.getRealmRolesRoleNameUsers = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmRolesRoleNameUsersRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/users", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.userRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmUserStorageIdName - Need this for admin console to display simple name of provider when displaying user detail   KEYCLOAK-4328
    **/
    SDK.prototype.getRealmUserStorageIdName = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmUserStorageIdNameRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/user-storage/{id}/name", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getRealmUserStorageIdName2XxApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmUsers - Get users   Returns a list of users, filtered according to query parameters
    **/
    SDK.prototype.getRealmUsers = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmUsersRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.userRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmUsersCount - Returns the number of users that match the given criteria.
    **/
    SDK.prototype.getRealmUsersCount = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmUsersCountRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/count", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getRealmUsersCount2XxApplicationJsonInt32Integer = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmUsersId - Get representation of the user
    **/
    SDK.prototype.getRealmUsersId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmUsersIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.userRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmUsersIdConfiguredUserStorageCredentialTypes - Return credential types, which are provided by the user storage where user is stored.
    **/
    SDK.prototype.getRealmUsersIdConfiguredUserStorageCredentialTypes = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmUsersIdConfiguredUserStorageCredentialTypesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/configured-user-storage-credential-types", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getRealmUsersIdConfiguredUserStorageCredentialTypes2XxApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmUsersIdConsents - Get consents granted by the user
    **/
    SDK.prototype.getRealmUsersIdConsents = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmUsersIdConsentsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/consents", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getRealmUsersIdConsents2XxApplicationJsonObjects = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getRealmUsersIdCredentials = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmUsersIdCredentialsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/credentials", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.credentialRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmUsersIdFederatedIdentity - Get social logins associated with the user
    **/
    SDK.prototype.getRealmUsersIdFederatedIdentity = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmUsersIdFederatedIdentityRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/federated-identity", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.federatedIdentityRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getRealmUsersIdGroups = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmUsersIdGroupsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/groups", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.groupRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getRealmUsersIdGroupsCount = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmUsersIdGroupsCountRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/groups/count", req.pathParams);
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getRealmUsersIdGroupsCount2XxApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmUsersIdOfflineSessionsClientId - Get offline sessions associated with the user and client
    **/
    SDK.prototype.getRealmUsersIdOfflineSessionsClientId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmUsersIdOfflineSessionsClientIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/offline-sessions/{clientId}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.userSessionRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmUsersIdRoleMappings - Get role mappings
    **/
    SDK.prototype.getRealmUsersIdRoleMappings = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmUsersIdRoleMappingsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.mappingsRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmUsersIdRoleMappingsClientsClient - Get client-level role mappings for the user, and the app
    **/
    SDK.prototype.getRealmUsersIdRoleMappingsClientsClient = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmUsersIdRoleMappingsClientsClientRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmUsersIdRoleMappingsClientsClientAvailable - Get available client-level roles that can be mapped to the user
    **/
    SDK.prototype.getRealmUsersIdRoleMappingsClientsClientAvailable = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmUsersIdRoleMappingsClientsClientAvailableRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}/available", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmUsersIdRoleMappingsClientsClientComposite - Get effective client-level role mappings   This recurses any composite roles
    **/
    SDK.prototype.getRealmUsersIdRoleMappingsClientsClientComposite = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmUsersIdRoleMappingsClientsClientCompositeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}/composite", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmUsersIdRoleMappingsRealm - Get realm-level role mappings
    **/
    SDK.prototype.getRealmUsersIdRoleMappingsRealm = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmUsersIdRoleMappingsRealmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/realm", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmUsersIdRoleMappingsRealmAvailable - Get realm-level roles that can be mapped
    **/
    SDK.prototype.getRealmUsersIdRoleMappingsRealmAvailable = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmUsersIdRoleMappingsRealmAvailableRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/realm/available", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmUsersIdRoleMappingsRealmComposite - Get effective realm-level role mappings   This will recurse all composite roles to get the result.
    **/
    SDK.prototype.getRealmUsersIdRoleMappingsRealmComposite = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmUsersIdRoleMappingsRealmCompositeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/realm/composite", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.roleRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getRealmUsersIdSessions - Get sessions associated with the user
    **/
    SDK.prototype.getRealmUsersIdSessions = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmUsersIdSessionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/sessions", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.userSessionRepresentations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getRealmUsersManagementPermissions = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRealmUsersManagementPermissionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users-management-permissions", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.managementPermissionReference = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * post - Import a realm   Imports a realm from a full representation of that realm.
    **/
    SDK.prototype.post = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmAuthenticationExecutions - Add new authentication execution
    **/
    SDK.prototype.postRealmAuthenticationExecutions = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmAuthenticationExecutionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/executions", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmAuthenticationExecutionsExecutionIdConfig - Update execution with new configuration
    **/
    SDK.prototype.postRealmAuthenticationExecutionsExecutionIdConfig = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmAuthenticationExecutionsExecutionIdConfigRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/executions/{executionId}/config", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmAuthenticationExecutionsExecutionIdLowerPriority - Lower execution’s priority
    **/
    SDK.prototype.postRealmAuthenticationExecutionsExecutionIdLowerPriority = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmAuthenticationExecutionsExecutionIdLowerPriorityRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/executions/{executionId}/lower-priority", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmAuthenticationExecutionsExecutionIdRaisePriority - Raise execution’s priority
    **/
    SDK.prototype.postRealmAuthenticationExecutionsExecutionIdRaisePriority = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmAuthenticationExecutionsExecutionIdRaisePriorityRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/executions/{executionId}/raise-priority", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmAuthenticationFlows - Create a new authentication flow
    **/
    SDK.prototype.postRealmAuthenticationFlows = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmAuthenticationFlowsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/flows", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmAuthenticationFlowsFlowAliasCopy - Copy existing authentication flow under a new name   The new name is given as 'newName' attribute of the passed JSON object
    **/
    SDK.prototype.postRealmAuthenticationFlowsFlowAliasCopy = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmAuthenticationFlowsFlowAliasCopyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{flowAlias}/copy", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmAuthenticationFlowsFlowAliasExecutionsExecution - Add new authentication execution to a flow
    **/
    SDK.prototype.postRealmAuthenticationFlowsFlowAliasExecutionsExecution = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{flowAlias}/executions/execution", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmAuthenticationFlowsFlowAliasExecutionsFlow - Add new flow with new execution to existing flow
    **/
    SDK.prototype.postRealmAuthenticationFlowsFlowAliasExecutionsFlow = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmAuthenticationFlowsFlowAliasExecutionsFlowRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{flowAlias}/executions/flow", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmAuthenticationRegisterRequiredAction - Register a new required actions
    **/
    SDK.prototype.postRealmAuthenticationRegisterRequiredAction = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmAuthenticationRegisterRequiredActionRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/register-required-action", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmAuthenticationRequiredActionsAliasLowerPriority - Lower required action’s priority
    **/
    SDK.prototype.postRealmAuthenticationRequiredActionsAliasLowerPriority = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmAuthenticationRequiredActionsAliasLowerPriorityRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/required-actions/{alias}/lower-priority", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmAuthenticationRequiredActionsAliasRaisePriority - Raise required action’s priority
    **/
    SDK.prototype.postRealmAuthenticationRequiredActionsAliasRaisePriority = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmAuthenticationRequiredActionsAliasRaisePriorityRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/required-actions/{alias}/raise-priority", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClearKeysCache - Clear cache of external public keys (Public keys of clients or Identity providers)
    **/
    SDK.prototype.postRealmClearKeysCache = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClearKeysCacheRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clear-keys-cache", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClearRealmCache - Clear realm cache
    **/
    SDK.prototype.postRealmClearRealmCache = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClearRealmCacheRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clear-realm-cache", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClearUserCache - Clear user cache
    **/
    SDK.prototype.postRealmClearUserCache = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClearUserCacheRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clear-user-cache", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientDescriptionConverter - Base path for importing clients under this realm.
    **/
    SDK.prototype.postRealmClientDescriptionConverter = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientDescriptionConverterRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-description-converter", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.clientRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientScopes - Create a new client scope   Client Scope’s name must be unique!
    **/
    SDK.prototype.postRealmClientScopes = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientScopesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientScopesIdProtocolMappersAddModels - Create multiple mappers
    **/
    SDK.prototype.postRealmClientScopesIdProtocolMappersAddModels = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientScopesIdProtocolMappersAddModelsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/protocol-mappers/add-models", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientScopesIdProtocolMappersModels - Create a mapper
    **/
    SDK.prototype.postRealmClientScopesIdProtocolMappersModels = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientScopesIdProtocolMappersModelsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/protocol-mappers/models", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientScopesIdScopeMappingsClientsClient - Add client-level roles to the client’s scope
    **/
    SDK.prototype.postRealmClientScopesIdScopeMappingsClientsClient = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientScopesIdScopeMappingsClientsClientRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientScopesIdScopeMappingsRealm - Add a set of realm-level roles to the client’s scope
    **/
    SDK.prototype.postRealmClientScopesIdScopeMappingsRealm = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientScopesIdScopeMappingsRealmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClients - Create a new client   Client’s client_id must be unique!
    **/
    SDK.prototype.postRealmClients = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientsIdCertificatesAttrDownload - Get a keystore file for the client, containing private key and public certificate
    **/
    SDK.prototype.postRealmClientsIdCertificatesAttrDownload = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientsIdCertificatesAttrDownloadRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/certificates/{attr}/download", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/octet-stream")) {
                        res.postRealmClientsIdCertificatesAttrDownload2XxApplicationOctetStreamByteString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientsIdCertificatesAttrGenerate - Generate a new certificate with new key pair
    **/
    SDK.prototype.postRealmClientsIdCertificatesAttrGenerate = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientsIdCertificatesAttrGenerateRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/certificates/{attr}/generate", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.certificateRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientsIdCertificatesAttrGenerateAndDownload - Generate a new keypair and certificate, and get the private key file   Generates a keypair and certificate and serves the private key in a specified keystore format.
    **/
    SDK.prototype.postRealmClientsIdCertificatesAttrGenerateAndDownload = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientsIdCertificatesAttrGenerateAndDownloadRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/certificates/{attr}/generate-and-download", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/octet-stream")) {
                        res.postRealmClientsIdCertificatesAttrGenerateAndDownload2XxApplicationOctetStreamByteString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientsIdCertificatesAttrUpload - Upload certificate and eventually private key
    **/
    SDK.prototype.postRealmClientsIdCertificatesAttrUpload = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientsIdCertificatesAttrUploadRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/certificates/{attr}/upload", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.certificateRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientsIdCertificatesAttrUploadCertificate - Upload only certificate, not private key
    **/
    SDK.prototype.postRealmClientsIdCertificatesAttrUploadCertificate = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientsIdCertificatesAttrUploadCertificateRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/certificates/{attr}/upload-certificate", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.certificateRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientsIdClientSecret - Generate a new secret for the client
    **/
    SDK.prototype.postRealmClientsIdClientSecret = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientsIdClientSecretRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/client-secret", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.credentialRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientsIdNodes - Register a cluster node with the client   Manually register cluster node to this client - usually it’s not needed to call this directly as adapter should handle  by sending registration request to Keycloak
    **/
    SDK.prototype.postRealmClientsIdNodes = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientsIdNodesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/nodes", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientsIdProtocolMappersAddModels - Create multiple mappers
    **/
    SDK.prototype.postRealmClientsIdProtocolMappersAddModels = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientsIdProtocolMappersAddModelsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/protocol-mappers/add-models", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientsIdProtocolMappersModels - Create a mapper
    **/
    SDK.prototype.postRealmClientsIdProtocolMappersModels = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientsIdProtocolMappersModelsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/protocol-mappers/models", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientsIdPushRevocation - Push the client’s revocation policy to its admin URL   If the client has an admin URL, push revocation policy to it.
    **/
    SDK.prototype.postRealmClientsIdPushRevocation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientsIdPushRevocationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/push-revocation", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.globalRequestResult = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientsIdRegistrationAccessToken - Generate a new registration access token for the client
    **/
    SDK.prototype.postRealmClientsIdRegistrationAccessToken = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientsIdRegistrationAccessTokenRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/registration-access-token", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.clientRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientsIdRoles - Create a new role for the realm or client
    **/
    SDK.prototype.postRealmClientsIdRoles = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientsIdRolesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientsIdRolesRoleNameComposites - Add a composite to the role
    **/
    SDK.prototype.postRealmClientsIdRolesRoleNameComposites = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientsIdRolesRoleNameCompositesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/composites", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientsIdScopeMappingsClientsClient - Add client-level roles to the client’s scope
    **/
    SDK.prototype.postRealmClientsIdScopeMappingsClientsClient = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientsIdScopeMappingsClientsClientRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientsIdScopeMappingsRealm - Add a set of realm-level roles to the client’s scope
    **/
    SDK.prototype.postRealmClientsIdScopeMappingsRealm = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientsIdScopeMappingsRealmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/realm", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmClientsInitialAccess - Create a new initial access token.
    **/
    SDK.prototype.postRealmClientsInitialAccess = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmClientsInitialAccessRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients-initial-access", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.clientInitialAccessPresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.postRealmComponents = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmComponentsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/components", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmGroups - create or add a top level realm groupSet or create child.
    **/
    SDK.prototype.postRealmGroups = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmGroupsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/groups", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmGroupsIdChildren - Set or create child.
    **/
    SDK.prototype.postRealmGroupsIdChildren = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmGroupsIdChildrenRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/children", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmGroupsIdRoleMappingsClientsClient - Add client-level roles to the user role mapping
    **/
    SDK.prototype.postRealmGroupsIdRoleMappingsClientsClient = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmGroupsIdRoleMappingsClientsClientRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmGroupsIdRoleMappingsRealm - Add realm-level role mappings to the user
    **/
    SDK.prototype.postRealmGroupsIdRoleMappingsRealm = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmGroupsIdRoleMappingsRealmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/realm", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmIdentityProviderImportConfig - Import identity provider from uploaded JSON file
    **/
    SDK.prototype.postRealmIdentityProviderImportConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmIdentityProviderImportConfigRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/identity-provider/import-config", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.postRealmIdentityProviderImportConfig2XxApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmIdentityProviderInstances - Create a new identity provider
    **/
    SDK.prototype.postRealmIdentityProviderInstances = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmIdentityProviderInstancesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmIdentityProviderInstancesAliasMappers - Add a mapper to identity provider
    **/
    SDK.prototype.postRealmIdentityProviderInstancesAliasMappers = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmIdentityProviderInstancesAliasMappersRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/mappers", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmLogoutAll - Removes all user sessions.
    **/
    SDK.prototype.postRealmLogoutAll = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmLogoutAllRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/logout-all", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmPartialImport - Partial import from a JSON file to an existing realm.
    **/
    SDK.prototype.postRealmPartialImport = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmPartialImportRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/partialImport", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmPartialExport - Partial export of existing realm into a JSON file.
    **/
    SDK.prototype.postRealmPartialExport = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmPartialExportRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/partial-export", req.pathParams);
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "post" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.realmRepresentation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmPushRevocation - Push the realm’s revocation policy to any client that has an admin url associated with it.
    **/
    SDK.prototype.postRealmPushRevocation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmPushRevocationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/push-revocation", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmRoles - Create a new role for the realm or client
    **/
    SDK.prototype.postRealmRoles = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmRolesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmRolesByIdRoleIdComposites - Make the role a composite role by associating some child roles
    **/
    SDK.prototype.postRealmRolesByIdRoleIdComposites = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmRolesByIdRoleIdCompositesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}/composites", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmRolesRoleNameComposites - Add a composite to the role
    **/
    SDK.prototype.postRealmRolesRoleNameComposites = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmRolesRoleNameCompositesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/composites", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmTestLdapConnection - Test LDAP connection
    **/
    SDK.prototype.postRealmTestLdapConnection = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmTestLdapConnectionRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/testLDAPConnection", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.postRealmTestSmtpConnection = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmTestSmtpConnectionRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/testSMTPConnection", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmUserStorageIdRemoveImportedUsers - Remove imported users
    **/
    SDK.prototype.postRealmUserStorageIdRemoveImportedUsers = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmUserStorageIdRemoveImportedUsersRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/user-storage/{id}/remove-imported-users", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmUserStorageIdSync - Trigger sync of users   Action can be "triggerFullSync" or "triggerChangedUsersSync"
    **/
    SDK.prototype.postRealmUserStorageIdSync = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmUserStorageIdSyncRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/user-storage/{id}/sync", req.pathParams);
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "post" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.synchronizationResult = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmUserStorageIdUnlinkUsers - Unlink imported users from a storage provider
    **/
    SDK.prototype.postRealmUserStorageIdUnlinkUsers = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmUserStorageIdUnlinkUsersRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/user-storage/{id}/unlink-users", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmUserStorageParentIdMappersIdSync - Trigger sync of mapper data related to ldap mapper (roles, groups, …​)   direction is "fedToKeycloak" or "keycloakToFed"
    **/
    SDK.prototype.postRealmUserStorageParentIdMappersIdSync = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmUserStorageParentIdMappersIdSyncRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/user-storage/{parentId}/mappers/{id}/sync", req.pathParams);
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "post" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.synchronizationResult = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmUsers - Create a new user   Username must be unique.
    **/
    SDK.prototype.postRealmUsers = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmUsersRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialId - Move a credential to a position behind another credential
    **/
    SDK.prototype.postRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/credentials/{credentialId}/moveAfter/{newPreviousCredentialId}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmUsersIdCredentialsCredentialIdMoveToFirst - Move a credential to a first position in the credentials list of the user
    **/
    SDK.prototype.postRealmUsersIdCredentialsCredentialIdMoveToFirst = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmUsersIdCredentialsCredentialIdMoveToFirstRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/credentials/{credentialId}/moveToFirst", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmUsersIdFederatedIdentityProvider - Add a social login provider to the user
    **/
    SDK.prototype.postRealmUsersIdFederatedIdentityProvider = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmUsersIdFederatedIdentityProviderRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/federated-identity/{provider}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmUsersIdImpersonation - Impersonate the user
    **/
    SDK.prototype.postRealmUsersIdImpersonation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmUsersIdImpersonationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/impersonation", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.postRealmUsersIdImpersonation2XxApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmUsersIdLogout - Remove all user sessions associated with the user   Also send notification to all clients that have an admin URL to invalidate the sessions for the particular user.
    **/
    SDK.prototype.postRealmUsersIdLogout = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmUsersIdLogoutRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/logout", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmUsersIdRoleMappingsClientsClient - Add client-level roles to the user role mapping
    **/
    SDK.prototype.postRealmUsersIdRoleMappingsClientsClient = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmUsersIdRoleMappingsClientsClientRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postRealmUsersIdRoleMappingsRealm - Add realm-level role mappings to the user
    **/
    SDK.prototype.postRealmUsersIdRoleMappingsRealm = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRealmUsersIdRoleMappingsRealmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/realm", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealm - Update the top-level information of the realm   Any user, roles or client information in the representation  will be ignored.
    **/
    SDK.prototype.putRealm = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmAuthenticationConfigId - Update authenticator configuration
    **/
    SDK.prototype.putRealmAuthenticationConfigId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmAuthenticationConfigIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/config/{id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmAuthenticationFlowsFlowAliasExecutions - Update authentication executions of a flow
    **/
    SDK.prototype.putRealmAuthenticationFlowsFlowAliasExecutions = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmAuthenticationFlowsFlowAliasExecutionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{flowAlias}/executions", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmAuthenticationFlowsId - Update an authentication flow
    **/
    SDK.prototype.putRealmAuthenticationFlowsId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmAuthenticationFlowsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmAuthenticationRequiredActionsAlias - Update required action
    **/
    SDK.prototype.putRealmAuthenticationRequiredActionsAlias = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmAuthenticationRequiredActionsAliasRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/authentication/required-actions/{alias}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmClientScopesId1ProtocolMappersModelsId2 - Update the mapper
    **/
    SDK.prototype.putRealmClientScopesId1ProtocolMappersModelsId2 = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmClientScopesId1ProtocolMappersModelsId2Request(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmClientScopesId - Update the client scope
    **/
    SDK.prototype.putRealmClientScopesId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmClientScopesIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmClientsId1ProtocolMappersModelsId2 - Update the mapper
    **/
    SDK.prototype.putRealmClientsId1ProtocolMappersModelsId2 = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmClientsId1ProtocolMappersModelsId2Request(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id1}/protocol-mappers/models/{id2}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmClientsId - Update the client
    **/
    SDK.prototype.putRealmClientsId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmClientsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.putRealmClientsIdDefaultClientScopesClientScopeId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmClientsIdDefaultClientScopesClientScopeIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/default-client-scopes/{clientScopeId}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "put" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmClientsIdManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
    **/
    SDK.prototype.putRealmClientsIdManagementPermissions = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmClientsIdManagementPermissionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/management/permissions", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.managementPermissionReference = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.putRealmClientsIdOptionalClientScopesClientScopeId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmClientsIdOptionalClientScopesClientScopeIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/optional-client-scopes/{clientScopeId}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "put" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmClientsIdRolesRoleName - Update a role by name
    **/
    SDK.prototype.putRealmClientsIdRolesRoleName = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmClientsIdRolesRoleNameRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmClientsIdRolesRoleNameManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
    **/
    SDK.prototype.putRealmClientsIdRolesRoleNameManagementPermissions = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmClientsIdRolesRoleNameManagementPermissionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/management/permissions", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.managementPermissionReference = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.putRealmComponentsId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmComponentsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/components/{id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.putRealmDefaultDefaultClientScopesClientScopeId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmDefaultDefaultClientScopesClientScopeIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/default-default-client-scopes/{clientScopeId}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "put" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.putRealmDefaultGroupsGroupId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmDefaultGroupsGroupIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/default-groups/{groupId}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "put" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.putRealmDefaultOptionalClientScopesClientScopeId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmDefaultOptionalClientScopesClientScopeIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/default-optional-client-scopes/{clientScopeId}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "put" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmEventsConfig - Update the events provider   Change the events provider and/or its configuration
    **/
    SDK.prototype.putRealmEventsConfig = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmEventsConfigRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/events/config", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmGroupsId - Update group, ignores subgroups.
    **/
    SDK.prototype.putRealmGroupsId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmGroupsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/groups/{id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmGroupsIdManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
    **/
    SDK.prototype.putRealmGroupsIdManagementPermissions = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmGroupsIdManagementPermissionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/management/permissions", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.managementPermissionReference = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmIdentityProviderInstancesAlias - Update the identity provider
    **/
    SDK.prototype.putRealmIdentityProviderInstancesAlias = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmIdentityProviderInstancesAliasRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmIdentityProviderInstancesAliasManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
    **/
    SDK.prototype.putRealmIdentityProviderInstancesAliasManagementPermissions = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmIdentityProviderInstancesAliasManagementPermissionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/management/permissions", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.managementPermissionReference = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmIdentityProviderInstancesAliasMappersId - Update a mapper for the identity provider
    **/
    SDK.prototype.putRealmIdentityProviderInstancesAliasMappersId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmIdentityProviderInstancesAliasMappersIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/mappers/{id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmRolesByIdRoleId - Update the role
    **/
    SDK.prototype.putRealmRolesByIdRoleId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmRolesByIdRoleIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmRolesByIdRoleIdManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
    **/
    SDK.prototype.putRealmRolesByIdRoleIdManagementPermissions = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmRolesByIdRoleIdManagementPermissionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}/management/permissions", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.managementPermissionReference = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmRolesRoleName - Update a role by name
    **/
    SDK.prototype.putRealmRolesRoleName = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmRolesRoleNameRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmRolesRoleNameManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
    **/
    SDK.prototype.putRealmRolesRoleNameManagementPermissions = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmRolesRoleNameManagementPermissionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/management/permissions", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.managementPermissionReference = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmUsersId - Update the user
    **/
    SDK.prototype.putRealmUsersId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmUsersIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmUsersIdCredentialsCredentialIdUserLabel - Update a credential label for a user
    **/
    SDK.prototype.putRealmUsersIdCredentialsCredentialIdUserLabel = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmUsersIdCredentialsCredentialIdUserLabelRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/credentials/{credentialId}/userLabel", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmUsersIdDisableCredentialTypes - Disable all credentials for a user of a specific type
    **/
    SDK.prototype.putRealmUsersIdDisableCredentialTypes = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmUsersIdDisableCredentialTypesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/disable-credential-types", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmUsersIdExecuteActionsEmail - Send a update account email to the user   An email contains a link the user can click to perform a set of required actions.
    **/
    SDK.prototype.putRealmUsersIdExecuteActionsEmail = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmUsersIdExecuteActionsEmailRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/execute-actions-email", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.putRealmUsersIdGroupsGroupId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmUsersIdGroupsGroupIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/groups/{groupId}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "put" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmUsersIdResetPassword - Set up a new password for the user.
    **/
    SDK.prototype.putRealmUsersIdResetPassword = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmUsersIdResetPasswordRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/reset-password", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putRealmUsersIdSendVerifyEmail - Send an email-verification email to the user   An email contains a link the user can click to verify their email address.
    **/
    SDK.prototype.putRealmUsersIdSendVerifyEmail = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmUsersIdSendVerifyEmailRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users/{id}/send-verify-email", req.pathParams);
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "put" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.putRealmUsersManagementPermissions = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRealmUsersManagementPermissionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{realm}/users-management-permissions", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
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
                case ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) >= 200 && (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) < 300):
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.managementPermissionReference = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
