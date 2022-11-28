import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class AttendanceSubscriberStateChanges {
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
   * postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreate - Record
   *
   * Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.
  **/
  postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreate(
    req: operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/marketing/v3/marketing-events/attendance/{externalEventId}/{subscriberState}/create", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.batchResponseSubscriberVidResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `*/*`)) {
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
   * postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmail - Record
   *
   * Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created. If you set params 
  **/
  postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmail(
    req: operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/marketing/v3/marketing-events/attendance/{externalEventId}/{subscriberState}/email-create", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.batchResponseSubscriberEmailResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `*/*`)) {
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

}
