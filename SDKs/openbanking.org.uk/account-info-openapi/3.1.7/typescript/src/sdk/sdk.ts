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

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://openbanking.org.uk",
  "https://openbanking.org.uk/open-banking/v3.1/aisp",
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
  
  // CreateAccountAccessConsents - Create Account Access Consents
  CreateAccountAccessConsents(
    req: operations.CreateAccountAccessConsentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAccountAccessConsentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAccountAccessConsentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/account-access-consents";
    
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
        let res: operations.CreateAccountAccessConsentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadConsentResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadConsentResponse1 = httpRes?.data;
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

  
  // DeleteAccountAccessConsentsConsentId - Delete Account Access Consents
  DeleteAccountAccessConsentsConsentId(
    req: operations.DeleteAccountAccessConsentsConsentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAccountAccessConsentsConsentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAccountAccessConsentsConsentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/account-access-consents/{ConsentId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteAccountAccessConsentsConsentIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
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

  
  // GetAccountAccessConsentsConsentId - Get Account Access Consents
  GetAccountAccessConsentsConsentId(
    req: operations.GetAccountAccessConsentsConsentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountAccessConsentsConsentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountAccessConsentsConsentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/account-access-consents/{ConsentId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountAccessConsentsConsentIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadConsentResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadConsentResponse1 = httpRes?.data;
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

  
  // GetAccounts - Get Accounts
  GetAccounts(
    req: operations.GetAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/accounts";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadAccount6 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadAccount6 = httpRes?.data;
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

  
  // GetAccountsAccountId - Get Accounts
  GetAccountsAccountId(
    req: operations.GetAccountsAccountIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{AccountId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountsAccountIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadAccount6 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadAccount6 = httpRes?.data;
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

  
  // GetAccountsAccountIdBalances - Get Balances
  GetAccountsAccountIdBalances(
    req: operations.GetAccountsAccountIdBalancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdBalancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdBalancesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{AccountId}/balances", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountsAccountIdBalancesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadBalance1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadBalance1 = httpRes?.data;
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

  
  // GetAccountsAccountIdBeneficiaries - Get Beneficiaries
  GetAccountsAccountIdBeneficiaries(
    req: operations.GetAccountsAccountIdBeneficiariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdBeneficiariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdBeneficiariesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{AccountId}/beneficiaries", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountsAccountIdBeneficiariesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadBeneficiary5 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadBeneficiary5 = httpRes?.data;
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

  
  // GetAccountsAccountIdDirectDebits - Get Direct Debits
  GetAccountsAccountIdDirectDebits(
    req: operations.GetAccountsAccountIdDirectDebitsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdDirectDebitsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdDirectDebitsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{AccountId}/direct-debits", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountsAccountIdDirectDebitsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadDirectDebit2 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadDirectDebit2 = httpRes?.data;
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

  
  // GetAccountsAccountIdOffers - Get Offers
  GetAccountsAccountIdOffers(
    req: operations.GetAccountsAccountIdOffersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdOffersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdOffersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{AccountId}/offers", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountsAccountIdOffersResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadOffer1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadOffer1 = httpRes?.data;
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

  
  // GetAccountsAccountIdParties - Get Parties
  GetAccountsAccountIdParties(
    req: operations.GetAccountsAccountIdPartiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdPartiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdPartiesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{AccountId}/parties", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountsAccountIdPartiesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadParty3 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadParty3 = httpRes?.data;
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

  
  // GetAccountsAccountIdParty - Get Parties
  GetAccountsAccountIdParty(
    req: operations.GetAccountsAccountIdPartyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdPartyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdPartyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{AccountId}/party", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountsAccountIdPartyResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadParty2 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadParty2 = httpRes?.data;
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

  
  // GetAccountsAccountIdProduct - Get Products
  GetAccountsAccountIdProduct(
    req: operations.GetAccountsAccountIdProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdProductRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{AccountId}/product", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountsAccountIdProductResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadProduct2 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadProduct2 = httpRes?.data;
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

  
  // GetAccountsAccountIdScheduledPayments - Get Scheduled Payments
  GetAccountsAccountIdScheduledPayments(
    req: operations.GetAccountsAccountIdScheduledPaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdScheduledPaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdScheduledPaymentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{AccountId}/scheduled-payments", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountsAccountIdScheduledPaymentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadScheduledPayment3 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadScheduledPayment3 = httpRes?.data;
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

  
  // GetAccountsAccountIdStandingOrders - Get Standing Orders
  GetAccountsAccountIdStandingOrders(
    req: operations.GetAccountsAccountIdStandingOrdersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdStandingOrdersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdStandingOrdersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{AccountId}/standing-orders", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountsAccountIdStandingOrdersResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadStandingOrder6 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadStandingOrder6 = httpRes?.data;
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

  
  // GetAccountsAccountIdStatements - Get Statements
  GetAccountsAccountIdStatements(
    req: operations.GetAccountsAccountIdStatementsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdStatementsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdStatementsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{AccountId}/statements", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
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
        let res: operations.GetAccountsAccountIdStatementsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadStatement2 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadStatement2 = httpRes?.data;
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

  
  // GetAccountsAccountIdStatementsStatementId - Get Statements
  GetAccountsAccountIdStatementsStatementId(
    req: operations.GetAccountsAccountIdStatementsStatementIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdStatementsStatementIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdStatementsStatementIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{AccountId}/statements/{StatementId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountsAccountIdStatementsStatementIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadStatement2 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadStatement2 = httpRes?.data;
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

  
  // GetAccountsAccountIdStatementsStatementIdFile - Get Statements
  GetAccountsAccountIdStatementsStatementIdFile(
    req: operations.GetAccountsAccountIdStatementsStatementIdFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdStatementsStatementIdFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdStatementsStatementIdFileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{AccountId}/statements/{StatementId}/file", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountsAccountIdStatementsStatementIdFileResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
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

  
  // GetAccountsAccountIdStatementsStatementIdTransactions - Get Transactions
  GetAccountsAccountIdStatementsStatementIdTransactions(
    req: operations.GetAccountsAccountIdStatementsStatementIdTransactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdStatementsStatementIdTransactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdStatementsStatementIdTransactionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{AccountId}/statements/{StatementId}/transactions", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountsAccountIdStatementsStatementIdTransactionsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadTransaction6 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadTransaction6 = httpRes?.data;
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

  
  // GetAccountsAccountIdTransactions - Get Transactions
  GetAccountsAccountIdTransactions(
    req: operations.GetAccountsAccountIdTransactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdTransactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdTransactionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{AccountId}/transactions", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
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
        let res: operations.GetAccountsAccountIdTransactionsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadTransaction6 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadTransaction6 = httpRes?.data;
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

  
  // GetBalances - Get Balances
  GetBalances(
    req: operations.GetBalancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBalancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBalancesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/balances";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
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
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadBalance1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadBalance1 = httpRes?.data;
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

  
  // GetBeneficiaries - Get Beneficiaries
  GetBeneficiaries(
    req: operations.GetBeneficiariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBeneficiariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBeneficiariesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/beneficiaries";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetBeneficiariesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadBeneficiary5 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadBeneficiary5 = httpRes?.data;
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

  
  // GetDirectDebits - Get Direct Debits
  GetDirectDebits(
    req: operations.GetDirectDebitsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDirectDebitsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDirectDebitsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/direct-debits";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDirectDebitsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadDirectDebit2 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadDirectDebit2 = httpRes?.data;
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

  
  // GetOffers - Get Offers
  GetOffers(
    req: operations.GetOffersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOffersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOffersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/offers";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetOffersResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadOffer1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadOffer1 = httpRes?.data;
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

  
  // GetParty - Get Parties
  GetParty(
    req: operations.GetPartyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPartyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPartyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/party";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPartyResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadParty2 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadParty2 = httpRes?.data;
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

  
  // GetProducts - Get Products
  GetProducts(
    req: operations.GetProductsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProductsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/products";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProductsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadProduct2 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadProduct2 = httpRes?.data;
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

  
  // GetScheduledPayments - Get Scheduled Payments
  GetScheduledPayments(
    req: operations.GetScheduledPaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetScheduledPaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetScheduledPaymentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/scheduled-payments";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetScheduledPaymentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadScheduledPayment3 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadScheduledPayment3 = httpRes?.data;
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

  
  // GetStandingOrders - Get Standing Orders
  GetStandingOrders(
    req: operations.GetStandingOrdersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStandingOrdersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStandingOrdersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/standing-orders";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetStandingOrdersResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadStandingOrder6 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadStandingOrder6 = httpRes?.data;
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

  
  // GetStatements - Get Statements
  GetStatements(
    req: operations.GetStatementsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStatementsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStatementsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/statements";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
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
        let res: operations.GetStatementsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadStatement2 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadStatement2 = httpRes?.data;
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

  
  // GetTransactions - Get Transactions
  GetTransactions(
    req: operations.GetTransactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTransactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTransactionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/transactions";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
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
        let res: operations.GetTransactionsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/jose+jwe`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadTransaction6 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadTransaction6 = httpRes?.data;
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
