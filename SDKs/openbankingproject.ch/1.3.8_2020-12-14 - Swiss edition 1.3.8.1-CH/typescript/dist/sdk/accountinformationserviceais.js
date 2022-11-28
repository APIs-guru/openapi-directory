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
var AccountInformationServiceAis = /** @class */ (function () {
    function AccountInformationServiceAis(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * createConsent - Create consent
     *
     * This method create a consent resource, defining access rights to dedicated accounts of
     * a given PSU-ID. These accounts are addressed explicitly in the method as
     * parameters as a core function.
     *
     * **Side Effects**
     * When this consent request is a request where the "recurringIndicator" equals "true",
     * and if it exists already a former consent for recurring access on account information
     * for the addressed PSU, then the former consent automatically expires as soon as the new
     * consent request is authorised by the PSU.
     *
     * Optional Extension:
     * As an option, an ASPSP might optionally accept a specific access right on the access on all PSD2 related services for all available accounts.
     *
     * As another option an ASPSP might optionally also accept a command, where only access rights are inserted without mentioning the addressed account.
     * The relation to accounts is then handled afterwards between PSU and ASPSP.
     * This option is not supported for the Embedded SCA Approach.
     * As a last option, an ASPSP might in addition accept a command with access rights
     *   * to see the list of available payment accounts or
     *   * to see the list of available payment accounts with balances.
     *
    **/
    AccountInformationServiceAis.prototype.createConsent = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateConsentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v1/consents";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.consentsResponse201 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error406NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error406Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error429NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error429Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteConsent - Delete Consent
     *
     * The TPP can delete an account information consent object if needed.
    **/
    AccountInformationServiceAis.prototype.deleteConsent = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteConsentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/consents/{consentId}", req.pathParams);
        var client = this._securityClient;
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "delete", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error406NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error406Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error429NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error429Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getAccountList - Read account list
     *
     * Read the identifiers of the available payment account together with
     * booking balance information, depending on the consent granted.
     *
     * It is assumed that a consent of the PSU to this access is already given and stored on the ASPSP system.
     * The addressed list of accounts depends then on the PSU ID and the stored consent addressed by consentId,
     * respectively the OAuth2 access token.
     *
     * Returns all identifiers of the accounts, to which an account access has been granted to through
     * the /consents endpoint by the PSU.
     * In addition, relevant information about the accounts and hyperlinks to corresponding account
     * information resources are provided if a related consent has been already granted.
     *
     * Remark: Note that the /consents endpoint optionally offers to grant an access on all available
     * payment accounts of a PSU.
     * In this case, this endpoint will deliver the information about all available payment accounts
     * of the PSU at this ASPSP.
     *
    **/
    AccountInformationServiceAis.prototype.getAccountList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAccountListRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v1/accounts";
        var client = this._securityClient;
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.accountList = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error406NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error406Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error429NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error429Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getBalances - Read balance
     *
     * Reads account data from a given account addressed by "account-id".
     *
     * **Remark:** This account-id can be a tokenised identification due to data protection reason since the path
     * information might be logged on intermediary servers within the ASPSP sphere.
     * This account-id then can be retrieved by the "Get account list" call.
     *
     * The account-id is constant at least throughout the lifecycle of a given consent.
     *
    **/
    AccountInformationServiceAis.prototype.getBalances = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetBalancesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/accounts/{account-id}/balances", req.pathParams);
        var client = this._securityClient;
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.readAccountBalanceResponse200 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error406NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error406Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error429NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error429Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsentAuthorisation - Get consent authorisation sub-resources request
     *
     * Return a list of all authorisation subresources IDs which have been created.
     *
     * This function returns an array of hyperlinks to all generated authorisation sub-resources.
     *
    **/
    AccountInformationServiceAis.prototype.getConsentAuthorisation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsentAuthorisationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/consents/{consentId}/authorisations", req.pathParams);
        var client = this._securityClient;
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.authorisations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error406NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error406Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error429NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error429Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsentInformation - Get consent request
     *
     * Returns the content of an account information consent object.
     * This is returning the data for the TPP especially in cases,
     * where the consent was directly managed between ASPSP and PSU e.g. in a redirect SCA Approach.
     *
    **/
    AccountInformationServiceAis.prototype.getConsentInformation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsentInformationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/consents/{consentId}", req.pathParams);
        var client = this._securityClient;
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.consentInformationResponse200Json = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error406NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error406Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error429NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error429Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsentScaStatus - Read the SCA status of the consent authorisation
     *
     * This method returns the SCA status of a consent initiation's authorisation sub-resource.
     *
    **/
    AccountInformationServiceAis.prototype.getConsentScaStatus = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsentScaStatusRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/consents/{consentId}/authorisations/{authorisationId}", req.pathParams);
        var client = this._securityClient;
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.scaStatusResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error406NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error406Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error429NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error429Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsentStatus - Consent status request
     *
     * Read the status of an account information consent resource.
    **/
    AccountInformationServiceAis.prototype.getConsentStatus = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsentStatusRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/consents/{consentId}/status", req.pathParams);
        var client = this._securityClient;
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.consentStatusResponse200 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error406NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error406Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error429NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error429Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTransactionDetails - Read transaction details
     *
     * Reads transaction details from a given transaction addressed by "transactionId" on a given account addressed by "account-id".
     * This call is only available on transactions as reported in a JSON format.
     *
     * **Remark:** Please note that the PATH might be already given in detail by the corresponding entry of the response of the
     * "Read Transaction List" call within the _links subfield.
     *
    **/
    AccountInformationServiceAis.prototype.getTransactionDetails = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTransactionDetailsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/accounts/{account-id}/transactions/{transactionId}", req.pathParams);
        var client = this._securityClient;
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.getTransactionDetails200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error406NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error406Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error429NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error429Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTransactionList - Read transaction list of an account
     *
     * Read transaction reports or transaction lists of a given account ddressed by "account-id", depending on the steering parameter
     * "bookingStatus" together with balances.
     *
     * For a given account, additional parameters are e.g. the attributes "dateFrom" and "dateTo".
     * The ASPSP might add balance information, if transaction lists without balances are not supported.
     *
    **/
    AccountInformationServiceAis.prototype.getTransactionList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTransactionListRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/accounts/{account-id}/transactions", req.pathParams);
        var client = this._securityClient;
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.transactionsResponse200Json = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "text/plain")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error406NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error406Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error429NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error429Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * readAccountDetails - Read account details
     *
     * Reads details about an account, with balances where required.
     * It is assumed that a consent of the PSU to
     * this access is already given and stored on the ASPSP system.
     * The addressed details of this account depends then on the stored consent addressed by consentId,
     * respectively the OAuth2 access token.
     *
     * **NOTE:** The account-id can represent a multicurrency account.
     * In this case the currency code is set to "XXX".
     *
     * Give detailed information about the addressed account.
     *
     * Give detailed information about the addressed account together with balance information
     *
    **/
    AccountInformationServiceAis.prototype.readAccountDetails = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReadAccountDetailsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/accounts/{account-id}", req.pathParams);
        var client = this._securityClient;
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.readAccountDetails200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error406NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error406Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error429NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error429Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * startConsentAuthorisation - Start the authorisation process for a consent
     *
     * Create an authorisation sub-resource and start the authorisation process of a consent.
     * The message might in addition transmit authentication and authorisation related data.
     *
     * his method is iterated n times for a n times SCA authorisation in a
     * corporate context, each creating an own authorisation sub-endpoint for
     * the corresponding PSU authorising the consent.
     *
     * The ASPSP might make the usage of this access method unnecessary,
     * since the related authorisation resource will be automatically created by
     * the ASPSP after the submission of the consent data with the first POST consents call.
     *
     * The start authorisation process is a process which is needed for creating a new authorisation
     * or cancellation sub-resource.
     *
     * This applies in the following scenarios:
     *
     *   * The ASPSP has indicated with an 'startAuthorisation' hyperlink in the preceding Payment
     *     initiation response that an explicit start of the authorisation process is needed by the TPP.
     *     The 'startAuthorisation' hyperlink can transport more information about data which needs to be
     *     uploaded by using the extended forms:
     *     * 'startAuthorisationWithPsuIdentfication',
     *     * 'startAuthorisationWithPsuAuthentication'
     *     * 'startAuthorisationWithEncryptedPsuAuthentication'
     *     * 'startAuthorisationWithAuthentciationMethodSelection'
     *   * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
     *   * The ASPSP has indicated with an 'startAuthorisation' hyperlink in the preceding
     *     payment cancellation response that an explicit start of the authorisation process is needed by the TPP.
     *     The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded
     *     by using the extended forms as indicated above.
     *   * The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for
     *     executing the cancellation.
     *   * The signing basket needs to be authorised yet.
     *
    **/
    AccountInformationServiceAis.prototype.startConsentAuthorisation = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StartConsentAuthorisationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/consents/{consentId}/authorisations", req.pathParams);
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.startScaprocessResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error406NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error406Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error429NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error429Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * updateConsentsPsuData - Update PSU Data for consents
     *
     * This method update PSU data on the consents  resource if needed.
     * It may authorise a consent within the Embedded SCA Approach where needed.
     *
     * Independently from the SCA Approach it supports e.g. the selection of
     * the authentication method and a non-SCA PSU authentication.
     *
     * There are several possible update PSU data requests in the context of a consent request if needed,
     * which depends on the SCA approach:
     *
     * * Redirect SCA Approach:
     *   A specific Update PSU data request is applicable for
     *     * the selection of authentication methods, before choosing the actual SCA approach.
     * * Decoupled SCA Approach:
     *   A specific update PSU data request is only applicable for
     *   * adding the PSU Identification, if not provided yet in the payment initiation request or the Account Information Consent Request, or if no OAuth2 access token is used, or
     *   * the selection of authentication methods.
     * * Embedded SCA Approach:
     *   The Update PSU data request might be used
     *   * to add credentials as a first factor authentication data of the PSU and
     *   * to select the authentication method and
     *   * transaction authorisation.
     *
     * The SCA Approach might depend on the chosen SCA method.
     * For that reason, the following possible update PSU data request can apply to all SCA approaches:
     *
     * * Select an SCA method in case of several SCA methods are available for the customer.
     *
     * There are the following request types on this access path:
     *   * Update PSU identification
     *   * Update PSU authentication
     *   * Select PSU autorization method
     *     WARNING: This method needs a reduced header,
     *     therefore many optional elements are not present.
     *     Maybe in a later version the access path will change.
     *   * Transaction Authorisation
     *     WARNING: This method needs a reduced header,
     *     therefore many optional elements are not present.
     *     Maybe in a later version the access path will change.
     *
    **/
    AccountInformationServiceAis.prototype.updateConsentsPsuData = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateConsentsPsuDataRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/consents/{consentId}/authorisations/{authorisationId}", req.pathParams);
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.updateConsentsPsuData200ApplicationJsonOneOf = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error406NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error406Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error429NgAis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error429Ais = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return AccountInformationServiceAis;
}());
export { AccountInformationServiceAis };
