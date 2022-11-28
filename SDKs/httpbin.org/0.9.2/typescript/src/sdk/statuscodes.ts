import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class StatusCodes {
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
   * deleteStatusCodes - Return status code or random status code if more than one are given
  **/
  deleteStatusCodes(
    req: operations.DeleteStatusCodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteStatusCodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteStatusCodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/status/{codes}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteStatusCodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 100:
            break;
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 300:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStatusCodes - Return status code or random status code if more than one are given
  **/
  getStatusCodes(
    req: operations.GetStatusCodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStatusCodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStatusCodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/status/{codes}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStatusCodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 100:
            break;
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 300:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * patchStatusCodes - Return status code or random status code if more than one are given
  **/
  patchStatusCodes(
    req: operations.PatchStatusCodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchStatusCodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchStatusCodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/status/{codes}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "patch",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchStatusCodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 100:
            break;
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 300:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postStatusCodes - Return status code or random status code if more than one are given
  **/
  postStatusCodes(
    req: operations.PostStatusCodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostStatusCodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostStatusCodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/status/{codes}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostStatusCodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 100:
            break;
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 300:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putStatusCodes - Return status code or random status code if more than one are given
  **/
  putStatusCodes(
    req: operations.PutStatusCodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutStatusCodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutStatusCodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/status/{codes}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutStatusCodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 100:
            break;
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 300:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * traceStatusCodes - Return status code or random status code if more than one are given
  **/
  traceStatusCodes(
    req: operations.TraceStatusCodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TraceStatusCodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TraceStatusCodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/status/{codes}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "trace",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TraceStatusCodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 100:
            break;
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 300:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
