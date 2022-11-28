import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://test-api.osf.io/v2",
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
   * usersAddonAccountsList - List all addon accounts
   *
   * 
   * A paginated list of addon accounts authorized by this user.
   * 
   * #### Permissions
   * 
   * Addon accounts are visible only to the user that authorized the account.
   * 
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of at most 10 addon account objects. Each resource in the array is a separate  addon account object and contains the full representation of the addon account.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  usersAddonAccountsList(
    req: operations.UsersAddonAccountsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersAddonAccountsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersAddonAccountsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/addons/{provider}/accounts/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersAddonAccountsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * usersAddonAccountsRead - Retrieve an addon account
   *
   * Retrieves the details of an addon account
   * 
   * #### Permissions
   * 
   * Addon accounts are visible only to the user that authorized the account.
   * 
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested addon account, if the request was successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  usersAddonAccountsRead(
    req: operations.UsersAddonAccountsReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersAddonAccountsReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersAddonAccountsReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/addons/{provider}/accounts/{account_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersAddonAccountsReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * addonsList - List all addons
   *
   * 
   * A paginated list of addons configurable with the OSF
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 addons. Each resource in the array is a separate addon object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * This request should never return an error.
  **/
  addonsList(
    config?: AxiosRequestConfig
  ): Promise<operations.AddonsListResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/addons/";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddonsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * baseRead - Root
   *
   * Welcome to the Open Science Framework API. With this API you can access users, projects, components, logs, and files from the [Open Science Framework](https://osf.io/). The Open Science Framework (OSF) is a free, open-source service maintained by the [Center for Open Science](http://cos.io/).
   * 
   * #### Returns
   * A JSON object with `meta` and `links` keys.
   * 
   * The `meta` key contains information such as a welcome message from the API, the specified version of the request, and the full representation of the current user, if authentication credentials were provided in the request.
   * 
   * The `links` key contains links to the following entity collections: [addons](#tag/Addons), [collections](), [institutions](#tag/Institutions), [licenses](#tag/Licenses), [metaschemas](#tag/Metaschemas), [nodes](#tag/Nodes), [registrations](#tag/Registrations), [users](#tag/Users)
  **/
  baseRead(
    config?: AxiosRequestConfig
  ): Promise<operations.BaseReadResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BaseReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * citationsStylesList - List all citation styles
   *
   * 
   * A paginated list of all standard citation styles available for rendering citations.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 citation styles. Each resource in the array is a separate citation syle and contains the full representation of the citation style object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * This request should never return an error.
   * #### Filtering
   * You can optionally request that the response only include citation styles that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/citations/styles/?filter[title]=open.
   * 
   * Citation styles may be filtered by their `id`, `title`, `short-title`, and `summary`.
  **/
  citationsStylesList(
    config?: AxiosRequestConfig
  ): Promise<operations.CitationsStylesListResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/citations/styles/";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CitationsStylesListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * citationsStylesRead - Retrieve a citation style
   *
   * Retrieves the details of a citation style.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested citation style, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  citationsStylesRead(
    req: operations.CitationsStylesReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CitationsStylesReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CitationsStylesReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/citations/styles/{style_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CitationsStylesReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * collectionsAddMetadata - Add Metadata or Subjects to a Entitiy in a Collection
   *
   * List of user created metadata for entities within a collection.
   * #### Permissions
   * To edit this collection a user must have collections write permissions
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of nodes ids.
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  collectionsAddMetadata(
    req: operations.CollectionsAddMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsAddMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsAddMetadataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/collections/{collection_id}/collected_metadata/", req.pathParams);

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
        const res: operations.CollectionsAddMetadataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * collectionsCollectedMetadata - Retrieve subject data for a specific piece of metadata info for a collection
   *
   * 
   * #### Permissions
   * In order to view these subject it must be a public collection or a user must have read permissions for collection.
   * 
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of nodes ids.
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  collectionsCollectedMetadata(
    req: operations.CollectionsCollectedMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsCollectedMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsCollectedMetadataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}/subjects/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CollectionsCollectedMetadataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * collectionsCreate - Create a Collection
   *
   * Retrieves a list collections, either public or related to the user
   * #### Permissions
   * Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
   * 
   * Comments on private nodes are only visible to contributors and administrators on the parent node.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  collectionsCreate(
    req: operations.CollectionsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/collections/";

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
        const res: operations.CollectionsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * collectionsDelete - Delete a Collection
   *
   * Deletes a collection, if the user has appropriate permissions.
   * #### Permissions
   * Users must have write permissions on a collection in order to delete it
   * #### Returns
   * Nothing is returned in the body
  **/
  collectionsDelete(
    req: operations.CollectionsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/collections/{collection_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CollectionsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * collectionsDetail - Retrieve a Collection
   *
   * Retrieves a collection, if the user has appropriate permissions.
   * 
   * #### Permissions
   * Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  collectionsDetail(
    req: operations.CollectionsDetailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsDetailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsDetailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/collections/{collection_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CollectionsDetailResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * collectionsLinkedNodesList - List All Linked Nodes for a Collection
   *
   * List of all nodes linked to the given collection.
   * #### Permissions
   * This returns all public nodes associated with this collection.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  collectionsLinkedNodesList(
    req: operations.CollectionsLinkedNodesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsLinkedNodesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsLinkedNodesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/collections/{collection_id}/linked_nodes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CollectionsLinkedNodesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * collectionsLinkedNodesRelationships - Link Nodes to Collection
   *
   * This endpoint allow users to a add a node to a collection by issuing a POST request.
   * #### Permissions
   * This returns all public nodes associated with this collection.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  collectionsLinkedNodesRelationships(
    req: operations.CollectionsLinkedNodesRelationshipsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsLinkedNodesRelationshipsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsLinkedNodesRelationshipsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/collections/{collection_id}/linked_nodes/relationships/", req.pathParams);

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
        const res: operations.CollectionsLinkedNodesRelationshipsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * collectionsLinkedNodesRelationshipsCreate - Give a Sparse List of Node Ids
   *
   * List of all the node ids linked to the given collection.
   * #### Permissions
   * This returns all public nodes associated with this collection.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of nodes ids.
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  collectionsLinkedNodesRelationshipsCreate(
    req: operations.CollectionsLinkedNodesRelationshipsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsLinkedNodesRelationshipsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsLinkedNodesRelationshipsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/collections/{collection_id}/linked_nodes/relationships/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CollectionsLinkedNodesRelationshipsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * collectionsLinkedNodesRelationshipsDelete - Remove Nodes From Collection
   *
   * 
   * This removes associated nodes from a collection
   * #### Permissions
   * Any user with write permissions on this collection should be to remove nodes from this collection.
   * #### Returns
   * Nothing in the response body.
  **/
  collectionsLinkedNodesRelationshipsDelete(
    req: operations.CollectionsLinkedNodesRelationshipsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsLinkedNodesRelationshipsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsLinkedNodesRelationshipsDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/collections/{collection_id}/linked_nodes/relationships/", req.pathParams);

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
        method: "delete",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CollectionsLinkedNodesRelationshipsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * collectionsLinkedPreprintsList - List All Linked Preprints for a Collection
   *
   * List of all preprints linked to the given collection.
   * #### Permissions
   * This returns all public preprints associated with this collection.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  collectionsLinkedPreprintsList(
    req: operations.CollectionsLinkedPreprintsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsLinkedPreprintsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsLinkedPreprintsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/collections/{collection_id}/linked_preprints/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CollectionsLinkedPreprintsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * collectionsLinkedRegistrationsList - List All Linked Registrations for a Collection
   *
   * List of all registrations linked to the given collection.
   * #### Permissions
   * This returns all public registrations associated with this collection.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  collectionsLinkedRegistrationsList(
    req: operations.CollectionsLinkedRegistrationsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsLinkedRegistrationsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsLinkedRegistrationsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/collections/{collection_id}/linked_registrations/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CollectionsLinkedRegistrationsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * collectionsLinkedRegistrationsRelationships - Link Registrations to Collection
   *
   * This endpoint allow users to a add a registration to a collection by issuing a POST request.
   * #### Permissions
   * This returns all public registrations associated with this collection.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  collectionsLinkedRegistrationsRelationships(
    req: operations.CollectionsLinkedRegistrationsRelationshipsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsLinkedRegistrationsRelationshipsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsLinkedRegistrationsRelationshipsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/collections/{collection_id}/linked_registrations/relationships/", req.pathParams);

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
        const res: operations.CollectionsLinkedRegistrationsRelationshipsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * collectionsLinkedRegistrationsRelationshipsCreate - Give a Sparse List of Registrations Ids
   *
   * List of all the registration ids linked to the given collection.
   * #### Permissions
   * This returns all public registrations associated with this collection.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of nodes ids.
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  collectionsLinkedRegistrationsRelationshipsCreate(
    req: operations.CollectionsLinkedRegistrationsRelationshipsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsLinkedRegistrationsRelationshipsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsLinkedRegistrationsRelationshipsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/collections/{collection_id}/linked_registrations/relationships/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CollectionsLinkedRegistrationsRelationshipsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * collectionsLinkedRegistrationsRelationshipsDelete - Remove Registrations From Collection
   *
   * 
   * This removes associated registrations from a collection
   * #### Permissions
   * Any user with write permissions on this collection should be to remove registrations from this collection.
   * #### Returns
   * Nothing in the response body.
  **/
  collectionsLinkedRegistrationsRelationshipsDelete(
    req: operations.CollectionsLinkedRegistrationsRelationshipsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsLinkedRegistrationsRelationshipsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsLinkedRegistrationsRelationshipsDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/collections/{collection_id}/linked_registrations/relationships/", req.pathParams);

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
        method: "delete",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CollectionsLinkedRegistrationsRelationshipsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * collectionsList - List all Collections
   *
   * Retrieves a list collections, either public or related to the user
   * #### Permissions
   * Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
   * 
   * Comments on private nodes are only visible to contributors and administrators on the parent node.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  collectionsList(
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsListResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/collections/";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CollectionsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * collectionsMetadataDelete - Delete Collection Metadata from entitiy
   *
   * 
   * #### Permissions
   * Only a user with collection admin permissions can delete collected metadata
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of nodes ids.
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  collectionsMetadataDelete(
    req: operations.CollectionsMetadataDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsMetadataDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsMetadataDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CollectionsMetadataDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * collectionsMetadataDetail - Add Metadata or Subjects to an Entity in a Collection
   *
   * List of user created metadata for entities within a collection.
   * #### Permissions
   * To edit this collection a user must have collections write permissions
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of nodes ids.
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  collectionsMetadataDetail(
    req: operations.CollectionsMetadataDetailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsMetadataDetailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsMetadataDetailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}", req.pathParams);

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
        const res: operations.CollectionsMetadataDetailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * collectionsMetadataRegistrationsDetail - Retrieve Specific Metadata for a Collection
   *
   * 
   * #### Permissions
   * In order to view this metadata it must be public or a user must have read permissions for collection.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of nodes ids.
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  collectionsMetadataRegistrationsDetail(
    req: operations.CollectionsMetadataRegistrationsDetailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsMetadataRegistrationsDetailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsMetadataRegistrationsDetailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CollectionsMetadataRegistrationsDetailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * collectionsMetadataRegistrationsList - Retrieve a list of collected metadata for a collection
   *
   * List of user created metadata for entities within a collection.
   * #### Permissions
   * In order to view this metadata it must be public or a user must have read permissions for collection.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of nodes ids.
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  collectionsMetadataRegistrationsList(
    req: operations.CollectionsMetadataRegistrationsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsMetadataRegistrationsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsMetadataRegistrationsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/collections/{collection_id}/collected_metadata/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CollectionsMetadataRegistrationsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * collectionsMetadataSubjectsRelationships - Retrieve subject metadata for a specific piece of metadata in a collection
   *
   * 
   * #### Permissions
   * This is public for a logged out user when an entity is public.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of nodes ids.
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  collectionsMetadataSubjectsRelationships(
    req: operations.CollectionsMetadataSubjectsRelationshipsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsMetadataSubjectsRelationshipsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsMetadataSubjectsRelationshipsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}/relationships/subjects/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CollectionsMetadataSubjectsRelationshipsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * collectionsMetadataSubjectsRelationshipsUpdate - Update subjects for a specific piece of metadata in a collection
   *
   * 
   * #### Permissions
   * This is editable for a user with a write permission for this collection.
   * 
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of nodes ids.
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  collectionsMetadataSubjectsRelationshipsUpdate(
    req: operations.CollectionsMetadataSubjectsRelationshipsUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsMetadataSubjectsRelationshipsUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsMetadataSubjectsRelationshipsUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}/relationships/subjects/", req.pathParams);

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
        const res: operations.CollectionsMetadataSubjectsRelationshipsUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * commentsDelete - Delete a comment
   *
   * Deletes a comment. This action can be undone by setting deleted to False in a comment update request.
   * #### Returns
   * If the request is successful, no content is returned.
   * 
   * If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  commentsDelete(
    req: operations.CommentsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CommentsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CommentsDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/comments/{comment_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CommentsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * commentsPut - Update a comment
   *
   * Updates the specified comment by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   * #### Returns
   * Returns JSON with a `data` key containing the new representation of the updated comment, if the request is successful.
   * 
   * If the request is unsuccessful, JSON with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  commentsPut(
    req: operations.CommentsPutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CommentsPutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CommentsPutRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/comments/{comment_id}/", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CommentsPutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * commentsRead - Retrieve a comment
   *
   * Retrieves the details of a comment
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested comment, if the request was successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  commentsRead(
    req: operations.CommentsReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CommentsReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CommentsReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/comments/{comment_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CommentsReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * filesDetail - Retrieve a file
   *
   * Retrieves the details of a file (or folder)
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested file, if the request was successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
   * ###Waterbutler API actions
   * 
   * Files can be modified through the Waterbutler API routes found in `links` (`new_folder`, `move`, `upload`, `download`, and `delete`).
   * 
   * #### Download (files)
   * 
   * To download a file, issue a GET request against the download link. The response will have the Content-Disposition header set, which will will trigger a download in a browser.
   * 
   * #### Create Subfolder (folders)
   * 
   * You can create a subfolder of an existing folder by issuing a PUT request against the new_folder link. The ?kind=folder portion of the query parameter is already included in the new_folder link. The name of the new subfolder should be provided in the name query parameter. The response will contain a WaterButler folder entity. If a folder with that name already exists in the parent directory, the server will return a 409 Conflict error response.
   * 
   * #### Upload New File (folders)
   * 
   * 
   *   To upload a file to a folder, issue a PUT request to the folder's upload link with the raw file data in the request body, and the kind and name query parameters set to 'file' and the desired name of the file. The response will contain a WaterButler file entity that describes the new file. If a file with the same name already exists in the folder, the server will return a 409 Conflict error response.
   * 
   * 
   * #### Update Existing File (file)
   * 
   * To update an existing file, issue a PUT request to the file's upload link with the raw file data in the request body and the kind query parameter set to "file". The update action will create a new version of the file. The response will contain a WaterButler file entity that describes the updated file.
   * 
   * #### Rename (files, folders)
   * 
   * To rename a file or folder, issue a POST request to the move link with the action body parameter set to "rename" and the rename body parameter set to the desired name. The response will contain either a folder entity or file entity with the new name.
   * 
   * #### Move & Copy (files, folders)
   * 
   * Move and copy actions both use the same request structure, a POST to the move url, but with different values for the action body parameters. The path parameter is also required and should be the OSF path attribute of the folder being written to. The rename and conflict parameters are optional. If you wish to change the name of the file or folder at its destination, set the rename parameter to the new name. The conflict param governs how name clashes are resolved. Possible values are replace and keep. replace is the default and will overwrite the file that already exists in the target folder. keep will attempt to keep both by adding a suffix to the new file's name until it no longer conflicts. The suffix will be ' (x)' where x is a increasing integer starting from 1. This behavior is intended to mimic that of the OS X Finder. The response will contain either a folder entity or file entity with the new name.
   * Files and folders can also be moved between nodes and providers. The resource parameter is the id of the node under which the file/folder should be moved. It must agree with the path parameter, that is the path must identify a valid folder under the node identified by resource. Likewise, the provider parameter may be used to move the file/folder to another storage provider, but both the resource and path parameters must belong to a node and folder already extant on that provider. Both resource and provider default to the current node and providers.
   * If a moved/copied file is overwriting an existing file, a 200 OK response will be returned. Otherwise, a 201 Created will be returned.
   * 
   * #### Delete (file, folders)
   * 
   * To delete a file or folder send a DELETE request to the delete link. Nothing will be returned in the response body.
  **/
  filesDetail(
    req: operations.FilesDetailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FilesDetailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FilesDetailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/files/{file_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FilesDetailResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * filesPatch - Update a file
   *
   * Updates the specified file by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   * #### Returns
   * Returns JSON with a `data` key containing the new representation of the updated file, if the request is successful.
   * 
   * If the request is unsuccessful, JSON with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  filesPatch(
    req: operations.FilesPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FilesPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FilesPatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/files/{file_id}/", req.pathParams);

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
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FilesPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * filesVersionDetail - Retrieve a file version
   *
   * Retrieves the details of a file version
   * #### Returns
   * 
   * Returns a JSON object with a `data` key containing the representation of the requested file, if the request was successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  filesVersionDetail(
    req: operations.FilesVersionDetailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FilesVersionDetailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FilesVersionDetailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/files/{file_id}/versions/{version_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FilesVersionDetailResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * filesVersions - List all file versions
   *
   * 
   * A paginated list of all file versions.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 file versions. Each resource in the array is a separate file version object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  filesVersions(
    req: operations.FilesVersionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FilesVersionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FilesVersionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/files/{file_id}/versions/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FilesVersionsResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * institutionsDetail - Retrieve an institution
   *
   * Retrieves the details of an institution
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested institution, if the request was successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  institutionsDetail(
    req: operations.InstitutionsDetailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InstitutionsDetailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InstitutionsDetailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/institutions/{institution_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.InstitutionsDetailResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * institutionsList - List all institutions
   *
   * 
   * A paginated list of all verified institutions.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 institutions. Each resource in the array is a separate institution object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * This request should never return an error.
   * #### Filtering
   * You can optionally request that the response only include institutions that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/?filter[id]=cos.
   * 
   * Institutions may be filtered by their `id`, `name`, and `auth_url`
  **/
  institutionsList(
    config?: AxiosRequestConfig
  ): Promise<operations.InstitutionsListResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/institutions/";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.InstitutionsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * institutionsNodeList - List all affiliated nodes
   *
   * A paginated list of all nodes affiliated with an institution.
   * #### Versioning
   * As of version `2.2`, affiliated components (in addition to affiliated top-level projects) are returned from this endpoint.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 nodes. Each resource in the array is a separate nodes object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
   * #### Filtering
   * You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/nodes?filter[title]=science.
   * 
   * Nodes may be filtered by their `id`, `title`, `description`, `public`, `tags`, `category`, `date_created`, `date_modified`, `root`, `parent`, `contributors`, and `preprint`
  **/
  institutionsNodeList(
    req: operations.InstitutionsNodeListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InstitutionsNodeListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InstitutionsNodeListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/institutions/{institution_id}/nodes/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.InstitutionsNodeListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * institutionsRegistrationList - List all affiliated registrations
   *
   * A paginated list of all registrations affiliated with an institution.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 registrations. Each resource in the array is a separate users object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
   * #### Filtering
   * You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/registrations?filter[title]=science.
   * 
   * Registrations may be filtered by their  `id`, `title`, `description`, `public`, `tags`, `category`, `date_created`, `date_modified`, `root`, `parent`, `contributors`, and `preprint`
  **/
  institutionsRegistrationList(
    req: operations.InstitutionsRegistrationListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InstitutionsRegistrationListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InstitutionsRegistrationListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/institutions/{institution_id}/registrations/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.InstitutionsRegistrationListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * institutionsUsersList - List all affiliated users
   *
   * A paginated list of all users affiliated with an institution.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 users. Each resource in the array is a separate users object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
   * #### Filtering
   * You can optionally request that the response only include users that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/institutions/cos/users?filter[family_name]=Nosek.
   * 
   * Users may be filtered by their `id`, `full_name`, `given_name`, `middle_names`, and `family_name`
  **/
  institutionsUsersList(
    req: operations.InstitutionsUsersListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InstitutionsUsersListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InstitutionsUsersListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/institutions/{institution_id}/users/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.InstitutionsUsersListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * licenseList - List all licenses
   *
   * A paginated list of licenses. The returned licenses are sorted by their name.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * The `data` key contains an array of 10 licenses. Each resource in the array is a separate license object and contains the full representation of the license, meaning additional requests to a license's detail view are not necessary.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * This request should never return an error.
   * #### Filtering
   * You can optionally request that the response only include licenses that match your filters by utilizing the `filter` query parameter, e.g. [https://api.osf.io/v2/licenses/?filter[name]=apache](https://api.osf.io/v2/licenses/?filter[name]=apache).
   * 
   * Licenses may be filtered by their `id`, and `name`.
  **/
  licenseList(
    config?: AxiosRequestConfig
  ): Promise<operations.LicenseListResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/licenses/";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LicenseListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * licensesRead - Retrieve a license
   *
   * Retrieves the details of a license.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested license, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  licensesRead(
    req: operations.LicensesReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LicensesReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LicensesReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/license/{license_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LicensesReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * logsActions - Actions
   *
   * 
   * A log can have one of many actions. The complete list of loggable actions (in the format {identifier}: {description}) is as follows:
   * * `project_created`: A Node is created
   * * `project_registered`: A Node is registered
   * * `project_deleted`: A Node is deleted
   * * `created_from`: A Node is created using an existing Node as a template
   * * `pointer_created`: A Pointer is created
   * * `pointer_forked`: A Pointer is forked
   * * `pointer_removed`: A Pointer is removed
   * * `node_removed`: A component is deleted
   * * `node_forked`: A Node is forked
   * ---
   * * `made_public`: A Node is made public
   * * `made_private`: A Node is made private
   * * `tag_added`: A tag is added to a Node
   * * `tag_removed`: A tag is removed from a Node
   * * `edit_title`: A Node's title is changed
   * * `edit_description`: A Node's description is changed
   * * `updated_fields`: One or more of a Node's fields are changed
   * * `external_ids_added`: An external identifier is added to a Node (e.g. DOI, ARK)
   * * `view_only_link_added`: A view-only link was added to a Node
   * * `view_only_link_removed`:  A view-only link was removed from a Node
   * ---
   * * `contributor_added`: A Contributor is added to a Node
   * * `contributor_removed`: A Contributor is removed from a Node
   * * `contributors_reordered`: A Contributor's position in a Node's bibliography is changed
   * * `permissions_updated`: A Contributor`s permissions on a Node are changed
   * * `made_contributor_visible`: A Contributor is made bibliographically visible on a Node
   * * `made_contributor_invisible`: A Contributor is made bibliographically invisible on a Node
   * ---
   * * `wiki_updated`: A Node's wiki is updated
   * * `wiki_deleted`: A Node's wiki is deleted
   * * `wiki_renamed`: A Node's wiki is renamed
   * * `made_wiki_public`: A Node's wiki is made public
   * * `made_wiki_private`: A Node's wiki is made private
   * ---
   * * `addon_added`: An add-on is linked to a Node
   * * `addon_removed`: An add-on is unlinked from a Node
   * * `addon_file_moved`: A File in a Node's linked add-on is moved
   * * `addon_file_copied`: A File in a Node's linked add-on is copied
   * * `addon_file_renamed`: A File in a Node's linked add-on is renamed
   * * `node_authorized`: An addon is authorized for a project
   * * `node_deauthorized`: An addon is deauthorized for a project
   * * `folder_created`: A Folder is created in a Node's linked add-on
   * * `file_added`: A File is added to a Node's linked add-on
   * * `file_updated`: A File is updated on a Node's linked add-on
   * * `file_removed`: A File is removed from a Node's linked add-on
   * * `file_restored`: A File is restored in a Node's linked add-on
   * ---
   * * `comment_added`: A Comment is added to some item
   * * `comment_removed`: A Comment is removed from some item
   * * `comment_updated`: A Comment is updated on some item
   * ---
   * * `embargo_initiated`: An embargoed Registration is proposed on a Node
   * * `embargo_approved`: A proposed Embargo of a Node is approved
   * * `embargo_cancelled`: A proposed Embargo of a Node is cancelled
   * * `embargo_completed`: A proposed Embargo of a Node is completed
   * * `retraction_initiated`: A Withdrawal of a Registration is proposed
   * * `retraction_approved`: A Withdrawal of a Registration is approved
   * * `retraction_cancelled`: A Withdrawal of a Registration is cancelled
   * * `registration_initiated`: A Registration of a Node is proposed
   * * `registration_approved`: A proposed Registration is approved
   * * `registration_cancelled`: A proposed Registration is cancelled
  **/
  logsActions(
    config?: AxiosRequestConfig
  ): Promise<operations.LogsActionsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/actions/";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LogsActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * logsRead - Retrieve a log
   *
   * Retrieves the details of a log.
   * A log is permanent immutable record of a node's history. A log is created when a user performs one of many actions. See the [actions](#Logs_logs_actions) section for more details.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested log, if the request was successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  logsRead(
    req: operations.LogsReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LogsReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LogsReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/logs/{log_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LogsReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * metaschemasList - List all metaschemas
   *
   * 
   * A paginated list of all active metaschemas.
   * Metaschemas describe the supplemental questions that accompany a registration.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 metaschemas. Each resource in the array is a separate metaschema object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * This request should never return an error.
  **/
  metaschemasList(
    config?: AxiosRequestConfig
  ): Promise<operations.MetaschemasListResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/metaschemas/";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MetaschemasListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * metaschemasRead - Retrieve a metaschema
   *
   * Retrieves the details of a given metaschema.
   * 
   * Metaschemas describe the supplemental questions that accompany a registration.
   * 
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested metaschema, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  metaschemasRead(
    req: operations.MetaschemasReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MetaschemasReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MetaschemasReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/metaschemas/{metaschema_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MetaschemasReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesAddonRead - Retrieve an addon
   *
   * Retrieve details of an individual addon connected to this node.
   * #### Permissions
   * NodeSettings that are attached to public nodes will give read-only access to everyone. Private nodes require explicit read permission. Write and admin access are the same for public and private nodes. Administrators on a parent node have implicit read permissions for all child nodes.
   * Any users with write or admin access to the node are able to deauthorize an enabled addon, but only the addon authorizer is able to change the configuration (i.e. selected folder) of an already-configured NodeSettings entity.
   * #### Returns
   * Returns a JSON object with a `data` key containing the details of the requested addon, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  nodesAddonRead(
    req: operations.NodesAddonReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesAddonReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesAddonReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/addons/{provider}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesAddonReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesAddonsFoldersList - List all addon folders
   *
   * 
   * A paginated list of folders retrieved from the associated third-party (provider) service.
   * #### Permissions
   * Folders are visible only to the user that authorized the addon.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of addon folder objects. Each resource in the array is a separate addon folder object and contains the full representation of the addon folder, meaning additional requests to a addon folder's detail view are not necessary.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  nodesAddonsFoldersList(
    req: operations.NodesAddonsFoldersListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesAddonsFoldersListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesAddonsFoldersListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/addons/{provider}/folders/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesAddonsFoldersListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesAddonsList - List all addons
   *
   * 
   * A paginated list of addons connected to the given node or project.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of at most 10 addon objects. Each resource in the array is a separate addon object and contains the full representation of the addon, meaning additional requests to a addon's detail view are not necessary.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  nodesAddonsList(
    req: operations.NodesAddonsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesAddonsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesAddonsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/addons/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesAddonsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesChildrenCreate - Create a child node
   *
   * Creates a new child node.
   * 
   * Note: Creating a child node via this endpoint will function the same as creating a node via the node list endpoint, but the child node will have the given node set as its parent.
   * #### Permissions
   * Only write contributors may create children nodes.
   * #### Required
   * Required fields for creating a node include:
   * 
   * &nbsp;&nbsp;&nbsp;&nbsp`title`
   * 
   * &nbsp;&nbsp;&nbsp;&nbsp`category`
   * 
   * Note: nodes default to **private** unless the `public` field is explicitly set to **true** in the request payload.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the created node, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  nodesChildrenCreate(
    req: operations.NodesChildrenCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesChildrenCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesChildrenCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/children/", req.pathParams);

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
        const res: operations.NodesChildrenCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * nodesChildrenList - List all child nodes
   *
   * 
   * A paginated list of the next level child nodes for the given node. The returned nodes are sorted by their `date_modified`, with the most recently updated child nodes appearing first.
   * 
   * The list will include child nodes that are public, as well as child nodes that are private, if the authenticated user has permission to view them.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 child nodes. If the given node has zero child nodes, the `data` key will contain an empty array. Each resource in the array is a separate node object and contains the full representation of the child node, meaning additional requests to the child node's detail view are not necessary.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * This request should never return an error.
   * #### Filtering
   * You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/children/?filter[title]=reproducibility.
   * 
   * Nodes may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, `preprint`, and `contributors`.
   * 
   * Most fields are string fields and will be filtered using simple substring matching. Public and preprint are boolean fields, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting true or false in the query will cause the match to fail.
  **/
  nodesChildrenList(
    req: operations.NodesChildrenListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesChildrenListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesChildrenListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/children/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesChildrenListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesCitationList - Retrieve citation details
   *
   * The citation details for a node, in CSL format.
   * #### Returns
   * Returns a JSON object with a `data` key that contains the representation of the details necessary for the node citation.
  **/
  nodesCitationList(
    req: operations.NodesCitationListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesCitationListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesCitationListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/citation/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesCitationListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesCitationRead - Retrieve a styled citation
   *
   * The citation for a node in a specific style.
   * #### Returns
   * Returns a JSON object with a `data` key that contains the representation of the node citation, in the requested style.
  **/
  nodesCitationRead(
    req: operations.NodesCitationReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesCitationReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesCitationReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/citation/{style_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesCitationReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesCommentCreate - Create a comment
   *
   * Create a comment on a given node overview page or a reply to a comment on that node.
   * 
   * To create a comment on the node overview page, the target `type` would be "nodes" and the target `id` would be the node `id`.
   * 
   * To reply to a comment on this node, the target `type` would be "comments" and the target `id` would be the `id` of the comment to reply to.
   * ####Required
   * A relationship object with a `data` key, containing the target (`comments` or `nodes`) type and a target `id` is required.
   * In addition, the `content` attribute describing the relationship between the node and the comment is required.
   * #### Returns
   * Returns a JSON object with a data key containing the representation of the new comment, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  nodesCommentCreate(
    req: operations.NodesCommentCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesCommentCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesCommentCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/comments/", req.pathParams);

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
        const res: operations.NodesCommentCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * nodesCommentsList - List all comments
   *
   * 
   * A paginated list of comments related to a given node.
   * 
   * The returned comments are sorted by their creation date, with the most recent comments appearing first.
   * #### Permissions
   * Comments on public nodes are given read-only access to everyone.
   * 
   * If the node comment-level is `private`, only contributors have permission to comment.
   * 
   * If the comment-level is `public`, any logged-in OSF user can comment.
   * 
   * Comments on private nodes are only visible to contributors and administrators on the parent node.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * #### Filtering
   * You can optionally request that the response only include comments that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/comments/?filter[target_id]=jg7sezmdnt93
   * 
   * Nodes may be filtered by their `deleted`, `target_id`, `date_created`, `date_modified`.
   * 
   * Most fields are string fields and will be filtered using simple substring matching. Public and preprint are boolean fields, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting `true` or `false` in the query will cause the match to fail.
  **/
  nodesCommentsList(
    req: operations.NodesCommentsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesCommentsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesCommentsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/comments/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesCommentsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesContributorsCreate - Create a contributor
   *
   * Adds a contributor to a node, effectively creating a relationship between the node and a user.
   * 
   * Contributors are users who can make changes to the node or, in the case of private nodes, have read access to the node.
   * 
   * Contributors are categorized as either "bibliographic" or "non-bibliographic" contributors. From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
   * #### Permissions
   * Only project administrators can add contributors to a node.
   * #### Required
   * A relationship object with a `data` key, containing the `users` type and valid user ID is required.
   * 
   * All attributes describing the relationship between the node and the user are optional.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the new contributor, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  nodesContributorsCreate(
    req: operations.NodesContributorsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesContributorsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesContributorsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/contributors/", req.pathParams);

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
        const res: operations.NodesContributorsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * nodesContributorsDelete - Delete a contributor
   *
   * Removes a contributor from a node. This request only removes the relationship between the node and the user, it does not delete the user itself.
   * 
   * A node must always have at least one admin, and attempting to remove the only admin from a node will result in a **400 Bad Request** response.
   * #### Permissions
   * A user can remove themselves as a node contributor. Otherwise, only project administrators can remove contributors.
   * #### Returns
   * If the request is successful, no content is returned.
   * 
   * If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  nodesContributorsDelete(
    req: operations.NodesContributorsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesContributorsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesContributorsDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/contributors/{user_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesContributorsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * nodesContributorsList - List all contributors
   *
   * A paginated list of the node's contributors, sorted by their index.
   * 
   * Contributors are users who can make changes to the node or, in the case of private nodes, have read access to the node.
   * 
   * Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
   * 
   * Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.
   * 
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 contributors. Each resource in the array contains the full representation of the contributor, meaning additional requests to a contributor's detail view are not necessary. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * #### Filtering
   * You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/y9jdt/contributors/?filter[bibliographic]=true.
   * 
   * Contributors may be filtered by their `bibliographic` and `permission` attributes.
  **/
  nodesContributorsList(
    req: operations.NodesContributorsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesContributorsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesContributorsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/contributors/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesContributorsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesContributorsPartialUpdate - Update a contributor
   *
   * Updates a contributor by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.
   * 
   * Contributors can be updated with either a **PUT** or **PATCH** request. Since this endpoint has no mandatory attributes, PUT and PATCH are functionally the same.
   * #### Permissions
   * Only project administrators can update the contributors on a node.
   * #### Returns
   * Returns a JSON object with a `data` key containing the new representation of the updated contributor, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
   * 
   * If the given user is not already in the contributor list, a 404 Not Found error will be returned. A node must always have at least one admin, and any attempt to downgrade the permissions of a sole admin will result in a 400 Bad Request error.
  **/
  nodesContributorsPartialUpdate(
    req: operations.NodesContributorsPartialUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesContributorsPartialUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesContributorsPartialUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/contributors/{user_id}/", req.pathParams);

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
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesContributorsPartialUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * nodesContributorsRead - Retrieve a contributor
   *
   * Retrieves the details of a given contributor.
   * 
   * Contributors are users who can make changes to the node or, in the case of private nodes, have read access to the node.
   * 
   * Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested contributor, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  nodesContributorsRead(
    req: operations.NodesContributorsReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesContributorsReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesContributorsReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/contributors/{user_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesContributorsReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesCreate - Create a node
   *
   * Creates a new node.
   * 
   * On the OSF, nodes are considered **projects** or **components**. The difference between a project and a component is that a project is a top-level node, and a component is a child of a project.
   * 
   * Additionally, nodes have a `category` field that includes **project** as an option. The categorization determines what icon is displayed with the node on the OSF, and helps with search organization. Projects (top-level nodes) may have a category other than project, and components (children) may have a category of **project**.
   * #### Required
   * Required fields for creating a node include:
   * 
   * &nbsp;&nbsp;&nbsp;&nbsp`title`
   * 
   * &nbsp;&nbsp;&nbsp;&nbsp`category`
   * 
   * Note: Nodes default to **private** unless the `public` field is explicitly set to **true** in the request payload.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the created node, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  nodesCreate(
    req: operations.NodesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/nodes/";

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
        const res: operations.NodesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * nodesDelete - Delete a node
   *
   * 
   * Permanently deletes a node. This action cannot be undone.
   * #### Permissions
   * Only project administrators may delete a node. Attempting to delete a node for which you are not an administrator will result in a **403 Forbidden** response.
   * #### Returns
   * If the request is successful, no content is returned.
   * 
   * If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  nodesDelete(
    req: operations.NodesDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * nodesDraftRegistrationsCreate - Create a draft registration
   *
   * Initiate a draft registration of the current node.
   * Draft registrations contain the supplemental registration questions that accompany a registration. A registration is a frozen version of the project that can never be edited or deleted, but can be withdrawn.
   * 
   * Your original project remains editable but will now have the draft registration linked to it.
   * #### Permissions
   * Only project administrators may view create registrations.
   * #### Required
   * Required fields for creating a draft registration include:
   * 
   * &nbsp;&nbsp;&nbsp;&nbsp`registration_supplement`
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the created draft registration, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  nodesDraftRegistrationsCreate(
    req: operations.NodesDraftRegistrationsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesDraftRegistrationsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesDraftRegistrationsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/draft_registrations/", req.pathParams);

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
        const res: operations.NodesDraftRegistrationsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * nodesDraftRegistrationsDelete - Delete a draft registration
   *
   * Permanently deletes a draft registration. A draft that has already been registered cannot be deleted.
   * #### Permissions
   * Only project administrators may delete draft registrations.
   * #### Returns
   * If the request is successful, no content is returned.
   * 
   * If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.
  **/
  nodesDraftRegistrationsDelete(
    req: operations.NodesDraftRegistrationsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesDraftRegistrationsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesDraftRegistrationsDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/draft_registrations/{draft_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesDraftRegistrationsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * nodesDraftRegistrationsList - List all draft registrations
   *
   * A paginated list of all of the draft registrations of a given node.
   * 
   * Draft registrations contain the supplemental registration questions that accompany a registration. A registration is a frozen version of the project that can never be edited or deleted, but can be withdrawn.
   * 
   * Your original project remains editable but will now have the draft registration linked to it.
   * #### Permissions
   * Only project administrators may view draft registrations.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 draft registrations. Each resource in the array is a separate draft registration object and contains the full representation of the draft registration, meaning additional requests to a draft registration's detail view are not necessary.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  nodesDraftRegistrationsList(
    req: operations.NodesDraftRegistrationsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesDraftRegistrationsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesDraftRegistrationsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/draft_registrations/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesDraftRegistrationsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesDraftRegistrationsPartialUpdate - Update a draft registration
   *
   * Updates a draft registration by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.
   * 
   * Draft registrations contain the supplemental registration questions that accompany a registration. Answer the questions in the draft registration supplement by sending update requests until you are ready to submit the draft.
   * 
   * The registration supplement of a draft registration cannot be updated after the draft has been created.
   * 
   * When updating a draft registration, `registration_metadata` is required. It must be a dictionary with keys as question ids in the registration form, and values as nested dictionaries matching the specific format in the [registration schema](TODO: link me pls).
   * 
   * If a question is multiple-choice, the question response must exactly match one of the possible choices.
   * #### Permissions
   * Only project administrators may update draft registrations.
   * #### Returns
   * Returns a JSON object with a `data` key containing the new representation of the updated draft registration, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  nodesDraftRegistrationsPartialUpdate(
    req: operations.NodesDraftRegistrationsPartialUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesDraftRegistrationsPartialUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesDraftRegistrationsPartialUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/draft_registrations/{draft_id}/", req.pathParams);

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
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesDraftRegistrationsPartialUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * nodesDraftRegistrationsRead - Retrieve a draft registration
   *
   * Retrieve the details of a given draft registration.
   * Draft registrations contain the supplemental registration questions that accompany a registration. A registration is a frozen version of the project that can never be edited or deleted, but can be withdrawn.
   * 
   * Your original project remains editable but will now have the draft registration linked to it.
   * #### Permissions
   * Only project administrators may view draft registrations.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested draft registration, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  nodesDraftRegistrationsRead(
    req: operations.NodesDraftRegistrationsReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesDraftRegistrationsReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesDraftRegistrationsReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/draft_registrations/{draft_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesDraftRegistrationsReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesFilesList - List all node files
   *
   * List of all the files/folders that are attached to your project for a given storage provider.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of files. Each resource in the array is a separate file object and contains the full representation of the file.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * #### Filtering
   * 
   * You can optionally request that the response only include files that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/files/osfstorage/?filter[kind]=file
   * 
   * Node files may be filtered by `id`, `name`, `node`, `kind`, `path`, `provider`, `size`, and `last_touched`.
   * 
   * ###Waterbutler API actions
   * 
   * Files can be modified through the Waterbutler API routes found in `links` (`new_folder`, `move`, `upload`, `download`, and `delete`).
   * 
   * #### Download (files)
   * 
   * To download a file, issue a GET request against the download link. The response will have the Content-Disposition header set, which will will trigger a download in a browser.
   * 
   * #### Create Subfolder (folders)
   * 
   * You can create a subfolder of an existing folder by issuing a PUT request against the new_folder link. The ?kind=folder portion of the query parameter is already included in the new_folder link. The name of the new subfolder should be provided in the name query parameter. The response will contain a WaterButler folder entity. If a folder with that name already exists in the parent directory, the server will return a 409 Conflict error response.
   * 
   * #### Upload New File (folders)
   * 
   * To upload a file to a folder, issue a PUT request to the folder's upload link with the raw file data in the request body, and the kind and name query parameters set to 'file' and the desired name of the file. The response will contain a WaterButler file entity that describes the new file. If a file with the same name already exists in the folder, the server will return a 409 Conflict error response.
   * 
   * #### Update Existing File (file)
   * 
   * To update an existing file, issue a PUT request to the file's upload link with the raw file data in the request body and the kind query parameter set to "file". The update action will create a new version of the file. The response will contain a WaterButler file entity that describes the updated file.
   * 
   * #### Rename (files, folders)
   * 
   * To rename a file or folder, issue a POST request to the move link with the action body parameter set to "rename" and the rename body parameter set to the desired name. The response will contain either a folder entity or file entity with the new name.
   * 
   * #### Move & Copy (files, folders)
   * 
   * Move and copy actions both use the same request structure, a POST to the move url, but with different values for the action body parameters. The path parameter is also required and should be the OSF path attribute of the folder being written to. The rename and conflict parameters are optional. If you wish to change the name of the file or folder at its destination, set the rename parameter to the new name. The conflict param governs how name clashes are resolved. Possible values are replace and keep. replace is the default and will overwrite the file that already exists in the target folder. keep will attempt to keep both by adding a suffix to the new file's name until it no longer conflicts. The suffix will be ' (x)' where x is a increasing integer starting from 1. This behavior is intended to mimic that of the OS X Finder. The response will contain either a folder entity or file entity with the new name.
   * Files and folders can also be moved between nodes and providers. The resource parameter is the id of the node under which the file/folder should be moved. It must agree with the path parameter, that is the path must identify a valid folder under the node identified by resource. Likewise, the provider parameter may be used to move the file/folder to another storage provider, but both the resource and path parameters must belong to a node and folder already extant on that provider. Both resource and provider default to the current node and providers.
   * If a moved/copied file is overwriting an existing file, a 200 OK response will be returned. Otherwise, a 201 Created will be returned.
   * 
   * #### Delete (file, folders)
   * 
   * To delete a file or folder send a DELETE request to the delete link. Nothing will be returned in the response body.
  **/
  nodesFilesList(
    req: operations.NodesFilesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesFilesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesFilesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/files/{provider}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesFilesListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesFilesRead - Retrieve a file
   *
   * Retrieves the details of a file attached to given node (project or component) for the given storage provider.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested file object, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  nodesFilesRead(
    req: operations.NodesFilesReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesFilesReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesFilesReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/files/{provider}/{path}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesFilesReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesForksCreate - Create a fork of this node
   *
   * Creates a fork of the given node.
   * 
   * Forking a project creates a copy of an existing node and all of its contents. The fork always points back to the original node, forming a network of nodes.
   * 
   * You might use a fork to copy another's work to build on and extend. For example, a professor may create an OSF project of materials for individual student use. Each student forks the project to have his or her own copy of the materials to start his/her own work.
   * 
   * When creating a fork, your fork will only contain public components of the current node and components for which you are a contributor. Private components that you do not have access to will not be forked.
   * #### Required
   * There are no required attributes when creating a fork, as all of the forked node's attributes will be copied from the current node.
   * 
   * The `title` field is optional, with the default title being "Fork of " prepended to the current node's title.
   * #### Returns
   * Returns a JSON object with a `data` key containing the complete srepresentation of the forked node, if the request is successful.
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  nodesForksCreate(
    req: operations.NodesForksCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesForksCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesForksCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/forks/", req.pathParams);

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
        const res: operations.NodesForksCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * nodesForksList - List all forks of this node
   *
   * 
   * A paginated list of the current node's forks. The returned fork nodes are sorted by their `forked_date`, with the most recently forked nodes appearing first.
   * 
   * Forking a project creates a copy of an existing node and all of its contents. The fork always points back to the original node, forming a network of nodes.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 forked nodes. If the current node has zero forked nodes, the `data` key will contain an empty array. Each resource in the array is a separate node object and contains the full representation of the forked node, meaning additional requests to the forked node's detail view are not necessary.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * This request should never return an error.
  **/
  nodesForksList(
    req: operations.NodesForksListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesForksListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesForksListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/forks/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesForksListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesIdentifiersList - List all identifiers
   *
   * List all identifiers associated with a given node.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of identifiers. Each resource in the array is a separate identifier object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * #### Filtering
   * 
   * You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/identifiers/?filter[category]=ark
   * 
   * Identifiers may be filtered by their `category` e.g `ark` or `doi`.
  **/
  nodesIdentifiersList(
    req: operations.NodesIdentifiersListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesIdentifiersListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesIdentifiersListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/identifiers/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesIdentifiersListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesInstitutionsList - List all institutions
   *
   * List of all institutions affiliated with this node.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 affilited institutions. Each resource in the array is a separate institution object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  nodesInstitutionsList(
    req: operations.NodesInstitutionsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesInstitutionsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesInstitutionsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/institutions/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesInstitutionsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesLinkedNodesList - List all linked nodes
   *
   * List of all nodes linked to the given node.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * #### Filtering
   * You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/?filter[title]=reproducibility.
   * 
   * Nodes may be filtered by their `title`, `category`, `description`, `public`, `registration`, or `tags`. `title`, `description`, and `category` are string fields and will be filteres using simple substring matching. `public`, `registration` are boolean and can be filtered using truthy values, such as `true`, `false`, `0`, `1`. `tags` is an array of simple strings.
  **/
  nodesLinkedNodesList(
    req: operations.NodesLinkedNodesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesLinkedNodesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesLinkedNodesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/linked_nodes/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesLinkedNodesListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesList - List all nodes
   *
   * 
   * A paginated list of nodes, representing projects and components, on the OSF.
   * 
   * The returned nodes are those which are public or which the user has access to view.
   * 
   * The returned nodes are sorted by their `date_modified`, with the most recently updated nodes appearing first.
   * 
   * Registrations cannot be accessed through this endpoint (use the [registrations](#tag/Registrations) endpoints instead).
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 nodes. Each resource in the array is a separate node object and contains the full representation of the node, meaning additional requests to a node's detail view are not necessary.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * This request should never return an error.
   * #### Filtering
   * You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/?filter[title]=reproducibility.
   * 
   * Nodes may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, `preprint`, and `contributors`.
   * 
   * Most fields are string fields and will be filtered using simple substring matching. Public and preprint are boolean fields, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting true or false in the query will cause the match to fail.
  **/
  nodesList(
    config?: AxiosRequestConfig
  ): Promise<operations.NodesListResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/nodes/";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesLogsList - List all logs
   *
   * A paginated list of all logs associated with a given node.
   * 
   * The returned logs are sorted by their `date`, with the most recents logs appearing first.
   * 
   * This list includes the logs of the specified node as well as the logs of that node's children to which the current user has read-only access.
   * 
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 logs. Each resource in the array is a separate logs object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * #### Filtering
   * You can optionally request that the response only include logs that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/logs/?filter[action]=made_private.
   * 
   * Nodes may be filtered by their `action`, and `date`.
  **/
  nodesLogsList(
    req: operations.NodesLogsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesLogsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesLogsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/logs/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesLogsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesNodeAddonUpdate - Update an addon
   *
   * Updates a node addon by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.
   * 
   * Node addon can be updated with either a **PUT** or **PATCH** request. The `external_account_id`, `enabled`, and `folder_id` fields are mandatory in a **PUT**, and optional in **PATCH**. Non-string values will be accepted and stringified, however we make no promises about the stringification output.
   * 
   * To delete or deauthorize a node addon, issue a **PUT** with all fields set to `null` or `False`, or a **PATCH** with enabled set `False`.
   * #### Permissions
   * NodeSettings that are attached to public nodes will give read-only access to everyone. Private nodes require explicit read permission. Write and admin access are the same for public and private nodes. Administrators on a parent node have implicit read permissions for all child nodes.
   * Any users with write or admin access to the node are able to deauthorize an enabled addon, but only the addon authorizer is able to change the configuration (i.e. selected folder) of an already-configured NodeSettings entity.
   * 
   * #### Returns
   * Returns a JSON object with a `data` key containing the new representation of the updated node addon, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  nodesNodeAddonUpdate(
    req: operations.NodesNodeAddonUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesNodeAddonUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesNodeAddonUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/addons/{provider}/", req.pathParams);

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
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesNodeAddonUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * nodesPartialUpdate - Update a node
   *
   * Updates a node by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.
   * 
   * Nodes can be updated with either a **PUT** or **PATCH** request. The `title` and `category` fields are mandatory in a **PUT** request, and optional in a **PATCH**.
   * #### Permissions
   * Only write contributors may update a node. Attempting to update a node for which you do not have write access will result in a **403 Forbidden** response.
   * #### Returns
   * Returns a JSON object with a `data` key containing the new representation of the updated node, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  nodesPartialUpdate(
    req: operations.NodesPartialUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesPartialUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesPartialUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/", req.pathParams);

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
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesPartialUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * nodesPreprintsList - List all preprints
   *
   * A paginated list of preprints related to a given node. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
   * 
   * **Note: This API endpoint is under active development, and is subject to change in the future.**
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 preprints. Each resource in the array is a separate preprint object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  nodesPreprintsList(
    req: operations.NodesPreprintsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesPreprintsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesPreprintsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/preprints/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesPreprintsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesProvidersList - List all storage providers
   *
   * List of all storage providers that are configured for this node
   * 
   * Users of the OSF may access their data on a [number of cloud-storage services](https://api.osf.io/v2/#storage-providers) that have integrations with the OSF. We call these **providers**. By default, every node has access to the OSF-provided storage but may use as many of the supported providers as desired.
   * 
   * 
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of files. Each resource in the array is a separate file object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * Note: In the OSF filesystem model, providers are treated as folders, but with special properties that distinguish them from regular folders. Every provider folder is considered a root folder, and may not be deleted through the regular file API.
  **/
  nodesProvidersList(
    req: operations.NodesProvidersListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesProvidersListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesProvidersListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/files/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesProvidersListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesProvidersRead - Retrieve a storage provider
   *
   * Retrieves the details of a storage provider enabled on this node.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested file object, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  nodesProvidersRead(
    req: operations.NodesProvidersReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesProvidersReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesProvidersReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/files/providers/{provider}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesProvidersReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesRead - Retrieve a node
   *
   * Retrieves the details of a given node (project or component).
   * #### Permissions
   * Only project contributors may retrieve the details of a private node. Attempting to retreive a private node for which you are not a contributor will result in a **403 Forbidden** response.
   * 
   * Authentication is not required to view the details of a public node, as public nodes give read-only access to everyone.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested node, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  nodesRead(
    req: operations.NodesReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesRegistrationsList - List all registrations
   *
   * List of all registrations of the given node.
   * #### Returns
   * 
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 registrations. Each resource in the array is a separate registrations object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * #### Filtering
   * 
   * You can optionally request that the response only include registrations that match your filters by utilizing the filter query parameter, e.g. https://api.osf.io/v2/registrations/?filter[title]=open.
   * 
   * Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.
  **/
  nodesRegistrationsList(
    req: operations.NodesRegistrationsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesRegistrationsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesRegistrationsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/registrations/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesRegistrationsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesViewOnlyLinksList - List all view only links
   *
   * List of view only links on a node.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 view only links. Each resource in the array is a view only link object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * #### Permissions
   * 
   * View only links on a node, public or private, are readable and writeable only by users that are administrators on the node.
   * 
   * #### Filtering
   * 
   * You can optionally request that the response only include view only links that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/nodes/ezcuj/view_only_links/?filter[anonymous]=true.
   * 
   * View Only Links may be filtered based on their `name`, `anonymous` and `date_created` fields. Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.
  **/
  nodesViewOnlyLinksList(
    req: operations.NodesViewOnlyLinksListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesViewOnlyLinksListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesViewOnlyLinksListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/view_only_links/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesViewOnlyLinksListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesViewOnlyLinksRead - Retrieve a view only link
   *
   * Retrieves the details of a view only link on a node.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
   * #### Permissions
   * 
   * View only links on a node, public or private, are readable and writeable only by users that are administrators on the node.
  **/
  nodesViewOnlyLinksRead(
    req: operations.NodesViewOnlyLinksReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesViewOnlyLinksReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesViewOnlyLinksReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/view_only_links/{link_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesViewOnlyLinksReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * nodesWikisList - List all wikis
   *
   * List of wiki pages on a node.
   * #### Returns
   * Paginated list of the node's current wiki page versions ordered by their date_modified. Each resource contains the full representation of the wiki, meaning additional requests to an individual wiki's detail view are not necessary.
   * 
   * Note that if an anonymous view_only key is being used, the user relationship will not be exposed.
   * 
   * If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
   * #### Filtering
   * Wiki pages can be filtered based on their `name` and `date_modified` fields.
   * + `filter[name]=<Str>` -- filter wiki pages by name
   * + `filter[date_modified][comparison_operator]=YYYY-MM-DDTH:M:S` -- filter wiki pages based on date modified.
   * 
   * Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.
  **/
  nodesWikisList(
    req: operations.NodesWikisListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NodesWikisListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NodesWikisListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/nodes/{node_id}/wikis/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NodesWikisListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * preprintProviderDetail - Retrieve a preprint provider
   *
   * Retrieves the details of a preprint provider.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested preprint provider, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
   * 
   * #### Acceptable Subjects Structure
   * Each preprint provider specifies acceptable subjects.
   * `subjects_acceptable` is an array found in `attributes`.
   * Subjects consist of general parent subjects (e.g., Engineering), more specific child subjects (e.g., Aerospace Engineering), and even more specific grandchild subjects (e.g., Aerodynamics and Fluid Mechanics). Subjects can only be nested 3 deep.
   * 
   * 
   *     "subjects_acceptable": [
   *         [
   *             [
   *                 # Parent Subject:
   *                 # Architecture
   *                 "584240d954be81056ceca9e5",
   * 
   *                 # Child Subject:
   *                 # Architectural Engineering
   *                 "584240da54be81056cecac87"
   *             ],
   *             # Include all Architectural Engineering's children:
   *             true
   *         ],
   *         [
   *             [
   *                 # Parent Subject:
   *                 # Engineering
   *                 "584240da54be81056cecaca9",
   * 
   *                 # Child Subject:
   *                 # Aerospace Engineering
   *                 "584240db54be81056cecacd6",
   * 
   *                 # Grandchild Subject:
   *                 # Aerodynamics and Fluid Mechanics
   *                 "584240da54be81056cecaa74"
   *             ],
   *             # All nestings 3 deep must be false
   *             false
   *         ]
   *     ]
   * 
   * The above structure would allow Architecture, Architectural Engineering, all of Architectural Engineering's children, Engineering, Aerospace Engineering, and Aerodynamics and Fluid Mechanics.
  **/
  preprintProviderDetail(
    req: operations.PreprintProviderDetailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PreprintProviderDetailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PreprintProviderDetailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/preprint_providers/{preprint_provider_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PreprintProviderDetailResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * preprintProviderLicensesList - List all licenses
   *
   * 
   * A paginated list of the licenses allowed bya preprint provider.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  preprintProviderLicensesList(
    req: operations.PreprintProviderLicensesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PreprintProviderLicensesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PreprintProviderLicensesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/preprint_providers/{preprint_provider_id}/licenses/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PreprintProviderLicensesListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * preprintProviderList - List all preprint providers
   *
   * 
   * A paginated list of all preprint providers. The returned preprint providers are sorted by their creation date, with the most recent preprints appearing first.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * This request should never return an error.
   * #### Filtering
   * You can optionally request that the response only include preprint providers that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprint_providers/?filter[id]=osf.
   * 
   * Preprint Providers may be filtered by their `id`, `name`,  and `description`
  **/
  preprintProviderList(
    config?: AxiosRequestConfig
  ): Promise<operations.PreprintProviderListResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/preprint_providers/";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PreprintProviderListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * preprintProviderTaxonomiesList - List all taxonomies
   *
   * 
   * A paginated list of the taxonomies for a preprint provider. The returned preprint providers taxonomies are sorted by their creation date, with the most recent preprints appearing first.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 preprint providers. Each resource in the array is a separate preprint provider object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  preprintProviderTaxonomiesList(
    req: operations.PreprintProviderTaxonomiesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PreprintProviderTaxonomiesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PreprintProviderTaxonomiesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/preprint_providers/{preprint_provider_id}/taxonomies/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PreprintProviderTaxonomiesListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * preprintProvidersPreprintsList - List all preprints
   *
   * 
   * A paginated list of preprints from the specified preprint provider. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 preprints. Each resource in the array is a separate preprint object.
   * 
   * The `links` key contains a dictionary with keys that can be used for [pagination](#tag/Pagination).
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
   * 
   * #### Filtering
   * You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprint_providers/osf/preprints/?filter[is_published]=true.
   * 
   * Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.
  **/
  preprintProvidersPreprintsList(
    req: operations.PreprintProvidersPreprintsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PreprintProvidersPreprintsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PreprintProvidersPreprintsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/preprint_providers/{preprint_provider_id}/preprints/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PreprintProvidersPreprintsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * preprintsCitationList - Retrieve citation details
   *
   * The citation details for a preprint, in CSL format.
   * #### Returns
   * Returns a JSON object with a `data` key that contains the representation of the details necessary for the preprint citation.
  **/
  preprintsCitationList(
    req: operations.PreprintsCitationListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PreprintsCitationListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PreprintsCitationListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/preprints/{preprint_id}/citation/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PreprintsCitationListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * preprintsCitationRead - Retrieve a styled citation
   *
   * The citation for a preprint in a specific style.
   * #### Returns
   * Returns a JSON object with a `data` key that contains the representation of the preprint citation, in the requested style.
  **/
  preprintsCitationRead(
    req: operations.PreprintsCitationReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PreprintsCitationReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PreprintsCitationReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/preprints/{preprint_id}/citation/{style_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PreprintsCitationReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * preprintsCreate - Create a preprint
   *
   * Creates a new preprint.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the created preprint, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.
  **/
  preprintsCreate(
    req: operations.PreprintsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PreprintsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PreprintsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/preprints/";

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
        const res: operations.PreprintsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * preprintsList - List all preprints
   *
   * 
   * A paginated list of preprints from all preprint providers. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 preprints. Each resource in the array is a separate preprint object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * This request should never return an error.
   * #### Filtering
   * You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/preprints/?filter[provider]=socarxiv.
   * 
   * Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.
  **/
  preprintsList(
    config?: AxiosRequestConfig
  ): Promise<operations.PreprintsListResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/preprints/";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PreprintsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * preprintsPartialUpdate - Update a preprint
   *
   * Updates the specified preprint by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   * #### Returns
   * Returns a JSON object with a `data` key containing the new representation of the updated preprint, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.
  **/
  preprintsPartialUpdate(
    req: operations.PreprintsPartialUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PreprintsPartialUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PreprintsPartialUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/preprints/{preprint_id}/", req.pathParams);

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
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PreprintsPartialUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * preprintsRead - Retrieve a preprint
   *
   * Retrieves the details of a preprint.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested preprint, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  preprintsRead(
    req: operations.PreprintsReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PreprintsReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PreprintsReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/preprints/{preprint_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PreprintsReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * registrationsChildrenList - List all child registrations
   *
   * 
   * A paginated list of children of a registration.
   * 
   * The list consists of the next level child registrations for the given registration. The returned registrations are sorted by their `date_modified`, with the most recently updated child registrations appearing first.
   * 
   * The list will include child registrations that are public, as well as child registrations that are private, if the authenticated user has permission to view them.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 child registrations. If the given registration has zero child registrations, the `data` key will contain an empty array. Each resource in the array is a separate registration object and contains the full representation of the child registration.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * #### Filtering
   * You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/children/?filter[title]=reproducibility.
   * 
   * Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.
   * 
   * Most fields are string fields and will be filtered using simple substring matching. Public is a boolean field, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting true or false in the query will cause the match to fail.
  **/
  registrationsChildrenList(
    req: operations.RegistrationsChildrenListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegistrationsChildrenListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegistrationsChildrenListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrations/{registration_id}/children/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegistrationsChildrenListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * registrationsCitationRead - Retrieve a citation
   *
   * Retrieves the citation style details for a registration, in CSL format.
   * #### Returns
   * Returns a JSON object with a `data` key that contains the representation of the details necessary for the citation style.
  **/
  registrationsCitationRead(
    req: operations.RegistrationsCitationReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegistrationsCitationReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegistrationsCitationReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrations/{registration_id}/citations/{citation_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegistrationsCitationReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * registrationsCitationsList - List all citation styles
   *
   * 
   * A paginated list of the registration's alternative citation styles
   * 
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 citation styles. Each resource in the array is a separate citation styles object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * #### Filtering
   * You can optionally request that the response only include citation styles that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/citations/?filter[title]=open.
   * 
   * Citation styles may be filtered by their `id`, `title`, `short-title`, and `summary`.
  **/
  registrationsCitationsList(
    req: operations.RegistrationsCitationsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegistrationsCitationsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegistrationsCitationsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrations/{registration_id}/citations/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegistrationsCitationsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * registrationsCommentsList - List all comments
   *
   * 
   * A paginated list of the registration's comments.
   * 
   * The returned comments are sorted by their creation date, with the most recent comments appearing first.
   * #### Permissions
   * Comments of public registrations are given read-only access to everyone.
   * 
   * If the comment-level is `private`, only registration contributors have permission to comment.
   * 
   * If the comment-level is `public`, any logged-in OSF user can comment.
   * 
   * Comments of private registrations are only visible to contributors and administrators on the registration.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * #### Filtering
   * You can optionally request that the response only include comments that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wuerf/comments/?filter[target]=wuerf
   * 
   * Comments may be filtered by their `deleted`, `target`, `date_created`, `date_modified`.
   * 
   * Most fields are string fields and will be filtered using simple substring matching. Deleted is a boolean field, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting `true` or `false` in the query will cause the match to fail.
  **/
  registrationsCommentsList(
    req: operations.RegistrationsCommentsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegistrationsCommentsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegistrationsCommentsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrations/{registration_id}/comments/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegistrationsCommentsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * registrationsContributorsList - List all contributors
   *
   * A paginated list of all contributors on this registration.
   * The returned contributors are sorted by their index.
   * 
   * Contributors are users who can make changes to the registration or, in the case of private registration, have read access to the registration.
   * 
   * Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed in the contributors list on the OSF, while non-bibliographic contributors are not.
   * 
   * Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.
   * 
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 contributors. Each resource in the array contains the full representation of the contributor. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * #### Filtering
   * You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wu3a4/contributors/?filter[bibliographic]=true.
   * 
   * Contributors may be filtered by their `bibliographic` and `permission` attributes.
  **/
  registrationsContributorsList(
    req: operations.RegistrationsContributorsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegistrationsContributorsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegistrationsContributorsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrations/{registration_id}/contributors/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegistrationsContributorsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * registrationsContributorsRead - Retrieve a contributor
   *
   * Retrieves the details of a contributor on this registration.
   * 
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested contributor, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  registrationsContributorsRead(
    req: operations.RegistrationsContributorsReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegistrationsContributorsReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegistrationsContributorsReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrations/{registration_id}/contributors/{user_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegistrationsContributorsReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * registrationsFilesList - List all files
   *
   * List of all the registration's files/folders for a given storage provider.
   * 
   * #### Returns
   * 
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of files. Each resource in the array is a separate file object and contains the full representation of the file.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * #### Filtering
   * 
   * You can optionally request that the response only include files that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/files/osfstorage/?filter[kind]=file
   * 
   * Files may be filtered by `id`, `name`, `node`, `kind`, `path`, `provider`, `size`, and `last_touched`.
  **/
  registrationsFilesList(
    req: operations.RegistrationsFilesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegistrationsFilesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegistrationsFilesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrations/{registration_id}/files/{provider}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegistrationsFilesListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * registrationsFilesRead - Retrieve a file
   *
   * Retrieves the details of a registration file for the given storage provider.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested registration file object, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  registrationsFilesRead(
    req: operations.RegistrationsFilesReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegistrationsFilesReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegistrationsFilesReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrations/{registration_id}/files/{provider}/{path}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegistrationsFilesReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * registrationsForksCreate - Create a fork
   *
   * Creates a fork of the given registration.
   * 
   * Forking a project creates a copy of an existing registration and all of its contents. The fork always points back to the original registration, forming a network of registrations.
   * 
   * You might use a fork to copy another's work to build on and extend. For example, a professor may create an OSF project of materials for individual student use. Each student forks the project to have his or her own copy of the materials to start his/her own work.
   * 
   * When creating a fork, your fork will only contain public components of the current registration and components for which you are a contributor. Private components that you do not have access to will not be forked.
   * #### Required
   * There are no required attributes when creating a fork, as all of the forked registration's attributes will be copied from the current registration.
   * 
   * The `title` field is optional, with the default title being "Fork of " prepended to the current registration's title.
   * #### Returns
   * Returns a JSON object with a `data` key containing the complete representation of the forked registration, if the request is successful.
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  registrationsForksCreate(
    req: operations.RegistrationsForksCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegistrationsForksCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegistrationsForksCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrations/{registration_id}/forks/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegistrationsForksCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * registrationsForksList - List all forks
   *
   * 
   * A paginated list of the registration’s forks
   * 
   * The returned forks are sorted by their `forked_date`, with the most recent forks appearing first.
   * 
   * Forking a registration creates a copy of an existing registration and all of its contents.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 forks. If the current registration has no fork, the `data` key will contain an empty array. Each resource in the array is a separate registration object and contains the full representation of the registration's fork.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  registrationsForksList(
    req: operations.RegistrationsForksListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegistrationsForksListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegistrationsForksListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrations/{registration_id}/forks/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegistrationsForksListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * registrationsIdentifiersList - List all identifiers
   *
   * A paginated list of the registration's identifiers.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of identifiers. Each resource in the array is a separate identifier object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * #### Filtering
   * 
   * You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/identifiers/?filter[category]=ark
   * 
   * Identifiers may be filtered by their `category` e.g `ark` or `doi`.
  **/
  registrationsIdentifiersList(
    req: operations.RegistrationsIdentifiersListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegistrationsIdentifiersListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegistrationsIdentifiersListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrations/{registration_id}/identifiers/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegistrationsIdentifiersListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * registrationsInstitutionsList - List all institutions
   *
   * A paginated list of institutions affiliated with the registration.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 affiliated institutions. Each resource in the array is a separate institution object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  registrationsInstitutionsList(
    req: operations.RegistrationsInstitutionsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegistrationsInstitutionsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegistrationsInstitutionsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrations/{registration_id}/institutions/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegistrationsInstitutionsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * registrationsLinkedNodesList - List all linked nodes
   *
   * List of all nodes linked to the registration.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * #### Filtering
   * You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/linked_nodes/?filter[title]=reproducibility/?filter[title]=reproducibility.
   * 
   * Nodes may be filtered by their `title`, `category`, `description`, `public`, `registration`, or `tags`. `title`, `description`, and `category` are string fields and will be filteres using simple substring matching. `public`, `registration` are boolean and can be filtered using truthy values, such as `true`, `false`, `0`, `1`. `tags` is an array of simple strings.
  **/
  registrationsLinkedNodesList(
    req: operations.RegistrationsLinkedNodesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegistrationsLinkedNodesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegistrationsLinkedNodesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrations/{registration_id}/linked_nodes/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegistrationsLinkedNodesListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * registrationsList - List all registrations
   *
   * A paginated list of registrations on the OSF to which the user has access.
   * 
   * The returned registrations are those which are public or which the user has access to view.
   * 
   * Non-registered nodes cannot be accessed through this endpoint (use the [nodes](#Nodes_nodes_list) endpoints instead).
   * 
   * #### Registrations
   * A registration on the OSF creates a frozen, time-stamped version of a project that cannot be edited or deleted. The *original project* can still be edited, while the registered version cannot.
   * 
   * Registrations can be made public immediately or embargoed for up to 4 years.
   * 
   * #### Withdrawals
   * Registrations cannot be deleted, but they can be withdrawn. Withdrawing a registration removes the content of the registration but leaves behind basic metadata. A withdrawn registration will display a limited subset of information, namely, title, description, date_created, date_registered, date_withdrawn, registration, withdrawn, withdrawal_justification, and registration supplement. All other fields will be displayed as null. Additionally, the only relationship that remains accesible for a withdrawn registration is the contributors. All other relationships will return a **403 Forbidden** response.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 registrations. Each resource in the array is a separate registration object and contains the full representation of the registration, meaning additional requests to a registration's detail view are not necessary.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * This request should never return an error.
   * #### Filtering
   * You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/?filter[title]=open.
   * 
   * Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.
  **/
  registrationsList(
    config?: AxiosRequestConfig
  ): Promise<operations.RegistrationsListResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/registrations/";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegistrationsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * registrationsLogsList - List all logs
   *
   * A paginated list of the registration's logs.
   * 
   * The returned logs are sorted by their `date`, with the most recents logs appearing first.
   * 
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 logs. Each resource in the array is a separate logs object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * #### Filtering
   * You can optionally request that the response only include logs that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/logs/?filter[action]=made_private.
   * 
   * Logs may be filtered by their `action`, and `date`.
  **/
  registrationsLogsList(
    req: operations.RegistrationsLogsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegistrationsLogsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegistrationsLogsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrations/{registration_id}/logs/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegistrationsLogsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * registrationsPartialUpdate - Update a registration
   *
   * Updates a registration's privacy from **private** to **public**.
   * 
   * Registrations can be updated with either a **PUT** or **PATCH** request. The `public` field is the only field that can be modified on a registration
   * 
   * Registrations can only be turned from private to public, not vice versa.
   * #### Permissions
   * Only project administrators may update a registration.
   * #### Returns
   * Returns a JSON object with a `data` key containing the new representation of the updated registration, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  registrationsPartialUpdate(
    req: operations.RegistrationsPartialUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegistrationsPartialUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegistrationsPartialUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrations/{registration_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "patch",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegistrationsPartialUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * registrationsProvidersList - List all storage providers
   *
   * A paginated list of storage providers enabled on the registration
   * 
   * Users of the OSF may access their data on a [number of cloud-storage services](https://api.osf.io/v2/#storage-providers) that have integrations with the OSF. We call these **providers**. By default, every node has access to the OSF-provided storage but may use as many of the supported providers as desired.
   * 
   * 
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 files. Each resource in the array is a separate file object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * Note: In the OSF filesystem model, providers are treated as folders, but with special properties that distinguish them from regular folders. Every provider folder is considered a root folder, and may not be deleted through the regular file API.
  **/
  registrationsProvidersList(
    req: operations.RegistrationsProvidersListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegistrationsProvidersListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegistrationsProvidersListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrations/{registration_id}/files/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegistrationsProvidersListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * registrationsRead - Retrieve a registration
   *
   * Retrieve the details of a given registration.
   * #### Permissions
   * Only project contributors may retrieve the details of a registration that is embargoed, or has not yet been made public. Attempting to retrieve a private registration for which you are not a contributor will result in a **403 Forbidden** response.
   * 
   * Authentication is not required to view the details of a public registration, as public registrations give read-only access to everyone.
   * #### Registrations
   * A registration on the OSF creates a frozen, time-stamped version of a project that cannot be edited or deleted. The *original project* can still be edited, while the registered version cannot.
   * 
   * Registrations can be made public immediately or embargoed for up to 4 years.
   * 
   * #### Withdrawals
   * Registrations cannot be deleted, but they can be withdrawn. Withdrawing a registration removes the content of the registration but leaves behind basic metadata. A withdrawn registration will display a limited subset of information, namely, title, description, date_created, date_registered, date_withdrawn, registration, withdrawn, withdrawal_justification, and registration supplement. All other fields will be displayed as null. Additionally, the only relationship that remains accesible for a withdrawn registration is the contributors. All other relationships will return a **403 Forbidden** response.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested registration, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  registrationsRead(
    req: operations.RegistrationsReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegistrationsReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegistrationsReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrations/{registration_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegistrationsReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * registrationsViewOnlyLinksList - List all view only links
   *
   * A paginated list of view only links created for this registration.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 view only links. Each resource in the array is a view only link object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * #### Permissions
   * 
   * View only links on a registration, public or private, are readable and writeable only by users that are administrators on the registration.
   * 
   * #### Filtering
   * 
   * You can optionally request that the response only include view only links that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wu3a4/view_only_links/?filter[anonymous]=true.
   * 
   * View Only Links may be filtered based on their `name`, `anonymous` and `date_created` fields. Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.
  **/
  registrationsViewOnlyLinksList(
    req: operations.RegistrationsViewOnlyLinksListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegistrationsViewOnlyLinksListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegistrationsViewOnlyLinksListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrations/{registration_id}/view_only_links/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegistrationsViewOnlyLinksListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * registrationsViewOnlyLinksRead - Retrieve a view only link
   *
   * Retrieves the details of a view only link created from this registration.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
   * #### Permissions
   * 
   * View only links on a registration, public or private, are readable and writeable only by users that are administrators on the registration.
  **/
  registrationsViewOnlyLinksRead(
    req: operations.RegistrationsViewOnlyLinksReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegistrationsViewOnlyLinksReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegistrationsViewOnlyLinksReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrations/{registration_id}/view_only_links/{link_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegistrationsViewOnlyLinksReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * registrationsWikisList - List all wikis
   *
   * A paginated list of the registration's wiki pages
   * #### Returns
   * A list of all registration's current wiki page versions ordered by their date_modified. Each resource contains the full representation of the wiki, meaning additional requests to an individual wiki's detail view are not necessary.
   * 
   * If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
   * #### Filtering
   * Wiki pages can be filtered based on their `name` and `date_modified` fields.
   * + `filter[name]=<Str>` -- filter wiki pages by name
   * + `filter[date_modified][comparison_operator]=YYYY-MM-DDTH:M:S` -- filter wiki pages based on date modified.
   * 
   * Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.
  **/
  registrationsWikisList(
    req: operations.RegistrationsWikisListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegistrationsWikisListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegistrationsWikisListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registrations/{registration_id}/wikis/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegistrationsWikisListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * taxonomiesList - List all taxonomies
   *
   * 
   * A paginated list of all [bepress disciplines taxonomies](https://www.bepress.com/wp-content/uploads/2016/12/Digital-Commons-Disciplines-taxonomy-2017-01.pdf).
   * Note: this API endpoint is under active development, and is subject to change in the future.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 taxonomies. Each resource in the array is a separate taxonomy object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * This request should never return an error.
   * #### Filtering
   * You can optionally request that the response only include taxonomies that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/taxonomies/?filter['id']='{taxonomy_id}'.
   * 
   * Taxonomies may be filtered by their `id`, `parents`, and `text`.
  **/
  taxonomiesList(
    config?: AxiosRequestConfig
  ): Promise<operations.TaxonomiesListResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/taxonomies/";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TaxonomiesListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * taxonomiesRead - Retrieve a taxonomy
   *
   * Retrieves the details of a taxonomy.
   * #### Returns
   * 
   * Returns a JSON object with a `data` key containing the representation of the requested taxonomy, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  taxonomiesRead(
    req: operations.TaxonomiesReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TaxonomiesReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TaxonomiesReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/taxonomies/{taxonomy_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TaxonomiesReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * usersAddonsList - List all user addons
   *
   * 
   * A paginated list of authorized user addons
   * 
   * #### Permissions
   * 
   * User addons are visible only to the user that authorized the addon.
   * 
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of up to 10 addons. Each resource in the array is a separate addon object.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
   * 
   * Attempting to request the accounts for an addon that is not enabled will result in a **404 Not Found** response.
  **/
  usersAddonsList(
    req: operations.UsersAddonsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersAddonsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersAddonsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/addons/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersAddonsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * usersAddonsRead - Retrieve a user addon
   *
   * Retrieves the details of an authorized user addon
   * 
   * #### Permissions
   * 
   * User addons are visible only to the user that authorized the addon.
   * 
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested user addon, if the request was successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
   * 
   * Attempting to request the accounts for an addon that is not enabled will result in a **404 Not Found** response.
  **/
  usersAddonsRead(
    req: operations.UsersAddonsReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersAddonsReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersAddonsReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/addons/{provider}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersAddonsReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * usersInstitutionsList - List all institutions
   *
   * A paginated list of institutions that the user is affiliated with.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 institutions. Each resource in the array is a complete institution object and contains the full representation of the institution, meaning additional requests to a institution's detail view are not necessary.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
  **/
  usersInstitutionsList(
    req: operations.UsersInstitutionsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersInstitutionsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersInstitutionsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/institutions/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersInstitutionsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * usersList - List all users
   *
   * 
   * A paginated list of all users registered on the OSF. The returned users are sorted by their `date_registered`, with the most recently registered users appearing first.
   * 
   * The subroute `/users/me/` is a special endpoint that always points to the currently logged-in user.
   * #### Versioning
   * As of version `2.3`, merged users will not be returned from this endpoint.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 users. Each resource in the array is a separate users object and contains the full representation of the user, meaning additional requests to a user's detail view are not necessary.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * This request should never return an error.
   * #### Filtering
   * You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/?filter[family_name]=Nosek.
   * 
   * Users may be filtered by their `id`, `full_name`, `given_name`, `middle_name`, or `family_name`.
  **/
  usersList(
    config?: AxiosRequestConfig
  ): Promise<operations.UsersListResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/users/";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * usersNodesList - List all nodes
   *
   * A paginated list of nodes that the user is a contributor to. The returned nodes are sorted by their `date_modified`, with the most recently updated nodes appearing first.
   * 
   * If the user ID in the path is the same as the logged-in user, all nodes will be returned. Otherwise, only the user's public nodes will be returned.
   * 
   * User registrations are not available at this endpoint.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 nodes. Each resource in the array is a separate node object and contains the full representation of the node, meaning additional requests to a node's detail view are not necessary.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * #### Filtering
   * You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/nodes/?filter[title]=open.
   * 
   * Nodes may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, `preprint`, and `contributors`.
  **/
  usersNodesList(
    req: operations.UsersNodesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersNodesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersNodesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/nodes/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersNodesListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * usersPartialUpdate - Update a user
   *
   * Updates a user by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged.
   * 
   * Users can be updated with either a **PUT** or **PATCH** request. The `full_name` field is mandatory in a **PUT** request, and optional in a **PATCH**.
   * 
   * **Note**: if you make a PUT/PATCH request to the `/users/me/` endpoint, you must still provide your full user ID in the ID field of the request. We do not support using the `me` alias in request bodies at this time.
   * #### Returns
   * Returns a JSON object with a `data` key containing the new representation of the updated node, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  usersPartialUpdate(
    req: operations.UsersPartialUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersPartialUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersPartialUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/", req.pathParams);

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
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersPartialUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersPreprintsList - List all preprints
   *
   * A paginated list of preprints that the user contributes to. The returned preprints are sorted by their creation date, with the most recent preprints appearing first.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 preprints. Each resource in the array is a complete preprint object and contains the full representation of the preprint, meaning additional requests to a preprint's detail view are not necessary.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * #### Filtering
   * You can optionally request that the response only include preprints that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/preprints/?filter[provider]=psyarxiv.
   * 
   * Preprints may be filtered by their `id`, `is_published`, `date_created`, `date_modified`, and `provider`.
  **/
  usersPreprintsList(
    req: operations.UsersPreprintsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersPreprintsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersPreprintsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/preprints/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersPreprintsListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * usersRead - Retrieve a user
   *
   * Retrieves the details of a given users.
   * 
   * The returned information includes the user's bibliographic information and the date the user was registered.
   * 
   * Additionally, relationships to the list of institutions with which the user is affiliated, and to the list of nodes which the user contributes to (that the requesting user has permission to see) are returned.
   * 
   * If `me` is given as the `user_id` in the request path, the record of the currently logged-in user will be returned.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested user, if the request is successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  usersRead(
    req: operations.UsersReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * usersRegistrationsList - List all registrations
   *
   * A paginated list of registrations that the user is a contributor to. The returned registrations are sorted by their `date_modified`, with the most recently updated registrations appearing first.
   * 
   * If the user ID in the path is the same as the logged-in user, all registrations will be returned. Otherwise, only the user's public registrations will be returned.
   * 
   * User nodes are not available at this endpoint.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * 
   * The `data` key contains an array of 10 registrations. Each resource in the array is a separate registration object and contains the full representation of the registration, meaning additional requests to a registration's detail view are not necessary.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * #### Filtering
   * You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/users/cdi38/registrations/?filter[title]=replication.
   * 
   * Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.
  **/
  usersRegistrationsList(
    req: operations.UsersRegistrationsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersRegistrationsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersRegistrationsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{user_id}/registrations/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersRegistrationsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * viewOnlyLinksNodeList - List all nodes
   *
   * 
   * The list of nodes which this view only link gives read-only access to.
   * #### Permissions
   * Only project administrators may retrieve the nodes of a view only link. Attempting to retrieve a view only link without appropriate permissions will result in a 403 Forbidden response.
   * #### Returns
   * Returns a JSON object containing `data` and `links` keys.
   * The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object and contains the full representation of the node, meaning additional requests to a node's detail view are not necessary.
   * 
   * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  viewOnlyLinksNodeList(
    req: operations.ViewOnlyLinksNodeListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ViewOnlyLinksNodeListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ViewOnlyLinksNodeListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/view_only_links/{link_id}/nodes/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ViewOnlyLinksNodeListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * viewOnlyLinksRead - Retrieve a view only link
   *
   * Retrieves details about a specific view only link.
   * #### Permissions
   * Only project administrators may retrieve the details of a view only link. Attempting to retrieve a view only link without appropriate permissions will result in a 403 Forbidden response.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  viewOnlyLinksRead(
    req: operations.ViewOnlyLinksReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ViewOnlyLinksReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ViewOnlyLinksReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/view_only_links/{link_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ViewOnlyLinksReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * wikiContent - Retrieve the Content of a Wiki
   *
   * Retrieves the plaintext content of a wiki in markdown format.
   * #### Returns
   * Returns `text/markdown` of the wiki content itself.
   * If the request is unsuccessful, plaintext with the error message will be displayed.
  **/
  wikiContent(
    req: operations.WikiContentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.WikiContentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.WikiContentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/wikis/{wiki_id}/content/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.WikiContentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * wikiRead - Retrieve a Wiki
   *
   * Retrieves the details about a specific wiki.
   * A wiki is a collection of markdown text pages that can be used to describe the project or dataset of contained in the attached node.
   * #### Returns
   * Returns a JSON object with a `data` key containing the representation of the requested wiki, if the request was successful.
   * 
   * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
  **/
  wikiRead(
    req: operations.WikiReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.WikiReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.WikiReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/wikis/{wiki_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.WikiReadResponse = {statusCode: httpRes.status, contentType: contentType};
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
