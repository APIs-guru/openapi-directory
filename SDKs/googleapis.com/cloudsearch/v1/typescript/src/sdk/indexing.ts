import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Indexing {
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
   * cloudsearchIndexingDatasourcesDeleteSchema - Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute.
  **/
  cloudsearchIndexingDatasourcesDeleteSchema(
    req: operations.CloudsearchIndexingDatasourcesDeleteSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudsearchIndexingDatasourcesDeleteSchemaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudsearchIndexingDatasourcesDeleteSchemaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/indexing/{name}/schema", req.pathParams);
    
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
        const res: operations.CloudsearchIndexingDatasourcesDeleteSchemaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudsearchIndexingDatasourcesGetSchema - Gets the schema of a data source. **Note:** This API requires an admin or service account to execute.
  **/
  cloudsearchIndexingDatasourcesGetSchema(
    req: operations.CloudsearchIndexingDatasourcesGetSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudsearchIndexingDatasourcesGetSchemaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudsearchIndexingDatasourcesGetSchemaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/indexing/{name}/schema", req.pathParams);
    
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
        const res: operations.CloudsearchIndexingDatasourcesGetSchemaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.schema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudsearchIndexingDatasourcesItemsDelete - Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
  **/
  cloudsearchIndexingDatasourcesItemsDelete(
    req: operations.CloudsearchIndexingDatasourcesItemsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudsearchIndexingDatasourcesItemsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudsearchIndexingDatasourcesItemsDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/indexing/{name}", req.pathParams);
    
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
        const res: operations.CloudsearchIndexingDatasourcesItemsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudsearchIndexingDatasourcesItemsDeleteQueueItems - Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
  **/
  cloudsearchIndexingDatasourcesItemsDeleteQueueItems(
    req: operations.CloudsearchIndexingDatasourcesItemsDeleteQueueItemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudsearchIndexingDatasourcesItemsDeleteQueueItemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudsearchIndexingDatasourcesItemsDeleteQueueItemsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/indexing/{name}/items:deleteQueueItems", req.pathParams);

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
        const res: operations.CloudsearchIndexingDatasourcesItemsDeleteQueueItemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudsearchIndexingDatasourcesItemsGet - Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
  **/
  cloudsearchIndexingDatasourcesItemsGet(
    req: operations.CloudsearchIndexingDatasourcesItemsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudsearchIndexingDatasourcesItemsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudsearchIndexingDatasourcesItemsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/indexing/{name}", req.pathParams);
    
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
        const res: operations.CloudsearchIndexingDatasourcesItemsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.item = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudsearchIndexingDatasourcesItemsIndex - Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
  **/
  cloudsearchIndexingDatasourcesItemsIndex(
    req: operations.CloudsearchIndexingDatasourcesItemsIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudsearchIndexingDatasourcesItemsIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudsearchIndexingDatasourcesItemsIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/indexing/{name}:index", req.pathParams);

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
        const res: operations.CloudsearchIndexingDatasourcesItemsIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudsearchIndexingDatasourcesItemsList - Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
  **/
  cloudsearchIndexingDatasourcesItemsList(
    req: operations.CloudsearchIndexingDatasourcesItemsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudsearchIndexingDatasourcesItemsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudsearchIndexingDatasourcesItemsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/indexing/{name}/items", req.pathParams);
    
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
        const res: operations.CloudsearchIndexingDatasourcesItemsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listItemsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudsearchIndexingDatasourcesItemsPoll - Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
  **/
  cloudsearchIndexingDatasourcesItemsPoll(
    req: operations.CloudsearchIndexingDatasourcesItemsPollRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudsearchIndexingDatasourcesItemsPollResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudsearchIndexingDatasourcesItemsPollRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/indexing/{name}/items:poll", req.pathParams);

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
        const res: operations.CloudsearchIndexingDatasourcesItemsPollResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pollItemsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudsearchIndexingDatasourcesItemsPush - Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
  **/
  cloudsearchIndexingDatasourcesItemsPush(
    req: operations.CloudsearchIndexingDatasourcesItemsPushRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudsearchIndexingDatasourcesItemsPushResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudsearchIndexingDatasourcesItemsPushRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/indexing/{name}:push", req.pathParams);

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
        const res: operations.CloudsearchIndexingDatasourcesItemsPushResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.item = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudsearchIndexingDatasourcesItemsUnreserve - Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
  **/
  cloudsearchIndexingDatasourcesItemsUnreserve(
    req: operations.CloudsearchIndexingDatasourcesItemsUnreserveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudsearchIndexingDatasourcesItemsUnreserveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudsearchIndexingDatasourcesItemsUnreserveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/indexing/{name}/items:unreserve", req.pathParams);

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
        const res: operations.CloudsearchIndexingDatasourcesItemsUnreserveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudsearchIndexingDatasourcesItemsUpload - Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
  **/
  cloudsearchIndexingDatasourcesItemsUpload(
    req: operations.CloudsearchIndexingDatasourcesItemsUploadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudsearchIndexingDatasourcesItemsUploadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudsearchIndexingDatasourcesItemsUploadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/indexing/{name}:upload", req.pathParams);

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
        const res: operations.CloudsearchIndexingDatasourcesItemsUploadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.uploadItemRef = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudsearchIndexingDatasourcesUpdateSchema - Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute.
  **/
  cloudsearchIndexingDatasourcesUpdateSchema(
    req: operations.CloudsearchIndexingDatasourcesUpdateSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudsearchIndexingDatasourcesUpdateSchemaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudsearchIndexingDatasourcesUpdateSchemaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/indexing/{name}/schema", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CloudsearchIndexingDatasourcesUpdateSchemaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
