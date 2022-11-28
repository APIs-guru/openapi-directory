import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Activities {
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
   * deleteWorkspaceIdMembersMemberIdActivitiesId - Delete a post activity
  **/
  deleteWorkspaceIdMembersMemberIdActivitiesId(
    req: operations.DeleteWorkspaceIdMembersMemberIdActivitiesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWorkspaceIdMembersMemberIdActivitiesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWorkspaceIdMembersMemberIdActivitiesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{workspace_id}/members/{member_id}/activities/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteWorkspaceIdMembersMemberIdActivitiesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getWorkspaceIdActivities - List activities for a workspace
  **/
  getWorkspaceIdActivities(
    req: operations.GetWorkspaceIdActivitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspaceIdActivitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspaceIdActivitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{workspace_id}/activities", req.pathParams);
    
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
        const res: operations.GetWorkspaceIdActivitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getWorkspaceIdActivitiesId - Get an activity in the workspace
  **/
  getWorkspaceIdActivitiesId(
    req: operations.GetWorkspaceIdActivitiesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspaceIdActivitiesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspaceIdActivitiesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{workspace_id}/activities/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWorkspaceIdActivitiesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getWorkspaceIdMembersMemberIdActivities - List activities for a member
  **/
  getWorkspaceIdMembersMemberIdActivities(
    req: operations.GetWorkspaceIdMembersMemberIdActivitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspaceIdMembersMemberIdActivitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspaceIdMembersMemberIdActivitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{workspace_id}/members/{member_id}/activities", req.pathParams);
    
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
        const res: operations.GetWorkspaceIdMembersMemberIdActivitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postWorkspaceIdActivities - Create a Custom or a Content activity for a new or existing member
   *
   * Use this method when you know an identity of the member (github, email, twitter, etc.) but not their Orbit ID. Pass fields in the member object to update the member in addition to creating the activity.
  **/
  postWorkspaceIdActivities(
    req: operations.PostWorkspaceIdActivitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostWorkspaceIdActivitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostWorkspaceIdActivitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{workspace_id}/activities", req.pathParams);

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostWorkspaceIdActivitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
          case httpRes?.status == 422:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postWorkspaceIdMembersMemberIdActivities - Create a Custom or a Content activity for a member
  **/
  postWorkspaceIdMembersMemberIdActivities(
    req: operations.PostWorkspaceIdMembersMemberIdActivitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostWorkspaceIdMembersMemberIdActivitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostWorkspaceIdMembersMemberIdActivitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{workspace_id}/members/{member_id}/activities", req.pathParams);

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostWorkspaceIdMembersMemberIdActivitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
          case httpRes?.status == 422:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putWorkspaceIdMembersMemberIdActivitiesId - Update a custom activity for a member
  **/
  putWorkspaceIdMembersMemberIdActivitiesId(
    req: operations.PutWorkspaceIdMembersMemberIdActivitiesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutWorkspaceIdMembersMemberIdActivitiesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutWorkspaceIdMembersMemberIdActivitiesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{workspace_id}/members/{member_id}/activities/{id}", req.pathParams);

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutWorkspaceIdMembersMemberIdActivitiesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 422:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
