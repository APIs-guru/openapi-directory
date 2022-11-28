import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
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
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
  }
  
  /**
   * deleteAccountAccessConsentsConsentId - Delete Account Access Consents
   *
   * Delete Account Access Consents by Consent ID
  **/
  deleteAccountAccessConsentsConsentId(
    req: operations.DeleteAccountAccessConsentsConsentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAccountAccessConsentsConsentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAccountAccessConsentsConsentIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/account-access-consents/{consentId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.DeleteAccountAccessConsentsConsentIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSandboxSandboxId - Delete Sandbox
   *
   * Delete Sandbox
  **/
  deleteSandboxSandboxId(
    req: operations.DeleteSandboxSandboxIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSandboxSandboxIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSandboxSandboxIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/sandbox/{sandboxId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSandboxSandboxIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccountAccessConsentsConsentId - Get Account Access Consents
   *
   * Get Account Access Consents by Consent ID
  **/
  getAccountAccessConsentsConsentId(
    req: operations.GetAccountAccessConsentsConsentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountAccessConsentsConsentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountAccessConsentsConsentIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/account-access-consents/{consentId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.GetAccountAccessConsentsConsentIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obReadConsentResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadConsentResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccounts - Get Accounts
   *
   * Get Accounts
  **/
  getAccounts(
    req: operations.GetAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/accounts";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.GetAccountsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obReadAccount5 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadAccount5 = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccountsAccountId - Get Accounts
   *
   * Get Accounts by Account ID
  **/
  getAccountsAccountId(
    req: operations.GetAccountsAccountIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.GetAccountsAccountIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obReadAccount5 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadAccount5 = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccountsAccountIdBalances - Get Balances
   *
   * Get Balances by Account ID
  **/
  getAccountsAccountIdBalances(
    req: operations.GetAccountsAccountIdBalancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdBalancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdBalancesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/balances", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.GetAccountsAccountIdBalancesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obReadBalance1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadBalance1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccountsAccountIdBeneficiaries - Get Beneficiaries
   *
   * Get Beneficiaries by Account ID
  **/
  getAccountsAccountIdBeneficiaries(
    req: operations.GetAccountsAccountIdBeneficiariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdBeneficiariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdBeneficiariesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/beneficiaries", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.GetAccountsAccountIdBeneficiariesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obReadBeneficiary5 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadBeneficiary5 = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccountsAccountIdParties - Get Parties
   *
   * Get Parties by Account ID
  **/
  getAccountsAccountIdParties(
    req: operations.GetAccountsAccountIdPartiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdPartiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdPartiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/parties", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.GetAccountsAccountIdPartiesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obReadParty3 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadParty3 = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccountsAccountIdParty - Get Party
   *
   * Get Party by Account ID
  **/
  getAccountsAccountIdParty(
    req: operations.GetAccountsAccountIdPartyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdPartyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdPartyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/party", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.GetAccountsAccountIdPartyResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obReadParty2 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadParty2 = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccountsAccountIdScheduledPayments - Get Scheduled Payments
   *
   * Get Scheduled Payments by Account ID
  **/
  getAccountsAccountIdScheduledPayments(
    req: operations.GetAccountsAccountIdScheduledPaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdScheduledPaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdScheduledPaymentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/scheduled-payments", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.GetAccountsAccountIdScheduledPaymentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obReadScheduledPayment3 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadScheduledPayment3 = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccountsAccountIdStandingOrders - Get Standing Orders
   *
   * Get Standing Orders by Account ID
  **/
  getAccountsAccountIdStandingOrders(
    req: operations.GetAccountsAccountIdStandingOrdersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdStandingOrdersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdStandingOrdersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/standing-orders", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.GetAccountsAccountIdStandingOrdersResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obReadStandingOrder6 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadStandingOrder6 = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccountsAccountIdStatements - Get Statements
   *
   * Get Statements by Account ID
  **/
  getAccountsAccountIdStatements(
    req: operations.GetAccountsAccountIdStatementsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdStatementsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdStatementsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/statements", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAccountsAccountIdStatementsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obReadStatement2 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadStatement2 = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccountsAccountIdStatementsStatementId - Get Statements
   *
   * Get Statements by Account ID and Statement ID
  **/
  getAccountsAccountIdStatementsStatementId(
    req: operations.GetAccountsAccountIdStatementsStatementIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdStatementsStatementIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdStatementsStatementIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/statements/{statementId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.GetAccountsAccountIdStatementsStatementIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obReadStatement2 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadStatement2 = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccountsAccountIdStatementsStatementIdFile - Get Statements
   *
   * Get Statement PDF File by Account ID and Statement ID
  **/
  getAccountsAccountIdStatementsStatementIdFile(
    req: operations.GetAccountsAccountIdStatementsStatementIdFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdStatementsStatementIdFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdStatementsStatementIdFileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/statements/{statementId}/file", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.GetAccountsAccountIdStatementsStatementIdFileResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getAccountsAccountIdStatementsStatementIdFile200ApplicationPdfBinaryString = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/pdf`)) {
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

  
  /**
   * getAccountsAccountIdStatementsStatementIdTransactions - Get Transactions
   *
   * Get Transactions by Account ID and Statement ID
  **/
  getAccountsAccountIdStatementsStatementIdTransactions(
    req: operations.GetAccountsAccountIdStatementsStatementIdTransactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdStatementsStatementIdTransactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdStatementsStatementIdTransactionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/statements/{statementId}/transactions", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.GetAccountsAccountIdStatementsStatementIdTransactionsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obReadTransaction6 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadTransaction6 = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccountsAccountIdTransactions - Get Transactions
   *
   * Get Transactions by Account ID
  **/
  getAccountsAccountIdTransactions(
    req: operations.GetAccountsAccountIdTransactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountIdTransactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountIdTransactionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{accountId}/transactions", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAccountsAccountIdTransactionsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obReadTransaction6 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadTransaction6 = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getParty - Get Party
   *
   * Get Party
  **/
  getParty(
    req: operations.GetPartyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPartyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPartyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/party";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.GetPartyResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obReadParty2 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadParty2 = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSandboxSandboxId - Export Sandbox
   *
   * Export Sandbox
  **/
  getSandboxSandboxId(
    req: operations.GetSandboxSandboxIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSandboxSandboxIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSandboxSandboxIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/sandbox/{sandboxId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSandboxSandboxIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sandbox = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.sandbox = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAccountAccessConsents - Create Account Access Consents
   *
   * Create Account Access Consents
  **/
  postAccountAccessConsents(
    req: operations.PostAccountAccessConsentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAccountAccessConsentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAccountAccessConsentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/account-access-consents";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.PostAccountAccessConsentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obReadConsentResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obReadConsentResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 415:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.obErrorResponse1 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postSandbox - Create Sandbox
   *
   * Create Sandbox
  **/
  postSandbox(
    req: operations.PostSandboxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSandboxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSandboxRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/sandbox";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostSandboxResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sandbox = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.sandbox = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 415:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putSandbox - Import Sandbox
   *
   * Import Sandbox
  **/
  putSandbox(
    req: operations.PutSandboxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSandboxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSandboxRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/sandbox";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutSandboxResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 415:
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; charset=utf-8`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
