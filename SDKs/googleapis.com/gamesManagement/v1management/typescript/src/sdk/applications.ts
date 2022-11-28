import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Applications {
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
   * gamesManagementApplicationsListHidden - Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.
  **/
  gamesManagementApplicationsListHidden(
    req: operations.GamesManagementApplicationsListHiddenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GamesManagementApplicationsListHiddenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GamesManagementApplicationsListHiddenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/games/v1management/applications/{applicationId}/players/hidden", req.pathParams);
    
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
        const res: operations.GamesManagementApplicationsListHiddenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hiddenPlayerList = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
