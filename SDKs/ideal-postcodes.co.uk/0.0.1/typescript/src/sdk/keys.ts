import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Keys {
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
   * checkKeyUsability - checkKeyUsability
   *
   * Currently returns whether the key is useable via the `available` property.
   * You may Use this method to discover if the key is useable before making
   * further requests.
   * 
   * When the `user_token` is not provided, this API returns public information on key. 
   * 
   * ### Testing
   * 
   * To test your implementation of our API, you may use the following test keys.
   * 
   * - **iddqd** Availability will return as `true`
   * - **idkfa** Availability will return as `false`
   * 
  **/
  checkKeyUsability(
    req: operations.CheckKeyUsabilityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CheckKeyUsabilityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CheckKeyUsabilityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/keys/{key}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CheckKeyUsabilityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.keyUsabilityResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addressLookupResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 402:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addressLookupResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addressLookupResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addressLookupResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * downloadUsageHistory - downloadUsageHistory
   *
   * Returns a CSV download of lookups performed and associated information.
   * 
   * Note that the `Content-Type` returned will be CSV (text/csv). For a non 200
   * response, the `Content-Type` will revert to JSON with the error code and
   * message embedded.
   * 
   * This method requires a `user_token`, which can be found on your [accounts page](https://ideal-postcodes.co.uk/account).
   * 
   * A maximum interval of 90 days can be provided for analysis. If no start or end date is provided, the last 21 days will be used as the default interval.
   * 
   * ### GDPR Update
   * 
   * After May 2018, the API will begin to redact IP Address, Search Term and URL data that is older than 28 days from our stores on a weekly basis as part of our new data protection strategy. This means the aforementioned data points will no longer be retrievable from this API if it is more than 28 days old.
   * 
   * Reach out to us by [mail](<mailto:support@ideal-postcodes.co.uk>) or [chat](https://chat.ideal-postcodes.co.uk) if you would like to modify this 28 day window or prefer this data not be collected at all.
   * 
  **/
  downloadUsageHistory(
    req: operations.DownloadUsageHistoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadUsageHistoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadUsageHistoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/keys/{key}/lookups", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DownloadUsageHistoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/csv`)) {
                res.downloadUsageHistory200TextCsvString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 402:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * monitorKeyUsage - monitorKeyUsage
   *
   * Reports the number of lookups consumed on a key for a range of days.
   * 
   * This method requires a `user_token`, which can be found on your [accounts page](https://ideal-postcodes.co.uk/account).
   * 
   * A maximum interval of 90 days can be provided for analysis. If no start or
   * end date is provided, the last 21 days will be used as the default interval.
   * 
  **/
  monitorKeyUsage(
    req: operations.MonitorKeyUsageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MonitorKeyUsageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MonitorKeyUsageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/keys/{key}/usage", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MonitorKeyUsageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.keyUsageResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 402:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
