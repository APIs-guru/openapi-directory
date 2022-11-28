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
   * integrationsProjectsLocationsAppsScriptProjectsCreate - Creates an Apps Script project.
  **/
  integrationsProjectsLocationsAppsScriptProjectsCreate(
    req: operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/appsScriptProjects", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaCreateAppsScriptProjectResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsAppsScriptProjectsLink - Links a existing Apps Script project.
  **/
  integrationsProjectsLocationsAppsScriptProjectsLink(
    req: operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/appsScriptProjects:link", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaLinkAppsScriptProjectResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsConnectionsList - Lists Connections in a given project and location.
  **/
  integrationsProjectsLocationsConnectionsList(
    req: operations.IntegrationsProjectsLocationsConnectionsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsConnectionsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsConnectionsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/connections", req.pathParams);
    
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
        const res: operations.IntegrationsProjectsLocationsConnectionsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListConnectionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsConnectionsRuntimeActionSchemasList - Lists the JSON schemas for the inputs and outputs of actions, filtered by action name.
  **/
  integrationsProjectsLocationsConnectionsRuntimeActionSchemasList(
    req: operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/runtimeActionSchemas", req.pathParams);
    
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
        const res: operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsConnectionsRuntimeEntitySchemasList - Lists the JSON schemas for the properties of runtime entities, filtered by entity name.
  **/
  integrationsProjectsLocationsConnectionsRuntimeEntitySchemasList(
    req: operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/runtimeEntitySchemas", req.pathParams);
    
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
        const res: operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsAuthConfigsCreate - Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.
  **/
  integrationsProjectsLocationsProductsAuthConfigsCreate(
    req: operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/authConfigs", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaAuthConfig = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsAuthConfigsList - Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.
  **/
  integrationsProjectsLocationsProductsAuthConfigsList(
    req: operations.IntegrationsProjectsLocationsProductsAuthConfigsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsAuthConfigsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsAuthConfigsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/authConfigs", req.pathParams);
    
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
        const res: operations.IntegrationsProjectsLocationsProductsAuthConfigsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListAuthConfigsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsCertificatesCreate - Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.
  **/
  integrationsProjectsLocationsProductsCertificatesCreate(
    req: operations.IntegrationsProjectsLocationsProductsCertificatesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsCertificatesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsCertificatesCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/certificates", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsProductsCertificatesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaCertificate = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsCertificatesList - List all the certificates that match the filter. Restrict to certificate of current client only.
  **/
  integrationsProjectsLocationsProductsCertificatesList(
    req: operations.IntegrationsProjectsLocationsProductsCertificatesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsCertificatesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsCertificatesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/certificates", req.pathParams);
    
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
        const res: operations.IntegrationsProjectsLocationsProductsCertificatesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListCertificatesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsCreateBundle - PROTECT WITH A VISIBILITY LABEL. THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. Create a bundle.
  **/
  integrationsProjectsLocationsProductsCreateBundle(
    req: operations.IntegrationsProjectsLocationsProductsCreateBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsCreateBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsCreateBundleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}:createBundle", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsProductsCreateBundleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaCreateBundleResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationsArchiveBundle - PROTECT WITH A VISIBILITY LABEL. THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. Soft-deletes the bundle.
  **/
  integrationsProjectsLocationsProductsIntegrationsArchiveBundle(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:archiveBundle", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaArchiveBundleResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationsExecute - Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.
  **/
  integrationsProjectsLocationsProductsIntegrationsExecute(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:execute", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaExecuteIntegrationsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationsExecutionsCancel - Cancellation of an execution
  **/
  integrationsProjectsLocationsProductsIntegrationsExecutionsCancel(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:cancel", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaCancelExecutionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationsExecutionsList - Lists the status of the integration executions.
  **/
  integrationsProjectsLocationsProductsIntegrationsExecutionsList(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/executions", req.pathParams);
    
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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListExecutionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLift - * Lifts suspension for advanced suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.
  **/
  integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLift(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:lift", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaLiftSuspensionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsList - * Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.
  **/
  integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsList(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/suspensions", req.pathParams);
    
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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListSuspensionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolve - * Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.
  **/
  integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolve(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:resolve", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaResolveSuspensionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsList - Lists the snapshots of a given integration executions. This RPC is not being used.
  **/
  integrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsList(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/executionsnapshots", req.pathParams);
    
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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListExecutionSnapshotsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationsList - Returns the list of all integrations in the specified project.
  **/
  integrationsProjectsLocationsProductsIntegrationsList(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/integrations", req.pathParams);
    
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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListIntegrationsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationsMonitorexecutionstats - Get execution stats
  **/
  integrationsProjectsLocationsProductsIntegrationsMonitorexecutionstats(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}:monitorexecutionstats", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaMonitorExecutionStatsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationsSchedule - Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.
  **/
  integrationsProjectsLocationsProductsIntegrationsSchedule(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:schedule", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaScheduleIntegrationsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationsVersionsArchive - Soft-deletes the integration. Changes the status of the integration to ARCHIVED. If the integration being ARCHIVED is tagged as "HEAD", the tag is removed from this snapshot and set to the previous non-ARCHIVED snapshot. The PUBLISH_REQUESTED, DUE_FOR_DELETION tags are removed too. This RPC throws an exception if the version being archived is DRAFT, and if the `locked_by` user is not the same as the user performing the Archive. Audit fields updated include last_modified_timestamp, last_modified_by. Any existing lock is released when Archiving a integration. Currently, there is no unarchive mechanism.
  **/
  integrationsProjectsLocationsProductsIntegrationsVersionsArchive(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:archive", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaArchiveIntegrationVersionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationsVersionsDeactivate - Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.
  **/
  integrationsProjectsLocationsProductsIntegrationsVersionsDeactivate(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:deactivate", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaDeactivateIntegrationVersionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationsVersionsDownload - Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.
  **/
  integrationsProjectsLocationsProductsIntegrationsVersionsDownload(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:download", req.pathParams);
    
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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaDownloadIntegrationVersionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationsVersionsGetBundle - PROTECT WITH A VISIBILITY LABEL. THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. RPC to get details of the Bundle
  **/
  integrationsProjectsLocationsProductsIntegrationsVersionsGetBundle(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:getBundle", req.pathParams);
    
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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaGetBundleResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationsVersionsPublish - This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.
  **/
  integrationsProjectsLocationsProductsIntegrationsVersionsPublish(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:publish", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaPublishIntegrationVersionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLock - Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.
  **/
  integrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLock(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{integrationVersion}:takeoverEditLock", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaTakeoverEditLockResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundle - THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. RPC to update the Bundle
  **/
  integrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundle(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:updateBundle", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaUpdateBundleResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationsVersionsUpload - Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.
  **/
  integrationsProjectsLocationsProductsIntegrationsVersionsUpload(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/versions:upload", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaUploadIntegrationVersionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationsVersionsValidate - Validates the given integration. If the id doesn't exist, a NotFoundException is thrown. If validation fails a CanonicalCodeException is thrown. If there was no failure an empty response is returned.
  **/
  integrationsProjectsLocationsProductsIntegrationsVersionsValidate(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:validate", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaValidateIntegrationVersionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreate - Creates an IntegrationTemplateVersion.
  **/
  integrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreate(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/versions", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaIntegrationTemplateVersion = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsIntegrationtemplatesVersionsList - Returns the list of all IntegrationTemplateVersions in the specified project.
  **/
  integrationsProjectsLocationsProductsIntegrationtemplatesVersionsList(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/versions", req.pathParams);
    
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
        const res: operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsProductsListTaskEntities - This is a UI only method and will be moved away. Returns a list of common tasks.
  **/
  integrationsProjectsLocationsProductsListTaskEntities(
    req: operations.IntegrationsProjectsLocationsProductsListTaskEntitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsListTaskEntitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsListTaskEntitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}:listTaskEntities", req.pathParams);
    
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
        const res: operations.IntegrationsProjectsLocationsProductsListTaskEntitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListTaskEntitiesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsSfdcInstancesCreate - Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.
  **/
  integrationsProjectsLocationsSfdcInstancesCreate(
    req: operations.IntegrationsProjectsLocationsSfdcInstancesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsSfdcInstancesCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/sfdcInstances", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsSfdcInstancesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaSfdcInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsSfdcInstancesList - Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.
  **/
  integrationsProjectsLocationsSfdcInstancesList(
    req: operations.IntegrationsProjectsLocationsSfdcInstancesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsSfdcInstancesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/sfdcInstances", req.pathParams);
    
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
        const res: operations.IntegrationsProjectsLocationsSfdcInstancesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListSfdcInstancesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsSfdcInstancesSfdcChannelsCreate - Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.
  **/
  integrationsProjectsLocationsSfdcInstancesSfdcChannelsCreate(
    req: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/sfdcChannels", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaSfdcChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsSfdcInstancesSfdcChannelsDelete - Deletes an sfdc channel.
  **/
  integrationsProjectsLocationsSfdcInstancesSfdcChannelsDelete(
    req: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}", req.pathParams);
    
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
        const res: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleProtobufEmpty = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsSfdcInstancesSfdcChannelsGet - Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.
  **/
  integrationsProjectsLocationsSfdcInstancesSfdcChannelsGet(
    req: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}", req.pathParams);
    
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
        const res: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaSfdcChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsSfdcInstancesSfdcChannelsList - Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.
  **/
  integrationsProjectsLocationsSfdcInstancesSfdcChannelsList(
    req: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/sfdcChannels", req.pathParams);
    
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
        const res: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListSfdcChannelsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * integrationsProjectsLocationsSfdcInstancesSfdcChannelsPatch - Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.
  **/
  integrationsProjectsLocationsSfdcInstancesSfdcChannelsPatch(
    req: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}", req.pathParams);

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
        const res: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaSfdcChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
