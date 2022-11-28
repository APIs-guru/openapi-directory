import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Ccc {
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
   * getCommercialCreditCards - Gets a list of all `Commerical Credit Card` objects.
  **/
  getCommercialCreditCards(
    req: operations.GetCommercialCreditCardsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommercialCreditCardsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommercialCreditCardsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/commercial-credit-cards";
    
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
        const res: operations.GetCommercialCreditCardsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/prs.openbanking.opendata.v1.3+json`)) {
                res.getCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonObject = httpRes?.data;
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
   * headCommercialCreditCards - Gets header information on the current set of `Commerical Credit Card` data
  **/
  headCommercialCreditCards(
    req: operations.HeadCommercialCreditCardsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadCommercialCreditCardsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadCommercialCreditCardsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/commercial-credit-cards";
    
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
        const res: operations.HeadCommercialCreditCardsResponse = {statusCode: httpRes.status, contentType: contentType};
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
