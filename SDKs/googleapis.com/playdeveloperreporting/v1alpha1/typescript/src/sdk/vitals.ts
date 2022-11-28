import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Vitals {
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
   * playdeveloperreportingVitalsErrorsIssuesSearch - Searches all error issues in which reports have been grouped.
  **/
  playdeveloperreportingVitalsErrorsIssuesSearch(
    req: operations.PlaydeveloperreportingVitalsErrorsIssuesSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlaydeveloperreportingVitalsErrorsIssuesSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlaydeveloperreportingVitalsErrorsIssuesSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/errorIssues:search", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.PlaydeveloperreportingVitalsErrorsIssuesSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googlePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playdeveloperreportingVitalsErrorsReportsSearch - Searches all error reports received for an app.
  **/
  playdeveloperreportingVitalsErrorsReportsSearch(
    req: operations.PlaydeveloperreportingVitalsErrorsReportsSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlaydeveloperreportingVitalsErrorsReportsSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlaydeveloperreportingVitalsErrorsReportsSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/errorReports:search", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.PlaydeveloperreportingVitalsErrorsReportsSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googlePlayDeveloperReportingV1alpha1SearchErrorReportsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playdeveloperreportingVitalsStuckbackgroundwakelockrateGet - Describes the properties of the metric set.
  **/
  playdeveloperreportingVitalsStuckbackgroundwakelockrateGet(
    req: operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googlePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * playdeveloperreportingVitalsStuckbackgroundwakelockrateQuery - Queries the metrics in the metric set.
  **/
  playdeveloperreportingVitalsStuckbackgroundwakelockrateQuery(
    req: operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{name}:query", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googlePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
