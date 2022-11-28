import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class AvailableProjects {
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
   * firebaseAvailableProjectsList - Lists each [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects) that can have Firebase resources added to it. A Project will only be listed if: - The caller has sufficient [Google IAM](https://cloud.google.com/iam) permissions to call AddFirebase. - The Project is not already a FirebaseProject. - The Project is not in an Organization which has policies that prevent Firebase resources from being added. 
  **/
  firebaseAvailableProjectsList(
    req: operations.FirebaseAvailableProjectsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebaseAvailableProjectsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebaseAvailableProjectsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1beta1/availableProjects";
    
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
        const res: operations.FirebaseAvailableProjectsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAvailableProjectsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
