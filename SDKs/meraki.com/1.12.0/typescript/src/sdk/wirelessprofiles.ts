import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class WirelessProfiles {
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
   * createNetworkCameraWirelessProfile - Creates a new camera wireless profile for this network.
   *
   * Creates a new camera wireless profile for this network.
  **/
  createNetworkCameraWirelessProfile(
    req: operations.CreateNetworkCameraWirelessProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkCameraWirelessProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkCameraWirelessProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/camera/wirelessProfiles", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateNetworkCameraWirelessProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createNetworkCameraWirelessProfile200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteNetworkCameraWirelessProfile - Delete an existing camera wireless profile for this network.
   *
   * Delete an existing camera wireless profile for this network.
  **/
  deleteNetworkCameraWirelessProfile(
    req: operations.DeleteNetworkCameraWirelessProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkCameraWirelessProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkCameraWirelessProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkCameraWirelessProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDeviceCameraWirelessProfiles - Returns wireless profile assigned to the given camera
   *
   * Returns wireless profile assigned to the given camera
  **/
  getDeviceCameraWirelessProfiles(
    req: operations.GetDeviceCameraWirelessProfilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceCameraWirelessProfilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceCameraWirelessProfilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/camera/wirelessProfiles", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDeviceCameraWirelessProfilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDeviceCameraWirelessProfiles200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkCameraWirelessProfile - Retrieve a single camera wireless profile.
   *
   * Retrieve a single camera wireless profile.
  **/
  getNetworkCameraWirelessProfile(
    req: operations.GetNetworkCameraWirelessProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkCameraWirelessProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkCameraWirelessProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkCameraWirelessProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkCameraWirelessProfile200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkCameraWirelessProfiles - List the camera wireless profiles for this network.
   *
   * List the camera wireless profiles for this network.
  **/
  getNetworkCameraWirelessProfiles(
    req: operations.GetNetworkCameraWirelessProfilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkCameraWirelessProfilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkCameraWirelessProfilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/camera/wirelessProfiles", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkCameraWirelessProfilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetworkCameraWirelessProfiles200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDeviceCameraWirelessProfiles - Assign wireless profiles to the given camera
   *
   * Assign wireless profiles to the given camera. Incremental updates are not supported, all profile assignment need to be supplied at once.
  **/
  updateDeviceCameraWirelessProfiles(
    req: operations.UpdateDeviceCameraWirelessProfilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeviceCameraWirelessProfilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeviceCameraWirelessProfilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/devices/{serial}/camera/wirelessProfiles", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.UpdateDeviceCameraWirelessProfilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateDeviceCameraWirelessProfiles200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNetworkCameraWirelessProfile - Update an existing camera wireless profile in this network.
   *
   * Update an existing camera wireless profile in this network.
  **/
  updateNetworkCameraWirelessProfile(
    req: operations.UpdateNetworkCameraWirelessProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkCameraWirelessProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkCameraWirelessProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.UpdateNetworkCameraWirelessProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateNetworkCameraWirelessProfile200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
