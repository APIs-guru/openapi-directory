import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
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
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
  }
  
  /**
   * activate - Temporarily activates quick connect for five minutes.
  **/
  activate(
    req: operations.ActivateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/QuickConnect/Activate";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActivateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addListingProvider - Adds a listings provider.
  **/
  addListingProvider(
    req: operations.AddListingProviderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddListingProviderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddListingProviderRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/ListingProviders";

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
        const res: operations.AddListingProviderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listingsProviderInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.listingsProviderInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.listingsProviderInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addMediaPath - Add a media path to a library.
  **/
  addMediaPath(
    req: operations.AddMediaPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddMediaPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddMediaPathRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/VirtualFolders/Paths";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.AddMediaPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addToCollection - Adds items to a collection.
  **/
  addToCollection(
    req: operations.AddToCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddToCollectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddToCollectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Collections/{collectionId}/Items", req.pathParams);
    
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
        const res: operations.AddToCollectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addToPlaylist - Adds items to a playlist.
  **/
  addToPlaylist(
    req: operations.AddToPlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddToPlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddToPlaylistRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Playlists/{playlistId}/Items", req.pathParams);
    
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
        const res: operations.AddToPlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addTunerHost - Adds a tuner host.
  **/
  addTunerHost(
    req: operations.AddTunerHostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddTunerHostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddTunerHostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/TunerHosts";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddTunerHostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tunerHostInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.tunerHostInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.tunerHostInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addUserToSession - Adds an additional user to a session.
  **/
  addUserToSession(
    req: operations.AddUserToSessionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddUserToSessionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddUserToSessionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Sessions/{sessionId}/User/{userId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddUserToSessionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addVirtualFolder - Adds a virtual folder.
  **/
  addVirtualFolder(
    req: operations.AddVirtualFolderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddVirtualFolderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddVirtualFolderRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/VirtualFolders";

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
        const res: operations.AddVirtualFolderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * applySearchCriteria - Applies search criteria to an item and refreshes metadata.
  **/
  applySearchCriteria(
    req: operations.ApplySearchCriteriaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ApplySearchCriteriaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ApplySearchCriteriaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/RemoteSearch/Apply/{itemId}", req.pathParams);

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.ApplySearchCriteriaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authenticateUser - Authenticates a user.
  **/
  authenticateUser(
    req: operations.AuthenticateUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthenticateUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthenticateUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Authenticate", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.AuthenticateUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authenticationResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.authenticationResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.authenticationResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authenticateUserByName - Authenticates a user by name.
  **/
  authenticateUserByName(
    req: operations.AuthenticateUserByNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthenticateUserByNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthenticateUserByNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Users/AuthenticateByName";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AuthenticateUserByNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authenticationResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.authenticationResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.authenticationResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authenticateWithQuickConnect - Authenticates a user with quick connect.
  **/
  authenticateWithQuickConnect(
    req: operations.AuthenticateWithQuickConnectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthenticateWithQuickConnectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthenticateWithQuickConnectRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Users/AuthenticateWithQuickConnect";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AuthenticateWithQuickConnectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authenticationResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.authenticationResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.authenticationResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorize - Authorizes a pending quick connect request.
  **/
  authorize(
    req: operations.AuthorizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/QuickConnect/Authorize";
    
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
        const res: operations.AuthorizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authorize200ApplicationJsonBoolean = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.authorize200ApplicationJsonBoolean = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.authorize200ApplicationJsonBoolean = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * available - Enables or disables quick connect.
  **/
  available(
    req: operations.AvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AvailableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/QuickConnect/Available";
    
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
        const res: operations.AvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cancelPackageInstallation - Cancels a package installation.
  **/
  cancelPackageInstallation(
    req: operations.CancelPackageInstallationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelPackageInstallationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelPackageInstallationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Packages/Installing/{packageId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CancelPackageInstallationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cancelSeriesTimer - Cancels a live tv series timer.
  **/
  cancelSeriesTimer(
    req: operations.CancelSeriesTimerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelSeriesTimerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelSeriesTimerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/SeriesTimers/{timerId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CancelSeriesTimerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cancelTimer - Cancels a live tv timer.
  **/
  cancelTimer(
    req: operations.CancelTimerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelTimerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelTimerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/Timers/{timerId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CancelTimerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * closeLiveStream - Closes a media source.
  **/
  closeLiveStream(
    req: operations.CloseLiveStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloseLiveStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloseLiveStreamRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveStreams/Close";
    
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
        const res: operations.CloseLiveStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * completeWizard - Completes the startup wizard.
  **/
  completeWizard(
    req: operations.CompleteWizardRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompleteWizardResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompleteWizardRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Startup/Complete";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompleteWizardResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * connect - Attempts to retrieve authentication information.
  **/
  connect(
    req: operations.ConnectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConnectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConnectRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/QuickConnect/Connect";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.ConnectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.quickConnectResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.quickConnectResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.quickConnectResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createAdminNotification - Sends a notification to all admins.
  **/
  createAdminNotification(
    req: operations.CreateAdminNotificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAdminNotificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAdminNotificationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Notifications/Admin";
    
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
        const res: operations.CreateAdminNotificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createCollection - Creates a new collection.
  **/
  createCollection(
    req: operations.CreateCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCollectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCollectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Collections";
    
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
        const res: operations.CreateCollectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.collectionCreationResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.collectionCreationResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.collectionCreationResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createKey - Create a new api key.
  **/
  createKey(
    req: operations.CreateKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Auth/Keys";
    
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
        const res: operations.CreateKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createPlaylist - Creates a new playlist.
   *
   * For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.
  **/
  createPlaylist(
    req: operations.CreatePlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePlaylistRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Playlists";

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
        const res: operations.CreatePlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playlistCreationResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.playlistCreationResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.playlistCreationResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createProfile - Creates a profile.
  **/
  createProfile(
    req: operations.CreateProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Dlna/Profiles";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createSeriesTimer - Creates a live tv series timer.
  **/
  createSeriesTimer(
    req: operations.CreateSeriesTimerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSeriesTimerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSeriesTimerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/SeriesTimers";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateSeriesTimerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createTimer - Creates a live tv timer.
  **/
  createTimer(
    req: operations.CreateTimerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTimerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTimerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Timers";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateTimerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createUserByName - Creates a user.
  **/
  createUserByName(
    req: operations.CreateUserByNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUserByNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUserByNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Users/New";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateUserByNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deauthorize - Deauthorize all quick connect devices for the current user.
  **/
  deauthorize(
    req: operations.DeauthorizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeauthorizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeauthorizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/QuickConnect/Deauthorize";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeauthorizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deauthorize200ApplicationJsonInt32Integer = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.deauthorize200ApplicationJsonInt32Integer = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.deauthorize200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteAlternateSources - Removes alternate video sources.
  **/
  deleteAlternateSources(
    req: operations.DeleteAlternateSourcesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAlternateSourcesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAlternateSourcesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/AlternateSources", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteAlternateSourcesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteDevice - Deletes a device.
  **/
  deleteDevice(
    req: operations.DeleteDeviceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDeviceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDeviceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Devices";
    
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
        const res: operations.DeleteDeviceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteItem - Deletes an item from the library and filesystem.
  **/
  deleteItem(
    req: operations.DeleteItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteItemImage - Delete an item's image.
  **/
  deleteItemImage(
    req: operations.DeleteItemImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteItemImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteItemImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}", req.pathParams);
    
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
        const res: operations.DeleteItemImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteItemImageByIndex - Delete an item's image.
  **/
  deleteItemImageByIndex(
    req: operations.DeleteItemImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteItemImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteItemImageByIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteItemImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteItems - Deletes items from the library and filesystem.
  **/
  deleteItems(
    req: operations.DeleteItemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteItemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteItemsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items";
    
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
        const res: operations.DeleteItemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteListingProvider - Delete listing provider.
  **/
  deleteListingProvider(
    req: operations.DeleteListingProviderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteListingProviderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteListingProviderRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/ListingProviders";
    
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
        const res: operations.DeleteListingProviderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteProfile - Deletes a profile.
  **/
  deleteProfile(
    req: operations.DeleteProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/Profiles/{profileId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRecording - Deletes a live tv recording.
  **/
  deleteRecording(
    req: operations.DeleteRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRecordingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/Recordings/{recordingId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSubtitle - Deletes an external subtitle file.
  **/
  deleteSubtitle(
    req: operations.DeleteSubtitleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSubtitleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSubtitleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/Subtitles/{index}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSubtitleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteTunerHost - Deletes a tuner host.
  **/
  deleteTunerHost(
    req: operations.DeleteTunerHostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTunerHostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTunerHostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/TunerHosts";
    
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
        const res: operations.DeleteTunerHostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteUser - Deletes a user.
  **/
  deleteUser(
    req: operations.DeleteUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteUserImage - Delete the user's image.
  **/
  deleteUserImage(
    req: operations.DeleteUserImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Images/{imageType}", req.pathParams);
    
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
        const res: operations.DeleteUserImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteUserImageByIndex - Delete the user's image.
  **/
  deleteUserImageByIndex(
    req: operations.DeleteUserImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserImageByIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Images/{imageType}/{index}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUserImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteUserItemRating - Deletes a user's saved personal rating for an item.
  **/
  deleteUserItemRating(
    req: operations.DeleteUserItemRatingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserItemRatingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserItemRatingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Items/{itemId}/Rating", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUserItemRatingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * disablePlugin - Disable a plugin.
  **/
  disablePlugin(
    req: operations.DisablePluginRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisablePluginResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisablePluginRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Plugins/{pluginId}/{version}/Disable", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DisablePluginResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * discoverTuners - Discover tuners.
  **/
  discoverTuners(
    req: operations.DiscoverTunersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DiscoverTunersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DiscoverTunersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Tuners/Discover";
    
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
        const res: operations.DiscoverTunersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tunerHostInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.tunerHostInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.tunerHostInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * discvoverTuners - Discover tuners.
  **/
  discvoverTuners(
    req: operations.DiscvoverTunersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DiscvoverTunersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DiscvoverTunersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Tuners/Discvover";
    
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
        const res: operations.DiscvoverTunersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tunerHostInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.tunerHostInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.tunerHostInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * displayContent - Instructs a session to browse to an item or view.
  **/
  displayContent(
    req: operations.DisplayContentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayContentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayContentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Sessions/{sessionId}/Viewing", req.pathParams);
    
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
        const res: operations.DisplayContentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * downloadRemoteImage - Downloads a remote image for an item.
  **/
  downloadRemoteImage(
    req: operations.DownloadRemoteImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadRemoteImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadRemoteImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/RemoteImages/Download", req.pathParams);
    
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
        const res: operations.DownloadRemoteImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * downloadRemoteSubtitles - Downloads a remote subtitle.
  **/
  downloadRemoteSubtitles(
    req: operations.DownloadRemoteSubtitlesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadRemoteSubtitlesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadRemoteSubtitlesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/RemoteSearch/Subtitles/{subtitleId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DownloadRemoteSubtitlesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enablePlugin - Enables a disabled plugin.
  **/
  enablePlugin(
    req: operations.EnablePluginRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnablePluginResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnablePluginRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Plugins/{pluginId}/{version}/Enable", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnablePluginResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * forgotPassword - Initiates the forgot password process for a local user.
  **/
  forgotPassword(
    req: operations.ForgotPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ForgotPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ForgotPasswordRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Users/ForgotPassword";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ForgotPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.forgotPasswordResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.forgotPasswordResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.forgotPasswordResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * forgotPasswordPin - Redeems a forgot password pin.
  **/
  forgotPasswordPin(
    req: operations.ForgotPasswordPinRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ForgotPasswordPinResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ForgotPasswordPinRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Users/ForgotPassword/Pin";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ForgotPasswordPinResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pinRedeemResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.pinRedeemResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.pinRedeemResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * get - Gets the search hint result.
  **/
  get(
    req: operations.GetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Search/Hints";
    
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
        const res: operations.GetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchHintResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.searchHintResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.searchHintResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAdditionalPart - Gets additional parts for a video.
  **/
  getAdditionalPart(
    req: operations.GetAdditionalPartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAdditionalPartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAdditionalPartRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/AdditionalParts", req.pathParams);
    
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
        const res: operations.GetAdditionalPartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAlbumArtists - Gets all album artists from a given item, folder, or the entire library.
  **/
  getAlbumArtists(
    req: operations.GetAlbumArtistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAlbumArtistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAlbumArtistsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Artists/AlbumArtists";
    
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
        const res: operations.GetAlbumArtistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAllChannelFeatures - Get all channel features.
  **/
  getAllChannelFeatures(
    req: operations.GetAllChannelFeaturesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllChannelFeaturesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllChannelFeaturesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Channels/Features";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAllChannelFeaturesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.channelFeatures = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.channelFeatures = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.channelFeatures = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAncestors - Gets all parents of an item.
  **/
  getAncestors(
    req: operations.GetAncestorsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAncestorsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAncestorsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Ancestors", req.pathParams);
    
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
        const res: operations.GetAncestorsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getArtistByName - Gets an artist by name.
  **/
  getArtistByName(
    req: operations.GetArtistByNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArtistByNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArtistByNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Artists/{name}", req.pathParams);
    
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
        const res: operations.GetArtistByNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getArtistImage - Get artist image by name.
  **/
  getArtistImage(
    req: operations.GetArtistImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArtistImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArtistImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Artists/{name}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetArtistImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getArtistImage200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getArtists - Gets all artists from a given item, folder, or the entire library.
  **/
  getArtists(
    req: operations.GetArtistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArtistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArtistsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Artists";
    
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
        const res: operations.GetArtistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAttachment - Get video attachment.
  **/
  getAttachment(
    req: operations.GetAttachmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAttachmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{videoId}/{mediaSourceId}/Attachments/{index}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAttachmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getAttachment200ApplicationOctetStreamBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAudioStream - Gets an audio stream.
  **/
  getAudioStream(
    req: operations.GetAudioStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAudioStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAudioStreamRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/stream", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetAudioStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `audio/*`)) {
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

  
  /**
   * getAudioStreamByContainer - Gets an audio stream.
  **/
  getAudioStreamByContainer(
    req: operations.GetAudioStreamByContainerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAudioStreamByContainerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAudioStreamByContainerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/stream.{container}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetAudioStreamByContainerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `audio/*`)) {
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

  
  /**
   * getAuthProviders - Get all auth providers.
  **/
  getAuthProviders(
    req: operations.GetAuthProvidersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAuthProvidersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAuthProvidersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Auth/Providers";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAuthProvidersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.nameIdPairs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.nameIdPairs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.nameIdPairs = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBitrateTestBytes - Tests the network with a request with the size of the bitrate.
  **/
  getBitrateTestBytes(
    req: operations.GetBitrateTestBytesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBitrateTestBytesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBitrateTestBytesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Playback/BitrateTest";
    
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
        const res: operations.GetBitrateTestBytesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getBitrateTestBytes200ApplicationOctetStreamBinaryString = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBookRemoteSearchResults - Get book remote search.
  **/
  getBookRemoteSearchResults(
    req: operations.GetBookRemoteSearchResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBookRemoteSearchResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBookRemoteSearchResultsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/RemoteSearch/Book";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBookRemoteSearchResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBoxSetRemoteSearchResults - Get box set remote search.
  **/
  getBoxSetRemoteSearchResults(
    req: operations.GetBoxSetRemoteSearchResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBoxSetRemoteSearchResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBoxSetRemoteSearchResultsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/RemoteSearch/BoxSet";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBoxSetRemoteSearchResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBrandingCss - Gets branding css.
  **/
  getBrandingCss(
    config?: AxiosRequestConfig
  ): Promise<operations.GetBrandingCssResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Branding/Css";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBrandingCssResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBrandingCss200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.getBrandingCss200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.getBrandingCss200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `text/css`)) {
                res.getBrandingCss200TextCssString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBrandingCss2 - Gets branding css.
  **/
  getBrandingCss2(
    config?: AxiosRequestConfig
  ): Promise<operations.GetBrandingCss2Response> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Branding/Css.css";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBrandingCss2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBrandingCss2200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.getBrandingCss2200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.getBrandingCss2200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `text/css`)) {
                res.getBrandingCss2200TextCssString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBrandingOptions - Gets branding configuration.
  **/
  getBrandingOptions(
    config?: AxiosRequestConfig
  ): Promise<operations.GetBrandingOptionsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Branding/Configuration";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBrandingOptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.brandingOptions = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.brandingOptions = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.brandingOptions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getChannel - Gets a live tv channel.
  **/
  getChannel(
    req: operations.GetChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetChannelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/Channels/{channelId}", req.pathParams);
    
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
        const res: operations.GetChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getChannelFeatures - Get channel features.
  **/
  getChannelFeatures(
    req: operations.GetChannelFeaturesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetChannelFeaturesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetChannelFeaturesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Channels/{channelId}/Features", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetChannelFeaturesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.channelFeatures = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.channelFeatures = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.channelFeatures = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getChannelItems - Get channel items.
  **/
  getChannelItems(
    req: operations.GetChannelItemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetChannelItemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetChannelItemsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Channels/{channelId}/Items", req.pathParams);
    
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
        const res: operations.GetChannelItemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getChannelMappingOptions - Get channel mapping options.
  **/
  getChannelMappingOptions(
    req: operations.GetChannelMappingOptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetChannelMappingOptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetChannelMappingOptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/ChannelMappingOptions";
    
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
        const res: operations.GetChannelMappingOptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.channelMappingOptionsDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.channelMappingOptionsDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.channelMappingOptionsDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getChannels - Gets available channels.
  **/
  getChannels(
    req: operations.GetChannelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetChannelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetChannelsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Channels";
    
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
        const res: operations.GetChannelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getConfiguration - Gets application configuration.
  **/
  getConfiguration(
    req: operations.GetConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConfigurationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Configuration";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.serverConfiguration = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.serverConfiguration = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.serverConfiguration = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getConfigurationPages - Gets the configuration pages.
  **/
  getConfigurationPages(
    req: operations.GetConfigurationPagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConfigurationPagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConfigurationPagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/web/ConfigurationPages";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetConfigurationPagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configurationPageInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.configurationPageInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.configurationPageInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getConnectionManager - Gets Dlna media receiver registrar xml.
  **/
  getConnectionManager(
    req: operations.GetConnectionManagerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConnectionManagerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConnectionManagerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/ConnectionManager", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetConnectionManagerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getConnectionManager200TextXmlBinaryString = out;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getConnectionManager2 - Gets Dlna media receiver registrar xml.
  **/
  getConnectionManager2(
    req: operations.GetConnectionManager2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConnectionManager2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConnectionManager2Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/ConnectionManager/ConnectionManager", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetConnectionManager2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getConnectionManager2200TextXmlBinaryString = out;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getConnectionManager3 - Gets Dlna media receiver registrar xml.
  **/
  getConnectionManager3(
    req: operations.GetConnectionManager3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConnectionManager3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConnectionManager3Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/ConnectionManager/ConnectionManager.xml", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetConnectionManager3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getConnectionManager3200TextXmlBinaryString = out;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getContentDirectory - Gets Dlna content directory xml.
  **/
  getContentDirectory(
    req: operations.GetContentDirectoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetContentDirectoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetContentDirectoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/ContentDirectory", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetContentDirectoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getContentDirectory200TextXmlBinaryString = out;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getContentDirectory2 - Gets Dlna content directory xml.
  **/
  getContentDirectory2(
    req: operations.GetContentDirectory2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetContentDirectory2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetContentDirectory2Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/ContentDirectory/ContentDirectory", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetContentDirectory2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getContentDirectory2200TextXmlBinaryString = out;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getContentDirectory3 - Gets Dlna content directory xml.
  **/
  getContentDirectory3(
    req: operations.GetContentDirectory3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetContentDirectory3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetContentDirectory3Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/ContentDirectory/ContentDirectory.xml", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetContentDirectory3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getContentDirectory3200TextXmlBinaryString = out;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCountries - Gets known countries.
  **/
  getCountries(
    req: operations.GetCountriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCountriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCountriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Localization/Countries";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCountriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.countryInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.countryInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.countryInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCriticReviews - Gets critic review for an item.
  **/
  getCriticReviews(
    req: operations.GetCriticReviewsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCriticReviewsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCriticReviewsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/CriticReviews", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCriticReviewsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCultures - Gets known cultures.
  **/
  getCultures(
    req: operations.GetCulturesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCulturesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCulturesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Localization/Cultures";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCulturesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cultureDtos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.cultureDtos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.cultureDtos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCurrentUser - Gets the user based on auth token.
  **/
  getCurrentUser(
    req: operations.GetCurrentUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCurrentUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCurrentUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Users/Me";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCurrentUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDashboardConfigurationPage - Gets a dashboard configuration page.
  **/
  getDashboardConfigurationPage(
    req: operations.GetDashboardConfigurationPageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDashboardConfigurationPageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDashboardConfigurationPageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/web/ConfigurationPage";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetDashboardConfigurationPageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/x-javascript`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getDashboardConfigurationPage200ApplicationXJavascriptBinaryString = out;
            }
            if (utils.MatchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getDashboardConfigurationPage200TextHtmlBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDefaultDirectoryBrowser - Get Default directory browser.
  **/
  getDefaultDirectoryBrowser(
    req: operations.GetDefaultDirectoryBrowserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDefaultDirectoryBrowserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDefaultDirectoryBrowserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Environment/DefaultDirectoryBrowser";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDefaultDirectoryBrowserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.defaultDirectoryBrowserInfoDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.defaultDirectoryBrowserInfoDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.defaultDirectoryBrowserInfoDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDefaultListingProvider - Gets default listings provider info.
  **/
  getDefaultListingProvider(
    req: operations.GetDefaultListingProviderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDefaultListingProviderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDefaultListingProviderRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/ListingProviders/Default";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDefaultListingProviderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listingsProviderInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.listingsProviderInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.listingsProviderInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDefaultMetadataOptions - Gets a default MetadataOptions object.
  **/
  getDefaultMetadataOptions(
    req: operations.GetDefaultMetadataOptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDefaultMetadataOptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDefaultMetadataOptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Configuration/MetadataOptions/Default";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDefaultMetadataOptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.metadataOptions = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.metadataOptions = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.metadataOptions = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDefaultProfile - Gets the default profile.
  **/
  getDefaultProfile(
    req: operations.GetDefaultProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDefaultProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDefaultProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Dlna/Profiles/Default";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDefaultProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deviceProfile = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.deviceProfile = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.deviceProfile = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDefaultTimer - Gets the default values for a new timer.
  **/
  getDefaultTimer(
    req: operations.GetDefaultTimerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDefaultTimerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDefaultTimerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Timers/Defaults";
    
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
        const res: operations.GetDefaultTimerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.seriesTimerInfoDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.seriesTimerInfoDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.seriesTimerInfoDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDescriptionXml - Get Description Xml.
  **/
  getDescriptionXml(
    req: operations.GetDescriptionXmlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDescriptionXmlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDescriptionXmlRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/description", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDescriptionXmlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getDescriptionXml200TextXmlBinaryString = out;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDescriptionXml2 - Get Description Xml.
  **/
  getDescriptionXml2(
    req: operations.GetDescriptionXml2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDescriptionXml2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDescriptionXml2Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/description.xml", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDescriptionXml2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getDescriptionXml2200TextXmlBinaryString = out;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDeviceInfo - Get info for a device.
  **/
  getDeviceInfo(
    req: operations.GetDeviceInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Devices/Info";
    
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
        const res: operations.GetDeviceInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deviceInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.deviceInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.deviceInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDeviceOptions - Get options for a device.
  **/
  getDeviceOptions(
    req: operations.GetDeviceOptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeviceOptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeviceOptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Devices/Options";
    
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
        const res: operations.GetDeviceOptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deviceOptions = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.deviceOptions = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.deviceOptions = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDevices - Get Devices.
  **/
  getDevices(
    req: operations.GetDevicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDevicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDevicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Devices";
    
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
        const res: operations.GetDevicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deviceInfoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.deviceInfoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.deviceInfoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDirectoryContents - Gets the contents of a given directory in the file system.
  **/
  getDirectoryContents(
    req: operations.GetDirectoryContentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDirectoryContentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDirectoryContentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Environment/DirectoryContents";
    
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
        const res: operations.GetDirectoryContentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileSystemEntryInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.fileSystemEntryInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.fileSystemEntryInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDisplayPreferences - Get Display Preferences.
  **/
  getDisplayPreferences(
    req: operations.GetDisplayPreferencesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDisplayPreferencesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDisplayPreferencesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/DisplayPreferences/{displayPreferencesId}", req.pathParams);
    
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
        const res: operations.GetDisplayPreferencesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.displayPreferencesDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.displayPreferencesDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.displayPreferencesDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDownload - Downloads item media.
  **/
  getDownload(
    req: operations.GetDownloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDownloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDownloadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Download", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDownloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `audio/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getDownload200AudioWildcardBinaryString = out;
            }
            if (utils.MatchContentType(contentType, `video/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getDownload200VideoWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDrives - Gets available drives from the server's file system.
  **/
  getDrives(
    req: operations.GetDrivesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDrivesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDrivesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Environment/Drives";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDrivesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileSystemEntryInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.fileSystemEntryInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.fileSystemEntryInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEndpointInfo - Gets information about the request endpoint.
  **/
  getEndpointInfo(
    req: operations.GetEndpointInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEndpointInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEndpointInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Endpoint";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetEndpointInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.endPointInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.endPointInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.endPointInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEpisodes - Gets episodes for a tv season.
  **/
  getEpisodes(
    req: operations.GetEpisodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEpisodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEpisodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Shows/{seriesId}/Episodes", req.pathParams);
    
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
        const res: operations.GetEpisodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getExternalIdInfos - Get the item's external id info.
  **/
  getExternalIdInfos(
    req: operations.GetExternalIdInfosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetExternalIdInfosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetExternalIdInfosRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/ExternalIdInfos", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetExternalIdInfosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.externalIdInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.externalIdInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.externalIdInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getFallbackFont - Gets a fallback font file.
  **/
  getFallbackFont(
    req: operations.GetFallbackFontRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFallbackFontResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFallbackFontRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/FallbackFont/Fonts/{name}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetFallbackFontResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `font/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getFallbackFont200FontWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getFallbackFontList - Gets a list of available fallback font files.
  **/
  getFallbackFontList(
    req: operations.GetFallbackFontListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFallbackFontListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFallbackFontListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/FallbackFont/Fonts";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetFallbackFontListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fontFiles = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.fontFiles = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.fontFiles = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getFile - Get the original file of an item.
  **/
  getFile(
    req: operations.GetFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/File", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `audio/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getFile200AudioWildcardBinaryString = out;
            }
            if (utils.MatchContentType(contentType, `video/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getFile200VideoWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getFirstUser - Gets the first user.
  **/
  getFirstUser(
    req: operations.GetFirstUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFirstUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFirstUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Startup/User";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetFirstUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.startupUserDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.startupUserDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.startupUserDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getFirstUser2 - Gets the first user.
  **/
  getFirstUser2(
    req: operations.GetFirstUser2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFirstUser2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFirstUser2Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Startup/FirstUser";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetFirstUser2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.startupUserDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.startupUserDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.startupUserDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getGeneralImage - Get General Image.
  **/
  getGeneralImage(
    req: operations.GetGeneralImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGeneralImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGeneralImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Images/General/{name}/{type}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetGeneralImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getGeneralImage200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
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
   * getGeneralImages - Get all general images.
  **/
  getGeneralImages(
    req: operations.GetGeneralImagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGeneralImagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGeneralImagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Images/General";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetGeneralImagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.imageByNameInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.imageByNameInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.imageByNameInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getGenre - Gets a genre, by name.
  **/
  getGenre(
    req: operations.GetGenreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenreRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Genres/{genreName}", req.pathParams);
    
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
        const res: operations.GetGenreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getGenreImage - Get genre image by name.
  **/
  getGenreImage(
    req: operations.GetGenreImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenreImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenreImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Genres/{name}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGenreImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getGenreImage200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getGenreImageByIndex - Get genre image by name.
  **/
  getGenreImageByIndex(
    req: operations.GetGenreImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenreImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenreImageByIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Genres/{name}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGenreImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getGenreImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getGenres - Gets all genres from a given item, folder, or the entire library.
  **/
  getGenres(
    req: operations.GetGenresRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenresResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenresRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Genres";
    
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
        const res: operations.GetGenresResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getGroupingOptions - Get user view grouping options.
  **/
  getGroupingOptions(
    req: operations.GetGroupingOptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGroupingOptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGroupingOptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/GroupingOptions", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetGroupingOptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.specialViewOptionDtos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.specialViewOptionDtos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.specialViewOptionDtos = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getGuideInfo - Get guid info.
  **/
  getGuideInfo(
    req: operations.GetGuideInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGuideInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGuideInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/GuideInfo";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetGuideInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.guideInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.guideInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.guideInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getHlsAudioSegment - Gets a video stream using HTTP live streaming.
  **/
  getHlsAudioSegment(
    req: operations.GetHlsAudioSegmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHlsAudioSegmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHlsAudioSegmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/hls1/{playlistId}/{segmentId}.{container}", req.pathParams);
    
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
        const res: operations.GetHlsAudioSegmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `audio/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getHlsAudioSegment200AudioWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getHlsAudioSegmentLegacyAac - Gets the specified audio segment for an audio item.
  **/
  getHlsAudioSegmentLegacyAac(
    req: operations.GetHlsAudioSegmentLegacyAacRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHlsAudioSegmentLegacyAacResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHlsAudioSegmentLegacyAacRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/hls/{segmentId}/stream.aac", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetHlsAudioSegmentLegacyAacResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `audio/*`)) {
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

  
  /**
   * getHlsAudioSegmentLegacyMp3 - Gets the specified audio segment for an audio item.
  **/
  getHlsAudioSegmentLegacyMp3(
    req: operations.GetHlsAudioSegmentLegacyMp3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHlsAudioSegmentLegacyMp3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHlsAudioSegmentLegacyMp3Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/hls/{segmentId}/stream.mp3", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetHlsAudioSegmentLegacyMp3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `audio/*`)) {
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

  
  /**
   * getHlsPlaylistLegacy - Gets a hls video playlist.
  **/
  getHlsPlaylistLegacy(
    req: operations.GetHlsPlaylistLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHlsPlaylistLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHlsPlaylistLegacyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/hls/{playlistId}/stream.m3u8", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetHlsPlaylistLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/x-mpegURL`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getHlsPlaylistLegacy200ApplicationXMpegurlBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getHlsVideoSegment - Gets a video stream using HTTP live streaming.
  **/
  getHlsVideoSegment(
    req: operations.GetHlsVideoSegmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHlsVideoSegmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHlsVideoSegmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/hls1/{playlistId}/{segmentId}.{container}", req.pathParams);
    
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
        const res: operations.GetHlsVideoSegmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `video/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getHlsVideoSegment200VideoWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getHlsVideoSegmentLegacy - Gets a hls video segment.
  **/
  getHlsVideoSegmentLegacy(
    req: operations.GetHlsVideoSegmentLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHlsVideoSegmentLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHlsVideoSegmentLegacyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/hls/{playlistId}/{segmentId}.{segmentContainer}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetHlsVideoSegmentLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `video/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getHlsVideoSegmentLegacy200VideoWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getIcon - Gets a server icon.
  **/
  getIcon(
    req: operations.GetIconRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIconResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIconRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/icons/{fileName}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIconResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getIcon200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getIconId - Gets a server icon.
  **/
  getIconId(
    req: operations.GetIconIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIconIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIconIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/icons/{fileName}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIconIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getIconId200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstantMixFromAlbum - Creates an instant playlist based on a given song.
  **/
  getInstantMixFromAlbum(
    req: operations.GetInstantMixFromAlbumRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstantMixFromAlbumResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstantMixFromAlbumRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Albums/{id}/InstantMix", req.pathParams);
    
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
        const res: operations.GetInstantMixFromAlbumResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstantMixFromArtists - Creates an instant playlist based on a given song.
  **/
  getInstantMixFromArtists(
    req: operations.GetInstantMixFromArtistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstantMixFromArtistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstantMixFromArtistsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Artists/{id}/InstantMix", req.pathParams);
    
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
        const res: operations.GetInstantMixFromArtistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstantMixFromItem - Creates an instant playlist based on a given song.
  **/
  getInstantMixFromItem(
    req: operations.GetInstantMixFromItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstantMixFromItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstantMixFromItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{id}/InstantMix", req.pathParams);
    
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
        const res: operations.GetInstantMixFromItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstantMixFromMusicGenre - Creates an instant playlist based on a given song.
  **/
  getInstantMixFromMusicGenre(
    req: operations.GetInstantMixFromMusicGenreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstantMixFromMusicGenreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstantMixFromMusicGenreRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/MusicGenres/{name}/InstantMix", req.pathParams);
    
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
        const res: operations.GetInstantMixFromMusicGenreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstantMixFromMusicGenres - Creates an instant playlist based on a given song.
  **/
  getInstantMixFromMusicGenres(
    req: operations.GetInstantMixFromMusicGenresRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstantMixFromMusicGenresResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstantMixFromMusicGenresRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/MusicGenres/{id}/InstantMix", req.pathParams);
    
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
        const res: operations.GetInstantMixFromMusicGenresResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstantMixFromPlaylist - Creates an instant playlist based on a given song.
  **/
  getInstantMixFromPlaylist(
    req: operations.GetInstantMixFromPlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstantMixFromPlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstantMixFromPlaylistRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Playlists/{id}/InstantMix", req.pathParams);
    
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
        const res: operations.GetInstantMixFromPlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstantMixFromSong - Creates an instant playlist based on a given song.
  **/
  getInstantMixFromSong(
    req: operations.GetInstantMixFromSongRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstantMixFromSongResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstantMixFromSongRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Songs/{id}/InstantMix", req.pathParams);
    
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
        const res: operations.GetInstantMixFromSongResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getIntros - Gets intros to play before the main media item plays.
  **/
  getIntros(
    req: operations.GetIntrosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntrosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntrosRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Items/{itemId}/Intros", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIntrosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getItem - Gets an item from a user's library.
  **/
  getItem(
    req: operations.GetItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Items/{itemId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getItemCounts - Get item counts.
  **/
  getItemCounts(
    req: operations.GetItemCountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetItemCountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetItemCountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/Counts";
    
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
        const res: operations.GetItemCountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.itemCounts = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.itemCounts = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.itemCounts = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getItemImage - Gets the item's image.
  **/
  getItemImage(
    req: operations.GetItemImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetItemImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetItemImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetItemImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getItemImage200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getItemImage2 - Gets the item's image.
  **/
  getItemImage2(
    req: operations.GetItemImage2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetItemImage2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetItemImage2Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}/{imageIndex}/{tag}/{format}/{maxWidth}/{maxHeight}/{percentPlayed}/{unplayedCount}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetItemImage2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getItemImage2200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getItemImageByIndex - Gets the item's image.
  **/
  getItemImageByIndex(
    req: operations.GetItemImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetItemImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetItemImageByIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetItemImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getItemImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getItemImageInfos - Get item image infos.
  **/
  getItemImageInfos(
    req: operations.GetItemImageInfosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetItemImageInfosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetItemImageInfosRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetItemImageInfosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.imageInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.imageInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.imageInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getItems - Gets items based on a query.
  **/
  getItems(
    req: operations.GetItemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetItemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetItemsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items";
    
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
        const res: operations.GetItemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getItemsByUserId - Gets items based on a query.
  **/
  getItemsByUserId(
    req: operations.GetItemsByUserIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetItemsByUserIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetItemsByUserIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Items", req.pathParams);
    
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
        const res: operations.GetItemsByUserIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getKeys - Get all keys.
  **/
  getKeys(
    req: operations.GetKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Auth/Keys";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authenticationInfoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.authenticationInfoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.authenticationInfoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLatestChannelItems - Gets latest channel items.
  **/
  getLatestChannelItems(
    req: operations.GetLatestChannelItemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLatestChannelItemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLatestChannelItemsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Channels/Items/Latest";
    
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
        const res: operations.GetLatestChannelItemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLatestMedia - Gets latest media.
  **/
  getLatestMedia(
    req: operations.GetLatestMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLatestMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLatestMediaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Items/Latest", req.pathParams);
    
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
        const res: operations.GetLatestMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLibraryOptionsInfo - Gets the library options info.
  **/
  getLibraryOptionsInfo(
    req: operations.GetLibraryOptionsInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLibraryOptionsInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLibraryOptionsInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Libraries/AvailableOptions";
    
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
        const res: operations.GetLibraryOptionsInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.libraryOptionsResultDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.libraryOptionsResultDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.libraryOptionsResultDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLineups - Gets available lineups.
  **/
  getLineups(
    req: operations.GetLineupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLineupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLineupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/ListingProviders/Lineups";
    
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
        const res: operations.GetLineupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.nameIdPairs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.nameIdPairs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.nameIdPairs = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLiveHlsStream - Gets a hls live stream.
  **/
  getLiveHlsStream(
    req: operations.GetLiveHlsStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLiveHlsStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLiveHlsStreamRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/live.m3u8", req.pathParams);
    
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
        const res: operations.GetLiveHlsStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/x-mpegURL`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getLiveHlsStream200ApplicationXMpegurlBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLiveRecordingFile - Gets a live tv recording stream.
  **/
  getLiveRecordingFile(
    req: operations.GetLiveRecordingFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLiveRecordingFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLiveRecordingFileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/LiveRecordings/{recordingId}/stream", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLiveRecordingFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `video/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getLiveRecordingFile200VideoWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLiveStreamFile - Gets a live tv channel stream.
  **/
  getLiveStreamFile(
    req: operations.GetLiveStreamFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLiveStreamFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLiveStreamFileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/LiveStreamFiles/{streamId}/stream.{container}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLiveStreamFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `video/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getLiveStreamFile200VideoWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLiveTvChannels - Gets available live tv channels.
  **/
  getLiveTvChannels(
    req: operations.GetLiveTvChannelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLiveTvChannelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLiveTvChannelsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Channels";
    
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
        const res: operations.GetLiveTvChannelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLiveTvInfo - Gets available live tv services.
  **/
  getLiveTvInfo(
    req: operations.GetLiveTvInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLiveTvInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLiveTvInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Info";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLiveTvInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.liveTvInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.liveTvInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.liveTvInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLiveTvPrograms - Gets available live tv epgs.
  **/
  getLiveTvPrograms(
    req: operations.GetLiveTvProgramsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLiveTvProgramsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLiveTvProgramsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Programs";
    
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
        const res: operations.GetLiveTvProgramsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLocalTrailers - Gets local trailers for an item.
  **/
  getLocalTrailers(
    req: operations.GetLocalTrailersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLocalTrailersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLocalTrailersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Items/{itemId}/LocalTrailers", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLocalTrailersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLocalizationOptions - Gets localization options.
  **/
  getLocalizationOptions(
    req: operations.GetLocalizationOptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLocalizationOptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLocalizationOptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Localization/Options";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLocalizationOptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.localizationOptions = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.localizationOptions = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.localizationOptions = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLogEntries - Gets activity log entries.
  **/
  getLogEntries(
    req: operations.GetLogEntriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLogEntriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLogEntriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/ActivityLog/Entries";
    
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
        const res: operations.GetLogEntriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.activityLogEntryQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.activityLogEntryQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.activityLogEntryQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLogFile - Gets a log file.
  **/
  getLogFile(
    req: operations.GetLogFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLogFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLogFileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Logs/Log";
    
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
        const res: operations.GetLogFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getLogFile200TextPlainBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMasterHlsAudioPlaylist - Gets an audio hls playlist stream.
  **/
  getMasterHlsAudioPlaylist(
    req: operations.GetMasterHlsAudioPlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMasterHlsAudioPlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMasterHlsAudioPlaylistRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/master.m3u8", req.pathParams);
    
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
        const res: operations.GetMasterHlsAudioPlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/x-mpegURL`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getMasterHlsAudioPlaylist200ApplicationXMpegurlBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMasterHlsVideoPlaylist - Gets a video hls playlist stream.
  **/
  getMasterHlsVideoPlaylist(
    req: operations.GetMasterHlsVideoPlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMasterHlsVideoPlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMasterHlsVideoPlaylistRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/master.m3u8", req.pathParams);
    
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
        const res: operations.GetMasterHlsVideoPlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/x-mpegURL`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getMasterHlsVideoPlaylist200ApplicationXMpegurlBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMediaFolders - Gets all user media folders.
  **/
  getMediaFolders(
    req: operations.GetMediaFoldersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMediaFoldersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMediaFoldersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/MediaFolders";
    
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
        const res: operations.GetMediaFoldersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMediaInfoImage - Get media info image.
  **/
  getMediaInfoImage(
    req: operations.GetMediaInfoImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMediaInfoImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMediaInfoImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Images/MediaInfo/{theme}/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMediaInfoImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getMediaInfoImage200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
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
   * getMediaInfoImages - Get all media info images.
  **/
  getMediaInfoImages(
    req: operations.GetMediaInfoImagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMediaInfoImagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMediaInfoImagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Images/MediaInfo";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMediaInfoImagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.imageByNameInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.imageByNameInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.imageByNameInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMediaReceiverRegistrar - Gets Dlna media receiver registrar xml.
  **/
  getMediaReceiverRegistrar(
    req: operations.GetMediaReceiverRegistrarRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMediaReceiverRegistrarResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMediaReceiverRegistrarRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/MediaReceiverRegistrar", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMediaReceiverRegistrarResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getMediaReceiverRegistrar200TextXmlBinaryString = out;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMediaReceiverRegistrar2 - Gets Dlna media receiver registrar xml.
  **/
  getMediaReceiverRegistrar2(
    req: operations.GetMediaReceiverRegistrar2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMediaReceiverRegistrar2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMediaReceiverRegistrar2Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/MediaReceiverRegistrar/MediaReceiverRegistrar", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMediaReceiverRegistrar2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getMediaReceiverRegistrar2200TextXmlBinaryString = out;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMediaReceiverRegistrar3 - Gets Dlna media receiver registrar xml.
  **/
  getMediaReceiverRegistrar3(
    req: operations.GetMediaReceiverRegistrar3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMediaReceiverRegistrar3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMediaReceiverRegistrar3Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/MediaReceiverRegistrar/MediaReceiverRegistrar.xml", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMediaReceiverRegistrar3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getMediaReceiverRegistrar3200TextXmlBinaryString = out;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMetadataEditorInfo - Gets metadata editor info for an item.
  **/
  getMetadataEditorInfo(
    req: operations.GetMetadataEditorInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMetadataEditorInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMetadataEditorInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/MetadataEditor", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMetadataEditorInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.metadataEditorInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.metadataEditorInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.metadataEditorInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMovieRecommendations - Gets movie recommendations.
  **/
  getMovieRecommendations(
    req: operations.GetMovieRecommendationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMovieRecommendationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMovieRecommendationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Movies/Recommendations";
    
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
        const res: operations.GetMovieRecommendationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.recommendationDtos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.recommendationDtos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.recommendationDtos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMovieRemoteSearchResults - Get movie remote search.
  **/
  getMovieRemoteSearchResults(
    req: operations.GetMovieRemoteSearchResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMovieRemoteSearchResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMovieRemoteSearchResultsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/RemoteSearch/Movie";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMovieRemoteSearchResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMusicAlbumRemoteSearchResults - Get music album remote search.
  **/
  getMusicAlbumRemoteSearchResults(
    req: operations.GetMusicAlbumRemoteSearchResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMusicAlbumRemoteSearchResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMusicAlbumRemoteSearchResultsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/RemoteSearch/MusicAlbum";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMusicAlbumRemoteSearchResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMusicArtistRemoteSearchResults - Get music artist remote search.
  **/
  getMusicArtistRemoteSearchResults(
    req: operations.GetMusicArtistRemoteSearchResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMusicArtistRemoteSearchResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMusicArtistRemoteSearchResultsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/RemoteSearch/MusicArtist";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMusicArtistRemoteSearchResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMusicGenre - Gets a music genre, by name.
  **/
  getMusicGenre(
    req: operations.GetMusicGenreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMusicGenreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMusicGenreRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/MusicGenres/{genreName}", req.pathParams);
    
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
        const res: operations.GetMusicGenreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMusicGenreImage - Get music genre image by name.
  **/
  getMusicGenreImage(
    req: operations.GetMusicGenreImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMusicGenreImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMusicGenreImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/MusicGenres/{name}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetMusicGenreImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getMusicGenreImage200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMusicGenreImageByIndex - Get music genre image by name.
  **/
  getMusicGenreImageByIndex(
    req: operations.GetMusicGenreImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMusicGenreImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMusicGenreImageByIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/MusicGenres/{name}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetMusicGenreImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getMusicGenreImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMusicGenres - Gets all music genres from a given item, folder, or the entire library.
  **/
  getMusicGenres(
    req: operations.GetMusicGenresRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMusicGenresResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMusicGenresRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/MusicGenres";
    
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
        const res: operations.GetMusicGenresResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMusicVideoRemoteSearchResults - Get music video remote search.
  **/
  getMusicVideoRemoteSearchResults(
    req: operations.GetMusicVideoRemoteSearchResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMusicVideoRemoteSearchResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMusicVideoRemoteSearchResultsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/RemoteSearch/MusicVideo";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMusicVideoRemoteSearchResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNamedConfiguration - Gets a named configuration.
  **/
  getNamedConfiguration(
    req: operations.GetNamedConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNamedConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNamedConfigurationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/System/Configuration/{key}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNamedConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNamedConfiguration200ApplicationJsonBinaryString = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetworkShares - Gets network paths.
  **/
  getNetworkShares(
    req: operations.GetNetworkSharesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetworkSharesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNetworkSharesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Environment/NetworkShares";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetworkSharesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileSystemEntryInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.fileSystemEntryInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.fileSystemEntryInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNextUp - Gets a list of next up episodes.
  **/
  getNextUp(
    req: operations.GetNextUpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNextUpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNextUpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Shows/NextUp";
    
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
        const res: operations.GetNextUpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNotificationServices - Gets notification services.
  **/
  getNotificationServices(
    req: operations.GetNotificationServicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNotificationServicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNotificationServicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Notifications/Services";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNotificationServicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.nameIdPairs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.nameIdPairs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.nameIdPairs = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNotificationTypes - Gets notification types.
  **/
  getNotificationTypes(
    req: operations.GetNotificationTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNotificationTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNotificationTypesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Notifications/Types";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNotificationTypesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notificationTypeInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.notificationTypeInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.notificationTypeInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNotifications - Gets a user's notifications.
  **/
  getNotifications(
    req: operations.GetNotificationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNotificationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNotificationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Notifications/{userId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNotificationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notificationResultDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.notificationResultDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.notificationResultDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNotificationsSummary - Gets a user's notification summary.
  **/
  getNotificationsSummary(
    req: operations.GetNotificationsSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNotificationsSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNotificationsSummaryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Notifications/{userId}/Summary", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNotificationsSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notificationsSummaryDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.notificationsSummaryDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.notificationsSummaryDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPackageInfo - Gets a package by name or assembly GUID.
  **/
  getPackageInfo(
    req: operations.GetPackageInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPackageInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPackageInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Packages/{name}", req.pathParams);
    
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
        const res: operations.GetPackageInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.packageInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.packageInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.packageInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPackages - Gets available packages.
  **/
  getPackages(
    req: operations.GetPackagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPackagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPackagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Packages";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPackagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.packageInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.packageInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.packageInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getParentPath - Gets the parent path of a given path.
  **/
  getParentPath(
    req: operations.GetParentPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetParentPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetParentPathRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Environment/ParentPath";
    
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
        const res: operations.GetParentPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getParentPath200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.getParentPath200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.getParentPath200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getParentalRatings - Gets known parental ratings.
  **/
  getParentalRatings(
    req: operations.GetParentalRatingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetParentalRatingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetParentalRatingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Localization/ParentalRatings";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetParentalRatingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.parentalRatings = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.parentalRatings = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.parentalRatings = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPasswordResetProviders - Get all password reset providers.
  **/
  getPasswordResetProviders(
    req: operations.GetPasswordResetProvidersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPasswordResetProvidersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPasswordResetProvidersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Auth/PasswordResetProviders";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPasswordResetProvidersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.nameIdPairs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.nameIdPairs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.nameIdPairs = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPerson - Get person by name.
  **/
  getPerson(
    req: operations.GetPersonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPersonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPersonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Persons/{name}", req.pathParams);
    
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
        const res: operations.GetPersonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPersonImage - Get person image by name.
  **/
  getPersonImage(
    req: operations.GetPersonImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPersonImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPersonImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Persons/{name}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPersonImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getPersonImage200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPersonImageByIndex - Get person image by name.
  **/
  getPersonImageByIndex(
    req: operations.GetPersonImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPersonImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPersonImageByIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Persons/{name}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPersonImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getPersonImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPersonRemoteSearchResults - Get person remote search.
  **/
  getPersonRemoteSearchResults(
    req: operations.GetPersonRemoteSearchResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPersonRemoteSearchResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPersonRemoteSearchResultsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/RemoteSearch/Person";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPersonRemoteSearchResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPersons - Gets all persons.
  **/
  getPersons(
    req: operations.GetPersonsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPersonsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPersonsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Persons";
    
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
        const res: operations.GetPersonsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPhysicalPaths - Gets a list of physical paths from virtual folders.
  **/
  getPhysicalPaths(
    req: operations.GetPhysicalPathsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPhysicalPathsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPhysicalPathsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/PhysicalPaths";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPhysicalPathsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPhysicalPaths200ApplicationJsonStrings = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.getPhysicalPaths200ApplicationJsonStrings = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.getPhysicalPaths200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPingSystem - Pings the system.
  **/
  getPingSystem(
    config?: AxiosRequestConfig
  ): Promise<operations.GetPingSystemResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Ping";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPingSystemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPingSystem200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.getPingSystem200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.getPingSystem200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPlaybackInfo - Gets live playback media info for an item.
  **/
  getPlaybackInfo(
    req: operations.GetPlaybackInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPlaybackInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPlaybackInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/PlaybackInfo", req.pathParams);
    
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
        const res: operations.GetPlaybackInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playbackInfoResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.playbackInfoResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.playbackInfoResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPlaylistItems - Gets the original items of a playlist.
  **/
  getPlaylistItems(
    req: operations.GetPlaylistItemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPlaylistItemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPlaylistItemsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Playlists/{playlistId}/Items", req.pathParams);
    
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
        const res: operations.GetPlaylistItemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPluginConfiguration - Gets plugin configuration.
  **/
  getPluginConfiguration(
    req: operations.GetPluginConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPluginConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPluginConfigurationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Plugins/{pluginId}/Configuration", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPluginConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basePluginConfiguration = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.basePluginConfiguration = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.basePluginConfiguration = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPluginImage - Gets a plugin's image.
  **/
  getPluginImage(
    req: operations.GetPluginImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPluginImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPluginImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Plugins/{pluginId}/{version}/Image", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPluginImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getPluginImage200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPluginManifest - Gets a plugin's manifest.
  **/
  getPluginManifest(
    req: operations.GetPluginManifestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPluginManifestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPluginManifestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Plugins/{pluginId}/Manifest", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPluginManifestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPlugins - Gets a list of currently installed plugins.
  **/
  getPlugins(
    req: operations.GetPluginsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPluginsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPluginsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Plugins";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPluginsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pluginInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.pluginInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.pluginInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPostedPlaybackInfo - Gets live playback media info for an item.
   *
   * For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.
  **/
  getPostedPlaybackInfo(
    req: operations.GetPostedPlaybackInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPostedPlaybackInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPostedPlaybackInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/PlaybackInfo", req.pathParams);

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
        const res: operations.GetPostedPlaybackInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playbackInfoResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.playbackInfoResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.playbackInfoResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProfile - Gets a single profile.
  **/
  getProfile(
    req: operations.GetProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/Profiles/{profileId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deviceProfile = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.deviceProfile = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.deviceProfile = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProfileInfos - Get profile infos.
  **/
  getProfileInfos(
    req: operations.GetProfileInfosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProfileInfosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProfileInfosRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Dlna/ProfileInfos";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProfileInfosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deviceProfileInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.deviceProfileInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.deviceProfileInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProgram - Gets a live tv program.
  **/
  getProgram(
    req: operations.GetProgramRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProgramResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProgramRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/Programs/{programId}", req.pathParams);
    
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
        const res: operations.GetProgramResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPrograms - Gets available live tv epgs.
  **/
  getPrograms(
    req: operations.GetProgramsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProgramsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProgramsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Programs";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProgramsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPublicSystemInfo - Gets public information about the server.
  **/
  getPublicSystemInfo(
    config?: AxiosRequestConfig
  ): Promise<operations.GetPublicSystemInfoResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Info/Public";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPublicSystemInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.publicSystemInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.publicSystemInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.publicSystemInfo = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPublicUsers - Gets a list of publicly visible users for display on a login screen.
  **/
  getPublicUsers(
    config?: AxiosRequestConfig
  ): Promise<operations.GetPublicUsersResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Users/Public";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPublicUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userDtos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userDtos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userDtos = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getQueryFilters - Gets query filters.
  **/
  getQueryFilters(
    req: operations.GetQueryFiltersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetQueryFiltersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetQueryFiltersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/Filters2";
    
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
        const res: operations.GetQueryFiltersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.queryFilters = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.queryFilters = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.queryFilters = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getQueryFiltersLegacy - Gets legacy query filters.
  **/
  getQueryFiltersLegacy(
    req: operations.GetQueryFiltersLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetQueryFiltersLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetQueryFiltersLegacyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/Filters";
    
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
        const res: operations.GetQueryFiltersLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.queryFiltersLegacy = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.queryFiltersLegacy = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.queryFiltersLegacy = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRatingImage - Get rating image.
  **/
  getRatingImage(
    req: operations.GetRatingImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRatingImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRatingImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Images/Ratings/{theme}/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRatingImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getRatingImage200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
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
   * getRatingImages - Get all general images.
  **/
  getRatingImages(
    req: operations.GetRatingImagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRatingImagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRatingImagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Images/Ratings";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRatingImagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.imageByNameInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.imageByNameInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.imageByNameInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRecommendedPrograms - Gets recommended live tv epgs.
  **/
  getRecommendedPrograms(
    req: operations.GetRecommendedProgramsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRecommendedProgramsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRecommendedProgramsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Programs/Recommended";
    
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
        const res: operations.GetRecommendedProgramsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRecording - Gets a live tv recording.
  **/
  getRecording(
    req: operations.GetRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRecordingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/Recordings/{recordingId}", req.pathParams);
    
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
        const res: operations.GetRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRecordingFolders - Gets recording folders.
  **/
  getRecordingFolders(
    req: operations.GetRecordingFoldersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRecordingFoldersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRecordingFoldersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Recordings/Folders";
    
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
        const res: operations.GetRecordingFoldersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRecordingGroup - Get recording group.
  **/
  getRecordingGroup(
    req: operations.GetRecordingGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRecordingGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRecordingGroupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/Recordings/Groups/{groupId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRecordingGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRecordingGroups - Gets live tv recording groups.
  **/
  getRecordingGroups(
    req: operations.GetRecordingGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRecordingGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRecordingGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Recordings/Groups";
    
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
        const res: operations.GetRecordingGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRecordings - Gets live tv recordings.
  **/
  getRecordings(
    req: operations.GetRecordingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRecordingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRecordingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Recordings";
    
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
        const res: operations.GetRecordingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRecordingsSeries - Gets live tv recording series.
  **/
  getRecordingsSeries(
    req: operations.GetRecordingsSeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRecordingsSeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRecordingsSeriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Recordings/Series";
    
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
        const res: operations.GetRecordingsSeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRemoteImage - Gets a remote image.
  **/
  getRemoteImage(
    req: operations.GetRemoteImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRemoteImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRemoteImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Images/Remote";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetRemoteImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getRemoteImage200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
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
   * getRemoteImageProviders - Gets available remote image providers for an item.
  **/
  getRemoteImageProviders(
    req: operations.GetRemoteImageProvidersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRemoteImageProvidersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRemoteImageProvidersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/RemoteImages/Providers", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRemoteImageProvidersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.imageProviderInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.imageProviderInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.imageProviderInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRemoteImages - Gets available remote images for an item.
  **/
  getRemoteImages(
    req: operations.GetRemoteImagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRemoteImagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRemoteImagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/RemoteImages", req.pathParams);
    
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
        const res: operations.GetRemoteImagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.remoteImageResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteImageResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteImageResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRemoteSearchImage - Gets a remote image.
  **/
  getRemoteSearchImage(
    req: operations.GetRemoteSearchImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRemoteSearchImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRemoteSearchImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/RemoteSearch/Image";
    
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
        const res: operations.GetRemoteSearchImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getRemoteSearchImage200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRemoteSubtitles - Gets the remote subtitles.
  **/
  getRemoteSubtitles(
    req: operations.GetRemoteSubtitlesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRemoteSubtitlesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRemoteSubtitlesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Providers/Subtitles/Subtitles/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRemoteSubtitlesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getRemoteSubtitles200TextWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRepositories - Gets all package repositories.
  **/
  getRepositories(
    req: operations.GetRepositoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Repositories";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRepositoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.repositoryInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.repositoryInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getResumeItems - Gets items based on a query.
  **/
  getResumeItems(
    req: operations.GetResumeItemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResumeItemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResumeItemsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Items/Resume", req.pathParams);
    
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
        const res: operations.GetResumeItemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRootFolder - Gets the root folder from a user's library.
  **/
  getRootFolder(
    req: operations.GetRootFolderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRootFolderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRootFolderRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Items/Root", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRootFolderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSchedulesDirectCountries - Gets available countries.
  **/
  getSchedulesDirectCountries(
    req: operations.GetSchedulesDirectCountriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesDirectCountriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesDirectCountriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/ListingProviders/SchedulesDirect/Countries";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSchedulesDirectCountriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSchedulesDirectCountries200ApplicationJsonBinaryString = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSeasons - Gets seasons for a tv series.
  **/
  getSeasons(
    req: operations.GetSeasonsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeasonsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeasonsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Shows/{seriesId}/Seasons", req.pathParams);
    
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
        const res: operations.GetSeasonsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSeriesRemoteSearchResults - Get series remote search.
  **/
  getSeriesRemoteSearchResults(
    req: operations.GetSeriesRemoteSearchResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesRemoteSearchResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesRemoteSearchResultsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/RemoteSearch/Series";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSeriesRemoteSearchResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSeriesTimer - Gets a live tv series timer.
  **/
  getSeriesTimer(
    req: operations.GetSeriesTimerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesTimerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesTimerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/SeriesTimers/{timerId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSeriesTimerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.seriesTimerInfoDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.seriesTimerInfoDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.seriesTimerInfoDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSeriesTimers - Gets live tv series timers.
  **/
  getSeriesTimers(
    req: operations.GetSeriesTimersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSeriesTimersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSeriesTimersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/SeriesTimers";
    
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
        const res: operations.GetSeriesTimersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.seriesTimerInfoDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.seriesTimerInfoDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.seriesTimerInfoDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getServerLogs - Gets a list of available server log files.
  **/
  getServerLogs(
    req: operations.GetServerLogsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetServerLogsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetServerLogsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Logs";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetServerLogsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.logFiles = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.logFiles = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.logFiles = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSessions - Gets a list of sessions.
  **/
  getSessions(
    req: operations.GetSessionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSessionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSessionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Sessions";
    
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
        const res: operations.GetSessionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sessionInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.sessionInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.sessionInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSimilarAlbums - Gets similar items.
  **/
  getSimilarAlbums(
    req: operations.GetSimilarAlbumsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSimilarAlbumsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSimilarAlbumsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Albums/{itemId}/Similar", req.pathParams);
    
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
        const res: operations.GetSimilarAlbumsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSimilarArtists - Gets similar items.
  **/
  getSimilarArtists(
    req: operations.GetSimilarArtistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSimilarArtistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSimilarArtistsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Artists/{itemId}/Similar", req.pathParams);
    
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
        const res: operations.GetSimilarArtistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSimilarItems - Gets similar items.
  **/
  getSimilarItems(
    req: operations.GetSimilarItemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSimilarItemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSimilarItemsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Similar", req.pathParams);
    
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
        const res: operations.GetSimilarItemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSimilarMovies - Gets similar items.
  **/
  getSimilarMovies(
    req: operations.GetSimilarMoviesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSimilarMoviesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSimilarMoviesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Movies/{itemId}/Similar", req.pathParams);
    
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
        const res: operations.GetSimilarMoviesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSimilarShows - Gets similar items.
  **/
  getSimilarShows(
    req: operations.GetSimilarShowsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSimilarShowsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSimilarShowsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Shows/{itemId}/Similar", req.pathParams);
    
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
        const res: operations.GetSimilarShowsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSimilarTrailers - Gets similar items.
  **/
  getSimilarTrailers(
    req: operations.GetSimilarTrailersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSimilarTrailersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSimilarTrailersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Trailers/{itemId}/Similar", req.pathParams);
    
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
        const res: operations.GetSimilarTrailersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSpecialFeatures - Gets special features for an item.
  **/
  getSpecialFeatures(
    req: operations.GetSpecialFeaturesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSpecialFeaturesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSpecialFeaturesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Items/{itemId}/SpecialFeatures", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSpecialFeaturesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStartupConfiguration - Gets the initial startup wizard configuration.
  **/
  getStartupConfiguration(
    req: operations.GetStartupConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStartupConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStartupConfigurationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Startup/Configuration";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStartupConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.startupConfigurationDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.startupConfigurationDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.startupConfigurationDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStatus - Gets the current quick connect state.
  **/
  getStatus(
    config?: AxiosRequestConfig
  ): Promise<operations.GetStatusResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/QuickConnect/Status";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.quickConnectState = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.quickConnectState = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.quickConnectState = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStudio - Gets a studio by name.
  **/
  getStudio(
    req: operations.GetStudioRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudioResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudioRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Studios/{name}", req.pathParams);
    
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
        const res: operations.GetStudioResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStudioImage - Get studio image by name.
  **/
  getStudioImage(
    req: operations.GetStudioImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudioImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudioImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Studios/{name}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetStudioImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getStudioImage200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStudioImageByIndex - Get studio image by name.
  **/
  getStudioImageByIndex(
    req: operations.GetStudioImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudioImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudioImageByIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Studios/{name}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetStudioImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getStudioImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStudios - Gets all studios from a given item, folder, or the entire library.
  **/
  getStudios(
    req: operations.GetStudiosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStudiosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStudiosRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Studios";
    
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
        const res: operations.GetStudiosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSubtitle - Gets subtitles in a specified format.
  **/
  getSubtitle(
    req: operations.GetSubtitleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubtitleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubtitleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/{mediaSourceId}/Subtitles/{index}/Stream.{format}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetSubtitleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/*`)) {
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

  
  /**
   * getSubtitlePlaylist - Gets an HLS subtitle playlist.
  **/
  getSubtitlePlaylist(
    req: operations.GetSubtitlePlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubtitlePlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubtitlePlaylistRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/{mediaSourceId}/Subtitles/{index}/subtitles.m3u8", req.pathParams);
    
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
        const res: operations.GetSubtitlePlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/x-mpegURL`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getSubtitlePlaylist200ApplicationXMpegurlBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSubtitleWithTicks - Gets subtitles in a specified format.
  **/
  getSubtitleWithTicks(
    req: operations.GetSubtitleWithTicksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubtitleWithTicksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubtitleWithTicksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/{mediaSourceId}/Subtitles/{index}/{startPositionTicks}/Stream.{format}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetSubtitleWithTicksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/*`)) {
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

  
  /**
   * getSuggestions - Gets suggestions.
  **/
  getSuggestions(
    req: operations.GetSuggestionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSuggestionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSuggestionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Suggestions", req.pathParams);
    
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
        const res: operations.GetSuggestionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSystemInfo - Gets information about the server.
  **/
  getSystemInfo(
    req: operations.GetSystemInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSystemInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSystemInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Info";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSystemInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.systemInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.systemInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.systemInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTask - Get task by id.
  **/
  getTask(
    req: operations.GetTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTaskRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ScheduledTasks/{taskId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.taskInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.taskInfo = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.taskInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTasks - Get tasks.
  **/
  getTasks(
    req: operations.GetTasksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTasksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTasksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ScheduledTasks";
    
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
        const res: operations.GetTasksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.taskInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.taskInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.taskInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getThemeMedia - Get theme songs and videos for an item.
  **/
  getThemeMedia(
    req: operations.GetThemeMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetThemeMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetThemeMediaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/ThemeMedia", req.pathParams);
    
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
        const res: operations.GetThemeMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.allThemeMediaResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.allThemeMediaResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.allThemeMediaResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getThemeSongs - Get theme songs for an item.
  **/
  getThemeSongs(
    req: operations.GetThemeSongsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetThemeSongsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetThemeSongsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/ThemeSongs", req.pathParams);
    
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
        const res: operations.GetThemeSongsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.themeMediaResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.themeMediaResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.themeMediaResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getThemeVideos - Get theme videos for an item.
  **/
  getThemeVideos(
    req: operations.GetThemeVideosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetThemeVideosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetThemeVideosRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/ThemeVideos", req.pathParams);
    
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
        const res: operations.GetThemeVideosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.themeMediaResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.themeMediaResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.themeMediaResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTimer - Gets a timer.
  **/
  getTimer(
    req: operations.GetTimerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/Timers/{timerId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTimerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.timerInfoDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.timerInfoDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.timerInfoDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTimers - Gets the live tv timers.
  **/
  getTimers(
    req: operations.GetTimersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTimersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTimersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/Timers";
    
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
        const res: operations.GetTimersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.timerInfoDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.timerInfoDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.timerInfoDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTrailerRemoteSearchResults - Get trailer remote search.
  **/
  getTrailerRemoteSearchResults(
    req: operations.GetTrailerRemoteSearchResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTrailerRemoteSearchResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTrailerRemoteSearchResultsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Items/RemoteSearch/Trailer";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTrailerRemoteSearchResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTrailers - Finds movies and trailers similar to a given trailer.
  **/
  getTrailers(
    req: operations.GetTrailersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTrailersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTrailersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Trailers";
    
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
        const res: operations.GetTrailersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTunerHostTypes - Get tuner host types.
  **/
  getTunerHostTypes(
    req: operations.GetTunerHostTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTunerHostTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTunerHostTypesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/TunerHosts/Types";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTunerHostTypesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.nameIdPairs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.nameIdPairs = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.nameIdPairs = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUniversalAudioStream - Gets an audio stream.
  **/
  getUniversalAudioStream(
    req: operations.GetUniversalAudioStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUniversalAudioStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUniversalAudioStreamRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/universal", req.pathParams);
    
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
        const res: operations.GetUniversalAudioStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `audio/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getUniversalAudioStream200AudioWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 302:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUpcomingEpisodes - Gets a list of upcoming episodes.
  **/
  getUpcomingEpisodes(
    req: operations.GetUpcomingEpisodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUpcomingEpisodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUpcomingEpisodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Shows/Upcoming";
    
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
        const res: operations.GetUpcomingEpisodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUserById - Gets a user by Id.
  **/
  getUserById(
    req: operations.GetUserByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUserByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUserImage - Get user profile image.
  **/
  getUserImage(
    req: operations.GetUserImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetUserImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getUserImage200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUserImageByIndex - Get user profile image.
  **/
  getUserImageByIndex(
    req: operations.GetUserImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserImageByIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetUserImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getUserImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUserViews - Get user views.
  **/
  getUserViews(
    req: operations.GetUserViewsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserViewsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserViewsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Views", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetUserViewsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUsers - Gets a list of users.
  **/
  getUsers(
    req: operations.GetUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Users";
    
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
        const res: operations.GetUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userDtos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userDtos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userDtos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUtcTime - Gets the current UTC time.
  **/
  getUtcTime(
    config?: AxiosRequestConfig
  ): Promise<operations.GetUtcTimeResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/GetUtcTime";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUtcTimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.utcTimeResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.utcTimeResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.utcTimeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVariantHlsAudioPlaylist - Gets an audio stream using HTTP live streaming.
  **/
  getVariantHlsAudioPlaylist(
    req: operations.GetVariantHlsAudioPlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVariantHlsAudioPlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVariantHlsAudioPlaylistRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/main.m3u8", req.pathParams);
    
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
        const res: operations.GetVariantHlsAudioPlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/x-mpegURL`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getVariantHlsAudioPlaylist200ApplicationXMpegurlBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVariantHlsVideoPlaylist - Gets a video stream using HTTP live streaming.
  **/
  getVariantHlsVideoPlaylist(
    req: operations.GetVariantHlsVideoPlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVariantHlsVideoPlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVariantHlsVideoPlaylistRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/main.m3u8", req.pathParams);
    
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
        const res: operations.GetVariantHlsVideoPlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/x-mpegURL`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getVariantHlsVideoPlaylist200ApplicationXMpegurlBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVideoStream - Gets a video stream.
  **/
  getVideoStream(
    req: operations.GetVideoStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVideoStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVideoStreamRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/stream", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetVideoStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `video/*`)) {
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

  
  /**
   * getVideoStreamByContainer - Gets a video stream.
  **/
  getVideoStreamByContainer(
    req: operations.GetVideoStreamByContainerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVideoStreamByContainerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVideoStreamByContainerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/{stream}.{container}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetVideoStreamByContainerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `video/*`)) {
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

  
  /**
   * getVirtualFolders - Gets all virtual folders.
  **/
  getVirtualFolders(
    req: operations.GetVirtualFoldersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVirtualFoldersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVirtualFoldersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/VirtualFolders";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetVirtualFoldersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.virtualFolderInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.virtualFolderInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.virtualFolderInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getWakeOnLanInfo - Gets wake on lan information.
  **/
  getWakeOnLanInfo(
    req: operations.GetWakeOnLanInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWakeOnLanInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWakeOnLanInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/WakeOnLanInfo";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWakeOnLanInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.wakeOnLanInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.wakeOnLanInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.wakeOnLanInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getYear - Gets a year.
  **/
  getYear(
    req: operations.GetYearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetYearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetYearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Years/{year}", req.pathParams);
    
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
        const res: operations.GetYearResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getYears - Get years.
  **/
  getYears(
    req: operations.GetYearsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetYearsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetYearsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Years";
    
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
        const res: operations.GetYearsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.baseItemDtoQueryResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * headArtistImage - Get artist image by name.
  **/
  headArtistImage(
    req: operations.HeadArtistImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadArtistImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadArtistImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Artists/{name}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "head",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadArtistImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headArtistImage200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * headAudioStream - Gets an audio stream.
  **/
  headAudioStream(
    req: operations.HeadAudioStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadAudioStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadAudioStreamRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/stream", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "head",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadAudioStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `audio/*`)) {
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

  
  /**
   * headAudioStreamByContainer - Gets an audio stream.
  **/
  headAudioStreamByContainer(
    req: operations.HeadAudioStreamByContainerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadAudioStreamByContainerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadAudioStreamByContainerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/stream.{container}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "head",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadAudioStreamByContainerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `audio/*`)) {
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

  
  /**
   * headGenreImage - Get genre image by name.
  **/
  headGenreImage(
    req: operations.HeadGenreImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadGenreImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadGenreImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Genres/{name}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "head",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadGenreImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headGenreImage200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * headGenreImageByIndex - Get genre image by name.
  **/
  headGenreImageByIndex(
    req: operations.HeadGenreImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadGenreImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadGenreImageByIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Genres/{name}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "head",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadGenreImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headGenreImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * headItemImage - Gets the item's image.
  **/
  headItemImage(
    req: operations.HeadItemImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadItemImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadItemImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "head",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadItemImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headItemImage200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * headItemImage2 - Gets the item's image.
  **/
  headItemImage2(
    req: operations.HeadItemImage2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadItemImage2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadItemImage2Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}/{imageIndex}/{tag}/{format}/{maxWidth}/{maxHeight}/{percentPlayed}/{unplayedCount}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "head",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadItemImage2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headItemImage2200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * headItemImageByIndex - Gets the item's image.
  **/
  headItemImageByIndex(
    req: operations.HeadItemImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadItemImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadItemImageByIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "head",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadItemImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headItemImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * headMasterHlsAudioPlaylist - Gets an audio hls playlist stream.
  **/
  headMasterHlsAudioPlaylist(
    req: operations.HeadMasterHlsAudioPlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadMasterHlsAudioPlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadMasterHlsAudioPlaylistRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/master.m3u8", req.pathParams);
    
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
        method: "head",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadMasterHlsAudioPlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/x-mpegURL`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headMasterHlsAudioPlaylist200ApplicationXMpegurlBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * headMasterHlsVideoPlaylist - Gets a video hls playlist stream.
  **/
  headMasterHlsVideoPlaylist(
    req: operations.HeadMasterHlsVideoPlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadMasterHlsVideoPlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadMasterHlsVideoPlaylistRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/master.m3u8", req.pathParams);
    
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
        method: "head",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadMasterHlsVideoPlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/x-mpegURL`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headMasterHlsVideoPlaylist200ApplicationXMpegurlBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * headMusicGenreImage - Get music genre image by name.
  **/
  headMusicGenreImage(
    req: operations.HeadMusicGenreImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadMusicGenreImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadMusicGenreImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/MusicGenres/{name}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "head",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadMusicGenreImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headMusicGenreImage200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * headMusicGenreImageByIndex - Get music genre image by name.
  **/
  headMusicGenreImageByIndex(
    req: operations.HeadMusicGenreImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadMusicGenreImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadMusicGenreImageByIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/MusicGenres/{name}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "head",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadMusicGenreImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headMusicGenreImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * headPersonImage - Get person image by name.
  **/
  headPersonImage(
    req: operations.HeadPersonImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadPersonImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadPersonImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Persons/{name}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "head",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadPersonImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headPersonImage200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * headPersonImageByIndex - Get person image by name.
  **/
  headPersonImageByIndex(
    req: operations.HeadPersonImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadPersonImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadPersonImageByIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Persons/{name}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "head",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadPersonImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headPersonImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * headStudioImage - Get studio image by name.
  **/
  headStudioImage(
    req: operations.HeadStudioImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadStudioImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadStudioImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Studios/{name}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "head",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadStudioImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headStudioImage200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * headStudioImageByIndex - Get studio image by name.
  **/
  headStudioImageByIndex(
    req: operations.HeadStudioImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadStudioImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadStudioImageByIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Studios/{name}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "head",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadStudioImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headStudioImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * headUniversalAudioStream - Gets an audio stream.
  **/
  headUniversalAudioStream(
    req: operations.HeadUniversalAudioStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadUniversalAudioStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadUniversalAudioStreamRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Audio/{itemId}/universal", req.pathParams);
    
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
        method: "head",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadUniversalAudioStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `audio/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headUniversalAudioStream200AudioWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 302:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * headUserImage - Get user profile image.
  **/
  headUserImage(
    req: operations.HeadUserImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadUserImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadUserImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "head",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadUserImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headUserImage200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * headUserImageByIndex - Get user profile image.
  **/
  headUserImageByIndex(
    req: operations.HeadUserImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadUserImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadUserImageByIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "head",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadUserImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.headUserImageByIndex200ImageWildcardBinaryString = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * headVideoStream - Gets a video stream.
  **/
  headVideoStream(
    req: operations.HeadVideoStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadVideoStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadVideoStreamRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/stream", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "head",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadVideoStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `video/*`)) {
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

  
  /**
   * headVideoStreamByContainer - Gets a video stream.
  **/
  headVideoStreamByContainer(
    req: operations.HeadVideoStreamByContainerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadVideoStreamByContainerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadVideoStreamByContainerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/{stream}.{container}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "head",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadVideoStreamByContainerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `video/*`)) {
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

  
  /**
   * initiate - Initiate a new quick connect request.
  **/
  initiate(
    config?: AxiosRequestConfig
  ): Promise<operations.InitiateResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/QuickConnect/Initiate";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.InitiateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.quickConnectResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.quickConnectResult = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.quickConnectResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * installPackage - Installs a package.
  **/
  installPackage(
    req: operations.InstallPackageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InstallPackageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InstallPackageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Packages/Installed/{name}", req.pathParams);
    
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
        const res: operations.InstallPackageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * markFavoriteItem - Marks an item as a favorite.
  **/
  markFavoriteItem(
    req: operations.MarkFavoriteItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MarkFavoriteItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MarkFavoriteItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/FavoriteItems/{itemId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MarkFavoriteItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * markPlayedItem - Marks an item as played for user.
  **/
  markPlayedItem(
    req: operations.MarkPlayedItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MarkPlayedItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MarkPlayedItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/PlayedItems/{itemId}", req.pathParams);
    
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
        const res: operations.MarkPlayedItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * markUnplayedItem - Marks an item as unplayed for user.
  **/
  markUnplayedItem(
    req: operations.MarkUnplayedItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MarkUnplayedItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MarkUnplayedItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/PlayedItems/{itemId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MarkUnplayedItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * mergeVersions - Merges videos into a single record.
  **/
  mergeVersions(
    req: operations.MergeVersionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MergeVersionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MergeVersionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Videos/MergeVersions";
    
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
        const res: operations.MergeVersionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * moveItem - Moves a playlist item.
  **/
  moveItem(
    req: operations.MoveItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MoveItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MoveItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Playlists/{playlistId}/Items/{itemId}/Move/{newIndex}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MoveItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * onPlaybackProgress - Reports a user's playback progress.
  **/
  onPlaybackProgress(
    req: operations.OnPlaybackProgressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OnPlaybackProgressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OnPlaybackProgressRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/PlayingItems/{itemId}/Progress", req.pathParams);
    
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
        const res: operations.OnPlaybackProgressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * onPlaybackStart - Reports that a user has begun playing an item.
  **/
  onPlaybackStart(
    req: operations.OnPlaybackStartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OnPlaybackStartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OnPlaybackStartRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/PlayingItems/{itemId}", req.pathParams);
    
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
        const res: operations.OnPlaybackStartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * onPlaybackStopped - Reports that a user has stopped playing an item.
  **/
  onPlaybackStopped(
    req: operations.OnPlaybackStoppedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OnPlaybackStoppedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OnPlaybackStoppedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/PlayingItems/{itemId}", req.pathParams);
    
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
        const res: operations.OnPlaybackStoppedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * openLiveStream - Opens a media source.
  **/
  openLiveStream(
    req: operations.OpenLiveStreamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OpenLiveStreamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OpenLiveStreamRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveStreams/Open";

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
        const res: operations.OpenLiveStreamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.liveStreamResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.liveStreamResponse = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.liveStreamResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pingPlaybackSession - Pings a playback session.
  **/
  pingPlaybackSession(
    req: operations.PingPlaybackSessionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PingPlaybackSessionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PingPlaybackSessionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Sessions/Playing/Ping";
    
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
        const res: operations.PingPlaybackSessionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * play - Instructs a session to play an item.
  **/
  play(
    req: operations.PlayRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PlayResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PlayRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Sessions/{sessionId}/Playing", req.pathParams);
    
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
        const res: operations.PlayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * post - Refreshes metadata for an item.
  **/
  post(
    req: operations.PostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Refresh", req.pathParams);
    
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
        const res: operations.PostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAddedMovies - Reports that new movies have been added by an external source.
  **/
  postAddedMovies(
    req: operations.PostAddedMoviesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAddedMoviesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAddedMoviesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/Movies/Added";
    
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
        const res: operations.PostAddedMoviesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAddedSeries - Reports that new episodes of a series have been added by an external source.
  **/
  postAddedSeries(
    req: operations.PostAddedSeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAddedSeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAddedSeriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/Series/Added";
    
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
        const res: operations.PostAddedSeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postCapabilities - Updates capabilities for a device.
  **/
  postCapabilities(
    req: operations.PostCapabilitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCapabilitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCapabilitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Sessions/Capabilities";
    
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
        const res: operations.PostCapabilitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postFullCapabilities - Updates capabilities for a device.
  **/
  postFullCapabilities(
    req: operations.PostFullCapabilitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostFullCapabilitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostFullCapabilitiesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Sessions/Capabilities/Full";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.PostFullCapabilitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPingSystem - Pings the system.
  **/
  postPingSystem(
    config?: AxiosRequestConfig
  ): Promise<operations.PostPingSystemResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Ping";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPingSystemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPingSystem200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.postPingSystem200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.postPingSystem200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postUpdatedMedia - Reports that new movies have been added by an external source.
  **/
  postUpdatedMedia(
    req: operations.PostUpdatedMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUpdatedMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUpdatedMediaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/Media/Updated";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostUpdatedMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postUpdatedMovies - Reports that new movies have been added by an external source.
  **/
  postUpdatedMovies(
    req: operations.PostUpdatedMoviesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUpdatedMoviesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUpdatedMoviesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/Movies/Updated";
    
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
        const res: operations.PostUpdatedMoviesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postUpdatedSeries - Reports that new episodes of a series have been added by an external source.
  **/
  postUpdatedSeries(
    req: operations.PostUpdatedSeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUpdatedSeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUpdatedSeriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/Series/Updated";
    
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
        const res: operations.PostUpdatedSeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postUserImage - Sets the user image.
  **/
  postUserImage(
    req: operations.PostUserImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUserImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUserImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Images/{imageType}", req.pathParams);
    
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
        const res: operations.PostUserImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postUserImageByIndex - Sets the user image.
  **/
  postUserImageByIndex(
    req: operations.PostUserImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUserImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUserImageByIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Images/{imageType}/{index}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostUserImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * processConnectionManagerControlRequest - Process a connection manager control request.
  **/
  processConnectionManagerControlRequest(
    req: operations.ProcessConnectionManagerControlRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProcessConnectionManagerControlRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProcessConnectionManagerControlRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/ConnectionManager/Control", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProcessConnectionManagerControlRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.processConnectionManagerControlRequest200TextXmlBinaryString = out;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * processContentDirectoryControlRequest - Process a content directory control request.
  **/
  processContentDirectoryControlRequest(
    req: operations.ProcessContentDirectoryControlRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProcessContentDirectoryControlRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProcessContentDirectoryControlRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/ContentDirectory/Control", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProcessContentDirectoryControlRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.processContentDirectoryControlRequest200TextXmlBinaryString = out;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * processMediaReceiverRegistrarControlRequest - Process a media receiver registrar control request.
  **/
  processMediaReceiverRegistrarControlRequest(
    req: operations.ProcessMediaReceiverRegistrarControlRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProcessMediaReceiverRegistrarControlRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProcessMediaReceiverRegistrarControlRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/{serverId}/MediaReceiverRegistrar/Control", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProcessMediaReceiverRegistrarControlRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.processMediaReceiverRegistrarControlRequest200TextXmlBinaryString = out;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * refreshLibrary - Starts a library scan.
  **/
  refreshLibrary(
    req: operations.RefreshLibraryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RefreshLibraryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RefreshLibraryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/Refresh";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RefreshLibraryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removeFromCollection - Removes items from a collection.
  **/
  removeFromCollection(
    req: operations.RemoveFromCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveFromCollectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveFromCollectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Collections/{collectionId}/Items", req.pathParams);
    
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
        const res: operations.RemoveFromCollectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removeFromPlaylist - Removes items from a playlist.
  **/
  removeFromPlaylist(
    req: operations.RemoveFromPlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveFromPlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveFromPlaylistRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Playlists/{playlistId}/Items", req.pathParams);
    
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
        const res: operations.RemoveFromPlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removeMediaPath - Remove a media path.
  **/
  removeMediaPath(
    req: operations.RemoveMediaPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveMediaPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveMediaPathRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/VirtualFolders/Paths";
    
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
        const res: operations.RemoveMediaPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removeUserFromSession - Removes an additional user from a session.
  **/
  removeUserFromSession(
    req: operations.RemoveUserFromSessionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveUserFromSessionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveUserFromSessionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Sessions/{sessionId}/User/{userId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RemoveUserFromSessionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removeVirtualFolder - Removes a virtual folder.
  **/
  removeVirtualFolder(
    req: operations.RemoveVirtualFolderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveVirtualFolderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveVirtualFolderRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/VirtualFolders";
    
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
        const res: operations.RemoveVirtualFolderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * renameVirtualFolder - Renames a virtual folder.
  **/
  renameVirtualFolder(
    req: operations.RenameVirtualFolderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RenameVirtualFolderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RenameVirtualFolderRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/VirtualFolders/Name";
    
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
        const res: operations.RenameVirtualFolderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reportPlaybackProgress - Reports playback progress within a session.
  **/
  reportPlaybackProgress(
    req: operations.ReportPlaybackProgressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportPlaybackProgressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportPlaybackProgressRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Sessions/Playing/Progress";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReportPlaybackProgressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reportPlaybackStart - Reports playback has started within a session.
  **/
  reportPlaybackStart(
    req: operations.ReportPlaybackStartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportPlaybackStartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportPlaybackStartRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Sessions/Playing";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReportPlaybackStartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reportPlaybackStopped - Reports playback has stopped within a session.
  **/
  reportPlaybackStopped(
    req: operations.ReportPlaybackStoppedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportPlaybackStoppedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportPlaybackStoppedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Sessions/Playing/Stopped";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReportPlaybackStoppedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reportSessionEnded - Reports that a session has ended.
  **/
  reportSessionEnded(
    req: operations.ReportSessionEndedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportSessionEndedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportSessionEndedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Sessions/Logout";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReportSessionEndedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reportViewing - Reports that a session is viewing an item.
  **/
  reportViewing(
    req: operations.ReportViewingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportViewingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportViewingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Sessions/Viewing";
    
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
        const res: operations.ReportViewingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * resetTuner - Resets a tv tuner.
  **/
  resetTuner(
    req: operations.ResetTunerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ResetTunerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ResetTunerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/Tuners/{tunerId}/Reset", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ResetTunerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * restartApplication - Restarts the application.
  **/
  restartApplication(
    req: operations.RestartApplicationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RestartApplicationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RestartApplicationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Restart";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RestartApplicationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * revokeKey - Remove an api key.
  **/
  revokeKey(
    req: operations.RevokeKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RevokeKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RevokeKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Auth/Keys/{key}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RevokeKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * searchRemoteSubtitles - Search remote subtitles.
  **/
  searchRemoteSubtitles(
    req: operations.SearchRemoteSubtitlesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchRemoteSubtitlesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchRemoteSubtitlesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/RemoteSearch/Subtitles/{language}", req.pathParams);
    
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
        const res: operations.SearchRemoteSubtitlesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.remoteSubtitleInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.remoteSubtitleInfos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.remoteSubtitleInfos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * sendFullGeneralCommand - Issues a full general command to a client.
  **/
  sendFullGeneralCommand(
    req: operations.SendFullGeneralCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SendFullGeneralCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SendFullGeneralCommandRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Sessions/{sessionId}/Command", req.pathParams);

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SendFullGeneralCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * sendGeneralCommand - Issues a general command to a client.
  **/
  sendGeneralCommand(
    req: operations.SendGeneralCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SendGeneralCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SendGeneralCommandRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Sessions/{sessionId}/Command/{command}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SendGeneralCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * sendMessageCommand - Issues a command to a client to display a message to the user.
  **/
  sendMessageCommand(
    req: operations.SendMessageCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SendMessageCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SendMessageCommandRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Sessions/{sessionId}/Message", req.pathParams);
    
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
        const res: operations.SendMessageCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * sendPlaystateCommand - Issues a playstate command to a client.
  **/
  sendPlaystateCommand(
    req: operations.SendPlaystateCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SendPlaystateCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SendPlaystateCommandRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Sessions/{sessionId}/Playing/{command}", req.pathParams);
    
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
        const res: operations.SendPlaystateCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * sendSystemCommand - Issues a system command to a client.
  **/
  sendSystemCommand(
    req: operations.SendSystemCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SendSystemCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SendSystemCommandRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Sessions/{sessionId}/System/{command}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SendSystemCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setChannelMapping - Set channel mappings.
  **/
  setChannelMapping(
    req: operations.SetChannelMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetChannelMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetChannelMappingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/LiveTv/ChannelMappings";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetChannelMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tunerChannelMapping = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.tunerChannelMapping = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.tunerChannelMapping = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setItemImage - Set item image.
  **/
  setItemImage(
    req: operations.SetItemImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetItemImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetItemImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetItemImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setItemImageByIndex - Set item image.
  **/
  setItemImageByIndex(
    req: operations.SetItemImageByIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetItemImageByIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetItemImageByIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}/{imageIndex}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetItemImageByIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setRead - Sets notifications as read.
  **/
  setRead(
    req: operations.SetReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Notifications/{userId}/Read", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setRemoteAccess - Sets remote access and UPnP.
  **/
  setRemoteAccess(
    req: operations.SetRemoteAccessRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetRemoteAccessResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetRemoteAccessRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Startup/RemoteAccess";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetRemoteAccessResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setRepositories - Sets the enabled and existing package repositories.
  **/
  setRepositories(
    req: operations.SetRepositoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetRepositoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetRepositoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Repositories";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetRepositoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setUnread - Sets notifications as unread.
  **/
  setUnread(
    req: operations.SetUnreadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetUnreadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetUnreadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Notifications/{userId}/Unread", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetUnreadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * shutdownApplication - Shuts down the application.
  **/
  shutdownApplication(
    req: operations.ShutdownApplicationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ShutdownApplicationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ShutdownApplicationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Shutdown";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ShutdownApplicationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * startTask - Start specified task.
  **/
  startTask(
    req: operations.StartTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StartTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StartTaskRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ScheduledTasks/Running/{taskId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StartTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * stopEncodingProcess - Stops an active encoding.
  **/
  stopEncodingProcess(
    req: operations.StopEncodingProcessRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StopEncodingProcessResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StopEncodingProcessRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Videos/ActiveEncodings";
    
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
        const res: operations.StopEncodingProcessResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * stopTask - Stop specified task.
  **/
  stopTask(
    req: operations.StopTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StopTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StopTaskRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ScheduledTasks/Running/{taskId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StopTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncPlayBuffering - Notify SyncPlay group that member is buffering.
  **/
  syncPlayBuffering(
    req: operations.SyncPlayBufferingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayBufferingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayBufferingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/Buffering";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncPlayBufferingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncPlayCreateGroup - Create a new SyncPlay group.
  **/
  syncPlayCreateGroup(
    req: operations.SyncPlayCreateGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayCreateGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayCreateGroupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/New";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncPlayCreateGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncPlayGetGroups - Gets all SyncPlay groups.
  **/
  syncPlayGetGroups(
    req: operations.SyncPlayGetGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayGetGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayGetGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/List";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncPlayGetGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.groupInfoDtos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.groupInfoDtos = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.groupInfoDtos = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncPlayJoinGroup - Join an existing SyncPlay group.
  **/
  syncPlayJoinGroup(
    req: operations.SyncPlayJoinGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayJoinGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayJoinGroupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/Join";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncPlayJoinGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncPlayLeaveGroup - Leave the joined SyncPlay group.
  **/
  syncPlayLeaveGroup(
    req: operations.SyncPlayLeaveGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayLeaveGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayLeaveGroupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/Leave";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncPlayLeaveGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncPlayMovePlaylistItem - Request to move an item in the playlist in SyncPlay group.
  **/
  syncPlayMovePlaylistItem(
    req: operations.SyncPlayMovePlaylistItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayMovePlaylistItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayMovePlaylistItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/MovePlaylistItem";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncPlayMovePlaylistItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncPlayNextItem - Request next item in SyncPlay group.
  **/
  syncPlayNextItem(
    req: operations.SyncPlayNextItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayNextItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayNextItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/NextItem";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncPlayNextItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncPlayPause - Request pause in SyncPlay group.
  **/
  syncPlayPause(
    req: operations.SyncPlayPauseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayPauseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayPauseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/Pause";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncPlayPauseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncPlayPing - Update session ping.
  **/
  syncPlayPing(
    req: operations.SyncPlayPingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayPingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayPingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/Ping";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncPlayPingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncPlayPreviousItem - Request previous item in SyncPlay group.
  **/
  syncPlayPreviousItem(
    req: operations.SyncPlayPreviousItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayPreviousItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayPreviousItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/PreviousItem";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncPlayPreviousItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncPlayQueue - Request to queue items to the playlist of a SyncPlay group.
  **/
  syncPlayQueue(
    req: operations.SyncPlayQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayQueueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/Queue";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncPlayQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncPlayReady - Notify SyncPlay group that member is ready for playback.
  **/
  syncPlayReady(
    req: operations.SyncPlayReadyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayReadyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayReadyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/Ready";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncPlayReadyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncPlayRemoveFromPlaylist - Request to remove items from the playlist in SyncPlay group.
  **/
  syncPlayRemoveFromPlaylist(
    req: operations.SyncPlayRemoveFromPlaylistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayRemoveFromPlaylistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayRemoveFromPlaylistRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/RemoveFromPlaylist";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncPlayRemoveFromPlaylistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncPlaySeek - Request seek in SyncPlay group.
  **/
  syncPlaySeek(
    req: operations.SyncPlaySeekRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlaySeekResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlaySeekRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/Seek";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncPlaySeekResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncPlaySetIgnoreWait - Request SyncPlay group to ignore member during group-wait.
  **/
  syncPlaySetIgnoreWait(
    req: operations.SyncPlaySetIgnoreWaitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlaySetIgnoreWaitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlaySetIgnoreWaitRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/SetIgnoreWait";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncPlaySetIgnoreWaitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncPlaySetNewQueue - Request to set new playlist in SyncPlay group.
  **/
  syncPlaySetNewQueue(
    req: operations.SyncPlaySetNewQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlaySetNewQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlaySetNewQueueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/SetNewQueue";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncPlaySetNewQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncPlaySetPlaylistItem - Request to change playlist item in SyncPlay group.
  **/
  syncPlaySetPlaylistItem(
    req: operations.SyncPlaySetPlaylistItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlaySetPlaylistItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlaySetPlaylistItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/SetPlaylistItem";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncPlaySetPlaylistItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncPlaySetRepeatMode - Request to set repeat mode in SyncPlay group.
  **/
  syncPlaySetRepeatMode(
    req: operations.SyncPlaySetRepeatModeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlaySetRepeatModeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlaySetRepeatModeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/SetRepeatMode";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncPlaySetRepeatModeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncPlaySetShuffleMode - Request to set shuffle mode in SyncPlay group.
  **/
  syncPlaySetShuffleMode(
    req: operations.SyncPlaySetShuffleModeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlaySetShuffleModeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlaySetShuffleModeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/SetShuffleMode";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncPlaySetShuffleModeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncPlayStop - Request stop in SyncPlay group.
  **/
  syncPlayStop(
    req: operations.SyncPlayStopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayStopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayStopRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/Stop";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncPlayStopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * syncPlayUnpause - Request unpause in SyncPlay group.
  **/
  syncPlayUnpause(
    req: operations.SyncPlayUnpauseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SyncPlayUnpauseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SyncPlayUnpauseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/SyncPlay/Unpause";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SyncPlayUnpauseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * uninstallPlugin - Uninstalls a plugin.
  **/
  uninstallPlugin(
    req: operations.UninstallPluginRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UninstallPluginResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UninstallPluginRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Plugins/{pluginId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UninstallPluginResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * uninstallPluginByVersion - Uninstalls a plugin by version.
  **/
  uninstallPluginByVersion(
    req: operations.UninstallPluginByVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UninstallPluginByVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UninstallPluginByVersionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Plugins/{pluginId}/{version}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UninstallPluginByVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * unmarkFavoriteItem - Unmarks item as a favorite.
  **/
  unmarkFavoriteItem(
    req: operations.UnmarkFavoriteItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UnmarkFavoriteItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UnmarkFavoriteItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/FavoriteItems/{itemId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UnmarkFavoriteItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateConfiguration - Updates application configuration.
  **/
  updateConfiguration(
    req: operations.UpdateConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConfigurationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/Configuration";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDeviceOptions - Update device options.
  **/
  updateDeviceOptions(
    req: operations.UpdateDeviceOptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDeviceOptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDeviceOptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Devices/Options";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.UpdateDeviceOptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDisplayPreferences - Update Display Preferences.
  **/
  updateDisplayPreferences(
    req: operations.UpdateDisplayPreferencesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDisplayPreferencesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDisplayPreferencesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/DisplayPreferences/{displayPreferencesId}", req.pathParams);

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.UpdateDisplayPreferencesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateInitialConfiguration - Sets the initial startup wizard configuration.
  **/
  updateInitialConfiguration(
    req: operations.UpdateInitialConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateInitialConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateInitialConfigurationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Startup/Configuration";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateInitialConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateItem - Updates an item.
  **/
  updateItem(
    req: operations.UpdateItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}", req.pathParams);

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateItemContentType - Updates an item's content type.
  **/
  updateItemContentType(
    req: operations.UpdateItemContentTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateItemContentTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateItemContentTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/ContentType", req.pathParams);
    
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
        const res: operations.UpdateItemContentTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateItemImageIndex - Updates the index for an item image.
  **/
  updateItemImageIndex(
    req: operations.UpdateItemImageIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateItemImageIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateItemImageIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Items/{itemId}/Images/{imageType}/{imageIndex}/Index", req.pathParams);
    
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
        const res: operations.UpdateItemImageIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateLibraryOptions - Update library options.
  **/
  updateLibraryOptions(
    req: operations.UpdateLibraryOptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateLibraryOptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateLibraryOptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/VirtualFolders/LibraryOptions";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateLibraryOptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateMediaEncoderPath - Updates the path to the media encoder.
  **/
  updateMediaEncoderPath(
    req: operations.UpdateMediaEncoderPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMediaEncoderPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMediaEncoderPathRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/System/MediaEncoder/Path";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateMediaEncoderPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateMediaPath - Updates a media path.
  **/
  updateMediaPath(
    req: operations.UpdateMediaPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMediaPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMediaPathRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Library/VirtualFolders/Paths/Update";

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
        const res: operations.UpdateMediaPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNamedConfiguration - Updates named configuration.
  **/
  updateNamedConfiguration(
    req: operations.UpdateNamedConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNamedConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNamedConfigurationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/System/Configuration/{key}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateNamedConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updatePluginConfiguration - Updates plugin configuration.
   *
   * Accepts plugin configuration as JSON body.
  **/
  updatePluginConfiguration(
    req: operations.UpdatePluginConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePluginConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePluginConfigurationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Plugins/{pluginId}/Configuration", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdatePluginConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updatePluginSecurityInfo - Updates plugin security info.
  **/
  updatePluginSecurityInfo(
    req: operations.UpdatePluginSecurityInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePluginSecurityInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePluginSecurityInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Plugins/SecurityInfo";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdatePluginSecurityInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateProfile - Updates a profile.
  **/
  updateProfile(
    req: operations.UpdateProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Dlna/Profiles/{profileId}", req.pathParams);

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateSeriesTimer - Updates a live tv series timer.
  **/
  updateSeriesTimer(
    req: operations.UpdateSeriesTimerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSeriesTimerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSeriesTimerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/SeriesTimers/{timerId}", req.pathParams);

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateSeriesTimerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateStartupUser - Sets the user name and password.
  **/
  updateStartupUser(
    req: operations.UpdateStartupUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateStartupUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateStartupUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Startup/User";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateStartupUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateTask - Update specified task triggers.
  **/
  updateTask(
    req: operations.UpdateTaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateTaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateTaskRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ScheduledTasks/{taskId}/Triggers", req.pathParams);

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateTaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateTimer - Updates a live tv timer.
  **/
  updateTimer(
    req: operations.UpdateTimerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateTimerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateTimerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/LiveTv/Timers/{timerId}", req.pathParams);

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateTimerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateUser - Updates a user.
  **/
  updateUser(
    req: operations.UpdateUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}", req.pathParams);

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateUserConfiguration - Updates a user configuration.
  **/
  updateUserConfiguration(
    req: operations.UpdateUserConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUserConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUserConfigurationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Configuration", req.pathParams);

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateUserConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateUserEasyPassword - Updates a user's easy password.
  **/
  updateUserEasyPassword(
    req: operations.UpdateUserEasyPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUserEasyPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUserEasyPasswordRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/EasyPassword", req.pathParams);

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateUserEasyPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateUserItemRating - Updates a user's rating for an item.
  **/
  updateUserItemRating(
    req: operations.UpdateUserItemRatingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUserItemRatingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUserItemRatingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Items/{itemId}/Rating", req.pathParams);
    
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
        const res: operations.UpdateUserItemRatingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.userItemDataDto = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateUserPassword - Updates a user's password.
  **/
  updateUserPassword(
    req: operations.UpdateUserPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUserPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUserPasswordRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Password", req.pathParams);

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateUserPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateUserPolicy - Updates a user policy.
  **/
  updateUserPolicy(
    req: operations.UpdateUserPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUserPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUserPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Users/{userId}/Policy", req.pathParams);

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateUserPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * uploadSubtitle - Upload an external subtitle file.
  **/
  uploadSubtitle(
    req: operations.UploadSubtitleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UploadSubtitleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UploadSubtitleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/Videos/{itemId}/Subtitles", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UploadSubtitleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * validatePath - Validates path.
  **/
  validatePath(
    req: operations.ValidatePathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ValidatePathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ValidatePathRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/Environment/ValidatePath";

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
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ValidatePathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="CamelCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json; profile="PascalCase"`)) {
                res.problemDetails = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
