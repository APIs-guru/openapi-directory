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
var SigningBasketsServiceSbs = /** @class */ (function () {
    function SigningBasketsServiceSbs(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * createSigningBasket - Create a signing basket resource
     *
     * Create a signing basket resource for authorising several transactions with one SCA method.
     * The resource identifications of these transactions are contained in the payload of this access method
     *
    **/
    SigningBasketsServiceSbs.prototype.createSigningBasket = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateSigningBasketRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v1/signing-baskets";
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
                        res.signingBasketResponse201 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * deleteSigningBasket - Delete the signing basket
     *
     * Delete the signing basket structure as long as no (partial) authorisation has yet been applied.
     * The undlerying transactions are not affected by this deletion.
     *
     * Remark: The signing basket as such is not deletable after a first (partial) authorisation has been applied.
     * Nevertheless, single transactions might be cancelled on an individual basis on the XS2A interface.
     *
    **/
    SigningBasketsServiceSbs.prototype.deleteSigningBasket = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteSigningBasketRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/signing-baskets/{basketId}", req.pathParams);
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
                        res.error400NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * getSigningBasket - Returns the content of an signing basket object
     *
     * Returns the content of a signing basket object.
    **/
    SigningBasketsServiceSbs.prototype.getSigningBasket = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSigningBasketRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/signing-baskets/{basketId}", req.pathParams);
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
                        res.signingBasketResponse200 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * getSigningBasketAuthorisation - Get signing basket authorisation sub-resources request
     *
     * Read a list of all authorisation subresources IDs which have been created.
     *
     * This function returns an array of hyperlinks to all generated authorisation sub-resources.
     *
    **/
    SigningBasketsServiceSbs.prototype.getSigningBasketAuthorisation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSigningBasketAuthorisationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/signing-baskets/{basketId}/authorisations", req.pathParams);
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
                        res.error400NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * getSigningBasketScaStatus - Read the SCA status of the signing basket authorisation
     *
     * This method returns the SCA status of a signing basket's authorisation sub-resource.
     *
    **/
    SigningBasketsServiceSbs.prototype.getSigningBasketScaStatus = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSigningBasketScaStatusRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/signing-baskets/{basketId}/authorisations/{authorisationId}", req.pathParams);
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
                        res.error400NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * getSigningBasketStatus - Read the status of the signing basket
     *
     * Returns the status of a signing basket object.
     *
    **/
    SigningBasketsServiceSbs.prototype.getSigningBasketStatus = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSigningBasketStatusRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/signing-baskets/{basketId}/status", req.pathParams);
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
                        res.signingBasketStatusResponse200 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * startSigningBasketAuthorisation - Start the authorisation process for a signing basket
     *
     * Create an authorisation sub-resource and start the authorisation process of a signing basket.
     * The message might in addition transmit authentication and authorisation related data.
     *
     * This method is iterated n times for a n times SCA authorisation in a
     * corporate context, each creating an own authorisation sub-endpoint for
     * the corresponding PSU authorising the signing-baskets.
     *
     * The ASPSP might make the usage of this access method unnecessary in case
     * of only one SCA process needed, since the related authorisation resource
     * might be automatically created by the ASPSP after the submission of the
     * payment data with the first POST signing basket call.
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
     *     * 'startAuthorisationWithPsuIdentfication',
     *     * 'startAuthorisationWithPsuAuthentication'
     *     * 'startAuthorisationWithEncryptedPsuAuthentication'
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
    SigningBasketsServiceSbs.prototype.startSigningBasketAuthorisation = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StartSigningBasketAuthorisationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/signing-baskets/{basketId}/authorisations", req.pathParams);
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
                        res.error400NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * updateSigningBasketPsuData - Update PSU data for signing basket
     *
     * This method update PSU data on the signing basket resource if needed.
     * It may authorise a igning basket within the embedded SCA approach where needed.
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
     *   A specific Update PSU data request is only applicable for
     *   * adding the PSU Identification, if not provided yet in the payment initiation request or the account information consent request, or if no OAuth2 access token is used, or
     *   * the selection of authentication methods.
     * * Embedded SCA Approach:
     *   The update PSU data request might be used
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
     *   * Select PSU autorization Method
     *     WARNING: This method needs a reduced header,
     *     therefore many optional elements are not present.
     *     Maybe in a later version the access path will change.
     *   * Transaction Authorisation
     *     WARNING: This method needs a reduced header,
     *     therefore many optional elements are not present.
     *     Maybe in a later version the access path will change.
     *
    **/
    SigningBasketsServiceSbs.prototype.updateSigningBasketPsuData = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateSigningBasketPsuDataRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/signing-baskets/{basketId}/authorisations/{authorisationId}", req.pathParams);
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
                        res.updateSigningBasketPsuData200ApplicationJsonOneOf = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error400NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error400Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error401NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error401Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error403NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error403Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error404NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error404Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error405NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error405Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 408:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error409NgSbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/problem+json")) {
                        res.error409Sbs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
    return SigningBasketsServiceSbs;
}());
export { SigningBasketsServiceSbs };
