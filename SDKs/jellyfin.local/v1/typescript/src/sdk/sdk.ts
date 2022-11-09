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
  "http://jellyfin.local",
  "http://localhost",
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
  
  // Activate - Temporarily activates quick connect for five minutes.
  Activate(
    req: operations.ActivateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/QuickConnect/Activate";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ActivateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddListingProvider - Adds a listings provider.
  AddListingProvider(
    req: operations.AddListingProviderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddListingProviderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddListingProviderRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/ListingProviders";
    
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
        let res: operations.AddListingProviderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listingsProviderInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.listingsProviderInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.listingsProviderInfo = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddMediaPath - Add a media path to a library.
  AddMediaPath(
    req: operations.AddMediaPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddMediaPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddMediaPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/VirtualFolders/Paths";
    
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
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddMediaPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddToCollection - Adds items to a collection.
  AddToCollection(
    req: operations.AddToCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddToCollectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddToCollectionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Collections/{collectionId}/Items", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddToCollectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddToPlaylist - Adds items to a playlist.
  AddToPlaylist(
    req: operations.AddToPlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddToPlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddToPlaylistRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Playlists/{playlistId}/Items", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddToPlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddTunerHost - Adds a tuner host.
  AddTunerHost(
    req: operations.AddTunerHostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddTunerHostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddTunerHostRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/TunerHosts";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddTunerHostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.tunerHostInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.tunerHostInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.tunerHostInfo = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddUserToSession - Adds an additional user to a session.
  AddUserToSession(
    req: operations.AddUserToSessionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddUserToSessionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddUserToSessionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Sessions/{sessionId}/User/{userId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddUserToSessionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddVirtualFolder - Adds a virtual folder.
  AddVirtualFolder(
    req: operations.AddVirtualFolderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddVirtualFolderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddVirtualFolderRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/VirtualFolders";
    
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
        let res: operations.AddVirtualFolderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ApplySearchCriteria - Applies search criteria to an item and refreshes metadata.
  ApplySearchCriteria(
    req: operations.ApplySearchCriteriaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ApplySearchCriteriaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ApplySearchCriteriaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/RemoteSearch/Apply/{itemId}", req.pathParams);
    
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
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ApplySearchCriteriaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthenticateUser - Authenticates a user.
  AuthenticateUser(
    req: operations.AuthenticateUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthenticateUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthenticateUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Authenticate", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AuthenticateUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.authenticationResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.authenticationResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.authenticationResult = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthenticateUserByName - Authenticates a user by name.
  AuthenticateUserByName(
    req: operations.AuthenticateUserByNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthenticateUserByNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthenticateUserByNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Users/AuthenticateByName";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AuthenticateUserByNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.authenticationResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.authenticationResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.authenticationResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthenticateWithQuickConnect - Authenticates a user with quick connect.
  AuthenticateWithQuickConnect(
    req: operations.AuthenticateWithQuickConnectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthenticateWithQuickConnectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthenticateWithQuickConnectRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Users/AuthenticateWithQuickConnect";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AuthenticateWithQuickConnectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.authenticationResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.authenticationResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.authenticationResult = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Authorize - Authorizes a pending quick connect request.
  Authorize(
    req: operations.AuthorizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/QuickConnect/Authorize";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AuthorizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.authorize200ApplicationJsonBoolean = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.authorize200ApplicationJsonBoolean = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.authorize200ApplicationJsonBoolean = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Available - Enables or disables quick connect.
  Available(
    req: operations.AvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AvailableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/QuickConnect/Available";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CancelPackageInstallation - Cancels a package installation.
  CancelPackageInstallation(
    req: operations.CancelPackageInstallationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelPackageInstallationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelPackageInstallationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Packages/Installing/{packageId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CancelPackageInstallationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CancelSeriesTimer - Cancels a live tv series timer.
  CancelSeriesTimer(
    req: operations.CancelSeriesTimerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelSeriesTimerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelSeriesTimerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/SeriesTimers/{timerId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CancelSeriesTimerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CancelTimer - Cancels a live tv timer.
  CancelTimer(
    req: operations.CancelTimerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelTimerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelTimerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/Timers/{timerId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CancelTimerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CloseLiveStream - Closes a media source.
  CloseLiveStream(
    req: operations.CloseLiveStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloseLiveStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloseLiveStreamRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveStreams/Close";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CloseLiveStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CompleteWizard - Completes the startup wizard.
  CompleteWizard(
    req: operations.CompleteWizardRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompleteWizardResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompleteWizardRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Startup/Complete";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CompleteWizardResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Connect - Attempts to retrieve authentication information.
  Connect(
    req: operations.ConnectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConnectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConnectRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/QuickConnect/Connect";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ConnectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.quickConnectResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.quickConnectResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.quickConnectResult = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateAdminNotification - Sends a notification to all admins.
  CreateAdminNotification(
    req: operations.CreateAdminNotificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAdminNotificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAdminNotificationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Notifications/Admin";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateAdminNotificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateCollection - Creates a new collection.
  CreateCollection(
    req: operations.CreateCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCollectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCollectionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Collections";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateCollectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.collectionCreationResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.collectionCreationResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.collectionCreationResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateKey - Create a new api key.
  CreateKey(
    req: operations.CreateKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateKeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Auth/Keys";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreatePlaylist - Creates a new playlist.
  /** 
   * For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.
  **/
  CreatePlaylist(
    req: operations.CreatePlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePlaylistRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Playlists";
    
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
        let res: operations.CreatePlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.playlistCreationResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.playlistCreationResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.playlistCreationResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateProfile - Creates a profile.
  CreateProfile(
    req: operations.CreateProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateProfileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Dlna/Profiles";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSeriesTimer - Creates a live tv series timer.
  CreateSeriesTimer(
    req: operations.CreateSeriesTimerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSeriesTimerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSeriesTimerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/SeriesTimers";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateSeriesTimerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateTimer - Creates a live tv timer.
  CreateTimer(
    req: operations.CreateTimerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTimerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTimerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Timers";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateTimerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateUserByName - Creates a user.
  CreateUserByName(
    req: operations.CreateUserByNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUserByNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUserByNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Users/New";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateUserByNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Deauthorize - Deauthorize all quick connect devices for the current user.
  Deauthorize(
    req: operations.DeauthorizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeauthorizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeauthorizeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/QuickConnect/Deauthorize";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeauthorizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deauthorize200ApplicationJsonInt32Integer = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.deauthorize200ApplicationJsonInt32Integer = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.deauthorize200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteAlternateSources - Removes alternate video sources.
  DeleteAlternateSources(
    req: operations.DeleteAlternateSourcesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAlternateSourcesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAlternateSourcesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/AlternateSources", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteAlternateSourcesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteDevice - Deletes a device.
  DeleteDevice(
    req: operations.DeleteDeviceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDeviceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDeviceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Devices";
    
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
        let res: operations.DeleteDeviceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteItem - Deletes an item from the library and filesystem.
  DeleteItem(
    req: operations.DeleteItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteItemRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteItemImage - Delete an item's image.
  DeleteItemImage(
    req: operations.DeleteItemImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteItemImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteItemImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}", req.pathParams);
    
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
        let res: operations.DeleteItemImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteItemImageByIndex - Delete an item's image.
  DeleteItemImageByIndex(
    req: operations.DeleteItemImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteItemImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteItemImageByIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteItemImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteItems - Deletes items from the library and filesystem.
  DeleteItems(
    req: operations.DeleteItemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteItemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteItemsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items";
    
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
        let res: operations.DeleteItemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteListingProvider - Delete listing provider.
  DeleteListingProvider(
    req: operations.DeleteListingProviderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteListingProviderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteListingProviderRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/ListingProviders";
    
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
        let res: operations.DeleteListingProviderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteProfile - Deletes a profile.
  DeleteProfile(
    req: operations.DeleteProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteProfileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/Profiles/{profileId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRecording - Deletes a live tv recording.
  DeleteRecording(
    req: operations.DeleteRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRecordingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/Recordings/{recordingId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSubtitle - Deletes an external subtitle file.
  DeleteSubtitle(
    req: operations.DeleteSubtitleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSubtitleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSubtitleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/Subtitles/{index}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSubtitleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteTunerHost - Deletes a tuner host.
  DeleteTunerHost(
    req: operations.DeleteTunerHostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTunerHostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTunerHostRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/TunerHosts";
    
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
        let res: operations.DeleteTunerHostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteUser - Deletes a user.
  DeleteUser(
    req: operations.DeleteUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteUserImage - Delete the user's image.
  DeleteUserImage(
    req: operations.DeleteUserImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Images/{imageType}", req.pathParams);
    
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
        let res: operations.DeleteUserImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteUserImageByIndex - Delete the user's image.
  DeleteUserImageByIndex(
    req: operations.DeleteUserImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserImageByIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Images/{imageType}/{index}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteUserImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteUserItemRating - Deletes a user's saved personal rating for an item.
  DeleteUserItemRating(
    req: operations.DeleteUserItemRatingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserItemRatingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserItemRatingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Items/{itemId}/Rating", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteUserItemRatingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DisablePlugin - Disable a plugin.
  DisablePlugin(
    req: operations.DisablePluginRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisablePluginResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisablePluginRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Plugins/{pluginId}/{version}/Disable", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DisablePluginResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DiscoverTuners - Discover tuners.
  DiscoverTuners(
    req: operations.DiscoverTunersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DiscoverTunersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DiscoverTunersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Tuners/Discover";
    
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
        let res: operations.DiscoverTunersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.tunerHostInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.tunerHostInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.tunerHostInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DiscvoverTuners - Discover tuners.
  DiscvoverTuners(
    req: operations.DiscvoverTunersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DiscvoverTunersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DiscvoverTunersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Tuners/Discvover";
    
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
        let res: operations.DiscvoverTunersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.tunerHostInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.tunerHostInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.tunerHostInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DisplayContent - Instructs a session to browse to an item or view.
  DisplayContent(
    req: operations.DisplayContentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayContentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayContentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Sessions/{sessionId}/Viewing", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DisplayContentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DownloadRemoteImage - Downloads a remote image for an item.
  DownloadRemoteImage(
    req: operations.DownloadRemoteImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadRemoteImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadRemoteImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/RemoteImages/Download", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DownloadRemoteImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DownloadRemoteSubtitles - Downloads a remote subtitle.
  DownloadRemoteSubtitles(
    req: operations.DownloadRemoteSubtitlesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadRemoteSubtitlesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadRemoteSubtitlesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/RemoteSearch/Subtitles/{subtitleId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DownloadRemoteSubtitlesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // EnablePlugin - Enables a disabled plugin.
  EnablePlugin(
    req: operations.EnablePluginRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnablePluginResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnablePluginRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Plugins/{pluginId}/{version}/Enable", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.EnablePluginResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ForgotPassword - Initiates the forgot password process for a local user.
  ForgotPassword(
    req: operations.ForgotPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ForgotPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ForgotPasswordRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Users/ForgotPassword";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ForgotPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.forgotPasswordResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.forgotPasswordResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.forgotPasswordResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ForgotPasswordPin - Redeems a forgot password pin.
  ForgotPasswordPin(
    req: operations.ForgotPasswordPinRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ForgotPasswordPinResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ForgotPasswordPinRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Users/ForgotPassword/Pin";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ForgotPasswordPinResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pinRedeemResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.pinRedeemResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.pinRedeemResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Get - Gets the search hint result.
  Get(
    req: operations.GetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Search/Hints";
    
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
        let res: operations.GetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.searchHintResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.searchHintResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.searchHintResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAdditionalPart - Gets additional parts for a video.
  GetAdditionalPart(
    req: operations.GetAdditionalPartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAdditionalPartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAdditionalPartRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/AdditionalParts", req.pathParams);
    
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
        let res: operations.GetAdditionalPartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAlbumArtists - Gets all album artists from a given item, folder, or the entire library.
  GetAlbumArtists(
    req: operations.GetAlbumArtistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAlbumArtistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAlbumArtistsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Artists/AlbumArtists";
    
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
        let res: operations.GetAlbumArtistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAllChannelFeatures - Get all channel features.
  GetAllChannelFeatures(
    req: operations.GetAllChannelFeaturesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllChannelFeaturesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllChannelFeaturesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Channels/Features";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAllChannelFeaturesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.channelFeatures = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.channelFeatures = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.channelFeatures = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAncestors - Gets all parents of an item.
  GetAncestors(
    req: operations.GetAncestorsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAncestorsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAncestorsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Ancestors", req.pathParams);
    
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
        let res: operations.GetAncestorsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetArtistByName - Gets an artist by name.
  GetArtistByName(
    req: operations.GetArtistByNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArtistByNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArtistByNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Artists/{name}", req.pathParams);
    
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
        let res: operations.GetArtistByNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetArtistImage - Get artist image by name.
  GetArtistImage(
    req: operations.GetArtistImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArtistImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArtistImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Artists/{name}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetArtistImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getArtistImage200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetArtists - Gets all artists from a given item, folder, or the entire library.
  GetArtists(
    req: operations.GetArtistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArtistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArtistsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Artists";
    
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
        let res: operations.GetArtistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAttachment - Get video attachment.
  GetAttachment(
    req: operations.GetAttachmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAttachmentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{videoId}/{mediaSourceId}/Attachments/{index}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAttachmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getAttachment200ApplicationOctetStreamBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAudioStream - Gets an audio stream.
  GetAudioStream(
    req: operations.GetAudioStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAudioStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAudioStreamRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/stream", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetAudioStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `audio/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getAudioStream200AudioWildcardBinaryString = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAudioStreamByContainer - Gets an audio stream.
  GetAudioStreamByContainer(
    req: operations.GetAudioStreamByContainerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAudioStreamByContainerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAudioStreamByContainerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/stream.{container}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetAudioStreamByContainerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `audio/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getAudioStreamByContainer200AudioWildcardBinaryString = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAuthProviders - Get all auth providers.
  GetAuthProviders(
    req: operations.GetAuthProvidersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAuthProvidersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAuthProvidersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Auth/Providers";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAuthProvidersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.nameIdPairs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.nameIdPairs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.nameIdPairs = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetBitrateTestBytes - Tests the network with a request with the size of the bitrate.
  GetBitrateTestBytes(
    req: operations.GetBitrateTestBytesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBitrateTestBytesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBitrateTestBytesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Playback/BitrateTest";
    
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
        let res: operations.GetBitrateTestBytesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getBitrateTestBytes200ApplicationOctetStreamBinaryString = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetBookRemoteSearchResults - Get book remote search.
  GetBookRemoteSearchResults(
    req: operations.GetBookRemoteSearchResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBookRemoteSearchResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBookRemoteSearchResultsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/RemoteSearch/Book";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetBookRemoteSearchResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetBoxSetRemoteSearchResults - Get box set remote search.
  GetBoxSetRemoteSearchResults(
    req: operations.GetBoxSetRemoteSearchResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBoxSetRemoteSearchResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBoxSetRemoteSearchResultsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/RemoteSearch/BoxSet";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetBoxSetRemoteSearchResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetBrandingCss - Gets branding css.
  GetBrandingCss(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetBrandingCssResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Branding/Css";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetBrandingCssResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getBrandingCss200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.getBrandingCss200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.getBrandingCss200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/css`)) {
                res.getBrandingCss200TextCssString = JSON.stringify(httpRes?.data);
            }
            break;
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetBrandingCss2 - Gets branding css.
  GetBrandingCss2(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetBrandingCss2Response> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Branding/Css.css";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetBrandingCss2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getBrandingCss2200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.getBrandingCss2200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.getBrandingCss2200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/css`)) {
                res.getBrandingCss2200TextCssString = JSON.stringify(httpRes?.data);
            }
            break;
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetBrandingOptions - Gets branding configuration.
  GetBrandingOptions(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetBrandingOptionsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Branding/Configuration";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetBrandingOptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.brandingOptions = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.brandingOptions = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.brandingOptions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetChannel - Gets a live tv channel.
  GetChannel(
    req: operations.GetChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetChannelRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/Channels/{channelId}", req.pathParams);
    
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
        let res: operations.GetChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetChannelFeatures - Get channel features.
  GetChannelFeatures(
    req: operations.GetChannelFeaturesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetChannelFeaturesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetChannelFeaturesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Channels/{channelId}/Features", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetChannelFeaturesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.channelFeatures = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.channelFeatures = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.channelFeatures = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetChannelItems - Get channel items.
  GetChannelItems(
    req: operations.GetChannelItemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetChannelItemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetChannelItemsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Channels/{channelId}/Items", req.pathParams);
    
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
        let res: operations.GetChannelItemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetChannelMappingOptions - Get channel mapping options.
  GetChannelMappingOptions(
    req: operations.GetChannelMappingOptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetChannelMappingOptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetChannelMappingOptionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/ChannelMappingOptions";
    
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
        let res: operations.GetChannelMappingOptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.channelMappingOptionsDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.channelMappingOptionsDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.channelMappingOptionsDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetChannels - Gets available channels.
  GetChannels(
    req: operations.GetChannelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetChannelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetChannelsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Channels";
    
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
        let res: operations.GetChannelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetConfiguration - Gets application configuration.
  GetConfiguration(
    req: operations.GetConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConfigurationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Configuration";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.serverConfiguration = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.serverConfiguration = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.serverConfiguration = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetConfigurationPages - Gets the configuration pages.
  GetConfigurationPages(
    req: operations.GetConfigurationPagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConfigurationPagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConfigurationPagesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/web/ConfigurationPages";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetConfigurationPagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configurationPageInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.configurationPageInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.configurationPageInfos = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetConnectionManager - Gets Dlna media receiver registrar xml.
  GetConnectionManager(
    req: operations.GetConnectionManagerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConnectionManagerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConnectionManagerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/ConnectionManager", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetConnectionManagerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getConnectionManager200TextXmlBinaryString = out;
            }
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetConnectionManager2 - Gets Dlna media receiver registrar xml.
  GetConnectionManager2(
    req: operations.GetConnectionManager2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConnectionManager2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConnectionManager2Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/ConnectionManager/ConnectionManager", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetConnectionManager2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getConnectionManager2200TextXmlBinaryString = out;
            }
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetConnectionManager3 - Gets Dlna media receiver registrar xml.
  GetConnectionManager3(
    req: operations.GetConnectionManager3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConnectionManager3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConnectionManager3Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/ConnectionManager/ConnectionManager.xml", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetConnectionManager3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getConnectionManager3200TextXmlBinaryString = out;
            }
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetContentDirectory - Gets Dlna content directory xml.
  GetContentDirectory(
    req: operations.GetContentDirectoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetContentDirectoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetContentDirectoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/ContentDirectory", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetContentDirectoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getContentDirectory200TextXmlBinaryString = out;
            }
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetContentDirectory2 - Gets Dlna content directory xml.
  GetContentDirectory2(
    req: operations.GetContentDirectory2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetContentDirectory2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetContentDirectory2Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/ContentDirectory/ContentDirectory", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetContentDirectory2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getContentDirectory2200TextXmlBinaryString = out;
            }
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetContentDirectory3 - Gets Dlna content directory xml.
  GetContentDirectory3(
    req: operations.GetContentDirectory3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetContentDirectory3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetContentDirectory3Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/ContentDirectory/ContentDirectory.xml", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetContentDirectory3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getContentDirectory3200TextXmlBinaryString = out;
            }
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCountries - Gets known countries.
  GetCountries(
    req: operations.GetCountriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCountriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCountriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Localization/Countries";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCountriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.countryInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.countryInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.countryInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCriticReviews - Gets critic review for an item.
  GetCriticReviews(
    req: operations.GetCriticReviewsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCriticReviewsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCriticReviewsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/CriticReviews", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCriticReviewsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCultures - Gets known cultures.
  GetCultures(
    req: operations.GetCulturesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCulturesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCulturesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Localization/Cultures";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCulturesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.cultureDtos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.cultureDtos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.cultureDtos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCurrentUser - Gets the user based on auth token.
  GetCurrentUser(
    req: operations.GetCurrentUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCurrentUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCurrentUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Users/Me";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCurrentUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userDto = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDashboardConfigurationPage - Gets a dashboard configuration page.
  GetDashboardConfigurationPage(
    req: operations.GetDashboardConfigurationPageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDashboardConfigurationPageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDashboardConfigurationPageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/web/ConfigurationPage";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetDashboardConfigurationPageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/x-javascript`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getDashboardConfigurationPage200ApplicationXJavascriptBinaryString = out;
            }
            if (MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getDashboardConfigurationPage200TextHtmlBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDefaultDirectoryBrowser - Get Default directory browser.
  GetDefaultDirectoryBrowser(
    req: operations.GetDefaultDirectoryBrowserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDefaultDirectoryBrowserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDefaultDirectoryBrowserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Environment/DefaultDirectoryBrowser";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDefaultDirectoryBrowserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.defaultDirectoryBrowserInfoDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.defaultDirectoryBrowserInfoDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.defaultDirectoryBrowserInfoDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDefaultListingProvider - Gets default listings provider info.
  GetDefaultListingProvider(
    req: operations.GetDefaultListingProviderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDefaultListingProviderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDefaultListingProviderRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/ListingProviders/Default";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDefaultListingProviderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listingsProviderInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.listingsProviderInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.listingsProviderInfo = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDefaultMetadataOptions - Gets a default MetadataOptions object.
  GetDefaultMetadataOptions(
    req: operations.GetDefaultMetadataOptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDefaultMetadataOptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDefaultMetadataOptionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Configuration/MetadataOptions/Default";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDefaultMetadataOptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.metadataOptions = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.metadataOptions = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.metadataOptions = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDefaultProfile - Gets the default profile.
  GetDefaultProfile(
    req: operations.GetDefaultProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDefaultProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDefaultProfileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Dlna/Profiles/Default";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDefaultProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deviceProfile = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.deviceProfile = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.deviceProfile = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDefaultTimer - Gets the default values for a new timer.
  GetDefaultTimer(
    req: operations.GetDefaultTimerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDefaultTimerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDefaultTimerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Timers/Defaults";
    
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
        let res: operations.GetDefaultTimerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.seriesTimerInfoDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.seriesTimerInfoDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.seriesTimerInfoDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDescriptionXml - Get Description Xml.
  GetDescriptionXml(
    req: operations.GetDescriptionXmlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDescriptionXmlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDescriptionXmlRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/description", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDescriptionXmlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getDescriptionXml200TextXmlBinaryString = out;
            }
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDescriptionXml2 - Get Description Xml.
  GetDescriptionXml2(
    req: operations.GetDescriptionXml2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDescriptionXml2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDescriptionXml2Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/description.xml", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDescriptionXml2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getDescriptionXml2200TextXmlBinaryString = out;
            }
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDeviceInfo - Get info for a device.
  GetDeviceInfo(
    req: operations.GetDeviceInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceInfoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Devices/Info";
    
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
        let res: operations.GetDeviceInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deviceInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.deviceInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.deviceInfo = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDeviceOptions - Get options for a device.
  GetDeviceOptions(
    req: operations.GetDeviceOptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceOptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceOptionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Devices/Options";
    
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
        let res: operations.GetDeviceOptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deviceOptions = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.deviceOptions = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.deviceOptions = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDevices - Get Devices.
  GetDevices(
    req: operations.GetDevicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDevicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDevicesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Devices";
    
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
        let res: operations.GetDevicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deviceInfoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.deviceInfoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.deviceInfoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDirectoryContents - Gets the contents of a given directory in the file system.
  GetDirectoryContents(
    req: operations.GetDirectoryContentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDirectoryContentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDirectoryContentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Environment/DirectoryContents";
    
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
        let res: operations.GetDirectoryContentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.fileSystemEntryInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.fileSystemEntryInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.fileSystemEntryInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDisplayPreferences - Get Display Preferences.
  GetDisplayPreferences(
    req: operations.GetDisplayPreferencesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDisplayPreferencesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDisplayPreferencesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/DisplayPreferences/{displayPreferencesId}", req.pathParams);
    
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
        let res: operations.GetDisplayPreferencesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.displayPreferencesDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.displayPreferencesDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.displayPreferencesDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDownload - Downloads item media.
  GetDownload(
    req: operations.GetDownloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDownloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDownloadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Download", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDownloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `audio/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getDownload200AudioWildcardBinaryString = out;
            }
            if (MatchContentType(contentType, `video/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getDownload200VideoWildcardBinaryString = out;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDrives - Gets available drives from the server's file system.
  GetDrives(
    req: operations.GetDrivesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDrivesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDrivesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Environment/Drives";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDrivesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.fileSystemEntryInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.fileSystemEntryInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.fileSystemEntryInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEndpointInfo - Gets information about the request endpoint.
  GetEndpointInfo(
    req: operations.GetEndpointInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEndpointInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEndpointInfoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Endpoint";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEndpointInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.endPointInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.endPointInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.endPointInfo = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEpisodes - Gets episodes for a tv season.
  GetEpisodes(
    req: operations.GetEpisodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEpisodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEpisodesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Shows/{seriesId}/Episodes", req.pathParams);
    
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
        let res: operations.GetEpisodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetExternalIdInfos - Get the item's external id info.
  GetExternalIdInfos(
    req: operations.GetExternalIdInfosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetExternalIdInfosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetExternalIdInfosRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/ExternalIdInfos", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetExternalIdInfosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.externalIdInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.externalIdInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.externalIdInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFallbackFont - Gets a fallback font file.
  GetFallbackFont(
    req: operations.GetFallbackFontRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFallbackFontResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFallbackFontRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/FallbackFont/Fonts/{name}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFallbackFontResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `font/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getFallbackFont200FontWildcardBinaryString = out;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFallbackFontList - Gets a list of available fallback font files.
  GetFallbackFontList(
    req: operations.GetFallbackFontListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFallbackFontListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFallbackFontListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/FallbackFont/Fonts";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFallbackFontListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.fontFiles = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.fontFiles = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.fontFiles = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFile - Get the original file of an item.
  GetFile(
    req: operations.GetFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/File", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `audio/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getFile200AudioWildcardBinaryString = out;
            }
            if (MatchContentType(contentType, `video/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getFile200VideoWildcardBinaryString = out;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFirstUser - Gets the first user.
  GetFirstUser(
    req: operations.GetFirstUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFirstUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFirstUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Startup/User";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFirstUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.startupUserDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.startupUserDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.startupUserDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFirstUser2 - Gets the first user.
  GetFirstUser2(
    req: operations.GetFirstUser2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFirstUser2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFirstUser2Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Startup/FirstUser";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFirstUser2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.startupUserDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.startupUserDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.startupUserDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetGeneralImage - Get General Image.
  GetGeneralImage(
    req: operations.GetGeneralImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGeneralImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGeneralImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Images/General/{name}/{type}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetGeneralImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getGeneralImage200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/octet-stream`)) {
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

  
  // GetGeneralImages - Get all general images.
  GetGeneralImages(
    req: operations.GetGeneralImagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGeneralImagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGeneralImagesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Images/General";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetGeneralImagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.imageByNameInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.imageByNameInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.imageByNameInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetGenre - Gets a genre, by name.
  GetGenre(
    req: operations.GetGenreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenreRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Genres/{genreName}", req.pathParams);
    
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
        let res: operations.GetGenreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetGenreImage - Get genre image by name.
  GetGenreImage(
    req: operations.GetGenreImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenreImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenreImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Genres/{name}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetGenreImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getGenreImage200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetGenreImageByIndex - Get genre image by name.
  GetGenreImageByIndex(
    req: operations.GetGenreImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenreImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenreImageByIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Genres/{name}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetGenreImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getGenreImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetGenres - Gets all genres from a given item, folder, or the entire library.
  GetGenres(
    req: operations.GetGenresRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenresResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenresRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Genres";
    
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
        let res: operations.GetGenresResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetGroupingOptions - Get user view grouping options.
  GetGroupingOptions(
    req: operations.GetGroupingOptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGroupingOptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGroupingOptionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/GroupingOptions", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetGroupingOptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.specialViewOptionDtos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.specialViewOptionDtos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.specialViewOptionDtos = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetGuideInfo - Get guid info.
  GetGuideInfo(
    req: operations.GetGuideInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGuideInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGuideInfoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/GuideInfo";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetGuideInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.guideInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.guideInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.guideInfo = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetHlsAudioSegment - Gets a video stream using HTTP live streaming.
  GetHlsAudioSegment(
    req: operations.GetHlsAudioSegmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHlsAudioSegmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHlsAudioSegmentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/hls1/{playlistId}/{segmentId}.{container}", req.pathParams);
    
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
        let res: operations.GetHlsAudioSegmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `audio/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getHlsAudioSegment200AudioWildcardBinaryString = out;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetHlsAudioSegmentLegacyAac - Gets the specified audio segment for an audio item.
  GetHlsAudioSegmentLegacyAac(
    req: operations.GetHlsAudioSegmentLegacyAacRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHlsAudioSegmentLegacyAacResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHlsAudioSegmentLegacyAacRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/hls/{segmentId}/stream.aac", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetHlsAudioSegmentLegacyAacResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `audio/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getHlsAudioSegmentLegacyAac200AudioWildcardBinaryString = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetHlsAudioSegmentLegacyMp3 - Gets the specified audio segment for an audio item.
  GetHlsAudioSegmentLegacyMp3(
    req: operations.GetHlsAudioSegmentLegacyMp3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHlsAudioSegmentLegacyMp3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHlsAudioSegmentLegacyMp3Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/hls/{segmentId}/stream.mp3", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetHlsAudioSegmentLegacyMp3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `audio/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getHlsAudioSegmentLegacyMp3200AudioWildcardBinaryString = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetHlsPlaylistLegacy - Gets a hls video playlist.
  GetHlsPlaylistLegacy(
    req: operations.GetHlsPlaylistLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHlsPlaylistLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHlsPlaylistLegacyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/hls/{playlistId}/stream.m3u8", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetHlsPlaylistLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/x-mpegURL`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getHlsPlaylistLegacy200ApplicationXMpegurlBinaryString = out;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetHlsVideoSegment - Gets a video stream using HTTP live streaming.
  GetHlsVideoSegment(
    req: operations.GetHlsVideoSegmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHlsVideoSegmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHlsVideoSegmentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/hls1/{playlistId}/{segmentId}.{container}", req.pathParams);
    
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
        let res: operations.GetHlsVideoSegmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `video/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getHlsVideoSegment200VideoWildcardBinaryString = out;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetHlsVideoSegmentLegacy - Gets a hls video segment.
  GetHlsVideoSegmentLegacy(
    req: operations.GetHlsVideoSegmentLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHlsVideoSegmentLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHlsVideoSegmentLegacyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/hls/{playlistId}/{segmentId}.{segmentContainer}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetHlsVideoSegmentLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `video/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getHlsVideoSegmentLegacy200VideoWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetIcon - Gets a server icon.
  GetIcon(
    req: operations.GetIconRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIconResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIconRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/icons/{fileName}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetIconResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getIcon200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetIconId - Gets a server icon.
  GetIconId(
    req: operations.GetIconIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIconIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIconIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/icons/{fileName}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetIconIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getIconId200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInstantMixFromAlbum - Creates an instant playlist based on a given song.
  GetInstantMixFromAlbum(
    req: operations.GetInstantMixFromAlbumRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstantMixFromAlbumResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstantMixFromAlbumRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Albums/{id}/InstantMix", req.pathParams);
    
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
        let res: operations.GetInstantMixFromAlbumResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInstantMixFromArtists - Creates an instant playlist based on a given song.
  GetInstantMixFromArtists(
    req: operations.GetInstantMixFromArtistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstantMixFromArtistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstantMixFromArtistsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Artists/{id}/InstantMix", req.pathParams);
    
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
        let res: operations.GetInstantMixFromArtistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInstantMixFromItem - Creates an instant playlist based on a given song.
  GetInstantMixFromItem(
    req: operations.GetInstantMixFromItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstantMixFromItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstantMixFromItemRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{id}/InstantMix", req.pathParams);
    
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
        let res: operations.GetInstantMixFromItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInstantMixFromMusicGenre - Creates an instant playlist based on a given song.
  GetInstantMixFromMusicGenre(
    req: operations.GetInstantMixFromMusicGenreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstantMixFromMusicGenreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstantMixFromMusicGenreRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/MusicGenres/{name}/InstantMix", req.pathParams);
    
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
        let res: operations.GetInstantMixFromMusicGenreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInstantMixFromMusicGenres - Creates an instant playlist based on a given song.
  GetInstantMixFromMusicGenres(
    req: operations.GetInstantMixFromMusicGenresRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstantMixFromMusicGenresResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstantMixFromMusicGenresRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/MusicGenres/{id}/InstantMix", req.pathParams);
    
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
        let res: operations.GetInstantMixFromMusicGenresResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInstantMixFromPlaylist - Creates an instant playlist based on a given song.
  GetInstantMixFromPlaylist(
    req: operations.GetInstantMixFromPlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstantMixFromPlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstantMixFromPlaylistRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Playlists/{id}/InstantMix", req.pathParams);
    
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
        let res: operations.GetInstantMixFromPlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInstantMixFromSong - Creates an instant playlist based on a given song.
  GetInstantMixFromSong(
    req: operations.GetInstantMixFromSongRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstantMixFromSongResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstantMixFromSongRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Songs/{id}/InstantMix", req.pathParams);
    
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
        let res: operations.GetInstantMixFromSongResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetIntros - Gets intros to play before the main media item plays.
  GetIntros(
    req: operations.GetIntrosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntrosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntrosRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Items/{itemId}/Intros", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetIntrosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetItem - Gets an item from a user's library.
  GetItem(
    req: operations.GetItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetItemRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Items/{itemId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetItemCounts - Get item counts.
  GetItemCounts(
    req: operations.GetItemCountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetItemCountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetItemCountsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/Counts";
    
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
        let res: operations.GetItemCountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.itemCounts = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.itemCounts = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.itemCounts = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetItemImage - Gets the item's image.
  GetItemImage(
    req: operations.GetItemImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetItemImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetItemImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetItemImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getItemImage200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetItemImage2 - Gets the item's image.
  GetItemImage2(
    req: operations.GetItemImage2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetItemImage2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetItemImage2Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}/{imageIndex}/{tag}/{format}/{maxWidth}/{maxHeight}/{percentPlayed}/{unplayedCount}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetItemImage2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getItemImage2200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetItemImageByIndex - Gets the item's image.
  GetItemImageByIndex(
    req: operations.GetItemImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetItemImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetItemImageByIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetItemImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getItemImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetItemImageInfos - Get item image infos.
  GetItemImageInfos(
    req: operations.GetItemImageInfosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetItemImageInfosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetItemImageInfosRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetItemImageInfosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.imageInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.imageInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.imageInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetItems - Gets items based on a query.
  GetItems(
    req: operations.GetItemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetItemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetItemsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items";
    
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
        let res: operations.GetItemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetItemsByUserId - Gets items based on a query.
  GetItemsByUserId(
    req: operations.GetItemsByUserIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetItemsByUserIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetItemsByUserIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Items", req.pathParams);
    
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
        let res: operations.GetItemsByUserIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetKeys - Get all keys.
  GetKeys(
    req: operations.GetKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Auth/Keys";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.authenticationInfoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.authenticationInfoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.authenticationInfoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLatestChannelItems - Gets latest channel items.
  GetLatestChannelItems(
    req: operations.GetLatestChannelItemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLatestChannelItemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLatestChannelItemsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Channels/Items/Latest";
    
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
        let res: operations.GetLatestChannelItemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLatestMedia - Gets latest media.
  GetLatestMedia(
    req: operations.GetLatestMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLatestMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLatestMediaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Items/Latest", req.pathParams);
    
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
        let res: operations.GetLatestMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLibraryOptionsInfo - Gets the library options info.
  GetLibraryOptionsInfo(
    req: operations.GetLibraryOptionsInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLibraryOptionsInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLibraryOptionsInfoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Libraries/AvailableOptions";
    
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
        let res: operations.GetLibraryOptionsInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.libraryOptionsResultDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.libraryOptionsResultDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.libraryOptionsResultDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLineups - Gets available lineups.
  GetLineups(
    req: operations.GetLineupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLineupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLineupsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/ListingProviders/Lineups";
    
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
        let res: operations.GetLineupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.nameIdPairs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.nameIdPairs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.nameIdPairs = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLiveHlsStream - Gets a hls live stream.
  GetLiveHlsStream(
    req: operations.GetLiveHlsStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLiveHlsStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLiveHlsStreamRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/live.m3u8", req.pathParams);
    
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
        let res: operations.GetLiveHlsStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/x-mpegURL`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getLiveHlsStream200ApplicationXMpegurlBinaryString = out;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLiveRecordingFile - Gets a live tv recording stream.
  GetLiveRecordingFile(
    req: operations.GetLiveRecordingFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLiveRecordingFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLiveRecordingFileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/LiveRecordings/{recordingId}/stream", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetLiveRecordingFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `video/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getLiveRecordingFile200VideoWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLiveStreamFile - Gets a live tv channel stream.
  GetLiveStreamFile(
    req: operations.GetLiveStreamFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLiveStreamFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLiveStreamFileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/LiveStreamFiles/{streamId}/stream.{container}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetLiveStreamFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `video/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getLiveStreamFile200VideoWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLiveTvChannels - Gets available live tv channels.
  GetLiveTvChannels(
    req: operations.GetLiveTvChannelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLiveTvChannelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLiveTvChannelsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Channels";
    
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
        let res: operations.GetLiveTvChannelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLiveTvInfo - Gets available live tv services.
  GetLiveTvInfo(
    req: operations.GetLiveTvInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLiveTvInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLiveTvInfoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Info";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetLiveTvInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.liveTvInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.liveTvInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.liveTvInfo = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLiveTvPrograms - Gets available live tv epgs.
  GetLiveTvPrograms(
    req: operations.GetLiveTvProgramsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLiveTvProgramsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLiveTvProgramsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Programs";
    
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
        let res: operations.GetLiveTvProgramsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLocalTrailers - Gets local trailers for an item.
  GetLocalTrailers(
    req: operations.GetLocalTrailersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLocalTrailersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLocalTrailersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Items/{itemId}/LocalTrailers", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetLocalTrailersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLocalizationOptions - Gets localization options.
  GetLocalizationOptions(
    req: operations.GetLocalizationOptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLocalizationOptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLocalizationOptionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Localization/Options";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetLocalizationOptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.localizationOptions = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.localizationOptions = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.localizationOptions = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLogEntries - Gets activity log entries.
  GetLogEntries(
    req: operations.GetLogEntriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLogEntriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLogEntriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/ActivityLog/Entries";
    
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
        let res: operations.GetLogEntriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.activityLogEntryQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.activityLogEntryQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.activityLogEntryQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLogFile - Gets a log file.
  GetLogFile(
    req: operations.GetLogFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLogFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLogFileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Logs/Log";
    
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
        let res: operations.GetLogFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getLogFile200TextPlainBinaryString = out;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMasterHlsAudioPlaylist - Gets an audio hls playlist stream.
  GetMasterHlsAudioPlaylist(
    req: operations.GetMasterHlsAudioPlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMasterHlsAudioPlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMasterHlsAudioPlaylistRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/master.m3u8", req.pathParams);
    
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
        let res: operations.GetMasterHlsAudioPlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/x-mpegURL`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getMasterHlsAudioPlaylist200ApplicationXMpegurlBinaryString = out;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMasterHlsVideoPlaylist - Gets a video hls playlist stream.
  GetMasterHlsVideoPlaylist(
    req: operations.GetMasterHlsVideoPlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMasterHlsVideoPlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMasterHlsVideoPlaylistRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/master.m3u8", req.pathParams);
    
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
        let res: operations.GetMasterHlsVideoPlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/x-mpegURL`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getMasterHlsVideoPlaylist200ApplicationXMpegurlBinaryString = out;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMediaFolders - Gets all user media folders.
  GetMediaFolders(
    req: operations.GetMediaFoldersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMediaFoldersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMediaFoldersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/MediaFolders";
    
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
        let res: operations.GetMediaFoldersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMediaInfoImage - Get media info image.
  GetMediaInfoImage(
    req: operations.GetMediaInfoImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMediaInfoImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMediaInfoImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Images/MediaInfo/{theme}/{name}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMediaInfoImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getMediaInfoImage200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/octet-stream`)) {
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

  
  // GetMediaInfoImages - Get all media info images.
  GetMediaInfoImages(
    req: operations.GetMediaInfoImagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMediaInfoImagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMediaInfoImagesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Images/MediaInfo";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMediaInfoImagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.imageByNameInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.imageByNameInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.imageByNameInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMediaReceiverRegistrar - Gets Dlna media receiver registrar xml.
  GetMediaReceiverRegistrar(
    req: operations.GetMediaReceiverRegistrarRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMediaReceiverRegistrarResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMediaReceiverRegistrarRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/MediaReceiverRegistrar", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMediaReceiverRegistrarResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getMediaReceiverRegistrar200TextXmlBinaryString = out;
            }
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMediaReceiverRegistrar2 - Gets Dlna media receiver registrar xml.
  GetMediaReceiverRegistrar2(
    req: operations.GetMediaReceiverRegistrar2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMediaReceiverRegistrar2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMediaReceiverRegistrar2Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/MediaReceiverRegistrar/MediaReceiverRegistrar", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMediaReceiverRegistrar2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getMediaReceiverRegistrar2200TextXmlBinaryString = out;
            }
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMediaReceiverRegistrar3 - Gets Dlna media receiver registrar xml.
  GetMediaReceiverRegistrar3(
    req: operations.GetMediaReceiverRegistrar3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMediaReceiverRegistrar3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMediaReceiverRegistrar3Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/MediaReceiverRegistrar/MediaReceiverRegistrar.xml", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMediaReceiverRegistrar3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getMediaReceiverRegistrar3200TextXmlBinaryString = out;
            }
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMetadataEditorInfo - Gets metadata editor info for an item.
  GetMetadataEditorInfo(
    req: operations.GetMetadataEditorInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMetadataEditorInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMetadataEditorInfoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/MetadataEditor", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMetadataEditorInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.metadataEditorInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.metadataEditorInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.metadataEditorInfo = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMovieRecommendations - Gets movie recommendations.
  GetMovieRecommendations(
    req: operations.GetMovieRecommendationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMovieRecommendationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMovieRecommendationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Movies/Recommendations";
    
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
        let res: operations.GetMovieRecommendationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.recommendationDtos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.recommendationDtos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.recommendationDtos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMovieRemoteSearchResults - Get movie remote search.
  GetMovieRemoteSearchResults(
    req: operations.GetMovieRemoteSearchResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMovieRemoteSearchResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMovieRemoteSearchResultsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/RemoteSearch/Movie";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMovieRemoteSearchResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMusicAlbumRemoteSearchResults - Get music album remote search.
  GetMusicAlbumRemoteSearchResults(
    req: operations.GetMusicAlbumRemoteSearchResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMusicAlbumRemoteSearchResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMusicAlbumRemoteSearchResultsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/RemoteSearch/MusicAlbum";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMusicAlbumRemoteSearchResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMusicArtistRemoteSearchResults - Get music artist remote search.
  GetMusicArtistRemoteSearchResults(
    req: operations.GetMusicArtistRemoteSearchResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMusicArtistRemoteSearchResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMusicArtistRemoteSearchResultsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/RemoteSearch/MusicArtist";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMusicArtistRemoteSearchResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMusicGenre - Gets a music genre, by name.
  GetMusicGenre(
    req: operations.GetMusicGenreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMusicGenreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMusicGenreRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/MusicGenres/{genreName}", req.pathParams);
    
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
        let res: operations.GetMusicGenreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMusicGenreImage - Get music genre image by name.
  GetMusicGenreImage(
    req: operations.GetMusicGenreImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMusicGenreImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMusicGenreImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/MusicGenres/{name}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetMusicGenreImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getMusicGenreImage200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMusicGenreImageByIndex - Get music genre image by name.
  GetMusicGenreImageByIndex(
    req: operations.GetMusicGenreImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMusicGenreImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMusicGenreImageByIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/MusicGenres/{name}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetMusicGenreImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getMusicGenreImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMusicGenres - Gets all music genres from a given item, folder, or the entire library.
  GetMusicGenres(
    req: operations.GetMusicGenresRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMusicGenresResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMusicGenresRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/MusicGenres";
    
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
        let res: operations.GetMusicGenresResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMusicVideoRemoteSearchResults - Get music video remote search.
  GetMusicVideoRemoteSearchResults(
    req: operations.GetMusicVideoRemoteSearchResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMusicVideoRemoteSearchResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMusicVideoRemoteSearchResultsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/RemoteSearch/MusicVideo";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMusicVideoRemoteSearchResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetNamedConfiguration - Gets a named configuration.
  GetNamedConfiguration(
    req: operations.GetNamedConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNamedConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNamedConfigurationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/System/Configuration/{key}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetNamedConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getNamedConfiguration200ApplicationJsonBinaryString = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetNetworkShares - Gets network paths.
  GetNetworkShares(
    req: operations.GetNetworkSharesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSharesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSharesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Environment/NetworkShares";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetNetworkSharesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.fileSystemEntryInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.fileSystemEntryInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.fileSystemEntryInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetNextUp - Gets a list of next up episodes.
  GetNextUp(
    req: operations.GetNextUpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNextUpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNextUpRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Shows/NextUp";
    
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
        let res: operations.GetNextUpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetNotificationServices - Gets notification services.
  GetNotificationServices(
    req: operations.GetNotificationServicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNotificationServicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNotificationServicesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Notifications/Services";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetNotificationServicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.nameIdPairs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.nameIdPairs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.nameIdPairs = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetNotificationTypes - Gets notification types.
  GetNotificationTypes(
    req: operations.GetNotificationTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNotificationTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNotificationTypesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Notifications/Types";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetNotificationTypesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.notificationTypeInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.notificationTypeInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.notificationTypeInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetNotifications - Gets a user's notifications.
  GetNotifications(
    req: operations.GetNotificationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNotificationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNotificationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Notifications/{userId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetNotificationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.notificationResultDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.notificationResultDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.notificationResultDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetNotificationsSummary - Gets a user's notification summary.
  GetNotificationsSummary(
    req: operations.GetNotificationsSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNotificationsSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNotificationsSummaryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Notifications/{userId}/Summary", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetNotificationsSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.notificationsSummaryDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.notificationsSummaryDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.notificationsSummaryDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPackageInfo - Gets a package by name or assembly GUID.
  GetPackageInfo(
    req: operations.GetPackageInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPackageInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPackageInfoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Packages/{name}", req.pathParams);
    
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
        let res: operations.GetPackageInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.packageInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.packageInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.packageInfo = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPackages - Gets available packages.
  GetPackages(
    req: operations.GetPackagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPackagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPackagesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Packages";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPackagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.packageInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.packageInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.packageInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetParentPath - Gets the parent path of a given path.
  GetParentPath(
    req: operations.GetParentPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetParentPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetParentPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Environment/ParentPath";
    
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
        let res: operations.GetParentPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getParentPath200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.getParentPath200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.getParentPath200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetParentalRatings - Gets known parental ratings.
  GetParentalRatings(
    req: operations.GetParentalRatingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetParentalRatingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetParentalRatingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Localization/ParentalRatings";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetParentalRatingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.parentalRatings = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.parentalRatings = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.parentalRatings = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPasswordResetProviders - Get all password reset providers.
  GetPasswordResetProviders(
    req: operations.GetPasswordResetProvidersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPasswordResetProvidersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPasswordResetProvidersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Auth/PasswordResetProviders";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPasswordResetProvidersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.nameIdPairs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.nameIdPairs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.nameIdPairs = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPerson - Get person by name.
  GetPerson(
    req: operations.GetPersonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPersonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPersonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Persons/{name}", req.pathParams);
    
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
        let res: operations.GetPersonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPersonImage - Get person image by name.
  GetPersonImage(
    req: operations.GetPersonImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPersonImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPersonImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Persons/{name}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetPersonImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getPersonImage200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPersonImageByIndex - Get person image by name.
  GetPersonImageByIndex(
    req: operations.GetPersonImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPersonImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPersonImageByIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Persons/{name}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetPersonImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getPersonImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPersonRemoteSearchResults - Get person remote search.
  GetPersonRemoteSearchResults(
    req: operations.GetPersonRemoteSearchResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPersonRemoteSearchResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPersonRemoteSearchResultsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/RemoteSearch/Person";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPersonRemoteSearchResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPersons - Gets all persons.
  GetPersons(
    req: operations.GetPersonsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPersonsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPersonsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Persons";
    
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
        let res: operations.GetPersonsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPhysicalPaths - Gets a list of physical paths from virtual folders.
  GetPhysicalPaths(
    req: operations.GetPhysicalPathsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPhysicalPathsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPhysicalPathsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/PhysicalPaths";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPhysicalPathsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getPhysicalPaths200ApplicationJsonStrings = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.getPhysicalPaths200ApplicationJsonStrings = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.getPhysicalPaths200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPingSystem - Pings the system.
  GetPingSystem(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetPingSystemResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Ping";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPingSystemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getPingSystem200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.getPingSystem200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.getPingSystem200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPlaybackInfo - Gets live playback media info for an item.
  GetPlaybackInfo(
    req: operations.GetPlaybackInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPlaybackInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPlaybackInfoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/PlaybackInfo", req.pathParams);
    
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
        let res: operations.GetPlaybackInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.playbackInfoResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.playbackInfoResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.playbackInfoResponse = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPlaylistItems - Gets the original items of a playlist.
  GetPlaylistItems(
    req: operations.GetPlaylistItemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPlaylistItemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPlaylistItemsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Playlists/{playlistId}/Items", req.pathParams);
    
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
        let res: operations.GetPlaylistItemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPluginConfiguration - Gets plugin configuration.
  GetPluginConfiguration(
    req: operations.GetPluginConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPluginConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPluginConfigurationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Plugins/{pluginId}/Configuration", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPluginConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.basePluginConfiguration = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.basePluginConfiguration = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.basePluginConfiguration = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPluginImage - Gets a plugin's image.
  GetPluginImage(
    req: operations.GetPluginImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPluginImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPluginImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Plugins/{pluginId}/{version}/Image", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPluginImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getPluginImage200ImageWildcardBinaryString = out;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPluginManifest - Gets a plugin's manifest.
  GetPluginManifest(
    req: operations.GetPluginManifestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPluginManifestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPluginManifestRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Plugins/{pluginId}/Manifest", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPluginManifestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPlugins - Gets a list of currently installed plugins.
  GetPlugins(
    req: operations.GetPluginsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPluginsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPluginsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Plugins";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPluginsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pluginInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.pluginInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.pluginInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPostedPlaybackInfo - Gets live playback media info for an item.
  /** 
   * For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.
  **/
  GetPostedPlaybackInfo(
    req: operations.GetPostedPlaybackInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPostedPlaybackInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPostedPlaybackInfoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/PlaybackInfo", req.pathParams);
    
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
        let res: operations.GetPostedPlaybackInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.playbackInfoResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.playbackInfoResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.playbackInfoResponse = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProfile - Gets a single profile.
  GetProfile(
    req: operations.GetProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProfileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/Profiles/{profileId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deviceProfile = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.deviceProfile = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.deviceProfile = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProfileInfos - Get profile infos.
  GetProfileInfos(
    req: operations.GetProfileInfosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProfileInfosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProfileInfosRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Dlna/ProfileInfos";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProfileInfosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deviceProfileInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.deviceProfileInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.deviceProfileInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProgram - Gets a live tv program.
  GetProgram(
    req: operations.GetProgramRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProgramResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProgramRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/Programs/{programId}", req.pathParams);
    
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
        let res: operations.GetProgramResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPrograms - Gets available live tv epgs.
  GetPrograms(
    req: operations.GetProgramsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProgramsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProgramsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Programs";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProgramsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPublicSystemInfo - Gets public information about the server.
  GetPublicSystemInfo(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetPublicSystemInfoResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Info/Public";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPublicSystemInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.publicSystemInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.publicSystemInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.publicSystemInfo = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPublicUsers - Gets a list of publicly visible users for display on a login screen.
  GetPublicUsers(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetPublicUsersResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Users/Public";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPublicUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userDtos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userDtos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userDtos = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetQueryFilters - Gets query filters.
  GetQueryFilters(
    req: operations.GetQueryFiltersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetQueryFiltersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetQueryFiltersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/Filters2";
    
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
        let res: operations.GetQueryFiltersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.queryFilters = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.queryFilters = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.queryFilters = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetQueryFiltersLegacy - Gets legacy query filters.
  GetQueryFiltersLegacy(
    req: operations.GetQueryFiltersLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetQueryFiltersLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetQueryFiltersLegacyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/Filters";
    
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
        let res: operations.GetQueryFiltersLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.queryFiltersLegacy = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.queryFiltersLegacy = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.queryFiltersLegacy = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRatingImage - Get rating image.
  GetRatingImage(
    req: operations.GetRatingImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRatingImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRatingImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Images/Ratings/{theme}/{name}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRatingImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getRatingImage200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/octet-stream`)) {
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

  
  // GetRatingImages - Get all general images.
  GetRatingImages(
    req: operations.GetRatingImagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRatingImagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRatingImagesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Images/Ratings";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRatingImagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.imageByNameInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.imageByNameInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.imageByNameInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRecommendedPrograms - Gets recommended live tv epgs.
  GetRecommendedPrograms(
    req: operations.GetRecommendedProgramsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRecommendedProgramsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRecommendedProgramsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Programs/Recommended";
    
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
        let res: operations.GetRecommendedProgramsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRecording - Gets a live tv recording.
  GetRecording(
    req: operations.GetRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRecordingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/Recordings/{recordingId}", req.pathParams);
    
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
        let res: operations.GetRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRecordingFolders - Gets recording folders.
  GetRecordingFolders(
    req: operations.GetRecordingFoldersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRecordingFoldersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRecordingFoldersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Recordings/Folders";
    
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
        let res: operations.GetRecordingFoldersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRecordingGroup - Get recording group.
  GetRecordingGroup(
    req: operations.GetRecordingGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRecordingGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRecordingGroupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/Recordings/Groups/{groupId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRecordingGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRecordingGroups - Gets live tv recording groups.
  GetRecordingGroups(
    req: operations.GetRecordingGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRecordingGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRecordingGroupsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Recordings/Groups";
    
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
        let res: operations.GetRecordingGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRecordings - Gets live tv recordings.
  GetRecordings(
    req: operations.GetRecordingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRecordingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRecordingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Recordings";
    
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
        let res: operations.GetRecordingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRecordingsSeries - Gets live tv recording series.
  GetRecordingsSeries(
    req: operations.GetRecordingsSeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRecordingsSeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRecordingsSeriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Recordings/Series";
    
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
        let res: operations.GetRecordingsSeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRemoteImage - Gets a remote image.
  GetRemoteImage(
    req: operations.GetRemoteImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRemoteImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRemoteImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Images/Remote";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetRemoteImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getRemoteImage200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/octet-stream`)) {
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

  
  // GetRemoteImageProviders - Gets available remote image providers for an item.
  GetRemoteImageProviders(
    req: operations.GetRemoteImageProvidersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRemoteImageProvidersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRemoteImageProvidersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/RemoteImages/Providers", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRemoteImageProvidersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.imageProviderInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.imageProviderInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.imageProviderInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRemoteImages - Gets available remote images for an item.
  GetRemoteImages(
    req: operations.GetRemoteImagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRemoteImagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRemoteImagesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/RemoteImages", req.pathParams);
    
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
        let res: operations.GetRemoteImagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.remoteImageResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteImageResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteImageResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRemoteSearchImage - Gets a remote image.
  GetRemoteSearchImage(
    req: operations.GetRemoteSearchImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRemoteSearchImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRemoteSearchImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/RemoteSearch/Image";
    
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
        let res: operations.GetRemoteSearchImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getRemoteSearchImage200ImageWildcardBinaryString = out;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRemoteSubtitles - Gets the remote subtitles.
  GetRemoteSubtitles(
    req: operations.GetRemoteSubtitlesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRemoteSubtitlesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRemoteSubtitlesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Providers/Subtitles/Subtitles/{id}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRemoteSubtitlesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getRemoteSubtitles200TextWildcardBinaryString = out;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRepositories - Gets all package repositories.
  GetRepositories(
    req: operations.GetRepositoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Repositories";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRepositoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.repositoryInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.repositoryInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.repositoryInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetResumeItems - Gets items based on a query.
  GetResumeItems(
    req: operations.GetResumeItemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResumeItemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResumeItemsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Items/Resume", req.pathParams);
    
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
        let res: operations.GetResumeItemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRootFolder - Gets the root folder from a user's library.
  GetRootFolder(
    req: operations.GetRootFolderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRootFolderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRootFolderRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Items/Root", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRootFolderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchedulesDirectCountries - Gets available countries.
  GetSchedulesDirectCountries(
    req: operations.GetSchedulesDirectCountriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesDirectCountriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesDirectCountriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/ListingProviders/SchedulesDirect/Countries";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchedulesDirectCountriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getSchedulesDirectCountries200ApplicationJsonBinaryString = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSeasons - Gets seasons for a tv series.
  GetSeasons(
    req: operations.GetSeasonsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeasonsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeasonsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Shows/{seriesId}/Seasons", req.pathParams);
    
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
        let res: operations.GetSeasonsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSeriesRemoteSearchResults - Get series remote search.
  GetSeriesRemoteSearchResults(
    req: operations.GetSeriesRemoteSearchResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesRemoteSearchResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesRemoteSearchResultsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/RemoteSearch/Series";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSeriesRemoteSearchResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSeriesTimer - Gets a live tv series timer.
  GetSeriesTimer(
    req: operations.GetSeriesTimerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesTimerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesTimerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/SeriesTimers/{timerId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSeriesTimerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.seriesTimerInfoDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.seriesTimerInfoDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.seriesTimerInfoDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSeriesTimers - Gets live tv series timers.
  GetSeriesTimers(
    req: operations.GetSeriesTimersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesTimersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesTimersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/SeriesTimers";
    
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
        let res: operations.GetSeriesTimersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.seriesTimerInfoDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.seriesTimerInfoDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.seriesTimerInfoDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetServerLogs - Gets a list of available server log files.
  GetServerLogs(
    req: operations.GetServerLogsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetServerLogsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetServerLogsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Logs";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetServerLogsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.logFiles = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.logFiles = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.logFiles = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSessions - Gets a list of sessions.
  GetSessions(
    req: operations.GetSessionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSessionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSessionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Sessions";
    
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
        let res: operations.GetSessionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.sessionInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.sessionInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.sessionInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSimilarAlbums - Gets similar items.
  GetSimilarAlbums(
    req: operations.GetSimilarAlbumsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSimilarAlbumsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSimilarAlbumsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Albums/{itemId}/Similar", req.pathParams);
    
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
        let res: operations.GetSimilarAlbumsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSimilarArtists - Gets similar items.
  GetSimilarArtists(
    req: operations.GetSimilarArtistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSimilarArtistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSimilarArtistsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Artists/{itemId}/Similar", req.pathParams);
    
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
        let res: operations.GetSimilarArtistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSimilarItems - Gets similar items.
  GetSimilarItems(
    req: operations.GetSimilarItemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSimilarItemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSimilarItemsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Similar", req.pathParams);
    
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
        let res: operations.GetSimilarItemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSimilarMovies - Gets similar items.
  GetSimilarMovies(
    req: operations.GetSimilarMoviesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSimilarMoviesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSimilarMoviesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Movies/{itemId}/Similar", req.pathParams);
    
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
        let res: operations.GetSimilarMoviesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSimilarShows - Gets similar items.
  GetSimilarShows(
    req: operations.GetSimilarShowsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSimilarShowsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSimilarShowsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Shows/{itemId}/Similar", req.pathParams);
    
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
        let res: operations.GetSimilarShowsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSimilarTrailers - Gets similar items.
  GetSimilarTrailers(
    req: operations.GetSimilarTrailersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSimilarTrailersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSimilarTrailersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Trailers/{itemId}/Similar", req.pathParams);
    
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
        let res: operations.GetSimilarTrailersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSpecialFeatures - Gets special features for an item.
  GetSpecialFeatures(
    req: operations.GetSpecialFeaturesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSpecialFeaturesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSpecialFeaturesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Items/{itemId}/SpecialFeatures", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSpecialFeaturesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetStartupConfiguration - Gets the initial startup wizard configuration.
  GetStartupConfiguration(
    req: operations.GetStartupConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStartupConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStartupConfigurationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Startup/Configuration";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetStartupConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.startupConfigurationDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.startupConfigurationDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.startupConfigurationDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetStatus - Gets the current quick connect state.
  GetStatus(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetStatusResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/QuickConnect/Status";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.quickConnectState = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.quickConnectState = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.quickConnectState = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetStudio - Gets a studio by name.
  GetStudio(
    req: operations.GetStudioRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudioResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudioRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Studios/{name}", req.pathParams);
    
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
        let res: operations.GetStudioResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetStudioImage - Get studio image by name.
  GetStudioImage(
    req: operations.GetStudioImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudioImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudioImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Studios/{name}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetStudioImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getStudioImage200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetStudioImageByIndex - Get studio image by name.
  GetStudioImageByIndex(
    req: operations.GetStudioImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudioImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudioImageByIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Studios/{name}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetStudioImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getStudioImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetStudios - Gets all studios from a given item, folder, or the entire library.
  GetStudios(
    req: operations.GetStudiosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiosRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Studios";
    
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
        let res: operations.GetStudiosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSubtitle - Gets subtitles in a specified format.
  GetSubtitle(
    req: operations.GetSubtitleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubtitleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubtitleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/{mediaSourceId}/Subtitles/{index}/Stream.{format}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetSubtitleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getSubtitle200TextWildcardBinaryString = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSubtitlePlaylist - Gets an HLS subtitle playlist.
  GetSubtitlePlaylist(
    req: operations.GetSubtitlePlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubtitlePlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubtitlePlaylistRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/{mediaSourceId}/Subtitles/{index}/subtitles.m3u8", req.pathParams);
    
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
        let res: operations.GetSubtitlePlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/x-mpegURL`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getSubtitlePlaylist200ApplicationXMpegurlBinaryString = out;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSubtitleWithTicks - Gets subtitles in a specified format.
  GetSubtitleWithTicks(
    req: operations.GetSubtitleWithTicksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubtitleWithTicksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubtitleWithTicksRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/{mediaSourceId}/Subtitles/{index}/{startPositionTicks}/Stream.{format}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetSubtitleWithTicksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getSubtitleWithTicks200TextWildcardBinaryString = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSuggestions - Gets suggestions.
  GetSuggestions(
    req: operations.GetSuggestionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSuggestionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSuggestionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Suggestions", req.pathParams);
    
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
        let res: operations.GetSuggestionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSystemInfo - Gets information about the server.
  GetSystemInfo(
    req: operations.GetSystemInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSystemInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSystemInfoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Info";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSystemInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.systemInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.systemInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.systemInfo = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTask - Get task by id.
  GetTask(
    req: operations.GetTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTaskRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ScheduledTasks/{taskId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.taskInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.taskInfo = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTasks - Get tasks.
  GetTasks(
    req: operations.GetTasksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTasksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTasksRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ScheduledTasks";
    
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
        let res: operations.GetTasksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.taskInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.taskInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.taskInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetThemeMedia - Get theme songs and videos for an item.
  GetThemeMedia(
    req: operations.GetThemeMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetThemeMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetThemeMediaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/ThemeMedia", req.pathParams);
    
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
        let res: operations.GetThemeMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.allThemeMediaResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.allThemeMediaResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.allThemeMediaResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetThemeSongs - Get theme songs for an item.
  GetThemeSongs(
    req: operations.GetThemeSongsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetThemeSongsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetThemeSongsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/ThemeSongs", req.pathParams);
    
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
        let res: operations.GetThemeSongsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.themeMediaResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.themeMediaResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.themeMediaResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetThemeVideos - Get theme videos for an item.
  GetThemeVideos(
    req: operations.GetThemeVideosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetThemeVideosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetThemeVideosRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/ThemeVideos", req.pathParams);
    
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
        let res: operations.GetThemeVideosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.themeMediaResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.themeMediaResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.themeMediaResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTimer - Gets a timer.
  GetTimer(
    req: operations.GetTimerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/Timers/{timerId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTimerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.timerInfoDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.timerInfoDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.timerInfoDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTimers - Gets the live tv timers.
  GetTimers(
    req: operations.GetTimersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Timers";
    
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
        let res: operations.GetTimersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.timerInfoDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.timerInfoDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.timerInfoDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTrailerRemoteSearchResults - Get trailer remote search.
  GetTrailerRemoteSearchResults(
    req: operations.GetTrailerRemoteSearchResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTrailerRemoteSearchResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTrailerRemoteSearchResultsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/RemoteSearch/Trailer";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTrailerRemoteSearchResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTrailers - Finds movies and trailers similar to a given trailer.
  GetTrailers(
    req: operations.GetTrailersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTrailersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTrailersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Trailers";
    
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
        let res: operations.GetTrailersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTunerHostTypes - Get tuner host types.
  GetTunerHostTypes(
    req: operations.GetTunerHostTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTunerHostTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTunerHostTypesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/TunerHosts/Types";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTunerHostTypesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.nameIdPairs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.nameIdPairs = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.nameIdPairs = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUniversalAudioStream - Gets an audio stream.
  GetUniversalAudioStream(
    req: operations.GetUniversalAudioStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUniversalAudioStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUniversalAudioStreamRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/universal", req.pathParams);
    
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
        let res: operations.GetUniversalAudioStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `audio/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getUniversalAudioStream200AudioWildcardBinaryString = out;
            }
            break;
          case 302:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUpcomingEpisodes - Gets a list of upcoming episodes.
  GetUpcomingEpisodes(
    req: operations.GetUpcomingEpisodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUpcomingEpisodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUpcomingEpisodesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Shows/Upcoming";
    
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
        let res: operations.GetUpcomingEpisodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUserById - Gets a user by Id.
  GetUserById(
    req: operations.GetUserByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserByIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUserByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUserImage - Get user profile image.
  GetUserImage(
    req: operations.GetUserImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetUserImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getUserImage200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUserImageByIndex - Get user profile image.
  GetUserImageByIndex(
    req: operations.GetUserImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserImageByIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetUserImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getUserImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUserViews - Get user views.
  GetUserViews(
    req: operations.GetUserViewsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserViewsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserViewsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Views", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetUserViewsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUsers - Gets a list of users.
  GetUsers(
    req: operations.GetUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Users";
    
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
        let res: operations.GetUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userDtos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userDtos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userDtos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUtcTime - Gets the current UTC time.
  GetUtcTime(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetUtcTimeResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/GetUtcTime";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUtcTimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.utcTimeResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.utcTimeResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.utcTimeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetVariantHlsAudioPlaylist - Gets an audio stream using HTTP live streaming.
  GetVariantHlsAudioPlaylist(
    req: operations.GetVariantHlsAudioPlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVariantHlsAudioPlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVariantHlsAudioPlaylistRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/main.m3u8", req.pathParams);
    
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
        let res: operations.GetVariantHlsAudioPlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/x-mpegURL`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getVariantHlsAudioPlaylist200ApplicationXMpegurlBinaryString = out;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetVariantHlsVideoPlaylist - Gets a video stream using HTTP live streaming.
  GetVariantHlsVideoPlaylist(
    req: operations.GetVariantHlsVideoPlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVariantHlsVideoPlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVariantHlsVideoPlaylistRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/main.m3u8", req.pathParams);
    
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
        let res: operations.GetVariantHlsVideoPlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/x-mpegURL`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getVariantHlsVideoPlaylist200ApplicationXMpegurlBinaryString = out;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetVideoStream - Gets a video stream.
  GetVideoStream(
    req: operations.GetVideoStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVideoStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVideoStreamRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/stream", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetVideoStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `video/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getVideoStream200VideoWildcardBinaryString = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetVideoStreamByContainer - Gets a video stream.
  GetVideoStreamByContainer(
    req: operations.GetVideoStreamByContainerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVideoStreamByContainerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVideoStreamByContainerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/{stream}.{container}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetVideoStreamByContainerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `video/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getVideoStreamByContainer200VideoWildcardBinaryString = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetVirtualFolders - Gets all virtual folders.
  GetVirtualFolders(
    req: operations.GetVirtualFoldersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVirtualFoldersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVirtualFoldersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/VirtualFolders";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetVirtualFoldersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.virtualFolderInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.virtualFolderInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.virtualFolderInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWakeOnLanInfo - Gets wake on lan information.
  GetWakeOnLanInfo(
    req: operations.GetWakeOnLanInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWakeOnLanInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWakeOnLanInfoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/WakeOnLanInfo";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetWakeOnLanInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.wakeOnLanInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.wakeOnLanInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.wakeOnLanInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetYear - Gets a year.
  GetYear(
    req: operations.GetYearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetYearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetYearRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Years/{year}", req.pathParams);
    
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
        let res: operations.GetYearResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetYears - Get years.
  GetYears(
    req: operations.GetYearsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetYearsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetYearsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Years";
    
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
        let res: operations.GetYearsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadArtistImage - Get artist image by name.
  HeadArtistImage(
    req: operations.HeadArtistImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadArtistImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadArtistImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Artists/{name}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .head(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadArtistImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headArtistImage200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadAudioStream - Gets an audio stream.
  HeadAudioStream(
    req: operations.HeadAudioStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadAudioStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadAudioStreamRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/stream", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .head(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadAudioStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `audio/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headAudioStream200AudioWildcardBinaryString = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadAudioStreamByContainer - Gets an audio stream.
  HeadAudioStreamByContainer(
    req: operations.HeadAudioStreamByContainerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadAudioStreamByContainerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadAudioStreamByContainerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/stream.{container}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .head(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadAudioStreamByContainerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `audio/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headAudioStreamByContainer200AudioWildcardBinaryString = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadGenreImage - Get genre image by name.
  HeadGenreImage(
    req: operations.HeadGenreImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadGenreImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadGenreImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Genres/{name}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .head(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadGenreImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headGenreImage200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadGenreImageByIndex - Get genre image by name.
  HeadGenreImageByIndex(
    req: operations.HeadGenreImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadGenreImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadGenreImageByIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Genres/{name}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .head(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadGenreImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headGenreImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadItemImage - Gets the item's image.
  HeadItemImage(
    req: operations.HeadItemImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadItemImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadItemImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .head(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadItemImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headItemImage200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadItemImage2 - Gets the item's image.
  HeadItemImage2(
    req: operations.HeadItemImage2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadItemImage2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadItemImage2Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}/{imageIndex}/{tag}/{format}/{maxWidth}/{maxHeight}/{percentPlayed}/{unplayedCount}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .head(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadItemImage2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headItemImage2200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadItemImageByIndex - Gets the item's image.
  HeadItemImageByIndex(
    req: operations.HeadItemImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadItemImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadItemImageByIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .head(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadItemImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headItemImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadMasterHlsAudioPlaylist - Gets an audio hls playlist stream.
  HeadMasterHlsAudioPlaylist(
    req: operations.HeadMasterHlsAudioPlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadMasterHlsAudioPlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadMasterHlsAudioPlaylistRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/master.m3u8", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .head(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadMasterHlsAudioPlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/x-mpegURL`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headMasterHlsAudioPlaylist200ApplicationXMpegurlBinaryString = out;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadMasterHlsVideoPlaylist - Gets a video hls playlist stream.
  HeadMasterHlsVideoPlaylist(
    req: operations.HeadMasterHlsVideoPlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadMasterHlsVideoPlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadMasterHlsVideoPlaylistRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/master.m3u8", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .head(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadMasterHlsVideoPlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/x-mpegURL`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headMasterHlsVideoPlaylist200ApplicationXMpegurlBinaryString = out;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadMusicGenreImage - Get music genre image by name.
  HeadMusicGenreImage(
    req: operations.HeadMusicGenreImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadMusicGenreImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadMusicGenreImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/MusicGenres/{name}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .head(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadMusicGenreImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headMusicGenreImage200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadMusicGenreImageByIndex - Get music genre image by name.
  HeadMusicGenreImageByIndex(
    req: operations.HeadMusicGenreImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadMusicGenreImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadMusicGenreImageByIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/MusicGenres/{name}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .head(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadMusicGenreImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headMusicGenreImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadPersonImage - Get person image by name.
  HeadPersonImage(
    req: operations.HeadPersonImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadPersonImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadPersonImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Persons/{name}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .head(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadPersonImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headPersonImage200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadPersonImageByIndex - Get person image by name.
  HeadPersonImageByIndex(
    req: operations.HeadPersonImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadPersonImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadPersonImageByIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Persons/{name}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .head(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadPersonImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headPersonImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadStudioImage - Get studio image by name.
  HeadStudioImage(
    req: operations.HeadStudioImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadStudioImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadStudioImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Studios/{name}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .head(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadStudioImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headStudioImage200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadStudioImageByIndex - Get studio image by name.
  HeadStudioImageByIndex(
    req: operations.HeadStudioImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadStudioImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadStudioImageByIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Studios/{name}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .head(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadStudioImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headStudioImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadUniversalAudioStream - Gets an audio stream.
  HeadUniversalAudioStream(
    req: operations.HeadUniversalAudioStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadUniversalAudioStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadUniversalAudioStreamRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/universal", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .head(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadUniversalAudioStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `audio/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headUniversalAudioStream200AudioWildcardBinaryString = out;
            }
            break;
          case 302:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadUserImage - Get user profile image.
  HeadUserImage(
    req: operations.HeadUserImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadUserImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadUserImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .head(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadUserImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headUserImage200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadUserImageByIndex - Get user profile image.
  HeadUserImageByIndex(
    req: operations.HeadUserImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadUserImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadUserImageByIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .head(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadUserImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headUserImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadVideoStream - Gets a video stream.
  HeadVideoStream(
    req: operations.HeadVideoStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadVideoStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadVideoStreamRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/stream", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .head(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadVideoStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `video/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headVideoStream200VideoWildcardBinaryString = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadVideoStreamByContainer - Gets a video stream.
  HeadVideoStreamByContainer(
    req: operations.HeadVideoStreamByContainerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadVideoStreamByContainerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadVideoStreamByContainerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/{stream}.{container}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .head(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadVideoStreamByContainerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `video/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headVideoStreamByContainer200VideoWildcardBinaryString = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Initiate - Initiate a new quick connect request.
  Initiate(
    
    config?: AxiosRequestConfig
  ): Promise<operations.InitiateResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/QuickConnect/Initiate";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.InitiateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.quickConnectResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.quickConnectResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.quickConnectResult = httpRes?.data;
            }
            break;
          case 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // InstallPackage - Installs a package.
  InstallPackage(
    req: operations.InstallPackageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InstallPackageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InstallPackageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Packages/Installed/{name}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.InstallPackageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // MarkFavoriteItem - Marks an item as a favorite.
  MarkFavoriteItem(
    req: operations.MarkFavoriteItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MarkFavoriteItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MarkFavoriteItemRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/FavoriteItems/{itemId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.MarkFavoriteItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // MarkPlayedItem - Marks an item as played for user.
  MarkPlayedItem(
    req: operations.MarkPlayedItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MarkPlayedItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MarkPlayedItemRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/PlayedItems/{itemId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.MarkPlayedItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // MarkUnplayedItem - Marks an item as unplayed for user.
  MarkUnplayedItem(
    req: operations.MarkUnplayedItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MarkUnplayedItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MarkUnplayedItemRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/PlayedItems/{itemId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.MarkUnplayedItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // MergeVersions - Merges videos into a single record.
  MergeVersions(
    req: operations.MergeVersionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MergeVersionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MergeVersionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Videos/MergeVersions";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.MergeVersionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // MoveItem - Moves a playlist item.
  MoveItem(
    req: operations.MoveItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MoveItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MoveItemRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Playlists/{playlistId}/Items/{itemId}/Move/{newIndex}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.MoveItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OnPlaybackProgress - Reports a user's playback progress.
  OnPlaybackProgress(
    req: operations.OnPlaybackProgressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OnPlaybackProgressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OnPlaybackProgressRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/PlayingItems/{itemId}/Progress", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.OnPlaybackProgressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OnPlaybackStart - Reports that a user has begun playing an item.
  OnPlaybackStart(
    req: operations.OnPlaybackStartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OnPlaybackStartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OnPlaybackStartRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/PlayingItems/{itemId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.OnPlaybackStartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OnPlaybackStopped - Reports that a user has stopped playing an item.
  OnPlaybackStopped(
    req: operations.OnPlaybackStoppedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OnPlaybackStoppedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OnPlaybackStoppedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/PlayingItems/{itemId}", req.pathParams);
    
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
        let res: operations.OnPlaybackStoppedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OpenLiveStream - Opens a media source.
  OpenLiveStream(
    req: operations.OpenLiveStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OpenLiveStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OpenLiveStreamRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveStreams/Open";
    
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
        let res: operations.OpenLiveStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.liveStreamResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.liveStreamResponse = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.liveStreamResponse = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PingPlaybackSession - Pings a playback session.
  PingPlaybackSession(
    req: operations.PingPlaybackSessionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PingPlaybackSessionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PingPlaybackSessionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Sessions/Playing/Ping";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PingPlaybackSessionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Play - Instructs a session to play an item.
  Play(
    req: operations.PlayRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Sessions/{sessionId}/Playing", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PlayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Post - Refreshes metadata for an item.
  Post(
    req: operations.PostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Refresh", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostAddedMovies - Reports that new movies have been added by an external source.
  PostAddedMovies(
    req: operations.PostAddedMoviesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAddedMoviesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAddedMoviesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/Movies/Added";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAddedMoviesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostAddedSeries - Reports that new episodes of a series have been added by an external source.
  PostAddedSeries(
    req: operations.PostAddedSeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAddedSeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAddedSeriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/Series/Added";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAddedSeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostCapabilities - Updates capabilities for a device.
  PostCapabilities(
    req: operations.PostCapabilitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCapabilitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCapabilitiesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Sessions/Capabilities";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostCapabilitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostFullCapabilities - Updates capabilities for a device.
  PostFullCapabilities(
    req: operations.PostFullCapabilitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostFullCapabilitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostFullCapabilitiesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Sessions/Capabilities/Full";
    
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
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostFullCapabilitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostPingSystem - Pings the system.
  PostPingSystem(
    
    config?: AxiosRequestConfig
  ): Promise<operations.PostPingSystemResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Ping";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostPingSystemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.postPingSystem200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.postPingSystem200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.postPingSystem200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUpdatedMedia - Reports that new movies have been added by an external source.
  PostUpdatedMedia(
    req: operations.PostUpdatedMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUpdatedMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUpdatedMediaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/Media/Updated";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUpdatedMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUpdatedMovies - Reports that new movies have been added by an external source.
  PostUpdatedMovies(
    req: operations.PostUpdatedMoviesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUpdatedMoviesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUpdatedMoviesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/Movies/Updated";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUpdatedMoviesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUpdatedSeries - Reports that new episodes of a series have been added by an external source.
  PostUpdatedSeries(
    req: operations.PostUpdatedSeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUpdatedSeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUpdatedSeriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/Series/Updated";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUpdatedSeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUserImage - Sets the user image.
  PostUserImage(
    req: operations.PostUserImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUserImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUserImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUserImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostUserImageByIndex - Sets the user image.
  PostUserImageByIndex(
    req: operations.PostUserImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUserImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUserImageByIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Images/{imageType}/{index}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostUserImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProcessConnectionManagerControlRequest - Process a connection manager control request.
  ProcessConnectionManagerControlRequest(
    req: operations.ProcessConnectionManagerControlRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProcessConnectionManagerControlRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProcessConnectionManagerControlRequestRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/ConnectionManager/Control", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProcessConnectionManagerControlRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.processConnectionManagerControlRequest200TextXmlBinaryString = out;
            }
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProcessContentDirectoryControlRequest - Process a content directory control request.
  ProcessContentDirectoryControlRequest(
    req: operations.ProcessContentDirectoryControlRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProcessContentDirectoryControlRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProcessContentDirectoryControlRequestRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/ContentDirectory/Control", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProcessContentDirectoryControlRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.processContentDirectoryControlRequest200TextXmlBinaryString = out;
            }
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProcessMediaReceiverRegistrarControlRequest - Process a media receiver registrar control request.
  ProcessMediaReceiverRegistrarControlRequest(
    req: operations.ProcessMediaReceiverRegistrarControlRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProcessMediaReceiverRegistrarControlRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProcessMediaReceiverRegistrarControlRequestRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/MediaReceiverRegistrar/Control", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProcessMediaReceiverRegistrarControlRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.processMediaReceiverRegistrarControlRequest200TextXmlBinaryString = out;
            }
            break;
          case 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RefreshLibrary - Starts a library scan.
  RefreshLibrary(
    req: operations.RefreshLibraryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RefreshLibraryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RefreshLibraryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/Refresh";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RefreshLibraryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RemoveFromCollection - Removes items from a collection.
  RemoveFromCollection(
    req: operations.RemoveFromCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveFromCollectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveFromCollectionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Collections/{collectionId}/Items", req.pathParams);
    
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
        let res: operations.RemoveFromCollectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RemoveFromPlaylist - Removes items from a playlist.
  RemoveFromPlaylist(
    req: operations.RemoveFromPlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveFromPlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveFromPlaylistRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Playlists/{playlistId}/Items", req.pathParams);
    
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
        let res: operations.RemoveFromPlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RemoveMediaPath - Remove a media path.
  RemoveMediaPath(
    req: operations.RemoveMediaPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveMediaPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveMediaPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/VirtualFolders/Paths";
    
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
        let res: operations.RemoveMediaPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RemoveUserFromSession - Removes an additional user from a session.
  RemoveUserFromSession(
    req: operations.RemoveUserFromSessionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveUserFromSessionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveUserFromSessionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Sessions/{sessionId}/User/{userId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RemoveUserFromSessionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RemoveVirtualFolder - Removes a virtual folder.
  RemoveVirtualFolder(
    req: operations.RemoveVirtualFolderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveVirtualFolderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveVirtualFolderRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/VirtualFolders";
    
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
        let res: operations.RemoveVirtualFolderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RenameVirtualFolder - Renames a virtual folder.
  RenameVirtualFolder(
    req: operations.RenameVirtualFolderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RenameVirtualFolderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RenameVirtualFolderRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/VirtualFolders/Name";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RenameVirtualFolderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReportPlaybackProgress - Reports playback progress within a session.
  ReportPlaybackProgress(
    req: operations.ReportPlaybackProgressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportPlaybackProgressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportPlaybackProgressRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Sessions/Playing/Progress";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReportPlaybackProgressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReportPlaybackStart - Reports playback has started within a session.
  ReportPlaybackStart(
    req: operations.ReportPlaybackStartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportPlaybackStartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportPlaybackStartRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Sessions/Playing";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReportPlaybackStartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReportPlaybackStopped - Reports playback has stopped within a session.
  ReportPlaybackStopped(
    req: operations.ReportPlaybackStoppedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportPlaybackStoppedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportPlaybackStoppedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Sessions/Playing/Stopped";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReportPlaybackStoppedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReportSessionEnded - Reports that a session has ended.
  ReportSessionEnded(
    req: operations.ReportSessionEndedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportSessionEndedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportSessionEndedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Sessions/Logout";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReportSessionEndedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReportViewing - Reports that a session is viewing an item.
  ReportViewing(
    req: operations.ReportViewingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportViewingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportViewingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Sessions/Viewing";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReportViewingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ResetTuner - Resets a tv tuner.
  ResetTuner(
    req: operations.ResetTunerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ResetTunerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ResetTunerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/Tuners/{tunerId}/Reset", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ResetTunerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RestartApplication - Restarts the application.
  RestartApplication(
    req: operations.RestartApplicationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RestartApplicationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RestartApplicationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Restart";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RestartApplicationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RevokeKey - Remove an api key.
  RevokeKey(
    req: operations.RevokeKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RevokeKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RevokeKeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Auth/Keys/{key}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RevokeKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchRemoteSubtitles - Search remote subtitles.
  SearchRemoteSubtitles(
    req: operations.SearchRemoteSubtitlesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchRemoteSubtitlesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchRemoteSubtitlesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/RemoteSearch/Subtitles/{language}", req.pathParams);
    
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
        let res: operations.SearchRemoteSubtitlesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.remoteSubtitleInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteSubtitleInfos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteSubtitleInfos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SendFullGeneralCommand - Issues a full general command to a client.
  SendFullGeneralCommand(
    req: operations.SendFullGeneralCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SendFullGeneralCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SendFullGeneralCommandRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Sessions/{sessionId}/Command", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SendFullGeneralCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SendGeneralCommand - Issues a general command to a client.
  SendGeneralCommand(
    req: operations.SendGeneralCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SendGeneralCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SendGeneralCommandRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Sessions/{sessionId}/Command/{command}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SendGeneralCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SendMessageCommand - Issues a command to a client to display a message to the user.
  SendMessageCommand(
    req: operations.SendMessageCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SendMessageCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SendMessageCommandRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Sessions/{sessionId}/Message", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SendMessageCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SendPlaystateCommand - Issues a playstate command to a client.
  SendPlaystateCommand(
    req: operations.SendPlaystateCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SendPlaystateCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SendPlaystateCommandRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Sessions/{sessionId}/Playing/{command}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SendPlaystateCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SendSystemCommand - Issues a system command to a client.
  SendSystemCommand(
    req: operations.SendSystemCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SendSystemCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SendSystemCommandRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Sessions/{sessionId}/System/{command}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SendSystemCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetChannelMapping - Set channel mappings.
  SetChannelMapping(
    req: operations.SetChannelMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetChannelMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetChannelMappingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/ChannelMappings";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetChannelMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.tunerChannelMapping = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.tunerChannelMapping = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.tunerChannelMapping = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetItemImage - Set item image.
  SetItemImage(
    req: operations.SetItemImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetItemImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetItemImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetItemImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetItemImageByIndex - Set item image.
  SetItemImageByIndex(
    req: operations.SetItemImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetItemImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetItemImageByIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetItemImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetRead - Sets notifications as read.
  SetRead(
    req: operations.SetReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Notifications/{userId}/Read", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetRemoteAccess - Sets remote access and UPnP.
  SetRemoteAccess(
    req: operations.SetRemoteAccessRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetRemoteAccessResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetRemoteAccessRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Startup/RemoteAccess";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetRemoteAccessResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetRepositories - Sets the enabled and existing package repositories.
  SetRepositories(
    req: operations.SetRepositoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetRepositoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetRepositoriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Repositories";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetRepositoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetUnread - Sets notifications as unread.
  SetUnread(
    req: operations.SetUnreadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetUnreadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetUnreadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Notifications/{userId}/Unread", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetUnreadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ShutdownApplication - Shuts down the application.
  ShutdownApplication(
    req: operations.ShutdownApplicationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ShutdownApplicationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ShutdownApplicationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Shutdown";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ShutdownApplicationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StartTask - Start specified task.
  StartTask(
    req: operations.StartTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StartTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StartTaskRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ScheduledTasks/Running/{taskId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StartTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StopEncodingProcess - Stops an active encoding.
  StopEncodingProcess(
    req: operations.StopEncodingProcessRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StopEncodingProcessResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StopEncodingProcessRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Videos/ActiveEncodings";
    
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
        let res: operations.StopEncodingProcessResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StopTask - Stop specified task.
  StopTask(
    req: operations.StopTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StopTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StopTaskRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ScheduledTasks/Running/{taskId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StopTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SyncPlayBuffering - Notify SyncPlay group that member is buffering.
  SyncPlayBuffering(
    req: operations.SyncPlayBufferingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayBufferingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayBufferingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/Buffering";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SyncPlayBufferingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SyncPlayCreateGroup - Create a new SyncPlay group.
  SyncPlayCreateGroup(
    req: operations.SyncPlayCreateGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayCreateGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayCreateGroupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/New";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SyncPlayCreateGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SyncPlayGetGroups - Gets all SyncPlay groups.
  SyncPlayGetGroups(
    req: operations.SyncPlayGetGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayGetGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayGetGroupsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/List";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SyncPlayGetGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.groupInfoDtos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.groupInfoDtos = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.groupInfoDtos = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SyncPlayJoinGroup - Join an existing SyncPlay group.
  SyncPlayJoinGroup(
    req: operations.SyncPlayJoinGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayJoinGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayJoinGroupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/Join";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SyncPlayJoinGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SyncPlayLeaveGroup - Leave the joined SyncPlay group.
  SyncPlayLeaveGroup(
    req: operations.SyncPlayLeaveGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayLeaveGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayLeaveGroupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/Leave";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SyncPlayLeaveGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SyncPlayMovePlaylistItem - Request to move an item in the playlist in SyncPlay group.
  SyncPlayMovePlaylistItem(
    req: operations.SyncPlayMovePlaylistItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayMovePlaylistItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayMovePlaylistItemRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/MovePlaylistItem";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SyncPlayMovePlaylistItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SyncPlayNextItem - Request next item in SyncPlay group.
  SyncPlayNextItem(
    req: operations.SyncPlayNextItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayNextItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayNextItemRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/NextItem";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SyncPlayNextItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SyncPlayPause - Request pause in SyncPlay group.
  SyncPlayPause(
    req: operations.SyncPlayPauseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayPauseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayPauseRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/Pause";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SyncPlayPauseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SyncPlayPing - Update session ping.
  SyncPlayPing(
    req: operations.SyncPlayPingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayPingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayPingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/Ping";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SyncPlayPingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SyncPlayPreviousItem - Request previous item in SyncPlay group.
  SyncPlayPreviousItem(
    req: operations.SyncPlayPreviousItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayPreviousItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayPreviousItemRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/PreviousItem";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SyncPlayPreviousItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SyncPlayQueue - Request to queue items to the playlist of a SyncPlay group.
  SyncPlayQueue(
    req: operations.SyncPlayQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayQueueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/Queue";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SyncPlayQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SyncPlayReady - Notify SyncPlay group that member is ready for playback.
  SyncPlayReady(
    req: operations.SyncPlayReadyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayReadyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayReadyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/Ready";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SyncPlayReadyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SyncPlayRemoveFromPlaylist - Request to remove items from the playlist in SyncPlay group.
  SyncPlayRemoveFromPlaylist(
    req: operations.SyncPlayRemoveFromPlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayRemoveFromPlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayRemoveFromPlaylistRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/RemoveFromPlaylist";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SyncPlayRemoveFromPlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SyncPlaySeek - Request seek in SyncPlay group.
  SyncPlaySeek(
    req: operations.SyncPlaySeekRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlaySeekResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlaySeekRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/Seek";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SyncPlaySeekResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SyncPlaySetIgnoreWait - Request SyncPlay group to ignore member during group-wait.
  SyncPlaySetIgnoreWait(
    req: operations.SyncPlaySetIgnoreWaitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlaySetIgnoreWaitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlaySetIgnoreWaitRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/SetIgnoreWait";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SyncPlaySetIgnoreWaitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SyncPlaySetNewQueue - Request to set new playlist in SyncPlay group.
  SyncPlaySetNewQueue(
    req: operations.SyncPlaySetNewQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlaySetNewQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlaySetNewQueueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/SetNewQueue";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SyncPlaySetNewQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SyncPlaySetPlaylistItem - Request to change playlist item in SyncPlay group.
  SyncPlaySetPlaylistItem(
    req: operations.SyncPlaySetPlaylistItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlaySetPlaylistItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlaySetPlaylistItemRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/SetPlaylistItem";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SyncPlaySetPlaylistItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SyncPlaySetRepeatMode - Request to set repeat mode in SyncPlay group.
  SyncPlaySetRepeatMode(
    req: operations.SyncPlaySetRepeatModeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlaySetRepeatModeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlaySetRepeatModeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/SetRepeatMode";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SyncPlaySetRepeatModeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SyncPlaySetShuffleMode - Request to set shuffle mode in SyncPlay group.
  SyncPlaySetShuffleMode(
    req: operations.SyncPlaySetShuffleModeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlaySetShuffleModeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlaySetShuffleModeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/SetShuffleMode";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SyncPlaySetShuffleModeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SyncPlayStop - Request stop in SyncPlay group.
  SyncPlayStop(
    req: operations.SyncPlayStopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayStopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayStopRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/Stop";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SyncPlayStopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SyncPlayUnpause - Request unpause in SyncPlay group.
  SyncPlayUnpause(
    req: operations.SyncPlayUnpauseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayUnpauseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayUnpauseRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/Unpause";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SyncPlayUnpauseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UninstallPlugin - Uninstalls a plugin.
  UninstallPlugin(
    req: operations.UninstallPluginRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UninstallPluginResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UninstallPluginRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Plugins/{pluginId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UninstallPluginResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UninstallPluginByVersion - Uninstalls a plugin by version.
  UninstallPluginByVersion(
    req: operations.UninstallPluginByVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UninstallPluginByVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UninstallPluginByVersionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Plugins/{pluginId}/{version}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UninstallPluginByVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UnmarkFavoriteItem - Unmarks item as a favorite.
  UnmarkFavoriteItem(
    req: operations.UnmarkFavoriteItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UnmarkFavoriteItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UnmarkFavoriteItemRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/FavoriteItems/{itemId}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UnmarkFavoriteItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateConfiguration - Updates application configuration.
  UpdateConfiguration(
    req: operations.UpdateConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConfigurationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Configuration";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateDeviceOptions - Update device options.
  UpdateDeviceOptions(
    req: operations.UpdateDeviceOptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeviceOptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeviceOptionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Devices/Options";
    
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
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateDeviceOptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateDisplayPreferences - Update Display Preferences.
  UpdateDisplayPreferences(
    req: operations.UpdateDisplayPreferencesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDisplayPreferencesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDisplayPreferencesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/DisplayPreferences/{displayPreferencesId}", req.pathParams);
    
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
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateDisplayPreferencesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateInitialConfiguration - Sets the initial startup wizard configuration.
  UpdateInitialConfiguration(
    req: operations.UpdateInitialConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateInitialConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateInitialConfigurationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Startup/Configuration";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateInitialConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateItem - Updates an item.
  UpdateItem(
    req: operations.UpdateItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateItemRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateItemContentType - Updates an item's content type.
  UpdateItemContentType(
    req: operations.UpdateItemContentTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateItemContentTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateItemContentTypeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/ContentType", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateItemContentTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateItemImageIndex - Updates the index for an item image.
  UpdateItemImageIndex(
    req: operations.UpdateItemImageIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateItemImageIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateItemImageIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}/{imageIndex}/Index", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateItemImageIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateLibraryOptions - Update library options.
  UpdateLibraryOptions(
    req: operations.UpdateLibraryOptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateLibraryOptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateLibraryOptionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/VirtualFolders/LibraryOptions";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateLibraryOptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateMediaEncoderPath - Updates the path to the media encoder.
  UpdateMediaEncoderPath(
    req: operations.UpdateMediaEncoderPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMediaEncoderPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMediaEncoderPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/MediaEncoder/Path";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateMediaEncoderPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateMediaPath - Updates a media path.
  UpdateMediaPath(
    req: operations.UpdateMediaPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMediaPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMediaPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/VirtualFolders/Paths/Update";
    
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
        let res: operations.UpdateMediaPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateNamedConfiguration - Updates named configuration.
  UpdateNamedConfiguration(
    req: operations.UpdateNamedConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNamedConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNamedConfigurationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/System/Configuration/{key}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateNamedConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdatePluginConfiguration - Updates plugin configuration.
  /** 
   * Accepts plugin configuration as JSON body.
  **/
  UpdatePluginConfiguration(
    req: operations.UpdatePluginConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePluginConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePluginConfigurationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Plugins/{pluginId}/Configuration", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdatePluginConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdatePluginSecurityInfo - Updates plugin security info.
  UpdatePluginSecurityInfo(
    req: operations.UpdatePluginSecurityInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePluginSecurityInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePluginSecurityInfoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Plugins/SecurityInfo";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdatePluginSecurityInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateProfile - Updates a profile.
  UpdateProfile(
    req: operations.UpdateProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateProfileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/Profiles/{profileId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSeriesTimer - Updates a live tv series timer.
  UpdateSeriesTimer(
    req: operations.UpdateSeriesTimerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSeriesTimerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSeriesTimerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/SeriesTimers/{timerId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateSeriesTimerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateStartupUser - Sets the user name and password.
  UpdateStartupUser(
    req: operations.UpdateStartupUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateStartupUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateStartupUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Startup/User";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateStartupUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateTask - Update specified task triggers.
  UpdateTask(
    req: operations.UpdateTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateTaskRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ScheduledTasks/{taskId}/Triggers", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateTimer - Updates a live tv timer.
  UpdateTimer(
    req: operations.UpdateTimerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateTimerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateTimerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/Timers/{timerId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateTimerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateUser - Updates a user.
  UpdateUser(
    req: operations.UpdateUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateUserConfiguration - Updates a user configuration.
  UpdateUserConfiguration(
    req: operations.UpdateUserConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUserConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUserConfigurationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Configuration", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateUserConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateUserEasyPassword - Updates a user's easy password.
  UpdateUserEasyPassword(
    req: operations.UpdateUserEasyPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUserEasyPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUserEasyPasswordRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/EasyPassword", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateUserEasyPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateUserItemRating - Updates a user's rating for an item.
  UpdateUserItemRating(
    req: operations.UpdateUserItemRatingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUserItemRatingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUserItemRatingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Items/{itemId}/Rating", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateUserItemRatingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateUserPassword - Updates a user's password.
  UpdateUserPassword(
    req: operations.UpdateUserPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUserPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUserPasswordRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Password", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateUserPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateUserPolicy - Updates a user policy.
  UpdateUserPolicy(
    req: operations.UpdateUserPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUserPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUserPolicyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Policy", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateUserPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case 401:
            break;
          case 403:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UploadSubtitle - Upload an external subtitle file.
  UploadSubtitle(
    req: operations.UploadSubtitleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UploadSubtitleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UploadSubtitleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/Subtitles", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UploadSubtitleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ValidatePath - Validates path.
  ValidatePath(
    req: operations.ValidatePathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ValidatePathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ValidatePathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Environment/ValidatePath";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ValidatePathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
