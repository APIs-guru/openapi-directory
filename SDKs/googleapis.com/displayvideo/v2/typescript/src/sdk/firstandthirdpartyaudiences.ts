import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class FirstAndThirdPartyAudiences {
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
   * displayvideoFirstAndThirdPartyAudiencesCreate - Creates a FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
  **/
  displayvideoFirstAndThirdPartyAudiencesCreate(
    req: operations.DisplayvideoFirstAndThirdPartyAudiencesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoFirstAndThirdPartyAudiencesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayvideoFirstAndThirdPartyAudiencesCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/firstAndThirdPartyAudiences";

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
        const res: operations.DisplayvideoFirstAndThirdPartyAudiencesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.firstAndThirdPartyAudience = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * displayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers - Updates the member list of a Customer Match audience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
  **/
  displayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers(
    req: operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}:editCustomerMatchMembers", req.pathParams);

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
        const res: operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.editCustomerMatchMembersResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * displayvideoFirstAndThirdPartyAudiencesGet - Gets a first and third party audience.
  **/
  displayvideoFirstAndThirdPartyAudiencesGet(
    req: operations.DisplayvideoFirstAndThirdPartyAudiencesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoFirstAndThirdPartyAudiencesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayvideoFirstAndThirdPartyAudiencesGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.DisplayvideoFirstAndThirdPartyAudiencesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.firstAndThirdPartyAudience = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * displayvideoFirstAndThirdPartyAudiencesList - Lists first and third party audiences. The order is defined by the order_by parameter.
  **/
  displayvideoFirstAndThirdPartyAudiencesList(
    req: operations.DisplayvideoFirstAndThirdPartyAudiencesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoFirstAndThirdPartyAudiencesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayvideoFirstAndThirdPartyAudiencesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/firstAndThirdPartyAudiences";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.DisplayvideoFirstAndThirdPartyAudiencesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listFirstAndThirdPartyAudiencesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * displayvideoFirstAndThirdPartyAudiencesPatch - Updates an existing FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
  **/
  displayvideoFirstAndThirdPartyAudiencesPatch(
    req: operations.DisplayvideoFirstAndThirdPartyAudiencesPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoFirstAndThirdPartyAudiencesPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayvideoFirstAndThirdPartyAudiencesPatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}", req.pathParams);

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
    return client
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DisplayvideoFirstAndThirdPartyAudiencesPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.firstAndThirdPartyAudience = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
