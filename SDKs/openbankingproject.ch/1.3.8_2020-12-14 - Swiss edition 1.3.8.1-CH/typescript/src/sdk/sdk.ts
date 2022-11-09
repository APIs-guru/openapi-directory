import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromRequest} from "../internal/utils/headers";
import {GetHeadersFromResponse} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://api.dev.openbankingproject.ch",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk.security = security;
  };
}

// SDK Documentation: https://github.com/openbankingproject-ch/obp-apis - Full Documentation of NextGen Access to Account Interoperability Framework
(General Introduction Paper, Operational Rules, Implementation Guidelines)

export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // CancelPayment - Payment cancellation request
  /** 
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
  CancelPayment(
    req: operations.CancelPaymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelPaymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelPaymentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CancelPaymentResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentInitiationCancelResponse202 = httpRes?.data;
            }
            break;
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Pis = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Pis = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Pis = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Pis = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgPisCanc = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405PisCanc = httpRes?.data;
            }
            break;
          case 406:
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Pis = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CheckAvailabilityOfFunds - Confirmation of funds request
  /** 
   * Creates a confirmation of funds request at the ASPSP. Checks whether a specific amount is available at point of time of the request on an account linked to a given tuple card issuer(TPP)/card number, or addressed by IBAN and TPP respectively.
   * If the related extended services are used a conditional Consent-ID is contained in the header. This field is contained but commented out in this specification.
  **/
  CheckAvailabilityOfFunds(
    req: operations.CheckAvailabilityOfFundsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CheckAvailabilityOfFundsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CheckAvailabilityOfFundsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/funds-confirmations";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CheckAvailabilityOfFundsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.checkAvailabilityOfFunds200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Ais = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgPiis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Piis = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgPiis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Piis = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgPiis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Piis = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgPiis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Piis = httpRes?.data;
            }
            break;
          case 406:
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgPiis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Piis = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateConsent - Create consent
  /** 
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
  CreateConsent(
    req: operations.CreateConsentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateConsentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateConsentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/consents";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateConsentResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.consentsResponse201 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Ais = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Ais = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Ais = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Ais = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Ais = httpRes?.data;
            }
            break;
          case 406:
            if (MatchContentType(contentType, `application/json`)) {
                res.error406NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error406Ais = httpRes?.data;
            }
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Ais = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.error429NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error429Ais = httpRes?.data;
            }
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSigningBasket - Create a signing basket resource
  /** 
   * Create a signing basket resource for authorising several transactions with one SCA method. 
   * The resource identifications of these transactions are contained in the payload of this access method
   * 
  **/
  CreateSigningBasket(
    req: operations.CreateSigningBasketRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSigningBasketResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSigningBasketRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/signing-baskets";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateSigningBasketResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.signingBasketResponse201 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Sbs = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Sbs = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Sbs = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Sbs = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Sbs = httpRes?.data;
            }
            break;
          case 406:
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Sbs = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteConsent - Delete Consent
  /** 
   * The TPP can delete an account information consent object if needed.
  **/
  DeleteConsent(
    req: operations.DeleteConsentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteConsentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteConsentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/consents/{consentId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteConsentResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Ais = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Ais = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Ais = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Ais = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Ais = httpRes?.data;
            }
            break;
          case 406:
            if (MatchContentType(contentType, `application/json`)) {
                res.error406NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error406Ais = httpRes?.data;
            }
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Ais = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.error429NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error429Ais = httpRes?.data;
            }
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSigningBasket - Delete the signing basket
  /** 
   * Delete the signing basket structure as long as no (partial) authorisation has yet been applied.
   * The undlerying transactions are not affected by this deletion.
   * 
   * Remark: The signing basket as such is not deletable after a first (partial) authorisation has been applied.
   * Nevertheless, single transactions might be cancelled on an individual basis on the XS2A interface.
   * 
  **/
  DeleteSigningBasket(
    req: operations.DeleteSigningBasketRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSigningBasketResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSigningBasketRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/signing-baskets/{basketId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSigningBasketResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Sbs = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Sbs = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Sbs = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Sbs = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Sbs = httpRes?.data;
            }
            break;
          case 406:
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Sbs = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAccountList - Read account list
  /** 
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
  GetAccountList(
    req: operations.GetAccountListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/accounts";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountListResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.accountList = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Ais = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Ais = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Ais = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Ais = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Ais = httpRes?.data;
            }
            break;
          case 406:
            if (MatchContentType(contentType, `application/json`)) {
                res.error406NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error406Ais = httpRes?.data;
            }
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Ais = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.error429NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error429Ais = httpRes?.data;
            }
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetBalances - Read balance
  /** 
   * Reads account data from a given account addressed by "account-id". 
   * 
   * **Remark:** This account-id can be a tokenised identification due to data protection reason since the path 
   * information might be logged on intermediary servers within the ASPSP sphere. 
   * This account-id then can be retrieved by the "Get account list" call.
   * 
   * The account-id is constant at least throughout the lifecycle of a given consent.
   * 
  **/
  GetBalances(
    req: operations.GetBalancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBalancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBalancesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/accounts/{account-id}/balances", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetBalancesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.readAccountBalanceResponse200 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Ais = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Ais = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Ais = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Ais = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Ais = httpRes?.data;
            }
            break;
          case 406:
            if (MatchContentType(contentType, `application/json`)) {
                res.error406NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error406Ais = httpRes?.data;
            }
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Ais = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.error429NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error429Ais = httpRes?.data;
            }
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetConsentAuthorisation - Get consent authorisation sub-resources request
  /** 
   * Return a list of all authorisation subresources IDs which have been created.
   * 
   * This function returns an array of hyperlinks to all generated authorisation sub-resources.
   * 
  **/
  GetConsentAuthorisation(
    req: operations.GetConsentAuthorisationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConsentAuthorisationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConsentAuthorisationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/consents/{consentId}/authorisations", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetConsentAuthorisationResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.authorisations = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Ais = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Ais = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Ais = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Ais = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Ais = httpRes?.data;
            }
            break;
          case 406:
            if (MatchContentType(contentType, `application/json`)) {
                res.error406NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error406Ais = httpRes?.data;
            }
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Ais = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.error429NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error429Ais = httpRes?.data;
            }
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetConsentInformation - Get consent request
  /** 
   * Returns the content of an account information consent object. 
   * This is returning the data for the TPP especially in cases, 
   * where the consent was directly managed between ASPSP and PSU e.g. in a redirect SCA Approach.
   * 
  **/
  GetConsentInformation(
    req: operations.GetConsentInformationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConsentInformationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConsentInformationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/consents/{consentId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetConsentInformationResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.consentInformationResponse200Json = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Ais = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Ais = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Ais = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Ais = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Ais = httpRes?.data;
            }
            break;
          case 406:
            if (MatchContentType(contentType, `application/json`)) {
                res.error406NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error406Ais = httpRes?.data;
            }
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Ais = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.error429NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error429Ais = httpRes?.data;
            }
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetConsentScaStatus - Read the SCA status of the consent authorisation
  /** 
   * This method returns the SCA status of a consent initiation's authorisation sub-resource.
   * 
  **/
  GetConsentScaStatus(
    req: operations.GetConsentScaStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConsentScaStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConsentScaStatusRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/consents/{consentId}/authorisations/{authorisationId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetConsentScaStatusResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.scaStatusResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Ais = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Ais = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Ais = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Ais = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Ais = httpRes?.data;
            }
            break;
          case 406:
            if (MatchContentType(contentType, `application/json`)) {
                res.error406NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error406Ais = httpRes?.data;
            }
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Ais = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.error429NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error429Ais = httpRes?.data;
            }
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetConsentStatus - Consent status request
  /** 
   * Read the status of an account information consent resource.
  **/
  GetConsentStatus(
    req: operations.GetConsentStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConsentStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConsentStatusRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/consents/{consentId}/status", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetConsentStatusResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.consentStatusResponse200 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Ais = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Ais = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Ais = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Ais = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Ais = httpRes?.data;
            }
            break;
          case 406:
            if (MatchContentType(contentType, `application/json`)) {
                res.error406NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error406Ais = httpRes?.data;
            }
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Ais = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.error429NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error429Ais = httpRes?.data;
            }
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPaymentCancellationScaStatus - Read the SCA status of the payment cancellation's authorisation
  /** 
   * This method returns the SCA status of a payment initiation's authorisation sub-resource.
   * 
  **/
  GetPaymentCancellationScaStatus(
    req: operations.GetPaymentCancellationScaStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentCancellationScaStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentCancellationScaStatusRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations/{authorisationId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPaymentCancellationScaStatusResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.scaStatusResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Pis = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Pis = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Pis = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Pis = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Pis = httpRes?.data;
            }
            break;
          case 406:
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Pis = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPaymentInformation - Get payment information
  /** 
   * Returns the content of a payment object
  **/
  GetPaymentInformation(
    req: operations.GetPaymentInformationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentInformationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentInformationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPaymentInformationResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getPaymentInformation200ApplicationJsonOneOf = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `multipart/form-data`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Pis = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Pis = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Pis = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Pis = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Pis = httpRes?.data;
            }
            break;
          case 406:
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Pis = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPaymentInitiationAuthorisation - Get payment initiation authorisation sub-resources request
  /** 
   * Read a list of all authorisation subresources IDs which have been created.
   * 
   * This function returns an array of hyperlinks to all generated authorisation sub-resources.
   * 
  **/
  GetPaymentInitiationAuthorisation(
    req: operations.GetPaymentInitiationAuthorisationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentInitiationAuthorisationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentInitiationAuthorisationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/authorisations", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPaymentInitiationAuthorisationResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.authorisations = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Pis = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Pis = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Pis = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Pis = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Pis = httpRes?.data;
            }
            break;
          case 406:
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Pis = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPaymentInitiationCancellationAuthorisationInformation - Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
  /** 
   * Retrieve a list of all created cancellation authorisation sub-resources.
   * 
  **/
  GetPaymentInitiationCancellationAuthorisationInformation(
    req: operations.GetPaymentInitiationCancellationAuthorisationInformationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentInitiationCancellationAuthorisationInformationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentInitiationCancellationAuthorisationInformationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPaymentInitiationCancellationAuthorisationInformationResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.authorisations = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Pis = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Pis = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Pis = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Pis = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Pis = httpRes?.data;
            }
            break;
          case 406:
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Pis = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPaymentInitiationScaStatus - Read the SCA status of the payment authorisation
  /** 
   * This method returns the SCA status of a payment initiation's authorisation sub-resource.
   * 
  **/
  GetPaymentInitiationScaStatus(
    req: operations.GetPaymentInitiationScaStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentInitiationScaStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentInitiationScaStatusRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/authorisations/{authorisationId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPaymentInitiationScaStatusResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.scaStatusResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Pis = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Pis = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Pis = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Pis = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Pis = httpRes?.data;
            }
            break;
          case 406:
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Pis = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPaymentInitiationStatus - Payment initiation status request
  /** 
   * Check the transaction status of a payment initiation.
  **/
  GetPaymentInitiationStatus(
    req: operations.GetPaymentInitiationStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentInitiationStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentInitiationStatusRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/status", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPaymentInitiationStatusResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentInitiationStatusResponse200Json = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                res.paymentInitiationStatusResponse200Xml = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Pis = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Pis = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Pis = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Pis = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Pis = httpRes?.data;
            }
            break;
          case 406:
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Pis = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSigningBasket - Returns the content of an signing basket object
  /** 
   * Returns the content of a signing basket object.
  **/
  GetSigningBasket(
    req: operations.GetSigningBasketRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSigningBasketResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSigningBasketRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/signing-baskets/{basketId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSigningBasketResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.signingBasketResponse200 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Sbs = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Sbs = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Sbs = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Sbs = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Sbs = httpRes?.data;
            }
            break;
          case 406:
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Sbs = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSigningBasketAuthorisation - Get signing basket authorisation sub-resources request
  /** 
   * Read a list of all authorisation subresources IDs which have been created.
   * 
   * This function returns an array of hyperlinks to all generated authorisation sub-resources.
   * 
  **/
  GetSigningBasketAuthorisation(
    req: operations.GetSigningBasketAuthorisationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSigningBasketAuthorisationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSigningBasketAuthorisationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/signing-baskets/{basketId}/authorisations", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSigningBasketAuthorisationResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.authorisations = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Sbs = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Sbs = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Sbs = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Sbs = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Sbs = httpRes?.data;
            }
            break;
          case 406:
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Sbs = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSigningBasketScaStatus - Read the SCA status of the signing basket authorisation
  /** 
   * This method returns the SCA status of a signing basket's authorisation sub-resource.
   * 
  **/
  GetSigningBasketScaStatus(
    req: operations.GetSigningBasketScaStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSigningBasketScaStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSigningBasketScaStatusRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/signing-baskets/{basketId}/authorisations/{authorisationId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSigningBasketScaStatusResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.scaStatusResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Sbs = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Sbs = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Sbs = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Sbs = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Sbs = httpRes?.data;
            }
            break;
          case 406:
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Sbs = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSigningBasketStatus - Read the status of the signing basket
  /** 
   * Returns the status of a signing basket object.
   * 
  **/
  GetSigningBasketStatus(
    req: operations.GetSigningBasketStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSigningBasketStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSigningBasketStatusRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/signing-baskets/{basketId}/status", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSigningBasketStatusResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.signingBasketStatusResponse200 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Sbs = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Sbs = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Sbs = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Sbs = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Sbs = httpRes?.data;
            }
            break;
          case 406:
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Sbs = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTransactionDetails - Read transaction details
  /** 
   * Reads transaction details from a given transaction addressed by "transactionId" on a given account addressed by "account-id".
   * This call is only available on transactions as reported in a JSON format.
   * 
   * **Remark:** Please note that the PATH might be already given in detail by the corresponding entry of the response of the
   * "Read Transaction List" call within the _links subfield.
   * 
  **/
  GetTransactionDetails(
    req: operations.GetTransactionDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTransactionDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTransactionDetailsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/accounts/{account-id}/transactions/{transactionId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTransactionDetailsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getTransactionDetails200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Ais = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Ais = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Ais = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Ais = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Ais = httpRes?.data;
            }
            break;
          case 406:
            if (MatchContentType(contentType, `application/json`)) {
                res.error406NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error406Ais = httpRes?.data;
            }
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Ais = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.error429NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error429Ais = httpRes?.data;
            }
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTransactionList - Read transaction list of an account
  /** 
   * Read transaction reports or transaction lists of a given account ddressed by "account-id", depending on the steering parameter
   * "bookingStatus" together with balances.
   * 
   * For a given account, additional parameters are e.g. the attributes "dateFrom" and "dateTo".
   * The ASPSP might add balance information, if transaction lists without balances are not supported.
   * 
  **/
  GetTransactionList(
    req: operations.GetTransactionListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTransactionListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTransactionListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/accounts/{account-id}/transactions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTransactionListResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.transactionsResponse200Json = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Ais = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Ais = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Ais = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Ais = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Ais = httpRes?.data;
            }
            break;
          case 406:
            if (MatchContentType(contentType, `application/json`)) {
                res.error406NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error406Ais = httpRes?.data;
            }
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Ais = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.error429NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error429Ais = httpRes?.data;
            }
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // InitiatePayment - Payment initiation request
  /** 
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
  InitiatePayment(
    req: operations.InitiatePaymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InitiatePaymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InitiatePaymentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.InitiatePaymentResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentInitationRequestResponse201 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Pis = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Pis = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Pis = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Pis = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Pis = httpRes?.data;
            }
            break;
          case 406:
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Pis = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReadAccountDetails - Read account details
  /** 
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
  ReadAccountDetails(
    req: operations.ReadAccountDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReadAccountDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReadAccountDetailsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/accounts/{account-id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReadAccountDetailsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.readAccountDetails200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Ais = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Ais = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Ais = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Ais = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Ais = httpRes?.data;
            }
            break;
          case 406:
            if (MatchContentType(contentType, `application/json`)) {
                res.error406NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error406Ais = httpRes?.data;
            }
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Ais = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.error429NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error429Ais = httpRes?.data;
            }
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StartConsentAuthorisation - Start the authorisation process for a consent
  /** 
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
  StartConsentAuthorisation(
    req: operations.StartConsentAuthorisationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StartConsentAuthorisationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StartConsentAuthorisationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/consents/{consentId}/authorisations", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StartConsentAuthorisationResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.startScaprocessResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Ais = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Ais = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Ais = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Ais = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Ais = httpRes?.data;
            }
            break;
          case 406:
            if (MatchContentType(contentType, `application/json`)) {
                res.error406NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error406Ais = httpRes?.data;
            }
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Ais = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.error429NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error429Ais = httpRes?.data;
            }
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StartPaymentAuthorisation - Start the authorisation process for a payment initiation
  /** 
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
  StartPaymentAuthorisation(
    req: operations.StartPaymentAuthorisationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StartPaymentAuthorisationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StartPaymentAuthorisationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/authorisations", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StartPaymentAuthorisationResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.startScaprocessResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Pis = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Pis = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Pis = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Pis = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Pis = httpRes?.data;
            }
            break;
          case 406:
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Pis = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StartPaymentInitiationCancellationAuthorisation - Start the authorisation process for the cancellation of the addressed payment
  /** 
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
  StartPaymentInitiationCancellationAuthorisation(
    req: operations.StartPaymentInitiationCancellationAuthorisationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StartPaymentInitiationCancellationAuthorisationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StartPaymentInitiationCancellationAuthorisationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StartPaymentInitiationCancellationAuthorisationResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.startScaprocessResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Pis = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Pis = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Pis = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Pis = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Pis = httpRes?.data;
            }
            break;
          case 406:
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Pis = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StartSigningBasketAuthorisation - Start the authorisation process for a signing basket
  /** 
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
  StartSigningBasketAuthorisation(
    req: operations.StartSigningBasketAuthorisationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StartSigningBasketAuthorisationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StartSigningBasketAuthorisationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/signing-baskets/{basketId}/authorisations", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StartSigningBasketAuthorisationResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.startScaprocessResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Sbs = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Sbs = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Sbs = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Sbs = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Sbs = httpRes?.data;
            }
            break;
          case 406:
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Sbs = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateConsentsPsuData - Update PSU Data for consents
  /** 
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
  UpdateConsentsPsuData(
    req: operations.UpdateConsentsPsuDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConsentsPsuDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConsentsPsuDataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/consents/{consentId}/authorisations/{authorisationId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateConsentsPsuDataResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateConsentsPsuData200ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Ais = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Ais = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Ais = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Ais = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Ais = httpRes?.data;
            }
            break;
          case 406:
            if (MatchContentType(contentType, `application/json`)) {
                res.error406NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error406Ais = httpRes?.data;
            }
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Ais = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.error429NgAis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error429Ais = httpRes?.data;
            }
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdatePaymentCancellationPsuData - Update PSU data for payment initiation cancellation
  /** 
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
  UpdatePaymentCancellationPsuData(
    req: operations.UpdatePaymentCancellationPsuDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePaymentCancellationPsuDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePaymentCancellationPsuDataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations/{authorisationId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdatePaymentCancellationPsuDataResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updatePaymentCancellationPsuData200ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Pis = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Pis = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Pis = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Pis = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Pis = httpRes?.data;
            }
            break;
          case 406:
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Pis = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdatePaymentPsuData - Update PSU data for payment initiation
  /** 
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
  UpdatePaymentPsuData(
    req: operations.UpdatePaymentPsuDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePaymentPsuDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePaymentPsuDataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{payment-service}/{payment-product}/{paymentId}/authorisations/{authorisationId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdatePaymentPsuDataResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updatePaymentPsuData200ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Pis = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Pis = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Pis = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Pis = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Pis = httpRes?.data;
            }
            break;
          case 406:
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgPis = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Pis = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSigningBasketPsuData - Update PSU data for signing basket
  /** 
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
  UpdateSigningBasketPsuData(
    req: operations.UpdateSigningBasketPsuDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSigningBasketPsuDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSigningBasketPsuDataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/signing-baskets/{basketId}/authorisations/{authorisationId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateSigningBasketPsuDataResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSigningBasketPsuData200ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error400NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error400Sbs = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.error401NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error401Sbs = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.error403NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error403Sbs = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error404NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error404Sbs = httpRes?.data;
            }
            break;
          case 405:
            if (MatchContentType(contentType, `application/json`)) {
                res.error405NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error405Sbs = httpRes?.data;
            }
            break;
          case 406:
            break;
          case 408:
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error409NgSbs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/problem+json`)) {
                res.error409Sbs = httpRes?.data;
            }
            break;
          case 415:
            break;
          case 429:
            break;
          case 500:
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
