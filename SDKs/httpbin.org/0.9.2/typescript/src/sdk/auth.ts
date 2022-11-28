import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Auth {
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
   * getBasicAuthUserPasswd - Prompts the user for authorization using HTTP Basic Auth.
  **/
  getBasicAuthUserPasswd(
    req: operations.GetBasicAuthUserPasswdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBasicAuthUserPasswdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBasicAuthUserPasswdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/basic-auth/{user}/{passwd}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBasicAuthUserPasswdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBearer - Prompts the user for authorization using bearer authentication.
  **/
  getBearer(
    req: operations.GetBearerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBearerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBearerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bearer";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBearerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDigestAuthQopUserPasswd - Prompts the user for authorization using Digest Auth.
  **/
  getDigestAuthQopUserPasswd(
    req: operations.GetDigestAuthQopUserPasswdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDigestAuthQopUserPasswdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDigestAuthQopUserPasswdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/digest-auth/{qop}/{user}/{passwd}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDigestAuthQopUserPasswdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDigestAuthQopUserPasswdAlgorithm - Prompts the user for authorization using Digest Auth + Algorithm.
  **/
  getDigestAuthQopUserPasswdAlgorithm(
    req: operations.GetDigestAuthQopUserPasswdAlgorithmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDigestAuthQopUserPasswdAlgorithmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDigestAuthQopUserPasswdAlgorithmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/digest-auth/{qop}/{user}/{passwd}/{algorithm}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDigestAuthQopUserPasswdAlgorithmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDigestAuthQopUserPasswdAlgorithmStaleAfter - Prompts the user for authorization using Digest Auth + Algorithm.
   *
   * allow settings the stale_after argument.
   * 
  **/
  getDigestAuthQopUserPasswdAlgorithmStaleAfter(
    req: operations.GetDigestAuthQopUserPasswdAlgorithmStaleAfterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDigestAuthQopUserPasswdAlgorithmStaleAfterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDigestAuthQopUserPasswdAlgorithmStaleAfterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/digest-auth/{qop}/{user}/{passwd}/{algorithm}/{stale_after}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDigestAuthQopUserPasswdAlgorithmStaleAfterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getHiddenBasicAuthUserPasswd - Prompts the user for authorization using HTTP Basic Auth.
  **/
  getHiddenBasicAuthUserPasswd(
    req: operations.GetHiddenBasicAuthUserPasswdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHiddenBasicAuthUserPasswdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHiddenBasicAuthUserPasswdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/hidden-basic-auth/{user}/{passwd}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetHiddenBasicAuthUserPasswdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
