import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://playdeveloperreporting.googleapis.com/",
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

// SDK Documentation: https://developers.google.com/play/developer/reporting
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
  
  // PlaydeveloperreportingAnomaliesList - Lists anomalies in any of the datasets.
  PlaydeveloperreportingAnomaliesList(
    req: operations.PlaydeveloperreportingAnomaliesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlaydeveloperreportingAnomaliesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlaydeveloperreportingAnomaliesListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/anomalies", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.PlaydeveloperreportingAnomaliesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googlePlayDeveloperReportingV1alpha1ListAnomaliesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PlaydeveloperreportingVitalsErrorsIssuesSearch - Searches all error issues in which reports have been grouped.
  PlaydeveloperreportingVitalsErrorsIssuesSearch(
    req: operations.PlaydeveloperreportingVitalsErrorsIssuesSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlaydeveloperreportingVitalsErrorsIssuesSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlaydeveloperreportingVitalsErrorsIssuesSearchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/errorIssues:search", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.PlaydeveloperreportingVitalsErrorsIssuesSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googlePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PlaydeveloperreportingVitalsErrorsReportsSearch - Searches all error reports received for an app.
  PlaydeveloperreportingVitalsErrorsReportsSearch(
    req: operations.PlaydeveloperreportingVitalsErrorsReportsSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlaydeveloperreportingVitalsErrorsReportsSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlaydeveloperreportingVitalsErrorsReportsSearchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/errorReports:search", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.PlaydeveloperreportingVitalsErrorsReportsSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googlePlayDeveloperReportingV1alpha1SearchErrorReportsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGet - Describes the properties of the metric set.
  PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGet(
    req: operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{name}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googlePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQuery - Queries the metrics in the metric set.
  PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQuery(
    req: operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{name}:query", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googlePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
