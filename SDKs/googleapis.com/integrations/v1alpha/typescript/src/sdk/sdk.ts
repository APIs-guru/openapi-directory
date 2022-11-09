import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://integrations.googleapis.com/",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}

// SDK Documentation: http://www.google.com
export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // IntegrationsCallbackGenerateToken - Receives the auth code and auth config id to combine that with the client id and secret to retrieve access tokens from the token endpoint. Returns either a success or error message when it's done.
  IntegrationsCallbackGenerateToken(
    req: operations.IntegrationsCallbackGenerateTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsCallbackGenerateTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsCallbackGenerateTokenRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1alpha/callback:generateToken";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsCallbackGenerateTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaGenerateTokenResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsConnectorPlatformRegionsEnumerate - Enumerates the regions for which Connector Platform is provisioned.
  IntegrationsConnectorPlatformRegionsEnumerate(
    req: operations.IntegrationsConnectorPlatformRegionsEnumerateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsConnectorPlatformRegionsEnumerateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsConnectorPlatformRegionsEnumerateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1alpha/connectorPlatformRegions:enumerate";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsConnectorPlatformRegionsEnumerateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsAppsScriptProjectsCreate - Creates an Apps Script project.
  IntegrationsProjectsLocationsAppsScriptProjectsCreate(
    req: operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/appsScriptProjects", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaCreateAppsScriptProjectResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsAppsScriptProjectsLink - Links a existing Apps Script project.
  IntegrationsProjectsLocationsAppsScriptProjectsLink(
    req: operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/appsScriptProjects:link", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaLinkAppsScriptProjectResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsConnectionsList - Lists Connections in a given project and location.
  IntegrationsProjectsLocationsConnectionsList(
    req: operations.IntegrationsProjectsLocationsConnectionsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsConnectionsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsConnectionsListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/connections", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsConnectionsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListConnectionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasList - Lists the JSON schemas for the inputs and outputs of actions, filtered by action name.
  IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasList(
    req: operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/runtimeActionSchemas", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasList - Lists the JSON schemas for the properties of runtime entities, filtered by entity name.
  IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasList(
    req: operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/runtimeEntitySchemas", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsAuthConfigsCreate - Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.
  IntegrationsProjectsLocationsProductsAuthConfigsCreate(
    req: operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/authConfigs", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaAuthConfig = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsAuthConfigsList - Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.
  IntegrationsProjectsLocationsProductsAuthConfigsList(
    req: operations.IntegrationsProjectsLocationsProductsAuthConfigsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsAuthConfigsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsAuthConfigsListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/authConfigs", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsAuthConfigsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListAuthConfigsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsCertificatesCreate - Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.
  IntegrationsProjectsLocationsProductsCertificatesCreate(
    req: operations.IntegrationsProjectsLocationsProductsCertificatesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsCertificatesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsCertificatesCreateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/certificates", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsCertificatesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaCertificate = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsCertificatesList - List all the certificates that match the filter. Restrict to certificate of current client only.
  IntegrationsProjectsLocationsProductsCertificatesList(
    req: operations.IntegrationsProjectsLocationsProductsCertificatesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsCertificatesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsCertificatesListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/certificates", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsCertificatesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListCertificatesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsCreateBundle - PROTECT WITH A VISIBILITY LABEL. THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. Create a bundle.
  IntegrationsProjectsLocationsProductsCreateBundle(
    req: operations.IntegrationsProjectsLocationsProductsCreateBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsCreateBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsCreateBundleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}:createBundle", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsCreateBundleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaCreateBundleResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationsArchiveBundle - PROTECT WITH A VISIBILITY LABEL. THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. Soft-deletes the bundle.
  IntegrationsProjectsLocationsProductsIntegrationsArchiveBundle(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:archiveBundle", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaArchiveBundleResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationsExecute - Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.
  IntegrationsProjectsLocationsProductsIntegrationsExecute(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:execute", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaExecuteIntegrationsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancel - Cancellation of an execution
  IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancel(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:cancel", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaCancelExecutionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationsExecutionsList - Lists the status of the integration executions.
  IntegrationsProjectsLocationsProductsIntegrationsExecutionsList(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/executions", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListExecutionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLift - * Lifts suspension for advanced suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.
  IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLift(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:lift", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaLiftSuspensionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsList - * Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.
  IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsList(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/suspensions", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListSuspensionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolve - * Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.
  IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolve(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:resolve", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaResolveSuspensionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsList - Lists the snapshots of a given integration executions. This RPC is not being used.
  IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsList(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/executionsnapshots", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListExecutionSnapshotsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationsList - Returns the list of all integrations in the specified project.
  IntegrationsProjectsLocationsProductsIntegrationsList(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/integrations", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListIntegrationsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstats - Get execution stats
  IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstats(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}:monitorexecutionstats", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaMonitorExecutionStatsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationsSchedule - Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.
  IntegrationsProjectsLocationsProductsIntegrationsSchedule(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:schedule", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaScheduleIntegrationsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationsVersionsArchive - Soft-deletes the integration. Changes the status of the integration to ARCHIVED. If the integration being ARCHIVED is tagged as "HEAD", the tag is removed from this snapshot and set to the previous non-ARCHIVED snapshot. The PUBLISH_REQUESTED, DUE_FOR_DELETION tags are removed too. This RPC throws an exception if the version being archived is DRAFT, and if the `locked_by` user is not the same as the user performing the Archive. Audit fields updated include last_modified_timestamp, last_modified_by. Any existing lock is released when Archiving a integration. Currently, there is no unarchive mechanism.
  IntegrationsProjectsLocationsProductsIntegrationsVersionsArchive(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:archive", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaArchiveIntegrationVersionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivate - Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.
  IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivate(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:deactivate", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaDeactivateIntegrationVersionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationsVersionsDownload - Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.
  IntegrationsProjectsLocationsProductsIntegrationsVersionsDownload(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:download", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaDownloadIntegrationVersionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundle - PROTECT WITH A VISIBILITY LABEL. THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. RPC to get details of the Bundle
  IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundle(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:getBundle", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaGetBundleResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationsVersionsPublish - This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.
  IntegrationsProjectsLocationsProductsIntegrationsVersionsPublish(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:publish", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaPublishIntegrationVersionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLock - Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.
  IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLock(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{integrationVersion}:takeoverEditLock", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaTakeoverEditLockResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundle - THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. RPC to update the Bundle
  IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundle(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:updateBundle", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaUpdateBundleResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationsVersionsUpload - Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.
  IntegrationsProjectsLocationsProductsIntegrationsVersionsUpload(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/versions:upload", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaUploadIntegrationVersionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationsVersionsValidate - Validates the given integration. If the id doesn't exist, a NotFoundException is thrown. If validation fails a CanonicalCodeException is thrown. If there was no failure an empty response is returned.
  IntegrationsProjectsLocationsProductsIntegrationsVersionsValidate(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}:validate", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaValidateIntegrationVersionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreate - Creates an IntegrationTemplateVersion.
  IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreate(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/versions", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaIntegrationTemplateVersion = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsList - Returns the list of all IntegrationTemplateVersions in the specified project.
  IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsList(
    req: operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/versions", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsProductsListTaskEntities - This is a UI only method and will be moved away. Returns a list of common tasks.
  IntegrationsProjectsLocationsProductsListTaskEntities(
    req: operations.IntegrationsProjectsLocationsProductsListTaskEntitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsProductsListTaskEntitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsProductsListTaskEntitiesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}:listTaskEntities", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsProductsListTaskEntitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListTaskEntitiesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsSfdcInstancesCreate - Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.
  IntegrationsProjectsLocationsSfdcInstancesCreate(
    req: operations.IntegrationsProjectsLocationsSfdcInstancesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsSfdcInstancesCreateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/sfdcInstances", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsSfdcInstancesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaSfdcInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsSfdcInstancesList - Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.
  IntegrationsProjectsLocationsSfdcInstancesList(
    req: operations.IntegrationsProjectsLocationsSfdcInstancesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsSfdcInstancesListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/sfdcInstances", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsSfdcInstancesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListSfdcInstancesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreate - Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.
  IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreate(
    req: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/sfdcChannels", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaSfdcChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDelete - Deletes an sfdc channel.
  IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDelete(
    req: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleProtobufEmpty = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGet - Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.
  IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGet(
    req: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaSfdcChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsList - Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.
  IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsList(
    req: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{parent}/sfdcChannels", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaListSfdcChannelsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatch - Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.
  IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatch(
    req: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1alpha/{name}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.googleCloudIntegrationsV1alphaSfdcChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
