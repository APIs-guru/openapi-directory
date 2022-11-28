import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class CommonServices {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
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
  deleteSigningBasket(
    req: operations.DeleteSigningBasketRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSigningBasketResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSigningBasketRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/signing-baskets/{basketId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSigningBasketResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error400NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error400Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error401NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error401Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error403NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error403Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error404NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error404Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 405:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error405NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error405Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error409NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error409Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getConsentScaStatus - Read the SCA status of the consent authorisation
   *
   * This method returns the SCA status of a consent initiation's authorisation sub-resource.
   * 
  **/
  getConsentScaStatus(
    req: operations.GetConsentScaStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConsentScaStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConsentScaStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/consents/{consentId}/authorisations/{authorisationId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetConsentScaStatusResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scaStatusResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error400NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error400Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error401NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error401Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error403NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error403Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error404NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error404Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 405:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error405NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error405Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error406NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error406Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error409NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error409Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            break;
          case httpRes?.status == 429:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error429NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error429Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPaymentCancellationScaStatus - Read the SCA status of the payment cancellation's authorisation
   *
   * This method returns the SCA status of a payment initiation's authorisation sub-resource.
   * 
  **/
  getPaymentCancellationScaStatus(
    req: operations.GetPaymentCancellationScaStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentCancellationScaStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentCancellationScaStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations/{authorisationId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPaymentCancellationScaStatusResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scaStatusResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error400NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error400Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error401NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error401Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error403NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error403Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error404NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error404Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 405:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error405NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error405Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error409NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error409Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPaymentInitiationAuthorisation - Get payment initiation authorisation sub-resources request
   *
   * Read a list of all authorisation subresources IDs which have been created.
   * 
   * This function returns an array of hyperlinks to all generated authorisation sub-resources.
   * 
  **/
  getPaymentInitiationAuthorisation(
    req: operations.GetPaymentInitiationAuthorisationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentInitiationAuthorisationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentInitiationAuthorisationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/authorisations", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPaymentInitiationAuthorisationResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authorisations = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error400NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error400Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error401NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error401Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error403NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error403Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error404NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error404Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 405:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error405NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error405Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error409NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error409Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPaymentInitiationScaStatus - Read the SCA status of the payment authorisation
   *
   * This method returns the SCA status of a payment initiation's authorisation sub-resource.
   * 
  **/
  getPaymentInitiationScaStatus(
    req: operations.GetPaymentInitiationScaStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentInitiationScaStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentInitiationScaStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/authorisations/{authorisationId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPaymentInitiationScaStatusResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scaStatusResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error400NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error400Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error401NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error401Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error403NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error403Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error404NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error404Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 405:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error405NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error405Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error409NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error409Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSigningBasketAuthorisation - Get signing basket authorisation sub-resources request
   *
   * Read a list of all authorisation subresources IDs which have been created.
   * 
   * This function returns an array of hyperlinks to all generated authorisation sub-resources.
   * 
  **/
  getSigningBasketAuthorisation(
    req: operations.GetSigningBasketAuthorisationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSigningBasketAuthorisationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSigningBasketAuthorisationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/signing-baskets/{basketId}/authorisations", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSigningBasketAuthorisationResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authorisations = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error400NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error400Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error401NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error401Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error403NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error403Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error404NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error404Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 405:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error405NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error405Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error409NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error409Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSigningBasketScaStatus - Read the SCA status of the signing basket authorisation
   *
   * This method returns the SCA status of a signing basket's authorisation sub-resource.
   * 
  **/
  getSigningBasketScaStatus(
    req: operations.GetSigningBasketScaStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSigningBasketScaStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSigningBasketScaStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/signing-baskets/{basketId}/authorisations/{authorisationId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSigningBasketScaStatusResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scaStatusResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error400NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error400Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error401NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error401Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error403NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error403Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error404NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error404Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 405:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error405NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error405Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error409NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error409Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSigningBasketStatus - Read the status of the signing basket
   *
   * Returns the status of a signing basket object.
   * 
  **/
  getSigningBasketStatus(
    req: operations.GetSigningBasketStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSigningBasketStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSigningBasketStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/signing-baskets/{basketId}/status", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSigningBasketStatusResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.signingBasketStatusResponse200 = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error400NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error400Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error401NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error401Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error403NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error403Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error404NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error404Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 405:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error405NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error405Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error409NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error409Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  startConsentAuthorisation(
    req: operations.StartConsentAuthorisationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StartConsentAuthorisationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StartConsentAuthorisationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/consents/{consentId}/authorisations", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StartConsentAuthorisationResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.startScaprocessResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error400NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error400Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error401NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error401Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error403NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error403Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error404NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error404Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 405:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error405NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error405Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error406NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error406Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error409NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error409Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            break;
          case httpRes?.status == 429:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error429NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error429Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  startPaymentAuthorisation(
    req: operations.StartPaymentAuthorisationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StartPaymentAuthorisationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StartPaymentAuthorisationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/authorisations", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StartPaymentAuthorisationResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.startScaprocessResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error400NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error400Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error401NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error401Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error403NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error403Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error404NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error404Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 405:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error405NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error405Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error409NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error409Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  startPaymentInitiationCancellationAuthorisation(
    req: operations.StartPaymentInitiationCancellationAuthorisationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StartPaymentInitiationCancellationAuthorisationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StartPaymentInitiationCancellationAuthorisationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StartPaymentInitiationCancellationAuthorisationResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.startScaprocessResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error400NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error400Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error401NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error401Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error403NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error403Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error404NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error404Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 405:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error405NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error405Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error409NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error409Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  startSigningBasketAuthorisation(
    req: operations.StartSigningBasketAuthorisationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StartSigningBasketAuthorisationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StartSigningBasketAuthorisationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/signing-baskets/{basketId}/authorisations", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StartSigningBasketAuthorisationResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.startScaprocessResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error400NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error400Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error401NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error401Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error403NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error403Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error404NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error404Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 405:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error405NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error405Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error409NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error409Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  updateConsentsPsuData(
    req: operations.UpdateConsentsPsuDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConsentsPsuDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConsentsPsuDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/consents/{consentId}/authorisations/{authorisationId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateConsentsPsuDataResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateConsentsPsuData200ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error400NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error400Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error401NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error401Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error403NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error403Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error404NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error404Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 405:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error405NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error405Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error406NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error406Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error409NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error409Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            break;
          case httpRes?.status == 429:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error429NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error429Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  updatePaymentCancellationPsuData(
    req: operations.UpdatePaymentCancellationPsuDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePaymentCancellationPsuDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePaymentCancellationPsuDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations/{authorisationId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdatePaymentCancellationPsuDataResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updatePaymentCancellationPsuData200ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error400NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error400Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error401NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error401Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error403NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error403Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error404NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error404Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 405:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error405NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error405Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error409NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error409Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  updatePaymentPsuData(
    req: operations.UpdatePaymentPsuDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePaymentPsuDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePaymentPsuDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/authorisations/{authorisationId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdatePaymentPsuDataResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updatePaymentPsuData200ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error400NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error400Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error401NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error401Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error403NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error403Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error404NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error404Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 405:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error405NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error405Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error409NgPis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error409Pis = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  updateSigningBasketPsuData(
    req: operations.UpdateSigningBasketPsuDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSigningBasketPsuDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSigningBasketPsuDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/signing-baskets/{basketId}/authorisations/{authorisationId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateSigningBasketPsuDataResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateSigningBasketPsuData200ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error400NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error400Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error401NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error401Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error403NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error403Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error404NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error404Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 405:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error405NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error405Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error409NgSbs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error409Sbs = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
