import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Functions {
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
   * deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchive - Delete a custom action function
   *
   * Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.
  **/
  deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchive(
    req: operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionType - Delete a custom action function
   *
   * Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.
  **/
  deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionType(
    req: operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetById - Get a custom action function
   *
   * Returns the given function for a custom workflow action.
  **/
  getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetById(
    req: operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionFunction = httpRes?.data;
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
   * getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionType - Get a custom action function
   *
   * Returns the given function for a custom workflow action.
  **/
  getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionType(
    req: operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionFunction = httpRes?.data;
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
   * getAutomationV4ActionsAppIdDefinitionIdFunctionsGetPage - Get all custom action functions
   *
   * Returns a list of all functions that are associated with the given custom workflow action.
  **/
  getAutomationV4ActionsAppIdDefinitionIdFunctionsGetPage(
    req: operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/automation/v4/actions/{appId}/{definitionId}/functions", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.collectionResponseActionFunctionIdentifierNoPaging = httpRes?.data;
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
   * putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplace - Create or replace a custom action function
   *
   * Creates or replaces a function for a custom workflow action.
  **/
  putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplace(
    req: operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}", req.pathParams);

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
        const res: operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionFunctionIdentifier = httpRes?.data;
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
   * putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionType - Create or replace a custom action function
   *
   * Creates or replaces a function for a custom workflow action.
  **/
  putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionType(
    req: operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}", req.pathParams);

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
        const res: operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionFunctionIdentifier = httpRes?.data;
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
