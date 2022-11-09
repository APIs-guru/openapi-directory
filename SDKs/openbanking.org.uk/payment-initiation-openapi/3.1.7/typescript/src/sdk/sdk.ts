import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromRequest} from "../internal/utils/headers";
import {GetHeadersFromResponse} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://openbanking.org.uk",
  "https://openbanking.org.uk/open-banking/v3.1/pisp",
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
  
  // CreateDomesticPaymentConsents - Create Domestic Payment Consents
  CreateDomesticPaymentConsents(
    req: operations.CreateDomesticPaymentConsentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDomesticPaymentConsentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDomesticPaymentConsentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/domestic-payment-consents";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateDomesticPaymentConsentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteDomesticConsentResponse5 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteDomesticConsentResponse5 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
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
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateDomesticPayments - Create Domestic Payments
  CreateDomesticPayments(
    req: operations.CreateDomesticPaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDomesticPaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDomesticPaymentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/domestic-payments";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateDomesticPaymentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteDomesticResponse5 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteDomesticResponse5 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
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
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateDomesticScheduledPaymentConsents - Create Domestic Scheduled Payment Consents
  CreateDomesticScheduledPaymentConsents(
    req: operations.CreateDomesticScheduledPaymentConsentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDomesticScheduledPaymentConsentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDomesticScheduledPaymentConsentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/domestic-scheduled-payment-consents";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateDomesticScheduledPaymentConsentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteDomesticScheduledConsentResponse5 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteDomesticScheduledConsentResponse5 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
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
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateDomesticScheduledPayments - Create Domestic Scheduled Payments
  CreateDomesticScheduledPayments(
    req: operations.CreateDomesticScheduledPaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDomesticScheduledPaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDomesticScheduledPaymentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/domestic-scheduled-payments";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateDomesticScheduledPaymentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteDomesticScheduledResponse5 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteDomesticScheduledResponse5 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
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
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateDomesticStandingOrderConsents - Create Domestic Standing Order Consents
  CreateDomesticStandingOrderConsents(
    req: operations.CreateDomesticStandingOrderConsentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDomesticStandingOrderConsentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDomesticStandingOrderConsentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/domestic-standing-order-consents";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateDomesticStandingOrderConsentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteDomesticStandingOrderConsentResponse6 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteDomesticStandingOrderConsentResponse6 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
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
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateDomesticStandingOrders - Create Domestic Standing Orders
  CreateDomesticStandingOrders(
    req: operations.CreateDomesticStandingOrdersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDomesticStandingOrdersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDomesticStandingOrdersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/domestic-standing-orders";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateDomesticStandingOrdersResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteDomesticStandingOrderResponse6 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteDomesticStandingOrderResponse6 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
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
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateFilePaymentConsents - Create File Payment Consents
  CreateFilePaymentConsents(
    req: operations.CreateFilePaymentConsentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateFilePaymentConsentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateFilePaymentConsentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/file-payment-consents";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateFilePaymentConsentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteFileConsentResponse4 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteFileConsentResponse4 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
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
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateFilePaymentConsentsConsentIdFile - Create File Payment Consents
  CreateFilePaymentConsentsConsentIdFile(
    req: operations.CreateFilePaymentConsentsConsentIdFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateFilePaymentConsentsConsentIdFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateFilePaymentConsentsConsentIdFileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/file-payment-consents/{ConsentId}/file", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateFilePaymentConsentsConsentIdFileResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
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
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateFilePayments - Create File Payments
  CreateFilePayments(
    req: operations.CreateFilePaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateFilePaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateFilePaymentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/file-payments";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateFilePaymentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteFileResponse3 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteFileResponse3 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
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
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateInternationalPaymentConsents - Create International Payment Consents
  CreateInternationalPaymentConsents(
    req: operations.CreateInternationalPaymentConsentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateInternationalPaymentConsentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateInternationalPaymentConsentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/international-payment-consents";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateInternationalPaymentConsentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteInternationalConsentResponse6 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteInternationalConsentResponse6 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
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
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateInternationalPayments - Create International Payments
  CreateInternationalPayments(
    req: operations.CreateInternationalPaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateInternationalPaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateInternationalPaymentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/international-payments";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateInternationalPaymentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteInternationalResponse5 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteInternationalResponse5 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
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
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateInternationalScheduledPaymentConsents - Create International Scheduled Payment Consents
  CreateInternationalScheduledPaymentConsents(
    req: operations.CreateInternationalScheduledPaymentConsentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateInternationalScheduledPaymentConsentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateInternationalScheduledPaymentConsentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/international-scheduled-payment-consents";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateInternationalScheduledPaymentConsentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteInternationalScheduledConsentResponse6 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteInternationalScheduledConsentResponse6 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
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
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateInternationalScheduledPayments - Create International Scheduled Payments
  CreateInternationalScheduledPayments(
    req: operations.CreateInternationalScheduledPaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateInternationalScheduledPaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateInternationalScheduledPaymentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/international-scheduled-payments";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateInternationalScheduledPaymentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteInternationalScheduledResponse6 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteInternationalScheduledResponse6 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
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
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateInternationalStandingOrderConsents - Create International Standing Order Consents
  CreateInternationalStandingOrderConsents(
    req: operations.CreateInternationalStandingOrderConsentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateInternationalStandingOrderConsentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateInternationalStandingOrderConsentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/international-standing-order-consents";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateInternationalStandingOrderConsentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteInternationalStandingOrderConsentResponse7 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteInternationalStandingOrderConsentResponse7 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
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
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateInternationalStandingOrders - Create International Standing Orders
  CreateInternationalStandingOrders(
    req: operations.CreateInternationalStandingOrdersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateInternationalStandingOrdersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateInternationalStandingOrdersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/international-standing-orders";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.CreateInternationalStandingOrdersResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteInternationalStandingOrderResponse7 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteInternationalStandingOrderResponse7 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
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
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDomesticPaymentConsentsConsentId - Get Domestic Payment Consents
  GetDomesticPaymentConsentsConsentId(
    req: operations.GetDomesticPaymentConsentsConsentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDomesticPaymentConsentsConsentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDomesticPaymentConsentsConsentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/domestic-payment-consents/{ConsentId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDomesticPaymentConsentsConsentIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteDomesticConsentResponse5 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteDomesticConsentResponse5 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDomesticPaymentConsentsConsentIdFundsConfirmation - Get Domestic Payment Consents Funds Confirmation
  GetDomesticPaymentConsentsConsentIdFundsConfirmation(
    req: operations.GetDomesticPaymentConsentsConsentIdFundsConfirmationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDomesticPaymentConsentsConsentIdFundsConfirmationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/domestic-payment-consents/{ConsentId}/funds-confirmation", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteFundsConfirmationResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteFundsConfirmationResponse1 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDomesticPaymentsDomesticPaymentId - Get Domestic Payments
  GetDomesticPaymentsDomesticPaymentId(
    req: operations.GetDomesticPaymentsDomesticPaymentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDomesticPaymentsDomesticPaymentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDomesticPaymentsDomesticPaymentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/domestic-payments/{DomesticPaymentId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDomesticPaymentsDomesticPaymentIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteDomesticResponse5 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteDomesticResponse5 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDomesticPaymentsDomesticPaymentIdPaymentDetails - Get Payment Details
  GetDomesticPaymentsDomesticPaymentIdPaymentDetails(
    req: operations.GetDomesticPaymentsDomesticPaymentIdPaymentDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDomesticPaymentsDomesticPaymentIdPaymentDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDomesticPaymentsDomesticPaymentIdPaymentDetailsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/domestic-payments/{DomesticPaymentId}/payment-details", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDomesticPaymentsDomesticPaymentIdPaymentDetailsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWritePaymentDetailsResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWritePaymentDetailsResponse1 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDomesticScheduledPaymentConsentsConsentId - Get Domestic Scheduled Payment Consents
  GetDomesticScheduledPaymentConsentsConsentId(
    req: operations.GetDomesticScheduledPaymentConsentsConsentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDomesticScheduledPaymentConsentsConsentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDomesticScheduledPaymentConsentsConsentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/domestic-scheduled-payment-consents/{ConsentId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDomesticScheduledPaymentConsentsConsentIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteDomesticScheduledConsentResponse5 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteDomesticScheduledConsentResponse5 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDomesticScheduledPaymentsDomesticScheduledPaymentId - Get Domestic Scheduled Payments
  GetDomesticScheduledPaymentsDomesticScheduledPaymentId(
    req: operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/domestic-scheduled-payments/{DomesticScheduledPaymentId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteDomesticScheduledResponse5 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteDomesticScheduledResponse5 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails - Get Payment Details
  GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails(
    req: operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/domestic-scheduled-payments/{DomesticScheduledPaymentId}/payment-details", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWritePaymentDetailsResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWritePaymentDetailsResponse1 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDomesticStandingOrderConsentsConsentId - Get Domestic Standing Order Consents
  GetDomesticStandingOrderConsentsConsentId(
    req: operations.GetDomesticStandingOrderConsentsConsentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDomesticStandingOrderConsentsConsentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDomesticStandingOrderConsentsConsentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/domestic-standing-order-consents/{ConsentId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDomesticStandingOrderConsentsConsentIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteDomesticStandingOrderConsentResponse6 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteDomesticStandingOrderConsentResponse6 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDomesticStandingOrdersDomesticStandingOrderId - Get Domestic Standing Orders
  GetDomesticStandingOrdersDomesticStandingOrderId(
    req: operations.GetDomesticStandingOrdersDomesticStandingOrderIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDomesticStandingOrdersDomesticStandingOrderIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDomesticStandingOrdersDomesticStandingOrderIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/domestic-standing-orders/{DomesticStandingOrderId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDomesticStandingOrdersDomesticStandingOrderIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteDomesticStandingOrderResponse6 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteDomesticStandingOrderResponse6 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails - Get Payment Details
  GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails(
    req: operations.GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/domestic-standing-orders/{DomesticStandingOrderId}/payment-details", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWritePaymentDetailsResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWritePaymentDetailsResponse1 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFilePaymentConsentsConsentId - Get File Payment Consents
  GetFilePaymentConsentsConsentId(
    req: operations.GetFilePaymentConsentsConsentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFilePaymentConsentsConsentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFilePaymentConsentsConsentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/file-payment-consents/{ConsentId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFilePaymentConsentsConsentIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteFileConsentResponse4 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteFileConsentResponse4 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFilePaymentConsentsConsentIdFile - Get File Payment Consents
  GetFilePaymentConsentsConsentIdFile(
    req: operations.GetFilePaymentConsentsConsentIdFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFilePaymentConsentsConsentIdFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFilePaymentConsentsConsentIdFileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/file-payment-consents/{ConsentId}/file", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFilePaymentConsentsConsentIdFileResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.file = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.file = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFilePaymentsFilePaymentId - Get File Payments
  GetFilePaymentsFilePaymentId(
    req: operations.GetFilePaymentsFilePaymentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFilePaymentsFilePaymentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFilePaymentsFilePaymentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/file-payments/{FilePaymentId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFilePaymentsFilePaymentIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteFileResponse3 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteFileResponse3 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFilePaymentsFilePaymentIdPaymentDetails - Get Payment Details
  GetFilePaymentsFilePaymentIdPaymentDetails(
    req: operations.GetFilePaymentsFilePaymentIdPaymentDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFilePaymentsFilePaymentIdPaymentDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFilePaymentsFilePaymentIdPaymentDetailsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/file-payments/{FilePaymentId}/payment-details", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFilePaymentsFilePaymentIdPaymentDetailsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWritePaymentDetailsResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWritePaymentDetailsResponse1 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFilePaymentsFilePaymentIdReportFile - Get File Payments
  GetFilePaymentsFilePaymentIdReportFile(
    req: operations.GetFilePaymentsFilePaymentIdReportFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFilePaymentsFilePaymentIdReportFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFilePaymentsFilePaymentIdReportFileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/file-payments/{FilePaymentId}/report-file", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFilePaymentsFilePaymentIdReportFileResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.file = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.file = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInternationalPaymentConsentsConsentId - Get International Payment Consents
  GetInternationalPaymentConsentsConsentId(
    req: operations.GetInternationalPaymentConsentsConsentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInternationalPaymentConsentsConsentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInternationalPaymentConsentsConsentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/international-payment-consents/{ConsentId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInternationalPaymentConsentsConsentIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteInternationalConsentResponse6 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteInternationalConsentResponse6 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInternationalPaymentConsentsConsentIdFundsConfirmation - Get International Payment Consents Funds Confirmation
  GetInternationalPaymentConsentsConsentIdFundsConfirmation(
    req: operations.GetInternationalPaymentConsentsConsentIdFundsConfirmationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInternationalPaymentConsentsConsentIdFundsConfirmationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInternationalPaymentConsentsConsentIdFundsConfirmationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/international-payment-consents/{ConsentId}/funds-confirmation", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInternationalPaymentConsentsConsentIdFundsConfirmationResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteFundsConfirmationResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteFundsConfirmationResponse1 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInternationalPaymentsInternationalPaymentId - Get International Payments
  GetInternationalPaymentsInternationalPaymentId(
    req: operations.GetInternationalPaymentsInternationalPaymentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInternationalPaymentsInternationalPaymentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInternationalPaymentsInternationalPaymentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/international-payments/{InternationalPaymentId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInternationalPaymentsInternationalPaymentIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteInternationalResponse5 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteInternationalResponse5 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInternationalPaymentsInternationalPaymentIdPaymentDetails - Get Payment Details
  GetInternationalPaymentsInternationalPaymentIdPaymentDetails(
    req: operations.GetInternationalPaymentsInternationalPaymentIdPaymentDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInternationalPaymentsInternationalPaymentIdPaymentDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInternationalPaymentsInternationalPaymentIdPaymentDetailsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/international-payments/{InternationalPaymentId}/payment-details", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInternationalPaymentsInternationalPaymentIdPaymentDetailsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWritePaymentDetailsResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWritePaymentDetailsResponse1 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInternationalScheduledPaymentConsentsConsentId - Get International Scheduled Payment Consents
  GetInternationalScheduledPaymentConsentsConsentId(
    req: operations.GetInternationalScheduledPaymentConsentsConsentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInternationalScheduledPaymentConsentsConsentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInternationalScheduledPaymentConsentsConsentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/international-scheduled-payment-consents/{ConsentId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInternationalScheduledPaymentConsentsConsentIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteInternationalScheduledConsentResponse6 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteInternationalScheduledConsentResponse6 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmation - Get International Scheduled Payment Consents Funds Confirmation
  GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmation(
    req: operations.GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/international-scheduled-payment-consents/{ConsentId}/funds-confirmation", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteFundsConfirmationResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteFundsConfirmationResponse1 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInternationalScheduledPaymentsInternationalScheduledPaymentId - Get International Scheduled Payments
  GetInternationalScheduledPaymentsInternationalScheduledPaymentId(
    req: operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/international-scheduled-payments/{InternationalScheduledPaymentId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteInternationalScheduledResponse6 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteInternationalScheduledResponse6 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails - Get Payment Details
  GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails(
    req: operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/international-scheduled-payments/{InternationalScheduledPaymentId}/payment-details", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWritePaymentDetailsResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWritePaymentDetailsResponse1 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInternationalStandingOrderConsentsConsentId - Get International Standing Order Consents
  GetInternationalStandingOrderConsentsConsentId(
    req: operations.GetInternationalStandingOrderConsentsConsentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInternationalStandingOrderConsentsConsentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInternationalStandingOrderConsentsConsentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/international-standing-order-consents/{ConsentId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInternationalStandingOrderConsentsConsentIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteInternationalStandingOrderConsentResponse7 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteInternationalStandingOrderConsentResponse7 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInternationalStandingOrdersInternationalStandingOrderPaymentId - Get International Standing Orders
  GetInternationalStandingOrdersInternationalStandingOrderPaymentId(
    req: operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/international-standing-orders/{InternationalStandingOrderPaymentId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWriteInternationalStandingOrderResponse7 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWriteInternationalStandingOrderResponse7 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails - Get Payment Details
  GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails(
    req: operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/international-standing-orders/{InternationalStandingOrderPaymentId}/payment-details", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obWritePaymentDetailsResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obWritePaymentDetailsResponse1 = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 429:
            break;
          case 500:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
