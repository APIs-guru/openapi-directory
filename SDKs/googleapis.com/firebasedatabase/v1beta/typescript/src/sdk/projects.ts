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
   * firebasedatabaseProjectsLocationsInstancesCreate - Requests that a new DatabaseInstance be created. The state of a successfully created DatabaseInstance is ACTIVE. Only available for projects on the Blaze plan. Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo. Note that it might take a few minutes for billing enablement state to propagate to Firebase systems.
  **/
  firebasedatabaseProjectsLocationsInstancesCreate(
    req: operations.FirebasedatabaseProjectsLocationsInstancesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebasedatabaseProjectsLocationsInstancesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebasedatabaseProjectsLocationsInstancesCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{parent}/instances", req.pathParams);

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
        const res: operations.FirebasedatabaseProjectsLocationsInstancesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.databaseInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebasedatabaseProjectsLocationsInstancesDelete - Marks a DatabaseInstance to be deleted. The DatabaseInstance will be set to the DELETED state for 20 days, and will be purged within 30 days. The default database cannot be deleted. IDs for deleted database instances may never be recovered or re-used. The Database may only be deleted if it is already in a DISABLED state.
  **/
  firebasedatabaseProjectsLocationsInstancesDelete(
    req: operations.FirebasedatabaseProjectsLocationsInstancesDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebasedatabaseProjectsLocationsInstancesDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebasedatabaseProjectsLocationsInstancesDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{name}", req.pathParams);
    
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
        const res: operations.FirebasedatabaseProjectsLocationsInstancesDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.databaseInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebasedatabaseProjectsLocationsInstancesDisable - Disables a DatabaseInstance. The database can be re-enabled later using ReenableDatabaseInstance. When a database is disabled, all reads and writes are denied, including view access in the Firebase console.
  **/
  firebasedatabaseProjectsLocationsInstancesDisable(
    req: operations.FirebasedatabaseProjectsLocationsInstancesDisableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebasedatabaseProjectsLocationsInstancesDisableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebasedatabaseProjectsLocationsInstancesDisableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{name}:disable", req.pathParams);

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
        const res: operations.FirebasedatabaseProjectsLocationsInstancesDisableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.databaseInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebasedatabaseProjectsLocationsInstancesGet - Gets the DatabaseInstance identified by the specified resource name.
  **/
  firebasedatabaseProjectsLocationsInstancesGet(
    req: operations.FirebasedatabaseProjectsLocationsInstancesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebasedatabaseProjectsLocationsInstancesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebasedatabaseProjectsLocationsInstancesGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{name}", req.pathParams);
    
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
        const res: operations.FirebasedatabaseProjectsLocationsInstancesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.databaseInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebasedatabaseProjectsLocationsInstancesList - Lists each DatabaseInstance associated with the specified parent project. The list items are returned in no particular order, but will be a consistent view of the database instances when additional requests are made with a `pageToken`. The resulting list contains instances in any STATE. The list results may be stale by a few seconds. Use GetDatabaseInstance for consistent reads.
  **/
  firebasedatabaseProjectsLocationsInstancesList(
    req: operations.FirebasedatabaseProjectsLocationsInstancesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebasedatabaseProjectsLocationsInstancesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebasedatabaseProjectsLocationsInstancesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{parent}/instances", req.pathParams);
    
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
        const res: operations.FirebasedatabaseProjectsLocationsInstancesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listDatabaseInstancesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebasedatabaseProjectsLocationsInstancesReenable - Enables a DatabaseInstance. The database must have been disabled previously using DisableDatabaseInstance. The state of a successfully reenabled DatabaseInstance is ACTIVE.
  **/
  firebasedatabaseProjectsLocationsInstancesReenable(
    req: operations.FirebasedatabaseProjectsLocationsInstancesReenableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebasedatabaseProjectsLocationsInstancesReenableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebasedatabaseProjectsLocationsInstancesReenableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{name}:reenable", req.pathParams);

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
        const res: operations.FirebasedatabaseProjectsLocationsInstancesReenableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.databaseInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firebasedatabaseProjectsLocationsInstancesUndelete - Restores a DatabaseInstance that was previously marked to be deleted. After the delete method is used, DatabaseInstances are set to the DELETED state for 20 days, and will be purged within 30 days. Databases in the DELETED state can be undeleted without losing any data. This method may only be used on a DatabaseInstance in the DELETED state. Purged DatabaseInstances may not be recovered.
  **/
  firebasedatabaseProjectsLocationsInstancesUndelete(
    req: operations.FirebasedatabaseProjectsLocationsInstancesUndeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirebasedatabaseProjectsLocationsInstancesUndeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirebasedatabaseProjectsLocationsInstancesUndeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta/{name}:undelete", req.pathParams);

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
        const res: operations.FirebasedatabaseProjectsLocationsInstancesUndeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.databaseInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
