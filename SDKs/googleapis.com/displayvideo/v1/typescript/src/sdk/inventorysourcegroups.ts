import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class InventorySourceGroups {
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
   * displayvideoInventorySourceGroupsAssignedInventorySourcesBulkEdit - Bulk edits multiple assignments between inventory sources and a single inventory source group. The operation will delete the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.deleted_assigned_inventory_sources and then create the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.created_assigned_inventory_sources.
  **/
  displayvideoInventorySourceGroupsAssignedInventorySourcesBulkEdit(
    req: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources:bulkEdit", req.pathParams);

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
        const res: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bulkEditAssignedInventorySourcesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * displayvideoInventorySourceGroupsAssignedInventorySourcesCreate - Creates an assignment between an inventory source and an inventory source group.
  **/
  displayvideoInventorySourceGroupsAssignedInventorySourcesCreate(
    req: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources", req.pathParams);

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
        const res: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.assignedInventorySource = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * displayvideoInventorySourceGroupsAssignedInventorySourcesDelete - Deletes the assignment between an inventory source and an inventory source group.
  **/
  displayvideoInventorySourceGroupsAssignedInventorySourcesDelete(
    req: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources/{assignedInventorySourceId}", req.pathParams);
    
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
        const res: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * displayvideoInventorySourceGroupsAssignedInventorySourcesList - Lists inventory sources assigned to an inventory source group.
  **/
  displayvideoInventorySourceGroupsAssignedInventorySourcesList(
    req: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources", req.pathParams);
    
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
        const res: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAssignedInventorySourcesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * displayvideoInventorySourceGroupsCreate - Creates a new inventory source group. Returns the newly created inventory source group if successful.
  **/
  displayvideoInventorySourceGroupsCreate(
    req: operations.DisplayvideoInventorySourceGroupsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoInventorySourceGroupsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayvideoInventorySourceGroupsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/inventorySourceGroups";

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
        const res: operations.DisplayvideoInventorySourceGroupsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.inventorySourceGroup = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * displayvideoInventorySourceGroupsDelete - Deletes an inventory source group.
  **/
  displayvideoInventorySourceGroupsDelete(
    req: operations.DisplayvideoInventorySourceGroupsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoInventorySourceGroupsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayvideoInventorySourceGroupsDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/inventorySourceGroups/{inventorySourceGroupId}", req.pathParams);
    
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
        const res: operations.DisplayvideoInventorySourceGroupsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * displayvideoInventorySourceGroupsGet - Gets an inventory source group.
  **/
  displayvideoInventorySourceGroupsGet(
    req: operations.DisplayvideoInventorySourceGroupsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoInventorySourceGroupsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayvideoInventorySourceGroupsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/inventorySourceGroups/{inventorySourceGroupId}", req.pathParams);
    
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
        const res: operations.DisplayvideoInventorySourceGroupsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.inventorySourceGroup = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * displayvideoInventorySourceGroupsList - Lists inventory source groups that are accessible to the current user. The order is defined by the order_by parameter.
  **/
  displayvideoInventorySourceGroupsList(
    req: operations.DisplayvideoInventorySourceGroupsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoInventorySourceGroupsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayvideoInventorySourceGroupsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/inventorySourceGroups";
    
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
        const res: operations.DisplayvideoInventorySourceGroupsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listInventorySourceGroupsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
