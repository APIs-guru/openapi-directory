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
   * servicebrokerProjectsBrokersInstancesServiceBindingsList - Lists all the bindings in the instance
  **/
  servicebrokerProjectsBrokersInstancesServiceBindingsList(
    req: operations.ServicebrokerProjectsBrokersInstancesServiceBindingsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersInstancesServiceBindingsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicebrokerProjectsBrokersInstancesServiceBindingsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/service_bindings", req.pathParams);
    
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
        const res: operations.ServicebrokerProjectsBrokersInstancesServiceBindingsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
   * servicebrokerProjectsBrokersServiceInstancesList - Lists all the instances in the brokers
   * This API is an extension and not part of the OSB spec.
   * Hence the path is a standard Google API URL.
  **/
  servicebrokerProjectsBrokersServiceInstancesList(
    req: operations.ServicebrokerProjectsBrokersServiceInstancesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersServiceInstancesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicebrokerProjectsBrokersServiceInstancesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/service_instances", req.pathParams);
    
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
        const res: operations.ServicebrokerProjectsBrokersServiceInstancesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
   * servicebrokerProjectsBrokersV2CatalogList - Lists all the Services registered with this broker for consumption for
   * given service registry broker, which contains an set of services.
   * Note, that Service producer API is separate from Broker API.
  **/
  servicebrokerProjectsBrokersV2CatalogList(
    req: operations.ServicebrokerProjectsBrokersV2CatalogListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersV2CatalogListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicebrokerProjectsBrokersV2CatalogListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/v2/catalog", req.pathParams);
    
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
        const res: operations.ServicebrokerProjectsBrokersV2CatalogListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
   * servicebrokerProjectsBrokersV2ServiceInstancesCreate - Provisions a service instance.
   * If `request.accepts_incomplete` is false and Broker cannot execute request
   * synchronously HTTP 422 error will be returned along with
   * FAILED_PRECONDITION status.
   * If `request.accepts_incomplete` is true and the Broker decides to execute
   * resource asynchronously then HTTP 202 response code will be returned and a
   * valid polling operation in the response will be included.
   * If Broker executes the request synchronously and it succeeds HTTP 201
   * response will be furnished.
   * If identical instance exists, then HTTP 200 response will be returned.
   * If an instance with identical ID but mismatching parameters exists, then
   * HTTP 409 status code will be returned.
  **/
  servicebrokerProjectsBrokersV2ServiceInstancesCreate(
    req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/v2/service_instances/{instance_id}", req.pathParams);

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
        const res: operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
   * servicebrokerProjectsBrokersV2ServiceInstancesDelete - Deprovisions a service instance.
   * For synchronous/asynchronous request details see CreateServiceInstance
   * method.
   * If service instance does not exist HTTP 410 status will be returned.
  **/
  servicebrokerProjectsBrokersV2ServiceInstancesDelete(
    req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicebrokerProjectsBrokersV2ServiceInstancesDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/v2/service_instances/{instanceId}", req.pathParams);
    
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
        const res: operations.ServicebrokerProjectsBrokersV2ServiceInstancesDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
   * servicebrokerProjectsBrokersV2ServiceInstancesGet - Gets the given service instance from the system.
   * This API is an extension and not part of the OSB spec.
   * Hence the path is a standard Google API URL.
  **/
  servicebrokerProjectsBrokersV2ServiceInstancesGet(
    req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicebrokerProjectsBrokersV2ServiceInstancesGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{name}", req.pathParams);
    
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
        const res: operations.ServicebrokerProjectsBrokersV2ServiceInstancesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
   * servicebrokerProjectsBrokersV2ServiceInstancesGetLastOperation - Returns the state of the last operation for the service instance.
   * Only last (or current) operation can be polled.
  **/
  servicebrokerProjectsBrokersV2ServiceInstancesGetLastOperation(
    req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/v2/service_instances/{instanceId}/last_operation", req.pathParams);
    
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
        const res: operations.ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
   * servicebrokerProjectsBrokersV2ServiceInstancesPatch - Updates an existing service instance.
   * See CreateServiceInstance for possible response codes.
  **/
  servicebrokerProjectsBrokersV2ServiceInstancesPatch(
    req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/v2/service_instances/{instance_id}", req.pathParams);

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
        const res: operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
   * servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate - CreateBinding generates a service binding to an existing service instance.
   * See ProviServiceInstance for async operation details.
  **/
  servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate(
    req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/v2/service_instances/{instanceId}/service_bindings/{binding_id}", req.pathParams);

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
        const res: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
   * servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet - GetBinding returns the binding information.
  **/
  servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet(
    req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/v2/service_instances/{instanceId}/service_bindings/{bindingId}", req.pathParams);
    
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
        const res: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
   * servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation - Returns the state of the last operation for the binding.
   * Only last (or current) operation can be polled.
  **/
  servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation(
    req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha1/{parent}/v2/service_instances/{instanceId}/service_bindings/{bindingId}/last_operation", req.pathParams);
    
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
        const res: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
