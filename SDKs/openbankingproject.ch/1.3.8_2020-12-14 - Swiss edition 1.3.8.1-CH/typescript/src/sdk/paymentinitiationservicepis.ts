import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class PaymentInitiationServicePis {
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
  cancelPayment(
    req: operations.CancelPaymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelPaymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelPaymentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}", req.pathParams);
    
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
        const res: operations.CancelPaymentResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.paymentInitiationCancelResponse202 = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
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
                res.error405NgPisCanc = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error405PisCanc = httpRes?.data;
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
   * getPaymentInformation - Get payment information
   *
   * Returns the content of a payment object
  **/
  getPaymentInformation(
    req: operations.GetPaymentInformationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentInformationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentInformationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}", req.pathParams);
    
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
        const res: operations.GetPaymentInformationResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPaymentInformation200ApplicationJsonOneOf = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.MatchContentType(contentType, `multipart/form-data`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
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
   * getPaymentInitiationCancellationAuthorisationInformation - Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
   *
   * Retrieve a list of all created cancellation authorisation sub-resources.
   * 
  **/
  getPaymentInitiationCancellationAuthorisationInformation(
    req: operations.GetPaymentInitiationCancellationAuthorisationInformationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentInitiationCancellationAuthorisationInformationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentInitiationCancellationAuthorisationInformationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations", req.pathParams);
    
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
        const res: operations.GetPaymentInitiationCancellationAuthorisationInformationResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
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
   * getPaymentInitiationStatus - Payment initiation status request
   *
   * Check the transaction status of a payment initiation.
  **/
  getPaymentInitiationStatus(
    req: operations.GetPaymentInitiationStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentInitiationStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentInitiationStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/status", req.pathParams);
    
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
        const res: operations.GetPaymentInitiationStatusResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.paymentInitiationStatusResponse200Json = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/xml`)) {
                res.paymentInitiationStatusResponse200Xml = JSON.stringify(httpRes?.data);
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
  initiatePayment(
    req: operations.InitiatePaymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InitiatePaymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InitiatePaymentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}", req.pathParams);

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.InitiatePaymentResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.paymentInitationRequestResponse201 = httpRes?.data;
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

}
