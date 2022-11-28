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
var PaymentInitiationServicePis = /** @class */ (function () {
    function PaymentInitiationServicePis(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * cancelPayment - Payment cancellation request
     *
     * This method initiates the cancellation of a payment.
     * Depending on the payment-service, the payment-product and the ASPSP's implementation,
     * this TPP call might be sufficient to cancel a payment.
     * If an authorisation of the payment cancellation is mandated by the ASPSP,
     * a corresponding hyperlink will be contained in the response message.
     *
     * Cancels the addressed payment with resource identification paymentId if applicable to the payment-service, payment-product and received in product related timelines (e.g. before end of business day for scheduled payments of the last business day before the scheduled execution day).
     *
     * The response to this DELETE command will tell the TPP whether the
     *   * access method was rejected,
     *   * access method was successful, or
     *   * access method is generally applicable, but further authorisation processes are needed.
     *
    **/
    PaymentInitiationServicePis.prototype.cancelPayment = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CancelPaymentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}", req.pathParams);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.paymentInitiationCancelResponse202 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgPisCanc = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405PisCanc = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
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
     * getPaymentCancellationScaStatus - Read the SCA status of the payment cancellation's authorisation
     *
     * This method returns the SCA status of a payment initiation's authorisation sub-resource.
     *
    **/
    PaymentInitiationServicePis.prototype.getPaymentCancellationScaStatus = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetPaymentCancellationScaStatusRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations/{authorisationId}", req.pathParams);
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
                        res.error400NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
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
     * getPaymentInformation - Get payment information
     *
     * Returns the content of a payment object
    **/
    PaymentInitiationServicePis.prototype.getPaymentInformation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetPaymentInformationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}", req.pathParams);
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
                        res.getPaymentInformation200ApplicationJsonOneOf = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    if (utils.MatchContentType(contentType, "multipart/form-data")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
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
     * getPaymentInitiationAuthorisation - Get payment initiation authorisation sub-resources request
     *
     * Read a list of all authorisation subresources IDs which have been created.
     *
     * This function returns an array of hyperlinks to all generated authorisation sub-resources.
     *
    **/
    PaymentInitiationServicePis.prototype.getPaymentInitiationAuthorisation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetPaymentInitiationAuthorisationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/authorisations", req.pathParams);
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
                        res.error400NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
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
     * getPaymentInitiationCancellationAuthorisationInformation - Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
     *
     * Retrieve a list of all created cancellation authorisation sub-resources.
     *
    **/
    PaymentInitiationServicePis.prototype.getPaymentInitiationCancellationAuthorisationInformation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetPaymentInitiationCancellationAuthorisationInformationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations", req.pathParams);
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
                        res.error400NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
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
     * getPaymentInitiationScaStatus - Read the SCA status of the payment authorisation
     *
     * This method returns the SCA status of a payment initiation's authorisation sub-resource.
     *
    **/
    PaymentInitiationServicePis.prototype.getPaymentInitiationScaStatus = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetPaymentInitiationScaStatusRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/authorisations/{authorisationId}", req.pathParams);
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
                        res.error400NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
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
     * getPaymentInitiationStatus - Payment initiation status request
     *
     * Check the transaction status of a payment initiation.
    **/
    PaymentInitiationServicePis.prototype.getPaymentInitiationStatus = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetPaymentInitiationStatusRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/status", req.pathParams);
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
                        res.paymentInitiationStatusResponse200Json = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/xml")) {
                        res.paymentInitiationStatusResponse200Xml = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
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
     * initiatePayment - Payment initiation request
     *
     * This method is used to initiate a payment at the ASPSP.
     *
     * ## Variants of payment initiation requests
     *
     * This method to initiate a payment initiation at the ASPSP can be sent with either a JSON body or an pain.001 body depending on the payment product in the path.
     *
     * There are the following **payment products**:
     *
     *   - Payment products with payment information in *JSON* format:
     *     - ***domestic-swiss-credit-transfers-isr***
     *     - ***domestic-swiss-credit-transfers***
     *     - ***domestic-swiss-credit-transfers-qr***
     *     - ***domestic-swiss-foreign-credit-transfers***
     *     - ***swiss-sepa-credit-transfers***
     *     - ***swiss-cross-border-credit-transfers***
     *   - Payment products with payment information in *SIX pain.001* XML format:
     *     - ***pain.001-sepa-credit-transfers***
     *     - ***pain.001-cross-border-credit-transfers***
     *     - ***pain.001-swiss-six-credit-transfers***
     *
     * Furthermore the request body depends on the **payment-service**:
     *   * ***payments***: A single payment initiation request.
     *   * ***bulk-payments***: A collection of several payment initiation requests.
     *
     *     In case of a *pain.001* message there are more than one payments contained in the *pain.001 message.
     *
     *     In case of a *JSON* there are several JSON payment blocks contained in a joining list.
     *   * ***periodic-payments***:
     *     Create a standing order initiation resource for recurrent i.e. periodic payments addressable under {paymentId}
     *      with all data relevant for the corresponding payment product and the execution of the standing order contained in a JSON body.
     *
     * This is the first step in the API to initiate the related recurring/periodic payment.
     *
     * ## Single and mulitilevel SCA Processes
     *
     * The payment initiation requests are independent from the need of one or multilevel
     * SCA processing, i.e. independent from the number of authorisations needed for the execution of payments.
     *
     * But the response messages are specific to either one SCA processing or multilevel SCA processing.
     *
     * For payment initiation with multilevel SCA, this specification requires an explicit start of the authorisation,
     * i.e. links directly associated with SCA processing like 'scaRedirect' or 'scaOAuth' cannot be contained in the
     * response message of a Payment Initation Request for a payment, where multiple authorisations are needed.
     * Also if any data is needed for the next action, like selecting an SCA method is not supported in the response,
     * since all starts of the multiple authorisations are fully equal.
     * In these cases, first an authorisation sub-resource has to be generated following the 'startAuthorisation' link.
     *
    **/
    PaymentInitiationServicePis.prototype.initiatePayment = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.InitiatePaymentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}", req.pathParams);
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
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
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
                        res.paymentInitationRequestResponse201 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
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
     * startPaymentAuthorisation - Start the authorisation process for a payment initiation
     *
     * Create an authorisation sub-resource and start the authorisation process.
     * The message might in addition transmit authentication and authorisation related data.
     *
     * This method is iterated n times for a n times SCA authorisation in a
     * corporate context, each creating an own authorisation sub-endpoint for
     * the corresponding PSU authorising the transaction.
     *
     * The ASPSP might make the usage of this access method unnecessary in case
     * of only one SCA process needed, since the related authorisation resource
     * might be automatically created by the ASPSP after the submission of the
     * payment data with the first POST payments/{payment-product} call.
     *
     * The start authorisation process is a process which is needed for creating a new authorisation
     * or cancellation sub-resource.
     *
     * This applies in the following scenarios:
     *
     *   * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding Payment
     *     initiation response that an explicit start of the authorisation process is needed by the TPP.
     *     The 'startAuthorisation' hyperlink can transport more information about data which needs to be
     *     uploaded by using the extended forms:
     *     * 'startAuthorisationWithPsuIdentfication'
     *     * 'startAuthorisationWithPsuAuthentication'
     *     * 'startAuthorisationWithEncryptedPsuAuthentication'
     *     * 'startAuthorisationWithAuthentciationMethodSelection'
     *   * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
     *   * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding
     *     Payment cancellation response that an explicit start of the authorisation process is needed by the TPP.
     *     The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded
     *     by using the extended forms as indicated above.
     *   * The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for
     *     executing the cancellation.
     *   * The signing basket needs to be authorised yet.
     *
    **/
    PaymentInitiationServicePis.prototype.startPaymentAuthorisation = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StartPaymentAuthorisationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/authorisations", req.pathParams);
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
                        res.error400NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
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
     * startPaymentInitiationCancellationAuthorisation - Start the authorisation process for the cancellation of the addressed payment
     *
     * Creates an authorisation sub-resource and start the authorisation process of the cancellation of the addressed payment.
     * The message might in addition transmit authentication and authorisation related data.
     *
     * This method is iterated n times for a n times SCA authorisation in a
     * corporate context, each creating an own authorisation sub-endpoint for
     * the corresponding PSU authorising the cancellation-authorisation.
     *
     * The ASPSP might make the usage of this access method unnecessary in case
     * of only one SCA process needed, since the related authorisation resource
     * might be automatically created by the ASPSP after the submission of the
     * payment data with the first POST payments/{payment-product} call.
     *
     * The start authorisation process is a process which is needed for creating a new authorisation
     * or cancellation sub-resource.
     *
     * This applies in the following scenarios:
     *
     *   * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding payment
     *     initiation response that an explicit start of the authorisation process is needed by the TPP.
     *     The 'startAuthorisation' hyperlink can transport more information about data which needs to be
     *     uploaded by using the extended forms:
     *     * 'startAuthorisationWithPsuIdentfication'
     *     * 'startAuthorisationWithPsuAuthentication'
     *     * 'startAuthorisationWithAuthentciationMethodSelection'
     *   * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
     *   * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding
     *     payment cancellation response that an explicit start of the authorisation process is needed by the TPP.
     *     The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded
     *     by using the extended forms as indicated above.
     *   * The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for
     *     executing the cancellation.
     *   * The signing basket needs to be authorised yet.
     *
    **/
    PaymentInitiationServicePis.prototype.startPaymentInitiationCancellationAuthorisation = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StartPaymentInitiationCancellationAuthorisationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations", req.pathParams);
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
                        res.error400NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
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
     * updatePaymentCancellationPsuData - Update PSU data for payment initiation cancellation
     *
     * This method updates PSU data on the cancellation authorisation resource if needed.
     * It may authorise a cancellation of the payment within the Embedded SCA Approach where needed.
     *
     * Independently from the SCA Approach it supports e.g. the selection of
     * the authentication method and a non-SCA PSU authentication.
     *
     * There are several possible update PSU data requests in the context of a cancellation authorisation within the payment initiation services needed,
     * which depends on the SCA approach:
     *
     * * Redirect SCA Approach:
     *   A specific Update PSU data request is applicable for
     *     * the selection of authentication methods, before choosing the actual SCA approach.
     * * Decoupled SCA Approach:
     *   A specific Update PSU data request is only applicable for
     *   * adding the PSU Identification, if not provided yet in the payment initiation request or the Account Information Consent Request, or if no OAuth2 access token is used, or
     *   * the selection of authentication methods.
     * * Embedded SCA Approach:
     *   The Update PSU data request might be used
     *   * to add credentials as a first factor authentication data of the PSU and
     *   * to select the authentication method and
     *   * transaction authorisation.
     *
     * The SCA approach might depend on the chosen SCA method.
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
    PaymentInitiationServicePis.prototype.updatePaymentCancellationPsuData = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdatePaymentCancellationPsuDataRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations/{authorisationId}", req.pathParams);
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
                        res.updatePaymentCancellationPsuData200ApplicationJsonOneOf = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
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
     * updatePaymentPsuData - Update PSU data for payment initiation
     *
     * This methods updates PSU data on the authorisation resource if needed.
     * It may authorise a payment within the Embedded SCA Approach where needed.
     *
     * Independently from the SCA Approach it supports e.g. the selection of
     * the authentication method and a non-SCA PSU authentication.
     *
     * There are several possible update PSU data requests in the context of payment initiation services needed,
     * which depends on the SCA approach:
     *
     * * Redirect SCA Approach:
     *   A specific update PSU data request is applicable for
     *     * the selection of authentication methods, before choosing the actual SCA approach.
     * * Decoupled SCA Approach:
     *   A specific update PSU data request is only applicable for
     *   * adding the PSU identification, if not provided yet in the payment initiation request or the account information consent request, or if no OAuth2 access token is used, or
     *   * the selection of authentication methods.
     * * Embedded SCA Approach:
     *   The Update PSU Data request might be used
     *   * to add credentials as a first factor authentication data of the PSU and
     *   * to select the authentication method and
     *   * transaction authorisation.
     *
     * The SCA Approach might depend on the chosen SCA method.
     * For that reason, the following possible Update PSU data request can apply to all SCA approaches:
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
     *   * Transaction authorisation
     *     WARNING: This method needs a reduced header,
     *     therefore many optional elements are not present.
     *     Maybe in a later version the access path will change.
     *
    **/
    PaymentInitiationServicePis.prototype.updatePaymentPsuData = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdatePaymentPsuDataRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/authorisations/{authorisationId}", req.pathParams);
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
                        res.updatePaymentPsuData200ApplicationJsonOneOf = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgPis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Pis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
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
    return PaymentInitiationServicePis;
}());
export { PaymentInitiationServicePis };
