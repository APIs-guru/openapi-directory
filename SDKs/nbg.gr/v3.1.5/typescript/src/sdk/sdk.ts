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
  "https://apis.nbg.gr/sandbox/uk.openbanking.accountinfo/oauth2/v3.1.5",
  "https://services.nbg.gr/apis/open-banking/v3.1.5/aisp",
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
  
  // DeleteAccountAccessConsentsConsentId - Delete Account Access Consents
  /** 
   * Delete Account Access Consents by Consent ID
  **/
  DeleteAccountAccessConsentsConsentId(
    req: operations.DeleteAccountAccessConsentsConsentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAccountAccessConsentsConsentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAccountAccessConsentsConsentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/account-access-consents/{consentId}", req.pathParams);
    
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
          case 500:
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

  
  // DeleteSandboxSandboxId - Delete Sandbox
  /** 
   * Delete Sandbox
  **/
  DeleteSandboxSandboxId(
    req: operations.DeleteSandboxSandboxIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSandboxSandboxIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSandboxSandboxIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/sandbox/{sandboxId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSandboxSandboxIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAccountAccessConsentsConsentId - Get Account Access Consents
  /** 
   * Get Account Access Consents by Consent ID
  **/
  GetAccountAccessConsentsConsentId(
    req: operations.GetAccountAccessConsentsConsentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountAccessConsentsConsentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountAccessConsentsConsentIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/account-access-consents/{consentId}", req.pathParams);
    
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
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadConsentResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadConsentResponse1 = httpRes?.data;
            }
            break;
          case 400:
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
          case 500:
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
  /** 
   * Get Accounts
  **/
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
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadAccount5 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadAccount5 = httpRes?.data;
            }
            break;
          case 400:
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
          case 500:
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
  /** 
   * Get Accounts by Account ID
  **/
  GetAccountsAccountId(
    req: operations.GetAccountsAccountIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}", req.pathParams);
    
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
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadAccount5 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadAccount5 = httpRes?.data;
            }
            break;
          case 400:
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
          case 500:
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
  /** 
   * Get Balances by Account ID
  **/
  GetAccountsAccountIdBalances(
    req: operations.GetAccountsAccountIdBalancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdBalancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdBalancesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/balances", req.pathParams);
    
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
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadBalance1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadBalance1 = httpRes?.data;
            }
            break;
          case 400:
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
          case 500:
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
  /** 
   * Get Beneficiaries by Account ID
  **/
  GetAccountsAccountIdBeneficiaries(
    req: operations.GetAccountsAccountIdBeneficiariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdBeneficiariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdBeneficiariesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/beneficiaries", req.pathParams);
    
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
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadBeneficiary5 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadBeneficiary5 = httpRes?.data;
            }
            break;
          case 400:
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
          case 500:
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
  /** 
   * Get Parties by Account ID
  **/
  GetAccountsAccountIdParties(
    req: operations.GetAccountsAccountIdPartiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdPartiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdPartiesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/parties", req.pathParams);
    
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
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadParty3 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadParty3 = httpRes?.data;
            }
            break;
          case 400:
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
          case 500:
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

  
  // GetAccountsAccountIdParty - Get Party
  /** 
   * Get Party by Account ID
  **/
  GetAccountsAccountIdParty(
    req: operations.GetAccountsAccountIdPartyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdPartyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdPartyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/party", req.pathParams);
    
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
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadParty2 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadParty2 = httpRes?.data;
            }
            break;
          case 400:
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
          case 500:
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
  /** 
   * Get Scheduled Payments by Account ID
  **/
  GetAccountsAccountIdScheduledPayments(
    req: operations.GetAccountsAccountIdScheduledPaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdScheduledPaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdScheduledPaymentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/scheduled-payments", req.pathParams);
    
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
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadScheduledPayment3 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadScheduledPayment3 = httpRes?.data;
            }
            break;
          case 400:
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
          case 500:
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
  /** 
   * Get Standing Orders by Account ID
  **/
  GetAccountsAccountIdStandingOrders(
    req: operations.GetAccountsAccountIdStandingOrdersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdStandingOrdersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdStandingOrdersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/standing-orders", req.pathParams);
    
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
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadStandingOrder6 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadStandingOrder6 = httpRes?.data;
            }
            break;
          case 400:
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
          case 500:
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
  /** 
   * Get Statements by Account ID
  **/
  GetAccountsAccountIdStatements(
    req: operations.GetAccountsAccountIdStatementsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdStatementsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdStatementsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/statements", req.pathParams);
    
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
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadStatement2 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadStatement2 = httpRes?.data;
            }
            break;
          case 400:
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
          case 500:
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
  /** 
   * Get Statements by Account ID and Statement ID
  **/
  GetAccountsAccountIdStatementsStatementId(
    req: operations.GetAccountsAccountIdStatementsStatementIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdStatementsStatementIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdStatementsStatementIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/statements/{statementId}", req.pathParams);
    
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
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadStatement2 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadStatement2 = httpRes?.data;
            }
            break;
          case 400:
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
          case 500:
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
  /** 
   * Get Statement PDF File by Account ID and Statement ID
  **/
  GetAccountsAccountIdStatementsStatementIdFile(
    req: operations.GetAccountsAccountIdStatementsStatementIdFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdStatementsStatementIdFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdStatementsStatementIdFileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/statements/{statementId}/file", req.pathParams);
    
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
            if (MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getAccountsAccountIdStatementsStatementIdFile200ApplicationPdfBinaryString = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 500:
            if (MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAccountsAccountIdStatementsStatementIdTransactions - Get Transactions
  /** 
   * Get Transactions by Account ID and Statement ID
  **/
  GetAccountsAccountIdStatementsStatementIdTransactions(
    req: operations.GetAccountsAccountIdStatementsStatementIdTransactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdStatementsStatementIdTransactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdStatementsStatementIdTransactionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/statements/{statementId}/transactions", req.pathParams);
    
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
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadTransaction6 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadTransaction6 = httpRes?.data;
            }
            break;
          case 400:
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
          case 500:
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
  /** 
   * Get Transactions by Account ID
  **/
  GetAccountsAccountIdTransactions(
    req: operations.GetAccountsAccountIdTransactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdTransactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdTransactionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/transactions", req.pathParams);
    
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
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadTransaction6 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadTransaction6 = httpRes?.data;
            }
            break;
          case 400:
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
          case 500:
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

  
  // GetParty - Get Party
  /** 
   * Get Party
  **/
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
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadParty2 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadParty2 = httpRes?.data;
            }
            break;
          case 400:
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
          case 500:
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

  
  // GetSandboxSandboxId - Export Sandbox
  /** 
   * Export Sandbox
  **/
  GetSandboxSandboxId(
    req: operations.GetSandboxSandboxIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSandboxSandboxIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSandboxSandboxIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/sandbox/{sandboxId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSandboxSandboxIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.sandbox = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.sandbox = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostAccountAccessConsents - Create Account Access Consents
  /** 
   * Create Account Access Consents
  **/
  PostAccountAccessConsents(
    req: operations.PostAccountAccessConsentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAccountAccessConsentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAccountAccessConsentsRequest(req);
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
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAccountAccessConsentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.obReadConsentResponse1 = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadConsentResponse1 = httpRes?.data;
            }
            break;
          case 400:
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
          case 500:
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

  
  // PostSandbox - Create Sandbox
  /** 
   * Create Sandbox
  **/
  PostSandbox(
    req: operations.PostSandboxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSandboxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSandboxRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/sandbox";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostSandboxResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.sandbox = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.sandbox = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 415:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutSandbox - Import Sandbox
  /** 
   * Import Sandbox
  **/
  PutSandbox(
    req: operations.PutSandboxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSandboxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSandboxRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/sandbox";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PutSandboxResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 405:
            break;
          case 406:
            break;
          case 415:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
