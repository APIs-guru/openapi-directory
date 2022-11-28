import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Bca {
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
   * getBusinessCurrentAccounts - Gets a list of all `Branch Current Account` objects.
  **/
  getBusinessCurrentAccounts(
    req: operations.GetBusinessCurrentAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBusinessCurrentAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBusinessCurrentAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/business-current-accounts";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBusinessCurrentAccountsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.getBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fourHundredErrorObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 408:
            if (utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fourHundredAndEightErrorObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fourHundredAndTwentyNineErrorObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fiveHundredErrorObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.fiveHundredAndThreeErrorObject = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.errorObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * headBusinessCurrentAccounts - Gets header information on the current set of `Business Current Account` data
  **/
  headBusinessCurrentAccounts(
    req: operations.HeadBusinessCurrentAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadBusinessCurrentAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadBusinessCurrentAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/business-current-accounts";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "head",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadBusinessCurrentAccountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.noResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
