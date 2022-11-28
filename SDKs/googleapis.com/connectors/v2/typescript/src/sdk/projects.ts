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
   * connectorsProjectsLocationsConnectionsActionsExecute - Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request.
  **/
  connectorsProjectsLocationsConnectionsActionsExecute(
    req: operations.ConnectorsProjectsLocationsConnectionsActionsExecuteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConnectorsProjectsLocationsConnectionsActionsExecuteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConnectorsProjectsLocationsConnectionsActionsExecuteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{name}:execute", req.pathParams);

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
        const res: operations.ConnectorsProjectsLocationsConnectionsActionsExecuteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.executeActionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * connectorsProjectsLocationsConnectionsActionsList - Gets the schema of all the actions supported by the connector.
  **/
  connectorsProjectsLocationsConnectionsActionsList(
    req: operations.ConnectorsProjectsLocationsConnectionsActionsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConnectorsProjectsLocationsConnectionsActionsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConnectorsProjectsLocationsConnectionsActionsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{parent}/actions", req.pathParams);
    
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
        const res: operations.ConnectorsProjectsLocationsConnectionsActionsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listActionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * connectorsProjectsLocationsConnectionsEntityTypesEntitiesCreate - Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system.
  **/
  connectorsProjectsLocationsConnectionsEntityTypesEntitiesCreate(
    req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{parent}/entities", req.pathParams);

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
        const res: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.entity = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * connectorsProjectsLocationsConnectionsEntityTypesEntitiesDelete - Deletes an existing entity row matching the entity type and entity id specified in the request.
  **/
  connectorsProjectsLocationsConnectionsEntityTypesEntitiesDelete(
    req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{name}", req.pathParams);
    
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
        method: "delete",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.empty = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * connectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditions - Deletes entities based on conditions specified in the request and not on entity id.
  **/
  connectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditions(
    req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{entityType}/entities:deleteEntitiesWithConditions", req.pathParams);
    
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
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.empty = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * connectorsProjectsLocationsConnectionsEntityTypesEntitiesGet - Gets a single entity row matching the entity type and entity id specified in the request.
  **/
  connectorsProjectsLocationsConnectionsEntityTypesEntitiesGet(
    req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{name}", req.pathParams);
    
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
        const res: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.entity = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * connectorsProjectsLocationsConnectionsEntityTypesEntitiesList - Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors.
  **/
  connectorsProjectsLocationsConnectionsEntityTypesEntitiesList(
    req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{parent}/entities", req.pathParams);
    
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
        const res: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listEntitiesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * connectorsProjectsLocationsConnectionsEntityTypesEntitiesPatch - Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system.
  **/
  connectorsProjectsLocationsConnectionsEntityTypesEntitiesPatch(
    req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{name}", req.pathParams);

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
        const res: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.entity = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * connectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditions - Updates entities based on conditions specified in the request and not on entity id.
  **/
  connectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditions(
    req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{entityType}/entities:updateEntitiesWithConditions", req.pathParams);

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
        const res: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateEntitiesWithConditionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * connectorsProjectsLocationsConnectionsEntityTypesList - Lists metadata related to all entity types present in the external system.
  **/
  connectorsProjectsLocationsConnectionsEntityTypesList(
    req: operations.ConnectorsProjectsLocationsConnectionsEntityTypesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConnectorsProjectsLocationsConnectionsEntityTypesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConnectorsProjectsLocationsConnectionsEntityTypesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{parent}/entityTypes", req.pathParams);
    
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
        const res: operations.ConnectorsProjectsLocationsConnectionsEntityTypesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listEntityTypesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * connectorsProjectsLocationsConnectionsExecuteSqlQuery - Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select * from Account a, Order o where a.Id = o.AccountId'.
  **/
  connectorsProjectsLocationsConnectionsExecuteSqlQuery(
    req: operations.ConnectorsProjectsLocationsConnectionsExecuteSqlQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConnectorsProjectsLocationsConnectionsExecuteSqlQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConnectorsProjectsLocationsConnectionsExecuteSqlQueryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{connection}:executeSqlQuery", req.pathParams);

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
        const res: operations.ConnectorsProjectsLocationsConnectionsExecuteSqlQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.executeSqlQueryResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
