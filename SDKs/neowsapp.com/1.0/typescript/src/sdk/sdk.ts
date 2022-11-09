import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "http://www.neowsapp.com/",
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
  
  // BrowseNearEarthObjects - Browse the Near Earth Objects service
  /** 
   * Retieve a paginated list of Near Earth Objects
  **/
  BrowseNearEarthObjects(
    req: operations.BrowseNearEarthObjectsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BrowseNearEarthObjectsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BrowseNearEarthObjectsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/rest/v1/neo/browse";
    
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
        let res: operations.BrowseNearEarthObjectsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.nearEarthObject = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RetrieveCurrentNeoStatistics - Get the Near Earth Object data set totals
  /** 
   * retrieveCurrentNeoStatistics
  **/
  RetrieveCurrentNeoStatistics(
    
    config?: AxiosRequestConfig
  ): Promise<operations.RetrieveCurrentNeoStatisticsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/rest/v1/stats";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RetrieveCurrentNeoStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.statistics = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RetrieveNeoFeedToday - Find Near Earth Objects for today
  /** 
   * Get a list of Near Earth Objects for today
  **/
  RetrieveNeoFeedToday(
    req: operations.RetrieveNeoFeedTodayRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetrieveNeoFeedTodayResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetrieveNeoFeedTodayRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/rest/v1/feed/today";
    
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
        let res: operations.RetrieveNeoFeedTodayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.nearEarthObjectList = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RetrieveNearEarthObjectById - Find Near Earth Objects by id
  /** 
   * Retrieve a Near Earth Objects with a given id
  **/
  RetrieveNearEarthObjectById(
    req: operations.RetrieveNearEarthObjectByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetrieveNearEarthObjectByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetrieveNearEarthObjectByIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/rest/v1/neo/{asteroid_id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RetrieveNearEarthObjectByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.nearEarthObject = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RetrieveNearEarthObjectFeed - Find Near Earth Objects by date
  /** 
   * Get a list of Near Earth Objects within a date range, The max range in one query is 7 days
  **/
  RetrieveNearEarthObjectFeed(
    req: operations.RetrieveNearEarthObjectFeedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetrieveNearEarthObjectFeedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetrieveNearEarthObjectFeedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/rest/v1/feed";
    
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
        let res: operations.RetrieveNearEarthObjectFeedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.nearEarthObjectList = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RetrieveSentryRiskData - Retrieve Sentry (Impact Risk ) Near Earth Objects
  /** 
   * Retrieves Near Earth Objects listed in the NASA sentry data set
  **/
  RetrieveSentryRiskData(
    req: operations.RetrieveSentryRiskDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetrieveSentryRiskDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetrieveSentryRiskDataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/rest/v1/neo/sentry";
    
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
        let res: operations.RetrieveSentryRiskDataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.sentryObjectPagingDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RetrieveSentryRiskDataById - Retrieve Sentry (Impact Risk ) Near Earth Objectby ID 
  /** 
   * Retrieves Sentry Near Earth Object by ID
  **/
  RetrieveSentryRiskDataById(
    req: operations.RetrieveSentryRiskDataByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetrieveSentryRiskDataByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetrieveSentryRiskDataByIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/rest/v1/neo/sentry/{asteroid_id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RetrieveSentryRiskDataByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.sentryImpactRiskObject = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
