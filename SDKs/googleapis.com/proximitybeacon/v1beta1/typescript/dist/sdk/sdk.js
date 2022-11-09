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
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
var Servers = [
    "https://proximitybeacon.googleapis.com/",
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
// SDK Documentation: https://developers.google.com/beacons/proximity/
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
    // ProximitybeaconBeaconinfoGetforobserved - Given one or more beacon observations, returns any beacon information and attachments accessible to your application. Authorize by using the [API key](https://developers.google.com/beacons/proximity/get-started#request_a_browser_api_key) for the application.
    SDK.prototype.ProximitybeaconBeaconinfoGetforobserved = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProximitybeaconBeaconinfoGetforobservedRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v1beta1/beaconinfo:getforobserved";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .post(url, body, __assign({ headers: headers }, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getInfoForObservedBeaconsResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProximitybeaconBeaconsActivate - Activates a beacon. A beacon that is active will return information and attachment data when queried via `beaconinfo.getforobserved`. Calling this method on an already active beacon will do nothing (but will return a successful response code). Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
    SDK.prototype.ProximitybeaconBeaconsActivate = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProximitybeaconBeaconsActivateRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1beta1/{beaconName}:activate", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .post(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.empty = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProximitybeaconBeaconsAttachmentsBatchDelete - Deletes multiple attachments on a given beacon. This operation is permanent and cannot be undone. You can optionally specify `namespacedType` to choose which attachments should be deleted. If you do not specify `namespacedType`, all your attachments on the given beacon will be deleted. You also may explicitly specify `*/*` to delete all. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
    SDK.prototype.ProximitybeaconBeaconsAttachmentsBatchDelete = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProximitybeaconBeaconsAttachmentsBatchDeleteRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1beta1/{beaconName}/attachments:batchDelete", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .post(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.deleteAttachmentsResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProximitybeaconBeaconsAttachmentsCreate - Associates the given data with the specified beacon. Attachment data must contain two parts: - A namespaced type. - The actual attachment data itself. The namespaced type consists of two parts, the namespace and the type. The namespace must be one of the values returned by the `namespaces` endpoint, while the type can be a string of any characters except for the forward slash (`/`) up to 100 characters in length. Attachment data can be up to 1024 bytes long. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
    SDK.prototype.ProximitybeaconBeaconsAttachmentsCreate = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProximitybeaconBeaconsAttachmentsCreateRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1beta1/{beaconName}/attachments", req.pathParams);
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
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .post(url, body, __assign({ headers: headers }, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.beaconAttachment = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProximitybeaconBeaconsAttachmentsDelete - Deletes the specified attachment for the given beacon. Each attachment has a unique attachment name (`attachmentName`) which is returned when you fetch the attachment data via this API. You specify this with the delete request to control which attachment is removed. This operation cannot be undone. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
    SDK.prototype.ProximitybeaconBeaconsAttachmentsDelete = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProximitybeaconBeaconsAttachmentsDeleteRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1beta1/{attachmentName}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .delete(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.empty = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProximitybeaconBeaconsAttachmentsList - Returns the attachments for the specified beacon that match the specified namespaced-type pattern. To control which namespaced types are returned, you add the `namespacedType` query parameter to the request. You must either use `*/*`, to return all attachments, or the namespace must be one of the ones returned from the `namespaces` endpoint. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.
    SDK.prototype.ProximitybeaconBeaconsAttachmentsList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProximitybeaconBeaconsAttachmentsListRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1beta1/{beaconName}/attachments", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.listBeaconAttachmentsResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProximitybeaconBeaconsDeactivate - Deactivates a beacon. Once deactivated, the API will not return information nor attachment data for the beacon when queried via `beaconinfo.getforobserved`. Calling this method on an already inactive beacon will do nothing (but will return a successful response code). Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
    SDK.prototype.ProximitybeaconBeaconsDeactivate = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProximitybeaconBeaconsDeactivateRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1beta1/{beaconName}:deactivate", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .post(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.empty = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProximitybeaconBeaconsDecommission - Decommissions the specified beacon in the service. This beacon will no longer be returned from `beaconinfo.getforobserved`. This operation is permanent -- you will not be able to re-register a beacon with this ID again. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
    SDK.prototype.ProximitybeaconBeaconsDecommission = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProximitybeaconBeaconsDecommissionRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1beta1/{beaconName}:decommission", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .post(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.empty = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProximitybeaconBeaconsDelete - Deletes the specified beacon including all diagnostics data for the beacon as well as any attachments on the beacon (including those belonging to other projects). This operation cannot be undone. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
    SDK.prototype.ProximitybeaconBeaconsDelete = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProximitybeaconBeaconsDeleteRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1beta1/{beaconName}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .delete(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.empty = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProximitybeaconBeaconsDiagnosticsList - List the diagnostics for a single beacon. You can also list diagnostics for all the beacons owned by your Google Developers Console project by using the beacon name `beacons/-`. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.
    SDK.prototype.ProximitybeaconBeaconsDiagnosticsList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProximitybeaconBeaconsDiagnosticsListRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1beta1/{beaconName}/diagnostics", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.listDiagnosticsResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProximitybeaconBeaconsGet - Returns detailed information about the specified beacon. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project. Requests may supply an Eddystone-EID beacon name in the form: `beacons/4!beaconId` where the `beaconId` is the base16 ephemeral ID broadcast by the beacon. The returned `Beacon` object will contain the beacon's stable Eddystone-UID. Clients not authorized to resolve the beacon's ephemeral Eddystone-EID broadcast will receive an error.
    SDK.prototype.ProximitybeaconBeaconsGet = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProximitybeaconBeaconsGetRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1beta1/{beaconName}", req.pathParams);
        var client = CreateSecurityClient(this.defaultClient, req.security);
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.beacon = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProximitybeaconBeaconsList - Searches the beacon registry for beacons that match the given search criteria. Only those beacons that the client has permission to list will be returned. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.
    SDK.prototype.ProximitybeaconBeaconsList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProximitybeaconBeaconsListRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v1beta1/beacons";
        var client = CreateSecurityClient(this.defaultClient, req.security);
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.listBeaconsResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProximitybeaconBeaconsRegister - Registers a previously unregistered beacon given its `advertisedId`. These IDs are unique within the system. An ID can be registered only once. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
    SDK.prototype.ProximitybeaconBeaconsRegister = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProximitybeaconBeaconsRegisterRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v1beta1/beacons:register";
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
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .post(url, body, __assign({ headers: headers }, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.beacon = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProximitybeaconBeaconsUpdate - Updates the information about the specified beacon. **Any field that you do not populate in the submitted beacon will be permanently erased**, so you should follow the "read, modify, write" pattern to avoid inadvertently destroying data. Changes to the beacon status via this method will be silently ignored. To update beacon status, use the separate methods on this API for activation, deactivation, and decommissioning. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
    SDK.prototype.ProximitybeaconBeaconsUpdate = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProximitybeaconBeaconsUpdateRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1beta1/{beaconName}", req.pathParams);
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
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .put(url, body, __assign({ headers: headers }, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.beacon = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProximitybeaconGetEidparams - Gets the Proximity Beacon API's current public key and associated parameters used to initiate the Diffie-Hellman key exchange required to register a beacon that broadcasts the Eddystone-EID format. This key changes periodically; clients may cache it and re-use the same public key to provision and register multiple beacons. However, clients should be prepared to refresh this key when they encounter an error registering an Eddystone-EID beacon.
    SDK.prototype.ProximitybeaconGetEidparams = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProximitybeaconGetEidparamsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v1beta1/eidparams";
        var client = CreateSecurityClient(this.defaultClient, req.security);
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.ephemeralIdRegistrationParams = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProximitybeaconNamespacesList - Lists all attachment namespaces owned by your Google Developers Console project. Attachment data associated with a beacon must include a namespaced type, and the namespace must be owned by your project. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.
    SDK.prototype.ProximitybeaconNamespacesList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProximitybeaconNamespacesListRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v1beta1/namespaces";
        var client = CreateSecurityClient(this.defaultClient, req.security);
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.listNamespacesResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ProximitybeaconNamespacesUpdate - Updates the information about the specified namespace. Only the namespace visibility can be updated.
    SDK.prototype.ProximitybeaconNamespacesUpdate = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProximitybeaconNamespacesUpdateRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1beta1/{namespaceName}", req.pathParams);
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
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .put(url, body, __assign({ headers: headers }, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.namespace = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
