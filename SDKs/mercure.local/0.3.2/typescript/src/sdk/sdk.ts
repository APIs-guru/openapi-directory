import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromRequest} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "http://mercure.local",
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

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk.security = security;
  };
}

// SDK Documentation: https://mercure.rocks/spec - The Mercure protocol specification
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
  
  // GetWellKnownMercure - Subscribe to updates
  /** 
   * https://mercure.rocks/spec#subscription - Subscription specification
  **/
  GetWellKnownMercure(
    req: operations.GetWellKnownMercureRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWellKnownMercureResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWellKnownMercureRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/.well-known/mercure";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
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
        let res: operations.GetWellKnownMercureResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWellKnownMercureSubscriptions - Active subscriptions
  /** 
   * https://mercure.rocks/spec#subscription-api - Subscription API
  **/
  GetWellKnownMercureSubscriptions(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetWellKnownMercureSubscriptionsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/.well-known/mercure/subscriptions";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetWellKnownMercureSubscriptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/ld+json`)) {
                res.subscriptions = httpRes?.data;
            }
            break;
          case 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWellKnownMercureSubscriptionsTopic - Active subscriptions for the given topic
  /** 
   * https://mercure.rocks/spec#subscription-api - Subscription API
  **/
  GetWellKnownMercureSubscriptionsTopic(
    req: operations.GetWellKnownMercureSubscriptionsTopicRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWellKnownMercureSubscriptionsTopicResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWellKnownMercureSubscriptionsTopicRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/.well-known/mercure/subscriptions/{topic}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetWellKnownMercureSubscriptionsTopicResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/ld+json`)) {
                res.subscriptions = httpRes?.data;
            }
            break;
          case 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWellKnownMercureSubscriptionsTopicSubscriber - Active subscription for the given topic and subscriber
  /** 
   * https://mercure.rocks/spec#active-subscriptions - Subscription API
  **/
  GetWellKnownMercureSubscriptionsTopicSubscriber(
    req: operations.GetWellKnownMercureSubscriptionsTopicSubscriberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWellKnownMercureSubscriptionsTopicSubscriberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWellKnownMercureSubscriptionsTopicSubscriberRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/.well-known/mercure/subscriptions/{topic}/{subscriber}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetWellKnownMercureSubscriptionsTopicSubscriberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/ld+json`)) {
                res.subscriptions = httpRes?.data;
            }
            break;
          case 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostWellKnownMercure - Publish an update
  /** 
   * https://mercure.rocks/spec#publication - Publishing specification
  **/
  PostWellKnownMercure(
    req: operations.PostWellKnownMercureRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostWellKnownMercureResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostWellKnownMercureRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/.well-known/mercure";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostWellKnownMercureResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            break;
          case 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
