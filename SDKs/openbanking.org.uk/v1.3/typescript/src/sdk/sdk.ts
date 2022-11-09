import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import {GetHeadersFromRequest} from "../internal/utils/headers";
import {GetHeadersFromResponse} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://developer.openbanking.org.uk/reference-implementation/open-banking/v1.3",
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
  
  // GetAtms - Gets a list of all `ATM` objects.
  GetAtms(
    req: operations.GetAtmsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAtmsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAtmsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/atms";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAtmsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.getAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonObject = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fourHundredErrorObject = httpRes?.data;
            }
            break;
          case 408:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fourHundredAndEightErrorObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fourHundredAndTwentyNineErrorObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fiveHundredErrorObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fiveHundredAndThreeErrorObject = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.errorObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetBranches - Gets a list of all `Branch` objects.
  GetBranches(
    req: operations.GetBranchesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBranchesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBranchesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/branches";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetBranchesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.getBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonObject = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fourHundredErrorObject = httpRes?.data;
            }
            break;
          case 408:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fourHundredAndEightErrorObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fourHundredAndTwentyNineErrorObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fiveHundredErrorObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fiveHundredAndThreeErrorObject = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.errorObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetBusinessCurrentAccounts - Gets a list of all `Branch Current Account` objects.
  GetBusinessCurrentAccounts(
    req: operations.GetBusinessCurrentAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBusinessCurrentAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBusinessCurrentAccountsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/business-current-accounts";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetBusinessCurrentAccountsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.getBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fourHundredErrorObject = httpRes?.data;
            }
            break;
          case 408:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fourHundredAndEightErrorObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fourHundredAndTwentyNineErrorObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fiveHundredErrorObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fiveHundredAndThreeErrorObject = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.errorObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCommercialCreditCards - Gets a list of all `Commerical Credit Card` objects.
  GetCommercialCreditCards(
    req: operations.GetCommercialCreditCardsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommercialCreditCardsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommercialCreditCardsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/commercial-credit-cards";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCommercialCreditCardsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.getCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonObject = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fourHundredErrorObject = httpRes?.data;
            }
            break;
          case 408:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fourHundredAndEightErrorObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fourHundredAndTwentyNineErrorObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fiveHundredErrorObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fiveHundredAndThreeErrorObject = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.errorObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPersonalCurrentAccounts - Gets a list of all `Personal Current Account` objects.
  GetPersonalCurrentAccounts(
    req: operations.GetPersonalCurrentAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPersonalCurrentAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPersonalCurrentAccountsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/personal-current-accounts";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPersonalCurrentAccountsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.getPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fourHundredErrorObject = httpRes?.data;
            }
            break;
          case 408:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fourHundredAndEightErrorObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fourHundredAndTwentyNineErrorObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fiveHundredErrorObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fiveHundredAndThreeErrorObject = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.errorObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUnsecuredSmeLoans - Gets a list of all `Unsercured SME Lending` objects.
  GetUnsecuredSmeLoans(
    req: operations.GetUnsecuredSmeLoansRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUnsecuredSmeLoansResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUnsecuredSmeLoansRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/unsecured-sme-loans";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUnsecuredSmeLoansResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.getUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonObject = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fourHundredErrorObject = httpRes?.data;
            }
            break;
          case 408:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fourHundredAndEightErrorObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fourHundredAndTwentyNineErrorObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fiveHundredErrorObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fiveHundredAndThreeErrorObject = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.errorObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadAtms - Gets header information on the current set of `ATM` data
  HeadAtms(
    req: operations.HeadAtmsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadAtmsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadAtmsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/atms";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .head(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadAtmsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.noResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadBranches - Gets header information on the current set of `Branch` data
  HeadBranches(
    req: operations.HeadBranchesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadBranchesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadBranchesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/branches";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .head(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadBranchesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.noResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadBusinessCurrentAccounts - Gets header information on the current set of `Business Current Account` data
  HeadBusinessCurrentAccounts(
    req: operations.HeadBusinessCurrentAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadBusinessCurrentAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadBusinessCurrentAccountsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/business-current-accounts";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .head(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadBusinessCurrentAccountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.noResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadCommercialCreditCards - Gets header information on the current set of `Commerical Credit Card` data
  HeadCommercialCreditCards(
    req: operations.HeadCommercialCreditCardsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadCommercialCreditCardsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadCommercialCreditCardsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/commercial-credit-cards";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .head(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadCommercialCreditCardsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.noResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadPersonalCurrentAccounts - Gets header information on the current set of `Personal Current Account` data
  HeadPersonalCurrentAccounts(
    req: operations.HeadPersonalCurrentAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadPersonalCurrentAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadPersonalCurrentAccountsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/personal-current-accounts";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .head(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadPersonalCurrentAccountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.noResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadUnsecuredSmeLoans - Gets header information on the current set of `Unsercured SME Lending` data
  HeadUnsecuredSmeLoans(
    req: operations.HeadUnsecuredSmeLoansRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadUnsecuredSmeLoansResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadUnsecuredSmeLoansRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/unsecured-sme-loans";
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .head(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadUnsecuredSmeLoansResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.noResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
