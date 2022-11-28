import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Debug {
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
   * cloudsearchDebugDatasourcesItemsCheckAccess - Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.
  **/
  cloudsearchDebugDatasourcesItemsCheckAccess(
    req: operations.CloudsearchDebugDatasourcesItemsCheckAccessRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudsearchDebugDatasourcesItemsCheckAccessResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudsearchDebugDatasourcesItemsCheckAccessRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/debug/{name}:checkAccess", req.pathParams);

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
        const res: operations.CloudsearchDebugDatasourcesItemsCheckAccessResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.checkAccessResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudsearchDebugDatasourcesItemsSearchByViewUrl - Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.
  **/
  cloudsearchDebugDatasourcesItemsSearchByViewUrl(
    req: operations.CloudsearchDebugDatasourcesItemsSearchByViewUrlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudsearchDebugDatasourcesItemsSearchByViewUrlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudsearchDebugDatasourcesItemsSearchByViewUrlRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/debug/{name}/items:searchByViewUrl", req.pathParams);

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
        const res: operations.CloudsearchDebugDatasourcesItemsSearchByViewUrlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchItemsByViewUrlResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudsearchDebugIdentitysourcesItemsListForunmappedidentity - Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.
  **/
  cloudsearchDebugIdentitysourcesItemsListForunmappedidentity(
    req: operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/debug/{parent}/items:forunmappedidentity", req.pathParams);
    
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
        const res: operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listItemNamesForUnmappedIdentityResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudsearchDebugIdentitysourcesUnmappedidsList - Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.
  **/
  cloudsearchDebugIdentitysourcesUnmappedidsList(
    req: operations.CloudsearchDebugIdentitysourcesUnmappedidsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudsearchDebugIdentitysourcesUnmappedidsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudsearchDebugIdentitysourcesUnmappedidsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/debug/{parent}/unmappedids", req.pathParams);
    
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
        const res: operations.CloudsearchDebugIdentitysourcesUnmappedidsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listUnmappedIdentitiesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
