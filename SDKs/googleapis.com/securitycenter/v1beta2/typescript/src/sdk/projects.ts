import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Projects {
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
   * securitycenterProjectsLocationsClustersGetContainerThreatDetectionSettings - Get the ContainerThreatDetectionSettings resource.
  **/
  securitycenterProjectsLocationsClustersGetContainerThreatDetectionSettings(
    req: operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta2/{name}", req.pathParams);
    
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
        const res: operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.containerThreatDetectionSettings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * securitycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettings - Update the ContainerThreatDetectionSettings resource.
  **/
  securitycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettings(
    req: operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta2/{name}", req.pathParams);

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
        const res: operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.containerThreatDetectionSettings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * securitycenterProjectsWebSecurityScannerSettingsCalculate - Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings.
  **/
  securitycenterProjectsWebSecurityScannerSettingsCalculate(
    req: operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta2/{name}:calculate", req.pathParams);
    
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
        const res: operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.webSecurityScannerSettings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
