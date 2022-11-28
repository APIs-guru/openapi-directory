import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Accounts {
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
   * tagmanagerAccountsContainersCombine - Combines Containers.
  **/
  tagmanagerAccountsContainersCombine(
    req: operations.TagmanagerAccountsContainersCombineRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersCombineResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersCombineRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{path}:combine", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersCombineResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.container = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersCreate - Creates a Container.
  **/
  tagmanagerAccountsContainersCreate(
    req: operations.TagmanagerAccountsContainersCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/containers", req.pathParams);

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
        const res: operations.TagmanagerAccountsContainersCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.container = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersDestinationsLink - Adds a Destination to this Container and removes it from the Container to which it is currently linked.
  **/
  tagmanagerAccountsContainersDestinationsLink(
    req: operations.TagmanagerAccountsContainersDestinationsLinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersDestinationsLinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersDestinationsLinkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/destinations:link", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersDestinationsLinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.destination = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersDestinationsList - Lists all Destinations linked to a GTM Container.
  **/
  tagmanagerAccountsContainersDestinationsList(
    req: operations.TagmanagerAccountsContainersDestinationsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersDestinationsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersDestinationsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/destinations", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersDestinationsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listDestinationsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersEnvironmentsCreate - Creates a GTM Environment.
  **/
  tagmanagerAccountsContainersEnvironmentsCreate(
    req: operations.TagmanagerAccountsContainersEnvironmentsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersEnvironmentsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersEnvironmentsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/environments", req.pathParams);

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
        const res: operations.TagmanagerAccountsContainersEnvironmentsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.environment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersEnvironmentsList - Lists all GTM Environments of a GTM Container.
  **/
  tagmanagerAccountsContainersEnvironmentsList(
    req: operations.TagmanagerAccountsContainersEnvironmentsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersEnvironmentsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersEnvironmentsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/environments", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersEnvironmentsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listEnvironmentsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersEnvironmentsReauthorize - Re-generates the authorization code for a GTM Environment.
  **/
  tagmanagerAccountsContainersEnvironmentsReauthorize(
    req: operations.TagmanagerAccountsContainersEnvironmentsReauthorizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersEnvironmentsReauthorizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersEnvironmentsReauthorizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{path}:reauthorize", req.pathParams);

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
        const res: operations.TagmanagerAccountsContainersEnvironmentsReauthorizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.environment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersList - Lists all Containers that belongs to a GTM Account.
  **/
  tagmanagerAccountsContainersList(
    req: operations.TagmanagerAccountsContainersListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/containers", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listContainersResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersLookup - Looks up a Container by destination ID.
  **/
  tagmanagerAccountsContainersLookup(
    req: operations.TagmanagerAccountsContainersLookupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersLookupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersLookupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tagmanager/v2/accounts/containers:lookup";
    
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
        const res: operations.TagmanagerAccountsContainersLookupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.container = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersMoveTagId - Move Tag ID out of a Container.
  **/
  tagmanagerAccountsContainersMoveTagId(
    req: operations.TagmanagerAccountsContainersMoveTagIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersMoveTagIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersMoveTagIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{path}:move_tag_id", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersMoveTagIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.container = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersSnippet - Gets the tagging snippet for a Container.
  **/
  tagmanagerAccountsContainersSnippet(
    req: operations.TagmanagerAccountsContainersSnippetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersSnippetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersSnippetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{path}:snippet", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersSnippetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getContainerSnippetResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersVersionHeadersLatest - Gets the latest container version header
  **/
  tagmanagerAccountsContainersVersionHeadersLatest(
    req: operations.TagmanagerAccountsContainersVersionHeadersLatestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersVersionHeadersLatestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersVersionHeadersLatestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/version_headers:latest", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersVersionHeadersLatestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.containerVersionHeader = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersVersionHeadersList - Lists all Container Versions of a GTM Container.
  **/
  tagmanagerAccountsContainersVersionHeadersList(
    req: operations.TagmanagerAccountsContainersVersionHeadersListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersVersionHeadersListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersVersionHeadersListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/version_headers", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersVersionHeadersListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listContainerVersionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersVersionsLive - Gets the live (i.e. published) container version
  **/
  tagmanagerAccountsContainersVersionsLive(
    req: operations.TagmanagerAccountsContainersVersionsLiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersVersionsLiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersVersionsLiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/versions:live", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersVersionsLiveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.containerVersion = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersVersionsPublish - Publishes a Container Version.
  **/
  tagmanagerAccountsContainersVersionsPublish(
    req: operations.TagmanagerAccountsContainersVersionsPublishRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersVersionsPublishResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersVersionsPublishRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{path}:publish", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersVersionsPublishResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.publishContainerVersionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersVersionsSetLatest - Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
  **/
  tagmanagerAccountsContainersVersionsSetLatest(
    req: operations.TagmanagerAccountsContainersVersionsSetLatestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersVersionsSetLatestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersVersionsSetLatestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{path}:set_latest", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersVersionsSetLatestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.containerVersion = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersVersionsUndelete - Undeletes a Container Version.
  **/
  tagmanagerAccountsContainersVersionsUndelete(
    req: operations.TagmanagerAccountsContainersVersionsUndeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersVersionsUndeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersVersionsUndeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{path}:undelete", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersVersionsUndeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.containerVersion = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesBuiltInVariablesCreate - Creates one or more GTM Built-In Variables.
  **/
  tagmanagerAccountsContainersWorkspacesBuiltInVariablesCreate(
    req: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/built_in_variables", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createBuiltInVariableResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesBuiltInVariablesList - Lists all the enabled Built-In Variables of a GTM Container.
  **/
  tagmanagerAccountsContainersWorkspacesBuiltInVariablesList(
    req: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/built_in_variables", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listEnabledBuiltInVariablesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesBuiltInVariablesRevert - Reverts changes to a GTM Built-In Variables in a GTM Workspace.
  **/
  tagmanagerAccountsContainersWorkspacesBuiltInVariablesRevert(
    req: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{path}/built_in_variables:revert", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.revertBuiltInVariableResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesClientsCreate - Creates a GTM Client.
  **/
  tagmanagerAccountsContainersWorkspacesClientsCreate(
    req: operations.TagmanagerAccountsContainersWorkspacesClientsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesClientsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesClientsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/clients", req.pathParams);

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
        const res: operations.TagmanagerAccountsContainersWorkspacesClientsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.client = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesClientsList - Lists all GTM Clients of a GTM container workspace.
  **/
  tagmanagerAccountsContainersWorkspacesClientsList(
    req: operations.TagmanagerAccountsContainersWorkspacesClientsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesClientsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesClientsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/clients", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersWorkspacesClientsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listClientsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesCreate - Creates a Workspace.
  **/
  tagmanagerAccountsContainersWorkspacesCreate(
    req: operations.TagmanagerAccountsContainersWorkspacesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/workspaces", req.pathParams);

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
        const res: operations.TagmanagerAccountsContainersWorkspacesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.workspace = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesCreateVersion - Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
  **/
  tagmanagerAccountsContainersWorkspacesCreateVersion(
    req: operations.TagmanagerAccountsContainersWorkspacesCreateVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesCreateVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesCreateVersionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{path}:create_version", req.pathParams);

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
        const res: operations.TagmanagerAccountsContainersWorkspacesCreateVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createContainerVersionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesFoldersCreate - Creates a GTM Folder.
  **/
  tagmanagerAccountsContainersWorkspacesFoldersCreate(
    req: operations.TagmanagerAccountsContainersWorkspacesFoldersCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesFoldersCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesFoldersCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/folders", req.pathParams);

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
        const res: operations.TagmanagerAccountsContainersWorkspacesFoldersCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.folder = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesFoldersEntities - List all entities in a GTM Folder.
  **/
  tagmanagerAccountsContainersWorkspacesFoldersEntities(
    req: operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{path}:entities", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.folderEntities = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesFoldersList - Lists all GTM Folders of a Container.
  **/
  tagmanagerAccountsContainersWorkspacesFoldersList(
    req: operations.TagmanagerAccountsContainersWorkspacesFoldersListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesFoldersListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesFoldersListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/folders", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersWorkspacesFoldersListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listFoldersResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolder - Moves entities to a GTM Folder.
  **/
  tagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolder(
    req: operations.TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{path}:move_entities_to_folder", req.pathParams);

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
        const res: operations.TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesGetStatus - Finds conflicting and modified entities in the workspace.
  **/
  tagmanagerAccountsContainersWorkspacesGetStatus(
    req: operations.TagmanagerAccountsContainersWorkspacesGetStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesGetStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesGetStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{path}/status", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersWorkspacesGetStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getWorkspaceStatusResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesGtagConfigCreate - Creates a Google tag config.
  **/
  tagmanagerAccountsContainersWorkspacesGtagConfigCreate(
    req: operations.TagmanagerAccountsContainersWorkspacesGtagConfigCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesGtagConfigCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesGtagConfigCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/gtag_config", req.pathParams);

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
        const res: operations.TagmanagerAccountsContainersWorkspacesGtagConfigCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.gtagConfig = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesGtagConfigList - Lists all Google tag configs in a Container.
  **/
  tagmanagerAccountsContainersWorkspacesGtagConfigList(
    req: operations.TagmanagerAccountsContainersWorkspacesGtagConfigListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesGtagConfigListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesGtagConfigListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/gtag_config", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersWorkspacesGtagConfigListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listGtagConfigResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesList - Lists all Workspaces that belong to a GTM Container.
  **/
  tagmanagerAccountsContainersWorkspacesList(
    req: operations.TagmanagerAccountsContainersWorkspacesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/workspaces", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersWorkspacesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listWorkspacesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesQuickPreview - Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
  **/
  tagmanagerAccountsContainersWorkspacesQuickPreview(
    req: operations.TagmanagerAccountsContainersWorkspacesQuickPreviewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesQuickPreviewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesQuickPreviewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{path}:quick_preview", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersWorkspacesQuickPreviewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.quickPreviewResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesResolveConflict - Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
  **/
  tagmanagerAccountsContainersWorkspacesResolveConflict(
    req: operations.TagmanagerAccountsContainersWorkspacesResolveConflictRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesResolveConflictResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesResolveConflictRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{path}:resolve_conflict", req.pathParams);

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
        const res: operations.TagmanagerAccountsContainersWorkspacesResolveConflictResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesSync - Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
  **/
  tagmanagerAccountsContainersWorkspacesSync(
    req: operations.TagmanagerAccountsContainersWorkspacesSyncRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesSyncResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesSyncRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{path}:sync", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersWorkspacesSyncResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syncWorkspaceResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesTagsCreate - Creates a GTM Tag.
  **/
  tagmanagerAccountsContainersWorkspacesTagsCreate(
    req: operations.TagmanagerAccountsContainersWorkspacesTagsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesTagsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesTagsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/tags", req.pathParams);

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
        const res: operations.TagmanagerAccountsContainersWorkspacesTagsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tag = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesTagsList - Lists all GTM Tags of a Container.
  **/
  tagmanagerAccountsContainersWorkspacesTagsList(
    req: operations.TagmanagerAccountsContainersWorkspacesTagsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesTagsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesTagsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/tags", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersWorkspacesTagsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listTagsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesTemplatesCreate - Creates a GTM Custom Template.
  **/
  tagmanagerAccountsContainersWorkspacesTemplatesCreate(
    req: operations.TagmanagerAccountsContainersWorkspacesTemplatesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesTemplatesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesTemplatesCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/templates", req.pathParams);

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
        const res: operations.TagmanagerAccountsContainersWorkspacesTemplatesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.customTemplate = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesTemplatesList - Lists all GTM Templates of a GTM container workspace.
  **/
  tagmanagerAccountsContainersWorkspacesTemplatesList(
    req: operations.TagmanagerAccountsContainersWorkspacesTemplatesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesTemplatesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesTemplatesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/templates", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersWorkspacesTemplatesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listTemplatesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesTriggersCreate - Creates a GTM Trigger.
  **/
  tagmanagerAccountsContainersWorkspacesTriggersCreate(
    req: operations.TagmanagerAccountsContainersWorkspacesTriggersCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesTriggersCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesTriggersCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/triggers", req.pathParams);

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
        const res: operations.TagmanagerAccountsContainersWorkspacesTriggersCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trigger = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesTriggersList - Lists all GTM Triggers of a Container.
  **/
  tagmanagerAccountsContainersWorkspacesTriggersList(
    req: operations.TagmanagerAccountsContainersWorkspacesTriggersListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesTriggersListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesTriggersListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/triggers", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersWorkspacesTriggersListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listTriggersResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesVariablesCreate - Creates a GTM Variable.
  **/
  tagmanagerAccountsContainersWorkspacesVariablesCreate(
    req: operations.TagmanagerAccountsContainersWorkspacesVariablesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesVariablesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesVariablesCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/variables", req.pathParams);

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
        const res: operations.TagmanagerAccountsContainersWorkspacesVariablesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.variable = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesVariablesList - Lists all GTM Variables of a Container.
  **/
  tagmanagerAccountsContainersWorkspacesVariablesList(
    req: operations.TagmanagerAccountsContainersWorkspacesVariablesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesVariablesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesVariablesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/variables", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersWorkspacesVariablesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listVariablesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesZonesCreate - Creates a GTM Zone.
  **/
  tagmanagerAccountsContainersWorkspacesZonesCreate(
    req: operations.TagmanagerAccountsContainersWorkspacesZonesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesZonesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesZonesCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/zones", req.pathParams);

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
        const res: operations.TagmanagerAccountsContainersWorkspacesZonesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.zone = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesZonesList - Lists all GTM Zones of a GTM container workspace.
  **/
  tagmanagerAccountsContainersWorkspacesZonesList(
    req: operations.TagmanagerAccountsContainersWorkspacesZonesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesZonesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesZonesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/zones", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersWorkspacesZonesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listZonesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsContainersWorkspacesZonesRevert - Reverts changes to a GTM Zone in a GTM Workspace.
  **/
  tagmanagerAccountsContainersWorkspacesZonesRevert(
    req: operations.TagmanagerAccountsContainersWorkspacesZonesRevertRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsContainersWorkspacesZonesRevertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsContainersWorkspacesZonesRevertRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{path}:revert", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsContainersWorkspacesZonesRevertResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.revertZoneResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsList - Lists all GTM Accounts that a user has access to.
  **/
  tagmanagerAccountsList(
    req: operations.TagmanagerAccountsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tagmanager/v2/accounts";
    
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
        const res: operations.TagmanagerAccountsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAccountsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsUserPermissionsCreate - Creates a user's Account & Container access.
  **/
  tagmanagerAccountsUserPermissionsCreate(
    req: operations.TagmanagerAccountsUserPermissionsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsUserPermissionsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsUserPermissionsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/user_permissions", req.pathParams);

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
        const res: operations.TagmanagerAccountsUserPermissionsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsUserPermissionsDelete - Removes a user from the account, revoking access to it and all of its containers.
  **/
  tagmanagerAccountsUserPermissionsDelete(
    req: operations.TagmanagerAccountsUserPermissionsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsUserPermissionsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsUserPermissionsDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{path}", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsUserPermissionsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsUserPermissionsGet - Gets a user's Account & Container access.
  **/
  tagmanagerAccountsUserPermissionsGet(
    req: operations.TagmanagerAccountsUserPermissionsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsUserPermissionsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsUserPermissionsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{path}", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsUserPermissionsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsUserPermissionsList - List all users that have access to the account along with Account and Container user access granted to each of them.
  **/
  tagmanagerAccountsUserPermissionsList(
    req: operations.TagmanagerAccountsUserPermissionsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsUserPermissionsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsUserPermissionsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{parent}/user_permissions", req.pathParams);
    
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
        const res: operations.TagmanagerAccountsUserPermissionsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listUserPermissionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagmanagerAccountsUserPermissionsUpdate - Updates a user's Account & Container access.
  **/
  tagmanagerAccountsUserPermissionsUpdate(
    req: operations.TagmanagerAccountsUserPermissionsUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagmanagerAccountsUserPermissionsUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagmanagerAccountsUserPermissionsUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tagmanager/v2/{path}", req.pathParams);

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
        const res: operations.TagmanagerAccountsUserPermissionsUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
