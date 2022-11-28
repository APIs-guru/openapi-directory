import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Enterprises {
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
   * smartdevicemanagementEnterprisesDevicesExecuteCommand - Executes a command to device managed by the enterprise.
  **/
  smartdevicemanagementEnterprisesDevicesExecuteCommand(
    req: operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:executeCommand", req.pathParams);

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
        const res: operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * smartdevicemanagementEnterprisesDevicesList - Lists devices managed by the enterprise.
  **/
  smartdevicemanagementEnterprisesDevicesList(
    req: operations.SmartdevicemanagementEnterprisesDevicesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SmartdevicemanagementEnterprisesDevicesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SmartdevicemanagementEnterprisesDevicesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/devices", req.pathParams);
    
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
        const res: operations.SmartdevicemanagementEnterprisesDevicesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleHomeEnterpriseSdmV1ListDevicesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * smartdevicemanagementEnterprisesStructuresList - Lists structures managed by the enterprise.
  **/
  smartdevicemanagementEnterprisesStructuresList(
    req: operations.SmartdevicemanagementEnterprisesStructuresListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SmartdevicemanagementEnterprisesStructuresListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SmartdevicemanagementEnterprisesStructuresListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/structures", req.pathParams);
    
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
        const res: operations.SmartdevicemanagementEnterprisesStructuresListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleHomeEnterpriseSdmV1ListStructuresResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * smartdevicemanagementEnterprisesStructuresRoomsGet - Gets a room managed by the enterprise.
  **/
  smartdevicemanagementEnterprisesStructuresRoomsGet(
    req: operations.SmartdevicemanagementEnterprisesStructuresRoomsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SmartdevicemanagementEnterprisesStructuresRoomsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SmartdevicemanagementEnterprisesStructuresRoomsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}", req.pathParams);
    
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
        const res: operations.SmartdevicemanagementEnterprisesStructuresRoomsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleHomeEnterpriseSdmV1Room = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * smartdevicemanagementEnterprisesStructuresRoomsList - Lists rooms managed by the enterprise.
  **/
  smartdevicemanagementEnterprisesStructuresRoomsList(
    req: operations.SmartdevicemanagementEnterprisesStructuresRoomsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SmartdevicemanagementEnterprisesStructuresRoomsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SmartdevicemanagementEnterprisesStructuresRoomsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/rooms", req.pathParams);
    
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
        const res: operations.SmartdevicemanagementEnterprisesStructuresRoomsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleHomeEnterpriseSdmV1ListRoomsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
