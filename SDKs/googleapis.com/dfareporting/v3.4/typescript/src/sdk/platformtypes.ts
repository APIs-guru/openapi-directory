import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class PlatformTypes {
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
   * dfareportingPlatformTypesGet - Gets one platform type by ID.
  **/
  dfareportingPlatformTypesGet(
    req: operations.DfareportingPlatformTypesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DfareportingPlatformTypesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DfareportingPlatformTypesGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/userprofiles/{profileId}/platformTypes/{id}", req.pathParams);
    
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
        const res: operations.DfareportingPlatformTypesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.platformType = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * dfareportingPlatformTypesList - Retrieves a list of platform types.
  **/
  dfareportingPlatformTypesList(
    req: operations.DfareportingPlatformTypesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DfareportingPlatformTypesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DfareportingPlatformTypesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/userprofiles/{profileId}/platformTypes", req.pathParams);
    
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
        const res: operations.DfareportingPlatformTypesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.platformTypesListResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
