import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Revisions {
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
   * getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetById - Get a revision for a custom action
   *
   * Returns the given version of a custom workflow action.
  **/
  getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetById(
    req: operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/automation/v4/actions/{appId}/{definitionId}/revisions/{revisionId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionRevision = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAutomationV4ActionsAppIdDefinitionIdRevisionsGetPage - Get all revisions for a custom action
   *
   * Returns a list of revisions for a custom workflow action.
  **/
  getAutomationV4ActionsAppIdDefinitionIdRevisionsGetPage(
    req: operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/automation/v4/actions/{appId}/{definitionId}/revisions", req.pathParams);
    
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
        const res: operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.collectionResponseActionRevisionForwardPaging = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
