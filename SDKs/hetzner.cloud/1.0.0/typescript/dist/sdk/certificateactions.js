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
var CertificateActions = /** @class */ (function () {
    function CertificateActions(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * getCertificatesIdActions - Get all Actions for a Certificate
     *
     * Returns all Action objects for a Certificate. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
     *
     * Only type `managed` Certificates can have Actions. For type `uploaded` Certificates the `actions` key will always contain an empty array.
     *
    **/
    CertificateActions.prototype.getCertificatesIdActions = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCertificatesIdActionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/certificates/{id}/actions", req.pathParams);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.actionsResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCertificatesIdActionsActionId - Get an Action for a Certificate
     *
     * Returns a specific Action for a Certificate. Only type `managed` Certificates have Actions.
    **/
    CertificateActions.prototype.getCertificatesIdActionsActionId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCertificatesIdActionsActionIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/certificates/{id}/actions/{action_id}", req.pathParams);
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
                        res.actionResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postCertificatesIdActionsRetry - Retry Issuance or Renewal
     *
     * Retry a failed Certificate issuance or renewal.
     *
     * Only applicable if the type of the Certificate is `managed` and the issuance or renewal status is `failed`.
     *
     * #### Call specific error codes
     *
     * | Code                                                    | Description                                                               |
     * |---------------------------------------------------------|---------------------------------------------------------------------------|
     * | `caa_record_does_not_allow_ca`                          | CAA record does not allow certificate authority                           |
     * | `ca_dns_validation_failed`                              | Certificate Authority: DNS validation failed                              |
     * | `ca_too_many_authorizations_failed_recently`            | Certificate Authority: Too many authorizations failed recently            |
     * | `ca_too_many_certificates_issued_for_registered_domain` | Certificate Authority: Too many certificates issued for registered domain |
     * | `ca_too_many_duplicate_certificates`                    | Certificate Authority: Too many duplicate certificates                    |
     * | `could_not_verify_domain_delegated_to_zone`             | Could not verify domain delegated to zone                                 |
     * | `dns_zone_not_found`                                    | DNS zone not found                                                        |
     * | `dns_zone_is_secondary_zone`                            | DNS zone is a secondary zone                                              |
     *
    **/
    CertificateActions.prototype.postCertificatesIdActionsRetry = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostCertificatesIdActionsRetryRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/certificates/{id}/actions/retry", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.actionResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return CertificateActions;
}());
export { CertificateActions };
