import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Services {
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
   * serviceusageServicesBatchEnable - Enables multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. Operation response type: `google.protobuf.Empty`
  **/
  serviceusageServicesBatchEnable(
    req: operations.ServiceusageServicesBatchEnableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServiceusageServicesBatchEnableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServiceusageServicesBatchEnableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/services:batchEnable", req.pathParams);

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
        const res: operations.ServiceusageServicesBatchEnableResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * serviceusageServicesConsumerQuotaMetricsImportAdminOverrides - Creates or updates multiple admin overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
  **/
  serviceusageServicesConsumerQuotaMetricsImportAdminOverrides(
    req: operations.ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/consumerQuotaMetrics:importAdminOverrides", req.pathParams);

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
        const res: operations.ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * serviceusageServicesConsumerQuotaMetricsImportConsumerOverrides - Creates or updates multiple consumer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
  **/
  serviceusageServicesConsumerQuotaMetricsImportConsumerOverrides(
    req: operations.ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/consumerQuotaMetrics:importConsumerOverrides", req.pathParams);

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
        const res: operations.ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * serviceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreate - Creates an admin override. An admin override is applied by an administrator of a parent folder or parent organization of the consumer receiving the override. An admin override is intended to limit the amount of quota the consumer can use out of the total quota pool allocated to all children of the folder or organization.
  **/
  serviceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreate(
    req: operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/adminOverrides", req.pathParams);

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
        const res: operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * serviceusageServicesConsumerQuotaMetricsLimitsAdminOverridesList - Lists all admin overrides on this limit.
  **/
  serviceusageServicesConsumerQuotaMetricsLimitsAdminOverridesList(
    req: operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/adminOverrides", req.pathParams);
    
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
        const res: operations.ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAdminOverridesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreate - Creates a consumer override. A consumer override is applied to the consumer on its own authority to limit its own quota usage. Consumer overrides cannot be used to grant more quota than would be allowed by admin overrides, producer overrides, or the default limit of the service.
  **/
  serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreate(
    req: operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/consumerOverrides", req.pathParams);

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
        const res: operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDelete - Deletes a consumer override.
  **/
  serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDelete(
    req: operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}", req.pathParams);
    
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
        const res: operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesList - Lists all consumer overrides on this limit.
  **/
  serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesList(
    req: operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/consumerOverrides", req.pathParams);
    
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
        const res: operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listConsumerOverridesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatch - Updates a consumer override.
  **/
  serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatch(
    req: operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}", req.pathParams);

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
        const res: operations.ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * serviceusageServicesConsumerQuotaMetricsLimitsGet - Retrieves a summary of quota information for a specific quota limit.
  **/
  serviceusageServicesConsumerQuotaMetricsLimitsGet(
    req: operations.ServiceusageServicesConsumerQuotaMetricsLimitsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServiceusageServicesConsumerQuotaMetricsLimitsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServiceusageServicesConsumerQuotaMetricsLimitsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}", req.pathParams);
    
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
        const res: operations.ServiceusageServicesConsumerQuotaMetricsLimitsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.consumerQuotaLimit = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * serviceusageServicesConsumerQuotaMetricsList - Retrieves a summary of all quota information visible to the service consumer, organized by service metric. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
  **/
  serviceusageServicesConsumerQuotaMetricsList(
    req: operations.ServiceusageServicesConsumerQuotaMetricsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServiceusageServicesConsumerQuotaMetricsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServiceusageServicesConsumerQuotaMetricsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/consumerQuotaMetrics", req.pathParams);
    
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
        const res: operations.ServiceusageServicesConsumerQuotaMetricsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listConsumerQuotaMetricsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * serviceusageServicesDisable - Disables a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled. Operation response type: `google.protobuf.Empty`
  **/
  serviceusageServicesDisable(
    req: operations.ServiceusageServicesDisableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServiceusageServicesDisableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServiceusageServicesDisableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}:disable", req.pathParams);

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
        const res: operations.ServiceusageServicesDisableResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * serviceusageServicesEnable - Enables a service so that it can be used with a project. Operation response type: `google.protobuf.Empty`
  **/
  serviceusageServicesEnable(
    req: operations.ServiceusageServicesEnableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServiceusageServicesEnableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServiceusageServicesEnableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}:enable", req.pathParams);

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
        const res: operations.ServiceusageServicesEnableResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * serviceusageServicesGenerateServiceIdentity - Generates service identity for service.
  **/
  serviceusageServicesGenerateServiceIdentity(
    req: operations.ServiceusageServicesGenerateServiceIdentityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServiceusageServicesGenerateServiceIdentityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServiceusageServicesGenerateServiceIdentityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}:generateServiceIdentity", req.pathParams);
    
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
        const res: operations.ServiceusageServicesGenerateServiceIdentityResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * serviceusageServicesList - Lists all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project.
  **/
  serviceusageServicesList(
    req: operations.ServiceusageServicesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServiceusageServicesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServiceusageServicesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{parent}/services", req.pathParams);
    
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
        const res: operations.ServiceusageServicesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listServicesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
