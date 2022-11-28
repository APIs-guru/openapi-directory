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
   * identitytoolkitProjectsIdentityPlatformInitializeAuth - Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.
  **/
  identitytoolkitProjectsIdentityPlatformInitializeAuth(
    req: operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{project}/identityPlatform:initializeAuth", req.pathParams);

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
        const res: operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * identitytoolkitProjectsTenantsCreate - Create a tenant. Requires write permission on the Agent project.
  **/
  identitytoolkitProjectsTenantsCreate(
    req: operations.IdentitytoolkitProjectsTenantsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitProjectsTenantsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitProjectsTenantsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{parent}/tenants", req.pathParams);

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
        const res: operations.IdentitytoolkitProjectsTenantsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIdentitytoolkitAdminV2Tenant = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate - Create a default supported Idp configuration for an Identity Toolkit project.
  **/
  identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate(
    req: operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{parent}/defaultSupportedIdpConfigs", req.pathParams);

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
        const res: operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList - List all default supported Idp configurations for an Identity Toolkit project.
  **/
  identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList(
    req: operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{parent}/defaultSupportedIdpConfigs", req.pathParams);
    
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
        const res: operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * identitytoolkitProjectsTenantsGetIamPolicy - Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.
  **/
  identitytoolkitProjectsTenantsGetIamPolicy(
    req: operations.IdentitytoolkitProjectsTenantsGetIamPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitProjectsTenantsGetIamPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitProjectsTenantsGetIamPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{resource}:getIamPolicy", req.pathParams);

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
        const res: operations.IdentitytoolkitProjectsTenantsGetIamPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleIamV1Policy = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * identitytoolkitProjectsTenantsInboundSamlConfigsCreate - Create an inbound SAML configuration for an Identity Toolkit project.
  **/
  identitytoolkitProjectsTenantsInboundSamlConfigsCreate(
    req: operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{parent}/inboundSamlConfigs", req.pathParams);

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
        const res: operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIdentitytoolkitAdminV2InboundSamlConfig = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * identitytoolkitProjectsTenantsInboundSamlConfigsList - List all inbound SAML configurations for an Identity Toolkit project.
  **/
  identitytoolkitProjectsTenantsInboundSamlConfigsList(
    req: operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{parent}/inboundSamlConfigs", req.pathParams);
    
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
        const res: operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * identitytoolkitProjectsTenantsList - List tenants under the given agent project. Requires read permission on the Agent project.
  **/
  identitytoolkitProjectsTenantsList(
    req: operations.IdentitytoolkitProjectsTenantsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitProjectsTenantsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitProjectsTenantsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{parent}/tenants", req.pathParams);
    
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
        const res: operations.IdentitytoolkitProjectsTenantsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIdentitytoolkitAdminV2ListTenantsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * identitytoolkitProjectsTenantsOauthIdpConfigsCreate - Create an Oidc Idp configuration for an Identity Toolkit project.
  **/
  identitytoolkitProjectsTenantsOauthIdpConfigsCreate(
    req: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{parent}/oauthIdpConfigs", req.pathParams);

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
        const res: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIdentitytoolkitAdminV2OAuthIdpConfig = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * identitytoolkitProjectsTenantsOauthIdpConfigsDelete - Delete an Oidc Idp configuration for an Identity Toolkit project.
  **/
  identitytoolkitProjectsTenantsOauthIdpConfigsDelete(
    req: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest(req);
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
        const res: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * identitytoolkitProjectsTenantsOauthIdpConfigsGet - Retrieve an Oidc Idp configuration for an Identity Toolkit project.
  **/
  identitytoolkitProjectsTenantsOauthIdpConfigsGet(
    req: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetRequest(req);
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
        const res: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIdentitytoolkitAdminV2OAuthIdpConfig = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * identitytoolkitProjectsTenantsOauthIdpConfigsList - List all Oidc Idp configurations for an Identity Toolkit project.
  **/
  identitytoolkitProjectsTenantsOauthIdpConfigsList(
    req: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{parent}/oauthIdpConfigs", req.pathParams);
    
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
        const res: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * identitytoolkitProjectsTenantsOauthIdpConfigsPatch - Update an Oidc Idp configuration for an Identity Toolkit project.
  **/
  identitytoolkitProjectsTenantsOauthIdpConfigsPatch(
    req: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest(req);
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
        const res: operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudIdentitytoolkitAdminV2OAuthIdpConfig = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * identitytoolkitProjectsTenantsSetIamPolicy - Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.
  **/
  identitytoolkitProjectsTenantsSetIamPolicy(
    req: operations.IdentitytoolkitProjectsTenantsSetIamPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitProjectsTenantsSetIamPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitProjectsTenantsSetIamPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{resource}:setIamPolicy", req.pathParams);

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
        const res: operations.IdentitytoolkitProjectsTenantsSetIamPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleIamV1Policy = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * identitytoolkitProjectsTenantsTestIamPermissions - Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.
  **/
  identitytoolkitProjectsTenantsTestIamPermissions(
    req: operations.IdentitytoolkitProjectsTenantsTestIamPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdentitytoolkitProjectsTenantsTestIamPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdentitytoolkitProjectsTenantsTestIamPermissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/{resource}:testIamPermissions", req.pathParams);

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
        const res: operations.IdentitytoolkitProjectsTenantsTestIamPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleIamV1TestIamPermissionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
