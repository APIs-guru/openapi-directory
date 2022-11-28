import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"http://keycloak.local",
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

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}

/* SDK Documentation: https://github.com/keycloak/keycloak/tree/6.0.1/core/src/main/java/org/keycloak/representations - Schema source code*/
export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: Security;
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
      if (this._security) {
        this._securityClient = utils.CreateSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
  }
  
  /**
   * deleteRealm - Delete the realm
  **/
  deleteRealm(
    req: operations.DeleteRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmAdminEvents - Delete all admin events
  **/
  deleteRealmAdminEvents(
    req: operations.DeleteRealmAdminEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmAdminEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmAdminEventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/admin-events", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmAdminEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmAttackDetectionBruteForceUsers - Clear any user login failures for all users   This can release temporary disabled users
  **/
  deleteRealmAttackDetectionBruteForceUsers(
    req: operations.DeleteRealmAttackDetectionBruteForceUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmAttackDetectionBruteForceUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmAttackDetectionBruteForceUsersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/attack-detection/brute-force/users", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmAttackDetectionBruteForceUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmAttackDetectionBruteForceUsersUserId - Clear any user login failures for the user   This can release temporary disabled user
  **/
  deleteRealmAttackDetectionBruteForceUsersUserId(
    req: operations.DeleteRealmAttackDetectionBruteForceUsersUserIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmAttackDetectionBruteForceUsersUserIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmAttackDetectionBruteForceUsersUserIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/attack-detection/brute-force/users/{userId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmAttackDetectionBruteForceUsersUserIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmAuthenticationConfigId - Delete authenticator configuration
  **/
  deleteRealmAuthenticationConfigId(
    req: operations.DeleteRealmAuthenticationConfigIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmAuthenticationConfigIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmAuthenticationConfigIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/config/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmAuthenticationConfigIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmAuthenticationExecutionsExecutionId - Delete execution
  **/
  deleteRealmAuthenticationExecutionsExecutionId(
    req: operations.DeleteRealmAuthenticationExecutionsExecutionIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmAuthenticationExecutionsExecutionIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmAuthenticationExecutionsExecutionIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/executions/{executionId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmAuthenticationExecutionsExecutionIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmAuthenticationFlowsId - Delete an authentication flow
  **/
  deleteRealmAuthenticationFlowsId(
    req: operations.DeleteRealmAuthenticationFlowsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmAuthenticationFlowsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmAuthenticationFlowsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmAuthenticationFlowsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmAuthenticationRequiredActionsAlias - Delete required action
  **/
  deleteRealmAuthenticationRequiredActionsAlias(
    req: operations.DeleteRealmAuthenticationRequiredActionsAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmAuthenticationRequiredActionsAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmAuthenticationRequiredActionsAliasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/required-actions/{alias}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmAuthenticationRequiredActionsAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmClientScopesId1ProtocolMappersModelsId2 - Delete the mapper
  **/
  deleteRealmClientScopesId1ProtocolMappersModelsId2(
    req: operations.DeleteRealmClientScopesId1ProtocolMappersModelsId2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientScopesId1ProtocolMappersModelsId2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientScopesId1ProtocolMappersModelsId2Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmClientScopesId1ProtocolMappersModelsId2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmClientScopesId - Delete the client scope
  **/
  deleteRealmClientScopesId(
    req: operations.DeleteRealmClientScopesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientScopesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientScopesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmClientScopesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmClientScopesIdScopeMappingsClientsClient - Remove client-level roles from the client’s scope.
  **/
  deleteRealmClientScopesIdScopeMappingsClientsClient(
    req: operations.DeleteRealmClientScopesIdScopeMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientScopesIdScopeMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientScopesIdScopeMappingsClientsClientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.DeleteRealmClientScopesIdScopeMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmClientScopesIdScopeMappingsRealm - Remove a set of realm-level roles from the client’s scope
  **/
  deleteRealmClientScopesIdScopeMappingsRealm(
    req: operations.DeleteRealmClientScopesIdScopeMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientScopesIdScopeMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientScopesIdScopeMappingsRealmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.DeleteRealmClientScopesIdScopeMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmClientsId1ProtocolMappersModelsId2 - Delete the mapper
  **/
  deleteRealmClientsId1ProtocolMappersModelsId2(
    req: operations.DeleteRealmClientsId1ProtocolMappersModelsId2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientsId1ProtocolMappersModelsId2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientsId1ProtocolMappersModelsId2Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id1}/protocol-mappers/models/{id2}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmClientsId1ProtocolMappersModelsId2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmClientsId - Delete the client
  **/
  deleteRealmClientsId(
    req: operations.DeleteRealmClientsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmClientsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteRealmClientsIdDefaultClientScopesClientScopeId(
    req: operations.DeleteRealmClientsIdDefaultClientScopesClientScopeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientsIdDefaultClientScopesClientScopeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientsIdDefaultClientScopesClientScopeIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/default-client-scopes/{clientScopeId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmClientsIdDefaultClientScopesClientScopeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmClientsIdNodesNode - Unregister a cluster node from the client
  **/
  deleteRealmClientsIdNodesNode(
    req: operations.DeleteRealmClientsIdNodesNodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientsIdNodesNodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientsIdNodesNodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/nodes/{node}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmClientsIdNodesNodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteRealmClientsIdOptionalClientScopesClientScopeId(
    req: operations.DeleteRealmClientsIdOptionalClientScopesClientScopeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientsIdOptionalClientScopesClientScopeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientsIdOptionalClientScopesClientScopeIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/optional-client-scopes/{clientScopeId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmClientsIdOptionalClientScopesClientScopeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmClientsIdRolesRoleName - Delete a role by name
  **/
  deleteRealmClientsIdRolesRoleName(
    req: operations.DeleteRealmClientsIdRolesRoleNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientsIdRolesRoleNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientsIdRolesRoleNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmClientsIdRolesRoleNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmClientsIdRolesRoleNameComposites - Remove roles from the role’s composite
  **/
  deleteRealmClientsIdRolesRoleNameComposites(
    req: operations.DeleteRealmClientsIdRolesRoleNameCompositesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientsIdRolesRoleNameCompositesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientsIdRolesRoleNameCompositesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/composites", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.DeleteRealmClientsIdRolesRoleNameCompositesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmClientsIdScopeMappingsClientsClient - Remove client-level roles from the client’s scope.
  **/
  deleteRealmClientsIdScopeMappingsClientsClient(
    req: operations.DeleteRealmClientsIdScopeMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientsIdScopeMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientsIdScopeMappingsClientsClientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.DeleteRealmClientsIdScopeMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmClientsIdScopeMappingsRealm - Remove a set of realm-level roles from the client’s scope
  **/
  deleteRealmClientsIdScopeMappingsRealm(
    req: operations.DeleteRealmClientsIdScopeMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientsIdScopeMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientsIdScopeMappingsRealmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/realm", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.DeleteRealmClientsIdScopeMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteRealmClientsInitialAccessId(
    req: operations.DeleteRealmClientsInitialAccessIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientsInitialAccessIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientsInitialAccessIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients-initial-access/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmClientsInitialAccessIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteRealmComponentsId(
    req: operations.DeleteRealmComponentsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmComponentsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmComponentsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/components/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmComponentsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteRealmDefaultDefaultClientScopesClientScopeId(
    req: operations.DeleteRealmDefaultDefaultClientScopesClientScopeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmDefaultDefaultClientScopesClientScopeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmDefaultDefaultClientScopesClientScopeIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/default-default-client-scopes/{clientScopeId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmDefaultDefaultClientScopesClientScopeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteRealmDefaultGroupsGroupId(
    req: operations.DeleteRealmDefaultGroupsGroupIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmDefaultGroupsGroupIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmDefaultGroupsGroupIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/default-groups/{groupId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmDefaultGroupsGroupIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteRealmDefaultOptionalClientScopesClientScopeId(
    req: operations.DeleteRealmDefaultOptionalClientScopesClientScopeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmDefaultOptionalClientScopesClientScopeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmDefaultOptionalClientScopesClientScopeIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/default-optional-client-scopes/{clientScopeId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmDefaultOptionalClientScopesClientScopeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmEvents - Delete all events
  **/
  deleteRealmEvents(
    req: operations.DeleteRealmEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmEventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/events", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteRealmGroupsId(
    req: operations.DeleteRealmGroupsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmGroupsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmGroupsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmGroupsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmGroupsIdRoleMappingsClientsClient - Delete client-level roles from user role mapping
  **/
  deleteRealmGroupsIdRoleMappingsClientsClient(
    req: operations.DeleteRealmGroupsIdRoleMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmGroupsIdRoleMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmGroupsIdRoleMappingsClientsClientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.DeleteRealmGroupsIdRoleMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmGroupsIdRoleMappingsRealm - Delete realm-level role mappings
  **/
  deleteRealmGroupsIdRoleMappingsRealm(
    req: operations.DeleteRealmGroupsIdRoleMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmGroupsIdRoleMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmGroupsIdRoleMappingsRealmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/realm", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.DeleteRealmGroupsIdRoleMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmIdentityProviderInstancesAlias - Delete the identity provider
  **/
  deleteRealmIdentityProviderInstancesAlias(
    req: operations.DeleteRealmIdentityProviderInstancesAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmIdentityProviderInstancesAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmIdentityProviderInstancesAliasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmIdentityProviderInstancesAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmIdentityProviderInstancesAliasMappersId - Delete a mapper for the identity provider
  **/
  deleteRealmIdentityProviderInstancesAliasMappersId(
    req: operations.DeleteRealmIdentityProviderInstancesAliasMappersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmIdentityProviderInstancesAliasMappersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmIdentityProviderInstancesAliasMappersIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/mappers/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmIdentityProviderInstancesAliasMappersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmRolesByIdRoleId - Delete the role
  **/
  deleteRealmRolesByIdRoleId(
    req: operations.DeleteRealmRolesByIdRoleIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmRolesByIdRoleIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmRolesByIdRoleIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmRolesByIdRoleIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmRolesByIdRoleIdComposites - Remove a set of roles from the role’s composite
  **/
  deleteRealmRolesByIdRoleIdComposites(
    req: operations.DeleteRealmRolesByIdRoleIdCompositesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmRolesByIdRoleIdCompositesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmRolesByIdRoleIdCompositesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}/composites", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.DeleteRealmRolesByIdRoleIdCompositesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmRolesRoleName - Delete a role by name
  **/
  deleteRealmRolesRoleName(
    req: operations.DeleteRealmRolesRoleNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmRolesRoleNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmRolesRoleNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmRolesRoleNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmRolesRoleNameComposites - Remove roles from the role’s composite
  **/
  deleteRealmRolesRoleNameComposites(
    req: operations.DeleteRealmRolesRoleNameCompositesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmRolesRoleNameCompositesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmRolesRoleNameCompositesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/composites", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.DeleteRealmRolesRoleNameCompositesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmSessionsSession - Remove a specific user session.
  **/
  deleteRealmSessionsSession(
    req: operations.DeleteRealmSessionsSessionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmSessionsSessionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmSessionsSessionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/sessions/{session}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmSessionsSessionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmUsersId - Delete the user
  **/
  deleteRealmUsersId(
    req: operations.DeleteRealmUsersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmUsersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmUsersIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmUsersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmUsersIdConsentsClient - Revoke consent and offline tokens for particular client from user
  **/
  deleteRealmUsersIdConsentsClient(
    req: operations.DeleteRealmUsersIdConsentsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmUsersIdConsentsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmUsersIdConsentsClientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/consents/{client}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmUsersIdConsentsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmUsersIdCredentialsCredentialId - Remove a credential for a user
  **/
  deleteRealmUsersIdCredentialsCredentialId(
    req: operations.DeleteRealmUsersIdCredentialsCredentialIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmUsersIdCredentialsCredentialIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmUsersIdCredentialsCredentialIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/credentials/{credentialId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmUsersIdCredentialsCredentialIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmUsersIdFederatedIdentityProvider - Remove a social login provider from user
  **/
  deleteRealmUsersIdFederatedIdentityProvider(
    req: operations.DeleteRealmUsersIdFederatedIdentityProviderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmUsersIdFederatedIdentityProviderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmUsersIdFederatedIdentityProviderRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/federated-identity/{provider}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmUsersIdFederatedIdentityProviderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteRealmUsersIdGroupsGroupId(
    req: operations.DeleteRealmUsersIdGroupsGroupIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmUsersIdGroupsGroupIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmUsersIdGroupsGroupIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/groups/{groupId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRealmUsersIdGroupsGroupIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmUsersIdRoleMappingsClientsClient - Delete client-level roles from user role mapping
  **/
  deleteRealmUsersIdRoleMappingsClientsClient(
    req: operations.DeleteRealmUsersIdRoleMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmUsersIdRoleMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmUsersIdRoleMappingsClientsClientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.DeleteRealmUsersIdRoleMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteRealmUsersIdRoleMappingsRealm - Delete realm-level role mappings
  **/
  deleteRealmUsersIdRoleMappingsRealm(
    req: operations.DeleteRealmUsersIdRoleMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmUsersIdRoleMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmUsersIdRoleMappingsRealmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/realm", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.DeleteRealmUsersIdRoleMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * get - Get themes, social providers, auth providers, and event listeners available on this server
  **/
  get(
    config?: AxiosRequestConfig
  ): Promise<operations.GetResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.serverInfoRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getIdName - Need this for admin console to display simple name of provider when displaying client detail   KEYCLOAK-4328
  **/
  getIdName(
    req: operations.GetIdNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIdNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIdNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{id}/name", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIdNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getIdName2XxApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealm - Get the top-level representation of the realm   It will not include nested information like User and Client representations.
  **/
  getRealm(
    req: operations.GetRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.realmRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmAdminEvents - Get admin events   Returns all admin events, or filters events based on URL query parameters listed here
  **/
  getRealmAdminEvents(
    req: operations.GetRealmAdminEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAdminEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAdminEventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/admin-events", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmAdminEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.adminEventRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmAttackDetectionBruteForceUsersUserId - Get status of a username in brute force detection
  **/
  getRealmAttackDetectionBruteForceUsersUserId(
    req: operations.GetRealmAttackDetectionBruteForceUsersUserIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAttackDetectionBruteForceUsersUserIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAttackDetectionBruteForceUsersUserIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/attack-detection/brute-force/users/{userId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmAttackDetectionBruteForceUsersUserIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getRealmAttackDetectionBruteForceUsersUserId2XxApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmAuthenticationAuthenticatorProviders - Get authenticator providers   Returns a list of authenticator providers.
  **/
  getRealmAuthenticationAuthenticatorProviders(
    req: operations.GetRealmAuthenticationAuthenticatorProvidersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationAuthenticatorProvidersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationAuthenticatorProvidersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/authenticator-providers", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmAuthenticationAuthenticatorProvidersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getRealmAuthenticationAuthenticatorProviders2XxApplicationJsonObjects = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmAuthenticationClientAuthenticatorProviders - Get client authenticator providers   Returns a list of client authenticator providers.
  **/
  getRealmAuthenticationClientAuthenticatorProviders(
    req: operations.GetRealmAuthenticationClientAuthenticatorProvidersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationClientAuthenticatorProvidersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationClientAuthenticatorProvidersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/client-authenticator-providers", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmAuthenticationClientAuthenticatorProvidersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getRealmAuthenticationClientAuthenticatorProviders2XxApplicationJsonObjects = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmAuthenticationConfigDescriptionProviderId - Get authenticator provider’s configuration description
  **/
  getRealmAuthenticationConfigDescriptionProviderId(
    req: operations.GetRealmAuthenticationConfigDescriptionProviderIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationConfigDescriptionProviderIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationConfigDescriptionProviderIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/config-description/{providerId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmAuthenticationConfigDescriptionProviderIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authenticatorConfigInfoRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmAuthenticationConfigId - Get authenticator configuration
  **/
  getRealmAuthenticationConfigId(
    req: operations.GetRealmAuthenticationConfigIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationConfigIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationConfigIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/config/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmAuthenticationConfigIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authenticatorConfigRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmAuthenticationExecutionsExecutionId - Get Single Execution
  **/
  getRealmAuthenticationExecutionsExecutionId(
    req: operations.GetRealmAuthenticationExecutionsExecutionIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationExecutionsExecutionIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationExecutionsExecutionIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/executions/{executionId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmAuthenticationExecutionsExecutionIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmAuthenticationFlows - Get authentication flows   Returns a list of authentication flows.
  **/
  getRealmAuthenticationFlows(
    req: operations.GetRealmAuthenticationFlowsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationFlowsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationFlowsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/flows", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmAuthenticationFlowsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authenticationFlowRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmAuthenticationFlowsFlowAliasExecutions - Get authentication executions for a flow
  **/
  getRealmAuthenticationFlowsFlowAliasExecutions(
    req: operations.GetRealmAuthenticationFlowsFlowAliasExecutionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationFlowsFlowAliasExecutionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationFlowsFlowAliasExecutionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{flowAlias}/executions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmAuthenticationFlowsFlowAliasExecutionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmAuthenticationFlowsId - Get authentication flow for id
  **/
  getRealmAuthenticationFlowsId(
    req: operations.GetRealmAuthenticationFlowsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationFlowsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationFlowsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmAuthenticationFlowsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authenticationFlowRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmAuthenticationFormActionProviders - Get form action providers   Returns a list of form action providers.
  **/
  getRealmAuthenticationFormActionProviders(
    req: operations.GetRealmAuthenticationFormActionProvidersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationFormActionProvidersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationFormActionProvidersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/form-action-providers", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmAuthenticationFormActionProvidersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getRealmAuthenticationFormActionProviders2XxApplicationJsonObjects = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmAuthenticationFormProviders - Get form providers   Returns a list of form providers.
  **/
  getRealmAuthenticationFormProviders(
    req: operations.GetRealmAuthenticationFormProvidersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationFormProvidersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationFormProvidersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/form-providers", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmAuthenticationFormProvidersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getRealmAuthenticationFormProviders2XxApplicationJsonObjects = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmAuthenticationPerClientConfigDescription - Get configuration descriptions for all clients
  **/
  getRealmAuthenticationPerClientConfigDescription(
    req: operations.GetRealmAuthenticationPerClientConfigDescriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationPerClientConfigDescriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationPerClientConfigDescriptionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/per-client-config-description", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmAuthenticationPerClientConfigDescriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getRealmAuthenticationPerClientConfigDescription2XxApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmAuthenticationRequiredActions - Get required actions   Returns a list of required actions.
  **/
  getRealmAuthenticationRequiredActions(
    req: operations.GetRealmAuthenticationRequiredActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationRequiredActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationRequiredActionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/required-actions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmAuthenticationRequiredActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.requiredActionProviderRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmAuthenticationRequiredActionsAlias - Get required action for alias
  **/
  getRealmAuthenticationRequiredActionsAlias(
    req: operations.GetRealmAuthenticationRequiredActionsAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationRequiredActionsAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationRequiredActionsAliasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/required-actions/{alias}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmAuthenticationRequiredActionsAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.requiredActionProviderRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmAuthenticationUnregisteredRequiredActions - Get unregistered required actions   Returns a list of unregistered required actions.
  **/
  getRealmAuthenticationUnregisteredRequiredActions(
    req: operations.GetRealmAuthenticationUnregisteredRequiredActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationUnregisteredRequiredActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationUnregisteredRequiredActionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/unregistered-required-actions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmAuthenticationUnregisteredRequiredActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getRealmAuthenticationUnregisteredRequiredActions2XxApplicationJsonObjects = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientRegistrationPolicyProviders - Base path for retrieve providers with the configProperties properly filled
  **/
  getRealmClientRegistrationPolicyProviders(
    req: operations.GetRealmClientRegistrationPolicyProvidersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientRegistrationPolicyProvidersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientRegistrationPolicyProvidersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-registration-policy/providers", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientRegistrationPolicyProvidersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.componentTypeRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientScopes - Get client scopes belonging to the realm   Returns a list of client scopes belonging to the realm
  **/
  getRealmClientScopes(
    req: operations.GetRealmClientScopesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientScopesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.clientScopeRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientScopesId1ProtocolMappersModelsId2 - Get mapper by id
  **/
  getRealmClientScopesId1ProtocolMappersModelsId2(
    req: operations.GetRealmClientScopesId1ProtocolMappersModelsId2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesId1ProtocolMappersModelsId2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesId1ProtocolMappersModelsId2Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientScopesId1ProtocolMappersModelsId2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMapperRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientScopesId - Get representation of the client scope
  **/
  getRealmClientScopesId(
    req: operations.GetRealmClientScopesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientScopesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.clientScopeRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientScopesIdProtocolMappersModels - Get mappers
  **/
  getRealmClientScopesIdProtocolMappersModels(
    req: operations.GetRealmClientScopesIdProtocolMappersModelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesIdProtocolMappersModelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesIdProtocolMappersModelsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/protocol-mappers/models", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientScopesIdProtocolMappersModelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMapperRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientScopesIdProtocolMappersProtocolProtocol - Get mappers by name for a specific protocol
  **/
  getRealmClientScopesIdProtocolMappersProtocolProtocol(
    req: operations.GetRealmClientScopesIdProtocolMappersProtocolProtocolRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesIdProtocolMappersProtocolProtocolResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesIdProtocolMappersProtocolProtocolRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/protocol-mappers/protocol/{protocol}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientScopesIdProtocolMappersProtocolProtocolResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMapperRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientScopesIdScopeMappings - Get all scope mappings for the client
  **/
  getRealmClientScopesIdScopeMappings(
    req: operations.GetRealmClientScopesIdScopeMappingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesIdScopeMappingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesIdScopeMappingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientScopesIdScopeMappingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mappingsRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientScopesIdScopeMappingsClientsClient - Get the roles associated with a client’s scope   Returns roles for the client.
  **/
  getRealmClientScopesIdScopeMappingsClientsClient(
    req: operations.GetRealmClientScopesIdScopeMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesIdScopeMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesIdScopeMappingsClientsClientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientScopesIdScopeMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientScopesIdScopeMappingsClientsClientAvailable - The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
  **/
  getRealmClientScopesIdScopeMappingsClientsClientAvailable(
    req: operations.GetRealmClientScopesIdScopeMappingsClientsClientAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesIdScopeMappingsClientsClientAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesIdScopeMappingsClientsClientAvailableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}/available", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientScopesIdScopeMappingsClientsClientAvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientScopesIdScopeMappingsClientsClientComposite - Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
  **/
  getRealmClientScopesIdScopeMappingsClientsClientComposite(
    req: operations.GetRealmClientScopesIdScopeMappingsClientsClientCompositeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesIdScopeMappingsClientsClientCompositeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesIdScopeMappingsClientsClientCompositeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}/composite", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientScopesIdScopeMappingsClientsClientCompositeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientScopesIdScopeMappingsRealm - Get realm-level roles associated with the client’s scope
  **/
  getRealmClientScopesIdScopeMappingsRealm(
    req: operations.GetRealmClientScopesIdScopeMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesIdScopeMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesIdScopeMappingsRealmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientScopesIdScopeMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientScopesIdScopeMappingsRealmAvailable - Get realm-level roles that are available to attach to this client’s scope
  **/
  getRealmClientScopesIdScopeMappingsRealmAvailable(
    req: operations.GetRealmClientScopesIdScopeMappingsRealmAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesIdScopeMappingsRealmAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesIdScopeMappingsRealmAvailableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm/available", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientScopesIdScopeMappingsRealmAvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientScopesIdScopeMappingsRealmComposite - Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
  **/
  getRealmClientScopesIdScopeMappingsRealmComposite(
    req: operations.GetRealmClientScopesIdScopeMappingsRealmCompositeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesIdScopeMappingsRealmCompositeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesIdScopeMappingsRealmCompositeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm/composite", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientScopesIdScopeMappingsRealmCompositeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientSessionStats - Get client session stats   Returns a JSON map.
  **/
  getRealmClientSessionStats(
    req: operations.GetRealmClientSessionStatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientSessionStatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientSessionStatsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-session-stats", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientSessionStatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getRealmClientSessionStats2XxApplicationJsonObjects = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClients - Get clients belonging to the realm   Returns a list of clients belonging to the realm
  **/
  getRealmClients(
    req: operations.GetRealmClientsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmClientsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.clientRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsId1ProtocolMappersModelsId2 - Get mapper by id
  **/
  getRealmClientsId1ProtocolMappersModelsId2(
    req: operations.GetRealmClientsId1ProtocolMappersModelsId2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsId1ProtocolMappersModelsId2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsId1ProtocolMappersModelsId2Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id1}/protocol-mappers/models/{id2}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsId1ProtocolMappersModelsId2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMapperRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsId - Get representation of the client
  **/
  getRealmClientsId(
    req: operations.GetRealmClientsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.clientRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdCertificatesAttr - Get key info
  **/
  getRealmClientsIdCertificatesAttr(
    req: operations.GetRealmClientsIdCertificatesAttrRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdCertificatesAttrResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdCertificatesAttrRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/certificates/{attr}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdCertificatesAttrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.certificateRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdClientSecret - Get the client secret
  **/
  getRealmClientsIdClientSecret(
    req: operations.GetRealmClientsIdClientSecretRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdClientSecretResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdClientSecretRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/client-secret", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdClientSecretResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.credentialRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdDefaultClientScopes - Get default client scopes.
  **/
  getRealmClientsIdDefaultClientScopes(
    req: operations.GetRealmClientsIdDefaultClientScopesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdDefaultClientScopesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdDefaultClientScopesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/default-client-scopes", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdDefaultClientScopesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.clientScopeRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdEvaluateScopesGenerateExampleAccessToken - Create JSON with payload of example access token
  **/
  getRealmClientsIdEvaluateScopesGenerateExampleAccessToken(
    req: operations.GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/evaluate-scopes/generate-example-access-token", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdEvaluateScopesProtocolMappers - Return list of all protocol mappers, which will be used when generating tokens issued for particular client.
  **/
  getRealmClientsIdEvaluateScopesProtocolMappers(
    req: operations.GetRealmClientsIdEvaluateScopesProtocolMappersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdEvaluateScopesProtocolMappersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdEvaluateScopesProtocolMappersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/evaluate-scopes/protocol-mappers", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmClientsIdEvaluateScopesProtocolMappersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.clientScopeEvaluateResourceProtocolMapperEvaluationRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGranted - Get effective scope mapping of all roles of particular role container, which this client is defacto allowed to have in the accessToken issued for him.
  **/
  getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGranted(
    req: operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/evaluate-scopes/scope-mappings/{roleContainerId}/granted", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGranted - Get roles, which this client doesn’t have scope for and can’t have them in the accessToken issued for him.
  **/
  getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGranted(
    req: operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/evaluate-scopes/scope-mappings/{roleContainerId}/not-granted", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getRealmClientsIdInstallationProvidersProviderId(
    req: operations.GetRealmClientsIdInstallationProvidersProviderIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdInstallationProvidersProviderIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdInstallationProvidersProviderIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/installation/providers/{providerId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdInstallationProvidersProviderIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
  **/
  getRealmClientsIdManagementPermissions(
    req: operations.GetRealmClientsIdManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdManagementPermissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/management/permissions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdOfflineSessionCount - Get application offline session count   Returns a number of offline user sessions associated with this client   {      "count": number  }
  **/
  getRealmClientsIdOfflineSessionCount(
    req: operations.GetRealmClientsIdOfflineSessionCountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdOfflineSessionCountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdOfflineSessionCountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/offline-session-count", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdOfflineSessionCountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getRealmClientsIdOfflineSessionCount2XxApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdOfflineSessions - Get offline sessions for client   Returns a list of offline user sessions associated with this client
  **/
  getRealmClientsIdOfflineSessions(
    req: operations.GetRealmClientsIdOfflineSessionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdOfflineSessionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdOfflineSessionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/offline-sessions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmClientsIdOfflineSessionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userSessionRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdOptionalClientScopes - Get optional client scopes.
  **/
  getRealmClientsIdOptionalClientScopes(
    req: operations.GetRealmClientsIdOptionalClientScopesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdOptionalClientScopesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdOptionalClientScopesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/optional-client-scopes", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdOptionalClientScopesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.clientScopeRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdProtocolMappersModels - Get mappers
  **/
  getRealmClientsIdProtocolMappersModels(
    req: operations.GetRealmClientsIdProtocolMappersModelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdProtocolMappersModelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdProtocolMappersModelsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/protocol-mappers/models", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdProtocolMappersModelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMapperRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdProtocolMappersProtocolProtocol - Get mappers by name for a specific protocol
  **/
  getRealmClientsIdProtocolMappersProtocolProtocol(
    req: operations.GetRealmClientsIdProtocolMappersProtocolProtocolRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdProtocolMappersProtocolProtocolResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdProtocolMappersProtocolProtocolRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/protocol-mappers/protocol/{protocol}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdProtocolMappersProtocolProtocolResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMapperRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdRoles - Get all roles for the realm or client
  **/
  getRealmClientsIdRoles(
    req: operations.GetRealmClientsIdRolesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdRolesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdRolesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmClientsIdRolesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdRolesRoleName - Get a role by name
  **/
  getRealmClientsIdRolesRoleName(
    req: operations.GetRealmClientsIdRolesRoleNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdRolesRoleNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdRolesRoleNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdRolesRoleNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdRolesRoleNameComposites - Get composites of the role
  **/
  getRealmClientsIdRolesRoleNameComposites(
    req: operations.GetRealmClientsIdRolesRoleNameCompositesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdRolesRoleNameCompositesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdRolesRoleNameCompositesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/composites", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdRolesRoleNameCompositesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdRolesRoleNameCompositesClientsClient - An app-level roles for the specified app for the role’s composite
  **/
  getRealmClientsIdRolesRoleNameCompositesClientsClient(
    req: operations.GetRealmClientsIdRolesRoleNameCompositesClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdRolesRoleNameCompositesClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdRolesRoleNameCompositesClientsClientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/composites/clients/{client}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdRolesRoleNameCompositesClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdRolesRoleNameCompositesRealm - Get realm-level roles of the role’s composite
  **/
  getRealmClientsIdRolesRoleNameCompositesRealm(
    req: operations.GetRealmClientsIdRolesRoleNameCompositesRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdRolesRoleNameCompositesRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdRolesRoleNameCompositesRealmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/composites/realm", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdRolesRoleNameCompositesRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdRolesRoleNameGroups - Return List of Groups that have the specified role name
  **/
  getRealmClientsIdRolesRoleNameGroups(
    req: operations.GetRealmClientsIdRolesRoleNameGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdRolesRoleNameGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdRolesRoleNameGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/groups", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmClientsIdRolesRoleNameGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.groupRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdRolesRoleNameManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
  **/
  getRealmClientsIdRolesRoleNameManagementPermissions(
    req: operations.GetRealmClientsIdRolesRoleNameManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdRolesRoleNameManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdRolesRoleNameManagementPermissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/management/permissions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdRolesRoleNameManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdRolesRoleNameUsers - Return List of Users that have the specified role name
  **/
  getRealmClientsIdRolesRoleNameUsers(
    req: operations.GetRealmClientsIdRolesRoleNameUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdRolesRoleNameUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdRolesRoleNameUsersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/users", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmClientsIdRolesRoleNameUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdScopeMappings - Get all scope mappings for the client
  **/
  getRealmClientsIdScopeMappings(
    req: operations.GetRealmClientsIdScopeMappingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdScopeMappingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdScopeMappingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdScopeMappingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mappingsRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdScopeMappingsClientsClient - Get the roles associated with a client’s scope   Returns roles for the client.
  **/
  getRealmClientsIdScopeMappingsClientsClient(
    req: operations.GetRealmClientsIdScopeMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdScopeMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdScopeMappingsClientsClientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdScopeMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdScopeMappingsClientsClientAvailable - The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
  **/
  getRealmClientsIdScopeMappingsClientsClientAvailable(
    req: operations.GetRealmClientsIdScopeMappingsClientsClientAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdScopeMappingsClientsClientAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdScopeMappingsClientsClientAvailableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}/available", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdScopeMappingsClientsClientAvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdScopeMappingsClientsClientComposite - Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
  **/
  getRealmClientsIdScopeMappingsClientsClientComposite(
    req: operations.GetRealmClientsIdScopeMappingsClientsClientCompositeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdScopeMappingsClientsClientCompositeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdScopeMappingsClientsClientCompositeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}/composite", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdScopeMappingsClientsClientCompositeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdScopeMappingsRealm - Get realm-level roles associated with the client’s scope
  **/
  getRealmClientsIdScopeMappingsRealm(
    req: operations.GetRealmClientsIdScopeMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdScopeMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdScopeMappingsRealmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/realm", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdScopeMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdScopeMappingsRealmAvailable - Get realm-level roles that are available to attach to this client’s scope
  **/
  getRealmClientsIdScopeMappingsRealmAvailable(
    req: operations.GetRealmClientsIdScopeMappingsRealmAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdScopeMappingsRealmAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdScopeMappingsRealmAvailableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/realm/available", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdScopeMappingsRealmAvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdScopeMappingsRealmComposite - Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
  **/
  getRealmClientsIdScopeMappingsRealmComposite(
    req: operations.GetRealmClientsIdScopeMappingsRealmCompositeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdScopeMappingsRealmCompositeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdScopeMappingsRealmCompositeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/realm/composite", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdScopeMappingsRealmCompositeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdServiceAccountUser - Get a user dedicated to the service account
  **/
  getRealmClientsIdServiceAccountUser(
    req: operations.GetRealmClientsIdServiceAccountUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdServiceAccountUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdServiceAccountUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/service-account-user", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdServiceAccountUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdSessionCount - Get application session count   Returns a number of user sessions associated with this client   {      "count": number  }
  **/
  getRealmClientsIdSessionCount(
    req: operations.GetRealmClientsIdSessionCountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdSessionCountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdSessionCountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/session-count", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdSessionCountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getRealmClientsIdSessionCount2XxApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdTestNodesAvailable - Test if registered cluster nodes are available   Tests availability by sending 'ping' request to all cluster nodes.
  **/
  getRealmClientsIdTestNodesAvailable(
    req: operations.GetRealmClientsIdTestNodesAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdTestNodesAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdTestNodesAvailableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/test-nodes-available", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsIdTestNodesAvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.globalRequestResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmClientsIdUserSessions - Get user sessions for client   Returns a list of user sessions associated with this client
  **/
  getRealmClientsIdUserSessions(
    req: operations.GetRealmClientsIdUserSessionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdUserSessionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdUserSessionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/user-sessions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmClientsIdUserSessionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userSessionRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getRealmClientsInitialAccess(
    req: operations.GetRealmClientsInitialAccessRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsInitialAccessResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsInitialAccessRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients-initial-access", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmClientsInitialAccessResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.clientInitialAccessPresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getRealmComponents(
    req: operations.GetRealmComponentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmComponentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmComponentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/components", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmComponentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.componentRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getRealmComponentsId(
    req: operations.GetRealmComponentsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmComponentsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmComponentsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/components/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmComponentsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.componentRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmComponentsIdSubComponentTypes - List of subcomponent types that are available to configure for a particular parent component.
  **/
  getRealmComponentsIdSubComponentTypes(
    req: operations.GetRealmComponentsIdSubComponentTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmComponentsIdSubComponentTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmComponentsIdSubComponentTypesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/components/{id}/sub-component-types", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmComponentsIdSubComponentTypesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.componentTypeRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getRealmCredentialRegistrators(
    req: operations.GetRealmCredentialRegistratorsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmCredentialRegistratorsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmCredentialRegistratorsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/credential-registrators", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmCredentialRegistratorsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getRealmCredentialRegistrators2XxApplicationJsonStrings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmDefaultDefaultClientScopes - Get realm default client scopes.
  **/
  getRealmDefaultDefaultClientScopes(
    req: operations.GetRealmDefaultDefaultClientScopesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmDefaultDefaultClientScopesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmDefaultDefaultClientScopesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/default-default-client-scopes", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmDefaultDefaultClientScopesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.clientScopeRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmDefaultGroups - Get group hierarchy.
  **/
  getRealmDefaultGroups(
    req: operations.GetRealmDefaultGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmDefaultGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmDefaultGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/default-groups", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmDefaultGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.groupRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmDefaultOptionalClientScopes - Get realm optional client scopes.
  **/
  getRealmDefaultOptionalClientScopes(
    req: operations.GetRealmDefaultOptionalClientScopesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmDefaultOptionalClientScopesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmDefaultOptionalClientScopesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/default-optional-client-scopes", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmDefaultOptionalClientScopesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.clientScopeRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmEvents - Get events   Returns all events, or filters them based on URL query parameters listed here
  **/
  getRealmEvents(
    req: operations.GetRealmEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmEventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/events", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.eventRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmEventsConfig - Get the events provider configuration   Returns JSON object with events provider configuration
  **/
  getRealmEventsConfig(
    req: operations.GetRealmEventsConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmEventsConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmEventsConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/events/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmEventsConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.realmEventsConfigRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getRealmGroupByPathPath(
    req: operations.GetRealmGroupByPathPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupByPathPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupByPathPathRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/group-by-path/{path}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmGroupByPathPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.groupRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmGroups - Get group hierarchy.
  **/
  getRealmGroups(
    req: operations.GetRealmGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.groupRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmGroupsCount - Returns the groups counts.
  **/
  getRealmGroupsCount(
    req: operations.GetRealmGroupsCountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsCountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsCountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/count", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmGroupsCountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getRealmGroupsCount2XxApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getRealmGroupsId(
    req: operations.GetRealmGroupsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmGroupsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.groupRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmGroupsIdManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
  **/
  getRealmGroupsIdManagementPermissions(
    req: operations.GetRealmGroupsIdManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsIdManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsIdManagementPermissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/management/permissions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmGroupsIdManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmGroupsIdMembers - Get users   Returns a list of users, filtered according to query parameters
  **/
  getRealmGroupsIdMembers(
    req: operations.GetRealmGroupsIdMembersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsIdMembersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsIdMembersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/members", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmGroupsIdMembersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmGroupsIdRoleMappings - Get role mappings
  **/
  getRealmGroupsIdRoleMappings(
    req: operations.GetRealmGroupsIdRoleMappingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsIdRoleMappingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsIdRoleMappingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmGroupsIdRoleMappingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mappingsRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmGroupsIdRoleMappingsClientsClient - Get client-level role mappings for the user, and the app
  **/
  getRealmGroupsIdRoleMappingsClientsClient(
    req: operations.GetRealmGroupsIdRoleMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsIdRoleMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsIdRoleMappingsClientsClientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmGroupsIdRoleMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmGroupsIdRoleMappingsClientsClientAvailable - Get available client-level roles that can be mapped to the user
  **/
  getRealmGroupsIdRoleMappingsClientsClientAvailable(
    req: operations.GetRealmGroupsIdRoleMappingsClientsClientAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsIdRoleMappingsClientsClientAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsIdRoleMappingsClientsClientAvailableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}/available", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmGroupsIdRoleMappingsClientsClientAvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmGroupsIdRoleMappingsClientsClientComposite - Get effective client-level role mappings   This recurses any composite roles
  **/
  getRealmGroupsIdRoleMappingsClientsClientComposite(
    req: operations.GetRealmGroupsIdRoleMappingsClientsClientCompositeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsIdRoleMappingsClientsClientCompositeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsIdRoleMappingsClientsClientCompositeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}/composite", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmGroupsIdRoleMappingsClientsClientCompositeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmGroupsIdRoleMappingsRealm - Get realm-level role mappings
  **/
  getRealmGroupsIdRoleMappingsRealm(
    req: operations.GetRealmGroupsIdRoleMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsIdRoleMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsIdRoleMappingsRealmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/realm", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmGroupsIdRoleMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmGroupsIdRoleMappingsRealmAvailable - Get realm-level roles that can be mapped
  **/
  getRealmGroupsIdRoleMappingsRealmAvailable(
    req: operations.GetRealmGroupsIdRoleMappingsRealmAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsIdRoleMappingsRealmAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsIdRoleMappingsRealmAvailableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/realm/available", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmGroupsIdRoleMappingsRealmAvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmGroupsIdRoleMappingsRealmComposite - Get effective realm-level role mappings   This will recurse all composite roles to get the result.
  **/
  getRealmGroupsIdRoleMappingsRealmComposite(
    req: operations.GetRealmGroupsIdRoleMappingsRealmCompositeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsIdRoleMappingsRealmCompositeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsIdRoleMappingsRealmCompositeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/realm/composite", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmGroupsIdRoleMappingsRealmCompositeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmIdentityProviderInstances - Get identity providers
  **/
  getRealmIdentityProviderInstances(
    req: operations.GetRealmIdentityProviderInstancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmIdentityProviderInstancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmIdentityProviderInstancesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmIdentityProviderInstancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.identityProviderRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmIdentityProviderInstancesAlias - Get the identity provider
  **/
  getRealmIdentityProviderInstancesAlias(
    req: operations.GetRealmIdentityProviderInstancesAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmIdentityProviderInstancesAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmIdentityProviderInstancesAliasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmIdentityProviderInstancesAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.identityProviderRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmIdentityProviderInstancesAliasExport - Export public broker configuration for identity provider
  **/
  getRealmIdentityProviderInstancesAliasExport(
    req: operations.GetRealmIdentityProviderInstancesAliasExportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmIdentityProviderInstancesAliasExportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmIdentityProviderInstancesAliasExportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/export", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmIdentityProviderInstancesAliasExportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmIdentityProviderInstancesAliasManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
  **/
  getRealmIdentityProviderInstancesAliasManagementPermissions(
    req: operations.GetRealmIdentityProviderInstancesAliasManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmIdentityProviderInstancesAliasManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmIdentityProviderInstancesAliasManagementPermissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/management/permissions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmIdentityProviderInstancesAliasManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmIdentityProviderInstancesAliasMapperTypes - Get mapper types for identity provider
  **/
  getRealmIdentityProviderInstancesAliasMapperTypes(
    req: operations.GetRealmIdentityProviderInstancesAliasMapperTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmIdentityProviderInstancesAliasMapperTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmIdentityProviderInstancesAliasMapperTypesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/mapper-types", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmIdentityProviderInstancesAliasMapperTypesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmIdentityProviderInstancesAliasMappers - Get mappers for identity provider
  **/
  getRealmIdentityProviderInstancesAliasMappers(
    req: operations.GetRealmIdentityProviderInstancesAliasMappersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmIdentityProviderInstancesAliasMappersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmIdentityProviderInstancesAliasMappersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/mappers", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmIdentityProviderInstancesAliasMappersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.identityProviderMapperRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmIdentityProviderInstancesAliasMappersId - Get mapper by id for the identity provider
  **/
  getRealmIdentityProviderInstancesAliasMappersId(
    req: operations.GetRealmIdentityProviderInstancesAliasMappersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmIdentityProviderInstancesAliasMappersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmIdentityProviderInstancesAliasMappersIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/mappers/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmIdentityProviderInstancesAliasMappersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.identityProviderMapperRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmIdentityProviderProvidersProviderId - Get identity providers
  **/
  getRealmIdentityProviderProvidersProviderId(
    req: operations.GetRealmIdentityProviderProvidersProviderIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmIdentityProviderProvidersProviderIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmIdentityProviderProvidersProviderIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/providers/{provider_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmIdentityProviderProvidersProviderIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getRealmKeys(
    req: operations.GetRealmKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/keys", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.keysMetadataRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmRoles - Get all roles for the realm or client
  **/
  getRealmRoles(
    req: operations.GetRealmRolesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmRolesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmRolesByIdRoleId - Get a specific role’s representation
  **/
  getRealmRolesByIdRoleId(
    req: operations.GetRealmRolesByIdRoleIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesByIdRoleIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesByIdRoleIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmRolesByIdRoleIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmRolesByIdRoleIdComposites - Get role’s children   Returns a set of role’s children provided the role is a composite.
  **/
  getRealmRolesByIdRoleIdComposites(
    req: operations.GetRealmRolesByIdRoleIdCompositesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesByIdRoleIdCompositesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesByIdRoleIdCompositesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}/composites", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmRolesByIdRoleIdCompositesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmRolesByIdRoleIdCompositesClientsClient - Get client-level roles for the client that are in the role’s composite
  **/
  getRealmRolesByIdRoleIdCompositesClientsClient(
    req: operations.GetRealmRolesByIdRoleIdCompositesClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesByIdRoleIdCompositesClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesByIdRoleIdCompositesClientsClientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}/composites/clients/{client}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmRolesByIdRoleIdCompositesClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmRolesByIdRoleIdCompositesRealm - Get realm-level roles that are in the role’s composite
  **/
  getRealmRolesByIdRoleIdCompositesRealm(
    req: operations.GetRealmRolesByIdRoleIdCompositesRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesByIdRoleIdCompositesRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesByIdRoleIdCompositesRealmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}/composites/realm", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmRolesByIdRoleIdCompositesRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmRolesByIdRoleIdManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
  **/
  getRealmRolesByIdRoleIdManagementPermissions(
    req: operations.GetRealmRolesByIdRoleIdManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesByIdRoleIdManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesByIdRoleIdManagementPermissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}/management/permissions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmRolesByIdRoleIdManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmRolesRoleName - Get a role by name
  **/
  getRealmRolesRoleName(
    req: operations.GetRealmRolesRoleNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesRoleNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesRoleNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmRolesRoleNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmRolesRoleNameComposites - Get composites of the role
  **/
  getRealmRolesRoleNameComposites(
    req: operations.GetRealmRolesRoleNameCompositesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesRoleNameCompositesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesRoleNameCompositesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/composites", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmRolesRoleNameCompositesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmRolesRoleNameCompositesClientsClient - An app-level roles for the specified app for the role’s composite
  **/
  getRealmRolesRoleNameCompositesClientsClient(
    req: operations.GetRealmRolesRoleNameCompositesClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesRoleNameCompositesClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesRoleNameCompositesClientsClientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/composites/clients/{client}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmRolesRoleNameCompositesClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmRolesRoleNameCompositesRealm - Get realm-level roles of the role’s composite
  **/
  getRealmRolesRoleNameCompositesRealm(
    req: operations.GetRealmRolesRoleNameCompositesRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesRoleNameCompositesRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesRoleNameCompositesRealmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/composites/realm", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmRolesRoleNameCompositesRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmRolesRoleNameGroups - Return List of Groups that have the specified role name
  **/
  getRealmRolesRoleNameGroups(
    req: operations.GetRealmRolesRoleNameGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesRoleNameGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesRoleNameGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/groups", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmRolesRoleNameGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.groupRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmRolesRoleNameManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
  **/
  getRealmRolesRoleNameManagementPermissions(
    req: operations.GetRealmRolesRoleNameManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesRoleNameManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesRoleNameManagementPermissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/management/permissions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmRolesRoleNameManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmRolesRoleNameUsers - Return List of Users that have the specified role name
  **/
  getRealmRolesRoleNameUsers(
    req: operations.GetRealmRolesRoleNameUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesRoleNameUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesRoleNameUsersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/users", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmRolesRoleNameUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmUserStorageIdName - Need this for admin console to display simple name of provider when displaying user detail   KEYCLOAK-4328
  **/
  getRealmUserStorageIdName(
    req: operations.GetRealmUserStorageIdNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUserStorageIdNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUserStorageIdNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/user-storage/{id}/name", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmUserStorageIdNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getRealmUserStorageIdName2XxApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmUsers - Get users   Returns a list of users, filtered according to query parameters
  **/
  getRealmUsers(
    req: operations.GetRealmUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmUsersCount - Returns the number of users that match the given criteria.
  **/
  getRealmUsersCount(
    req: operations.GetRealmUsersCountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersCountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersCountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/count", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmUsersCountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getRealmUsersCount2XxApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmUsersId - Get representation of the user
  **/
  getRealmUsersId(
    req: operations.GetRealmUsersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmUsersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmUsersIdConfiguredUserStorageCredentialTypes - Return credential types, which are provided by the user storage where user is stored.
  **/
  getRealmUsersIdConfiguredUserStorageCredentialTypes(
    req: operations.GetRealmUsersIdConfiguredUserStorageCredentialTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdConfiguredUserStorageCredentialTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdConfiguredUserStorageCredentialTypesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/configured-user-storage-credential-types", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmUsersIdConfiguredUserStorageCredentialTypesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getRealmUsersIdConfiguredUserStorageCredentialTypes2XxApplicationJsonStrings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmUsersIdConsents - Get consents granted by the user
  **/
  getRealmUsersIdConsents(
    req: operations.GetRealmUsersIdConsentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdConsentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdConsentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/consents", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmUsersIdConsentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getRealmUsersIdConsents2XxApplicationJsonObjects = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getRealmUsersIdCredentials(
    req: operations.GetRealmUsersIdCredentialsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdCredentialsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdCredentialsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/credentials", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmUsersIdCredentialsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.credentialRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmUsersIdFederatedIdentity - Get social logins associated with the user
  **/
  getRealmUsersIdFederatedIdentity(
    req: operations.GetRealmUsersIdFederatedIdentityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdFederatedIdentityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdFederatedIdentityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/federated-identity", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmUsersIdFederatedIdentityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.federatedIdentityRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getRealmUsersIdGroups(
    req: operations.GetRealmUsersIdGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/groups", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmUsersIdGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.groupRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getRealmUsersIdGroupsCount(
    req: operations.GetRealmUsersIdGroupsCountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdGroupsCountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdGroupsCountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/groups/count", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetRealmUsersIdGroupsCountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getRealmUsersIdGroupsCount2XxApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmUsersIdOfflineSessionsClientId - Get offline sessions associated with the user and client
  **/
  getRealmUsersIdOfflineSessionsClientId(
    req: operations.GetRealmUsersIdOfflineSessionsClientIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdOfflineSessionsClientIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdOfflineSessionsClientIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/offline-sessions/{clientId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmUsersIdOfflineSessionsClientIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userSessionRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmUsersIdRoleMappings - Get role mappings
  **/
  getRealmUsersIdRoleMappings(
    req: operations.GetRealmUsersIdRoleMappingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdRoleMappingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdRoleMappingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmUsersIdRoleMappingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mappingsRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmUsersIdRoleMappingsClientsClient - Get client-level role mappings for the user, and the app
  **/
  getRealmUsersIdRoleMappingsClientsClient(
    req: operations.GetRealmUsersIdRoleMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdRoleMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdRoleMappingsClientsClientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmUsersIdRoleMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmUsersIdRoleMappingsClientsClientAvailable - Get available client-level roles that can be mapped to the user
  **/
  getRealmUsersIdRoleMappingsClientsClientAvailable(
    req: operations.GetRealmUsersIdRoleMappingsClientsClientAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdRoleMappingsClientsClientAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdRoleMappingsClientsClientAvailableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}/available", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmUsersIdRoleMappingsClientsClientAvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmUsersIdRoleMappingsClientsClientComposite - Get effective client-level role mappings   This recurses any composite roles
  **/
  getRealmUsersIdRoleMappingsClientsClientComposite(
    req: operations.GetRealmUsersIdRoleMappingsClientsClientCompositeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdRoleMappingsClientsClientCompositeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdRoleMappingsClientsClientCompositeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}/composite", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmUsersIdRoleMappingsClientsClientCompositeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmUsersIdRoleMappingsRealm - Get realm-level role mappings
  **/
  getRealmUsersIdRoleMappingsRealm(
    req: operations.GetRealmUsersIdRoleMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdRoleMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdRoleMappingsRealmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/realm", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmUsersIdRoleMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmUsersIdRoleMappingsRealmAvailable - Get realm-level roles that can be mapped
  **/
  getRealmUsersIdRoleMappingsRealmAvailable(
    req: operations.GetRealmUsersIdRoleMappingsRealmAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdRoleMappingsRealmAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdRoleMappingsRealmAvailableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/realm/available", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmUsersIdRoleMappingsRealmAvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmUsersIdRoleMappingsRealmComposite - Get effective realm-level role mappings   This will recurse all composite roles to get the result.
  **/
  getRealmUsersIdRoleMappingsRealmComposite(
    req: operations.GetRealmUsersIdRoleMappingsRealmCompositeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdRoleMappingsRealmCompositeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdRoleMappingsRealmCompositeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/realm/composite", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmUsersIdRoleMappingsRealmCompositeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRealmUsersIdSessions - Get sessions associated with the user
  **/
  getRealmUsersIdSessions(
    req: operations.GetRealmUsersIdSessionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdSessionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdSessionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/sessions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmUsersIdSessionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userSessionRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getRealmUsersManagementPermissions(
    req: operations.GetRealmUsersManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersManagementPermissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users-management-permissions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRealmUsersManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * post - Import a realm   Imports a realm from a full representation of that realm.
  **/
  post(
    req: operations.PostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmAuthenticationExecutions - Add new authentication execution
  **/
  postRealmAuthenticationExecutions(
    req: operations.PostRealmAuthenticationExecutionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationExecutionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationExecutionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/executions", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmAuthenticationExecutionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmAuthenticationExecutionsExecutionIdConfig - Update execution with new configuration
  **/
  postRealmAuthenticationExecutionsExecutionIdConfig(
    req: operations.PostRealmAuthenticationExecutionsExecutionIdConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationExecutionsExecutionIdConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationExecutionsExecutionIdConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/executions/{executionId}/config", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmAuthenticationExecutionsExecutionIdConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmAuthenticationExecutionsExecutionIdLowerPriority - Lower execution’s priority
  **/
  postRealmAuthenticationExecutionsExecutionIdLowerPriority(
    req: operations.PostRealmAuthenticationExecutionsExecutionIdLowerPriorityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationExecutionsExecutionIdLowerPriorityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationExecutionsExecutionIdLowerPriorityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/executions/{executionId}/lower-priority", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmAuthenticationExecutionsExecutionIdLowerPriorityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmAuthenticationExecutionsExecutionIdRaisePriority - Raise execution’s priority
  **/
  postRealmAuthenticationExecutionsExecutionIdRaisePriority(
    req: operations.PostRealmAuthenticationExecutionsExecutionIdRaisePriorityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationExecutionsExecutionIdRaisePriorityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationExecutionsExecutionIdRaisePriorityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/executions/{executionId}/raise-priority", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmAuthenticationExecutionsExecutionIdRaisePriorityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmAuthenticationFlows - Create a new authentication flow
  **/
  postRealmAuthenticationFlows(
    req: operations.PostRealmAuthenticationFlowsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationFlowsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationFlowsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/flows", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmAuthenticationFlowsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmAuthenticationFlowsFlowAliasCopy - Copy existing authentication flow under a new name   The new name is given as 'newName' attribute of the passed JSON object
  **/
  postRealmAuthenticationFlowsFlowAliasCopy(
    req: operations.PostRealmAuthenticationFlowsFlowAliasCopyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationFlowsFlowAliasCopyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationFlowsFlowAliasCopyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{flowAlias}/copy", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmAuthenticationFlowsFlowAliasCopyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmAuthenticationFlowsFlowAliasExecutionsExecution - Add new authentication execution to a flow
  **/
  postRealmAuthenticationFlowsFlowAliasExecutionsExecution(
    req: operations.PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{flowAlias}/executions/execution", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmAuthenticationFlowsFlowAliasExecutionsFlow - Add new flow with new execution to existing flow
  **/
  postRealmAuthenticationFlowsFlowAliasExecutionsFlow(
    req: operations.PostRealmAuthenticationFlowsFlowAliasExecutionsFlowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationFlowsFlowAliasExecutionsFlowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationFlowsFlowAliasExecutionsFlowRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{flowAlias}/executions/flow", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmAuthenticationFlowsFlowAliasExecutionsFlowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmAuthenticationRegisterRequiredAction - Register a new required actions
  **/
  postRealmAuthenticationRegisterRequiredAction(
    req: operations.PostRealmAuthenticationRegisterRequiredActionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationRegisterRequiredActionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationRegisterRequiredActionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/register-required-action", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmAuthenticationRegisterRequiredActionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmAuthenticationRequiredActionsAliasLowerPriority - Lower required action’s priority
  **/
  postRealmAuthenticationRequiredActionsAliasLowerPriority(
    req: operations.PostRealmAuthenticationRequiredActionsAliasLowerPriorityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationRequiredActionsAliasLowerPriorityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationRequiredActionsAliasLowerPriorityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/required-actions/{alias}/lower-priority", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmAuthenticationRequiredActionsAliasLowerPriorityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmAuthenticationRequiredActionsAliasRaisePriority - Raise required action’s priority
  **/
  postRealmAuthenticationRequiredActionsAliasRaisePriority(
    req: operations.PostRealmAuthenticationRequiredActionsAliasRaisePriorityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationRequiredActionsAliasRaisePriorityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationRequiredActionsAliasRaisePriorityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/required-actions/{alias}/raise-priority", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmAuthenticationRequiredActionsAliasRaisePriorityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClearKeysCache - Clear cache of external public keys (Public keys of clients or Identity providers)
  **/
  postRealmClearKeysCache(
    req: operations.PostRealmClearKeysCacheRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClearKeysCacheResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClearKeysCacheRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clear-keys-cache", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmClearKeysCacheResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClearRealmCache - Clear realm cache
  **/
  postRealmClearRealmCache(
    req: operations.PostRealmClearRealmCacheRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClearRealmCacheResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClearRealmCacheRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clear-realm-cache", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmClearRealmCacheResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClearUserCache - Clear user cache
  **/
  postRealmClearUserCache(
    req: operations.PostRealmClearUserCacheRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClearUserCacheResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClearUserCacheRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clear-user-cache", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmClearUserCacheResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientDescriptionConverter - Base path for importing clients under this realm.
  **/
  postRealmClientDescriptionConverter(
    req: operations.PostRealmClientDescriptionConverterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientDescriptionConverterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientDescriptionConverterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-description-converter", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmClientDescriptionConverterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.clientRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientScopes - Create a new client scope   Client Scope’s name must be unique!
  **/
  postRealmClientScopes(
    req: operations.PostRealmClientScopesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientScopesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientScopesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmClientScopesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientScopesIdProtocolMappersAddModels - Create multiple mappers
  **/
  postRealmClientScopesIdProtocolMappersAddModels(
    req: operations.PostRealmClientScopesIdProtocolMappersAddModelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientScopesIdProtocolMappersAddModelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientScopesIdProtocolMappersAddModelsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/protocol-mappers/add-models", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmClientScopesIdProtocolMappersAddModelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientScopesIdProtocolMappersModels - Create a mapper
  **/
  postRealmClientScopesIdProtocolMappersModels(
    req: operations.PostRealmClientScopesIdProtocolMappersModelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientScopesIdProtocolMappersModelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientScopesIdProtocolMappersModelsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/protocol-mappers/models", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmClientScopesIdProtocolMappersModelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientScopesIdScopeMappingsClientsClient - Add client-level roles to the client’s scope
  **/
  postRealmClientScopesIdScopeMappingsClientsClient(
    req: operations.PostRealmClientScopesIdScopeMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientScopesIdScopeMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientScopesIdScopeMappingsClientsClientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmClientScopesIdScopeMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientScopesIdScopeMappingsRealm - Add a set of realm-level roles to the client’s scope
  **/
  postRealmClientScopesIdScopeMappingsRealm(
    req: operations.PostRealmClientScopesIdScopeMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientScopesIdScopeMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientScopesIdScopeMappingsRealmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmClientScopesIdScopeMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClients - Create a new client   Client’s client_id must be unique!
  **/
  postRealmClients(
    req: operations.PostRealmClientsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmClientsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientsIdCertificatesAttrDownload - Get a keystore file for the client, containing private key and public certificate
  **/
  postRealmClientsIdCertificatesAttrDownload(
    req: operations.PostRealmClientsIdCertificatesAttrDownloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdCertificatesAttrDownloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdCertificatesAttrDownloadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/certificates/{attr}/download", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmClientsIdCertificatesAttrDownloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                res.postRealmClientsIdCertificatesAttrDownload2XxApplicationOctetStreamByteString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientsIdCertificatesAttrGenerate - Generate a new certificate with new key pair
  **/
  postRealmClientsIdCertificatesAttrGenerate(
    req: operations.PostRealmClientsIdCertificatesAttrGenerateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdCertificatesAttrGenerateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdCertificatesAttrGenerateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/certificates/{attr}/generate", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmClientsIdCertificatesAttrGenerateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.certificateRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientsIdCertificatesAttrGenerateAndDownload - Generate a new keypair and certificate, and get the private key file   Generates a keypair and certificate and serves the private key in a specified keystore format.
  **/
  postRealmClientsIdCertificatesAttrGenerateAndDownload(
    req: operations.PostRealmClientsIdCertificatesAttrGenerateAndDownloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdCertificatesAttrGenerateAndDownloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdCertificatesAttrGenerateAndDownloadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/certificates/{attr}/generate-and-download", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmClientsIdCertificatesAttrGenerateAndDownloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                res.postRealmClientsIdCertificatesAttrGenerateAndDownload2XxApplicationOctetStreamByteString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientsIdCertificatesAttrUpload - Upload certificate and eventually private key
  **/
  postRealmClientsIdCertificatesAttrUpload(
    req: operations.PostRealmClientsIdCertificatesAttrUploadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdCertificatesAttrUploadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdCertificatesAttrUploadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/certificates/{attr}/upload", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmClientsIdCertificatesAttrUploadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.certificateRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientsIdCertificatesAttrUploadCertificate - Upload only certificate, not private key
  **/
  postRealmClientsIdCertificatesAttrUploadCertificate(
    req: operations.PostRealmClientsIdCertificatesAttrUploadCertificateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdCertificatesAttrUploadCertificateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdCertificatesAttrUploadCertificateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/certificates/{attr}/upload-certificate", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmClientsIdCertificatesAttrUploadCertificateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.certificateRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientsIdClientSecret - Generate a new secret for the client
  **/
  postRealmClientsIdClientSecret(
    req: operations.PostRealmClientsIdClientSecretRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdClientSecretResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdClientSecretRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/client-secret", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmClientsIdClientSecretResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.credentialRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientsIdNodes - Register a cluster node with the client   Manually register cluster node to this client - usually it’s not needed to call this directly as adapter should handle  by sending registration request to Keycloak
  **/
  postRealmClientsIdNodes(
    req: operations.PostRealmClientsIdNodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdNodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdNodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/nodes", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmClientsIdNodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientsIdProtocolMappersAddModels - Create multiple mappers
  **/
  postRealmClientsIdProtocolMappersAddModels(
    req: operations.PostRealmClientsIdProtocolMappersAddModelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdProtocolMappersAddModelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdProtocolMappersAddModelsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/protocol-mappers/add-models", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmClientsIdProtocolMappersAddModelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientsIdProtocolMappersModels - Create a mapper
  **/
  postRealmClientsIdProtocolMappersModels(
    req: operations.PostRealmClientsIdProtocolMappersModelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdProtocolMappersModelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdProtocolMappersModelsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/protocol-mappers/models", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmClientsIdProtocolMappersModelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientsIdPushRevocation - Push the client’s revocation policy to its admin URL   If the client has an admin URL, push revocation policy to it.
  **/
  postRealmClientsIdPushRevocation(
    req: operations.PostRealmClientsIdPushRevocationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdPushRevocationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdPushRevocationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/push-revocation", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmClientsIdPushRevocationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.globalRequestResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientsIdRegistrationAccessToken - Generate a new registration access token for the client
  **/
  postRealmClientsIdRegistrationAccessToken(
    req: operations.PostRealmClientsIdRegistrationAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdRegistrationAccessTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdRegistrationAccessTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/registration-access-token", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmClientsIdRegistrationAccessTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.clientRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientsIdRoles - Create a new role for the realm or client
  **/
  postRealmClientsIdRoles(
    req: operations.PostRealmClientsIdRolesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdRolesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdRolesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmClientsIdRolesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientsIdRolesRoleNameComposites - Add a composite to the role
  **/
  postRealmClientsIdRolesRoleNameComposites(
    req: operations.PostRealmClientsIdRolesRoleNameCompositesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdRolesRoleNameCompositesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdRolesRoleNameCompositesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/composites", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmClientsIdRolesRoleNameCompositesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientsIdScopeMappingsClientsClient - Add client-level roles to the client’s scope
  **/
  postRealmClientsIdScopeMappingsClientsClient(
    req: operations.PostRealmClientsIdScopeMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdScopeMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdScopeMappingsClientsClientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmClientsIdScopeMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientsIdScopeMappingsRealm - Add a set of realm-level roles to the client’s scope
  **/
  postRealmClientsIdScopeMappingsRealm(
    req: operations.PostRealmClientsIdScopeMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdScopeMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdScopeMappingsRealmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/realm", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmClientsIdScopeMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmClientsInitialAccess - Create a new initial access token.
  **/
  postRealmClientsInitialAccess(
    req: operations.PostRealmClientsInitialAccessRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsInitialAccessResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsInitialAccessRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients-initial-access", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmClientsInitialAccessResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.clientInitialAccessPresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postRealmComponents(
    req: operations.PostRealmComponentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmComponentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmComponentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/components", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmComponentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmGroups - create or add a top level realm groupSet or create child.
  **/
  postRealmGroups(
    req: operations.PostRealmGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmGroupsIdChildren - Set or create child.
  **/
  postRealmGroupsIdChildren(
    req: operations.PostRealmGroupsIdChildrenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmGroupsIdChildrenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmGroupsIdChildrenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/children", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmGroupsIdChildrenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmGroupsIdRoleMappingsClientsClient - Add client-level roles to the user role mapping
  **/
  postRealmGroupsIdRoleMappingsClientsClient(
    req: operations.PostRealmGroupsIdRoleMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmGroupsIdRoleMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmGroupsIdRoleMappingsClientsClientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmGroupsIdRoleMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmGroupsIdRoleMappingsRealm - Add realm-level role mappings to the user
  **/
  postRealmGroupsIdRoleMappingsRealm(
    req: operations.PostRealmGroupsIdRoleMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmGroupsIdRoleMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmGroupsIdRoleMappingsRealmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/realm", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmGroupsIdRoleMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmIdentityProviderImportConfig - Import identity provider from uploaded JSON file
  **/
  postRealmIdentityProviderImportConfig(
    req: operations.PostRealmIdentityProviderImportConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmIdentityProviderImportConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmIdentityProviderImportConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/import-config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmIdentityProviderImportConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postRealmIdentityProviderImportConfig2XxApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmIdentityProviderInstances - Create a new identity provider
  **/
  postRealmIdentityProviderInstances(
    req: operations.PostRealmIdentityProviderInstancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmIdentityProviderInstancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmIdentityProviderInstancesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmIdentityProviderInstancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmIdentityProviderInstancesAliasMappers - Add a mapper to identity provider
  **/
  postRealmIdentityProviderInstancesAliasMappers(
    req: operations.PostRealmIdentityProviderInstancesAliasMappersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmIdentityProviderInstancesAliasMappersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmIdentityProviderInstancesAliasMappersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/mappers", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmIdentityProviderInstancesAliasMappersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmLogoutAll - Removes all user sessions.
  **/
  postRealmLogoutAll(
    req: operations.PostRealmLogoutAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmLogoutAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmLogoutAllRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/logout-all", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmLogoutAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmPartialImport - Partial import from a JSON file to an existing realm.
  **/
  postRealmPartialImport(
    req: operations.PostRealmPartialImportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmPartialImportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmPartialImportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/partialImport", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmPartialImportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmPartialExport - Partial export of existing realm into a JSON file.
  **/
  postRealmPartialExport(
    req: operations.PostRealmPartialExportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmPartialExportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmPartialExportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/partial-export", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.PostRealmPartialExportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.realmRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmPushRevocation - Push the realm’s revocation policy to any client that has an admin url associated with it.
  **/
  postRealmPushRevocation(
    req: operations.PostRealmPushRevocationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmPushRevocationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmPushRevocationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/push-revocation", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmPushRevocationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmRoles - Create a new role for the realm or client
  **/
  postRealmRoles(
    req: operations.PostRealmRolesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmRolesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmRolesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmRolesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmRolesByIdRoleIdComposites - Make the role a composite role by associating some child roles
  **/
  postRealmRolesByIdRoleIdComposites(
    req: operations.PostRealmRolesByIdRoleIdCompositesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmRolesByIdRoleIdCompositesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmRolesByIdRoleIdCompositesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}/composites", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmRolesByIdRoleIdCompositesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmRolesRoleNameComposites - Add a composite to the role
  **/
  postRealmRolesRoleNameComposites(
    req: operations.PostRealmRolesRoleNameCompositesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmRolesRoleNameCompositesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmRolesRoleNameCompositesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/composites", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmRolesRoleNameCompositesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmTestLdapConnection - Test LDAP connection
  **/
  postRealmTestLdapConnection(
    req: operations.PostRealmTestLdapConnectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmTestLdapConnectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmTestLdapConnectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/testLDAPConnection", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmTestLdapConnectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postRealmTestSmtpConnection(
    req: operations.PostRealmTestSmtpConnectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmTestSmtpConnectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmTestSmtpConnectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/testSMTPConnection", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmTestSmtpConnectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmUserStorageIdRemoveImportedUsers - Remove imported users
  **/
  postRealmUserStorageIdRemoveImportedUsers(
    req: operations.PostRealmUserStorageIdRemoveImportedUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUserStorageIdRemoveImportedUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUserStorageIdRemoveImportedUsersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/user-storage/{id}/remove-imported-users", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmUserStorageIdRemoveImportedUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmUserStorageIdSync - Trigger sync of users   Action can be "triggerFullSync" or "triggerChangedUsersSync"
  **/
  postRealmUserStorageIdSync(
    req: operations.PostRealmUserStorageIdSyncRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUserStorageIdSyncResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUserStorageIdSyncRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/user-storage/{id}/sync", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.PostRealmUserStorageIdSyncResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.synchronizationResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmUserStorageIdUnlinkUsers - Unlink imported users from a storage provider
  **/
  postRealmUserStorageIdUnlinkUsers(
    req: operations.PostRealmUserStorageIdUnlinkUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUserStorageIdUnlinkUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUserStorageIdUnlinkUsersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/user-storage/{id}/unlink-users", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmUserStorageIdUnlinkUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmUserStorageParentIdMappersIdSync - Trigger sync of mapper data related to ldap mapper (roles, groups, …​)   direction is "fedToKeycloak" or "keycloakToFed"
  **/
  postRealmUserStorageParentIdMappersIdSync(
    req: operations.PostRealmUserStorageParentIdMappersIdSyncRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUserStorageParentIdMappersIdSyncResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUserStorageParentIdMappersIdSyncRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/user-storage/{parentId}/mappers/{id}/sync", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.PostRealmUserStorageParentIdMappersIdSyncResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.synchronizationResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmUsers - Create a new user   Username must be unique.
  **/
  postRealmUsers(
    req: operations.PostRealmUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUsersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialId - Move a credential to a position behind another credential
  **/
  postRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialId(
    req: operations.PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/credentials/{credentialId}/moveAfter/{newPreviousCredentialId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmUsersIdCredentialsCredentialIdMoveToFirst - Move a credential to a first position in the credentials list of the user
  **/
  postRealmUsersIdCredentialsCredentialIdMoveToFirst(
    req: operations.PostRealmUsersIdCredentialsCredentialIdMoveToFirstRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUsersIdCredentialsCredentialIdMoveToFirstResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUsersIdCredentialsCredentialIdMoveToFirstRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/credentials/{credentialId}/moveToFirst", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmUsersIdCredentialsCredentialIdMoveToFirstResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmUsersIdFederatedIdentityProvider - Add a social login provider to the user
  **/
  postRealmUsersIdFederatedIdentityProvider(
    req: operations.PostRealmUsersIdFederatedIdentityProviderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUsersIdFederatedIdentityProviderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUsersIdFederatedIdentityProviderRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/federated-identity/{provider}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmUsersIdFederatedIdentityProviderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmUsersIdImpersonation - Impersonate the user
  **/
  postRealmUsersIdImpersonation(
    req: operations.PostRealmUsersIdImpersonationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUsersIdImpersonationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUsersIdImpersonationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/impersonation", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmUsersIdImpersonationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postRealmUsersIdImpersonation2XxApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmUsersIdLogout - Remove all user sessions associated with the user   Also send notification to all clients that have an admin URL to invalidate the sessions for the particular user.
  **/
  postRealmUsersIdLogout(
    req: operations.PostRealmUsersIdLogoutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUsersIdLogoutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUsersIdLogoutRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/logout", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRealmUsersIdLogoutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmUsersIdRoleMappingsClientsClient - Add client-level roles to the user role mapping
  **/
  postRealmUsersIdRoleMappingsClientsClient(
    req: operations.PostRealmUsersIdRoleMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUsersIdRoleMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUsersIdRoleMappingsClientsClientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmUsersIdRoleMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postRealmUsersIdRoleMappingsRealm - Add realm-level role mappings to the user
  **/
  postRealmUsersIdRoleMappingsRealm(
    req: operations.PostRealmUsersIdRoleMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUsersIdRoleMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUsersIdRoleMappingsRealmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/realm", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostRealmUsersIdRoleMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealm - Update the top-level information of the realm   Any user, roles or client information in the representation  will be ignored.
  **/
  putRealm(
    req: operations.PutRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmAuthenticationConfigId - Update authenticator configuration
  **/
  putRealmAuthenticationConfigId(
    req: operations.PutRealmAuthenticationConfigIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmAuthenticationConfigIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmAuthenticationConfigIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/config/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmAuthenticationConfigIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmAuthenticationFlowsFlowAliasExecutions - Update authentication executions of a flow
  **/
  putRealmAuthenticationFlowsFlowAliasExecutions(
    req: operations.PutRealmAuthenticationFlowsFlowAliasExecutionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmAuthenticationFlowsFlowAliasExecutionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmAuthenticationFlowsFlowAliasExecutionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{flowAlias}/executions", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmAuthenticationFlowsFlowAliasExecutionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmAuthenticationFlowsId - Update an authentication flow
  **/
  putRealmAuthenticationFlowsId(
    req: operations.PutRealmAuthenticationFlowsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmAuthenticationFlowsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmAuthenticationFlowsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmAuthenticationFlowsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmAuthenticationRequiredActionsAlias - Update required action
  **/
  putRealmAuthenticationRequiredActionsAlias(
    req: operations.PutRealmAuthenticationRequiredActionsAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmAuthenticationRequiredActionsAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmAuthenticationRequiredActionsAliasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/required-actions/{alias}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmAuthenticationRequiredActionsAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmClientScopesId1ProtocolMappersModelsId2 - Update the mapper
  **/
  putRealmClientScopesId1ProtocolMappersModelsId2(
    req: operations.PutRealmClientScopesId1ProtocolMappersModelsId2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmClientScopesId1ProtocolMappersModelsId2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmClientScopesId1ProtocolMappersModelsId2Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmClientScopesId1ProtocolMappersModelsId2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmClientScopesId - Update the client scope
  **/
  putRealmClientScopesId(
    req: operations.PutRealmClientScopesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmClientScopesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmClientScopesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmClientScopesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmClientsId1ProtocolMappersModelsId2 - Update the mapper
  **/
  putRealmClientsId1ProtocolMappersModelsId2(
    req: operations.PutRealmClientsId1ProtocolMappersModelsId2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmClientsId1ProtocolMappersModelsId2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmClientsId1ProtocolMappersModelsId2Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id1}/protocol-mappers/models/{id2}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmClientsId1ProtocolMappersModelsId2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmClientsId - Update the client
  **/
  putRealmClientsId(
    req: operations.PutRealmClientsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmClientsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmClientsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmClientsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  putRealmClientsIdDefaultClientScopesClientScopeId(
    req: operations.PutRealmClientsIdDefaultClientScopesClientScopeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmClientsIdDefaultClientScopesClientScopeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmClientsIdDefaultClientScopesClientScopeIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/default-client-scopes/{clientScopeId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutRealmClientsIdDefaultClientScopesClientScopeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmClientsIdManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
  **/
  putRealmClientsIdManagementPermissions(
    req: operations.PutRealmClientsIdManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmClientsIdManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmClientsIdManagementPermissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/management/permissions", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmClientsIdManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  putRealmClientsIdOptionalClientScopesClientScopeId(
    req: operations.PutRealmClientsIdOptionalClientScopesClientScopeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmClientsIdOptionalClientScopesClientScopeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmClientsIdOptionalClientScopesClientScopeIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/optional-client-scopes/{clientScopeId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutRealmClientsIdOptionalClientScopesClientScopeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmClientsIdRolesRoleName - Update a role by name
  **/
  putRealmClientsIdRolesRoleName(
    req: operations.PutRealmClientsIdRolesRoleNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmClientsIdRolesRoleNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmClientsIdRolesRoleNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmClientsIdRolesRoleNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmClientsIdRolesRoleNameManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
  **/
  putRealmClientsIdRolesRoleNameManagementPermissions(
    req: operations.PutRealmClientsIdRolesRoleNameManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmClientsIdRolesRoleNameManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmClientsIdRolesRoleNameManagementPermissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/management/permissions", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmClientsIdRolesRoleNameManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  putRealmComponentsId(
    req: operations.PutRealmComponentsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmComponentsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmComponentsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/components/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmComponentsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  putRealmDefaultDefaultClientScopesClientScopeId(
    req: operations.PutRealmDefaultDefaultClientScopesClientScopeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmDefaultDefaultClientScopesClientScopeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmDefaultDefaultClientScopesClientScopeIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/default-default-client-scopes/{clientScopeId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutRealmDefaultDefaultClientScopesClientScopeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  putRealmDefaultGroupsGroupId(
    req: operations.PutRealmDefaultGroupsGroupIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmDefaultGroupsGroupIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmDefaultGroupsGroupIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/default-groups/{groupId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutRealmDefaultGroupsGroupIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  putRealmDefaultOptionalClientScopesClientScopeId(
    req: operations.PutRealmDefaultOptionalClientScopesClientScopeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmDefaultOptionalClientScopesClientScopeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmDefaultOptionalClientScopesClientScopeIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/default-optional-client-scopes/{clientScopeId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutRealmDefaultOptionalClientScopesClientScopeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmEventsConfig - Update the events provider   Change the events provider and/or its configuration
  **/
  putRealmEventsConfig(
    req: operations.PutRealmEventsConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmEventsConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmEventsConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/events/config", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmEventsConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmGroupsId - Update group, ignores subgroups.
  **/
  putRealmGroupsId(
    req: operations.PutRealmGroupsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmGroupsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmGroupsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmGroupsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmGroupsIdManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
  **/
  putRealmGroupsIdManagementPermissions(
    req: operations.PutRealmGroupsIdManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmGroupsIdManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmGroupsIdManagementPermissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/management/permissions", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmGroupsIdManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmIdentityProviderInstancesAlias - Update the identity provider
  **/
  putRealmIdentityProviderInstancesAlias(
    req: operations.PutRealmIdentityProviderInstancesAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmIdentityProviderInstancesAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmIdentityProviderInstancesAliasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmIdentityProviderInstancesAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmIdentityProviderInstancesAliasManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
  **/
  putRealmIdentityProviderInstancesAliasManagementPermissions(
    req: operations.PutRealmIdentityProviderInstancesAliasManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmIdentityProviderInstancesAliasManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmIdentityProviderInstancesAliasManagementPermissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/management/permissions", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmIdentityProviderInstancesAliasManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmIdentityProviderInstancesAliasMappersId - Update a mapper for the identity provider
  **/
  putRealmIdentityProviderInstancesAliasMappersId(
    req: operations.PutRealmIdentityProviderInstancesAliasMappersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmIdentityProviderInstancesAliasMappersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmIdentityProviderInstancesAliasMappersIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/mappers/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmIdentityProviderInstancesAliasMappersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmRolesByIdRoleId - Update the role
  **/
  putRealmRolesByIdRoleId(
    req: operations.PutRealmRolesByIdRoleIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmRolesByIdRoleIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmRolesByIdRoleIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmRolesByIdRoleIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmRolesByIdRoleIdManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
  **/
  putRealmRolesByIdRoleIdManagementPermissions(
    req: operations.PutRealmRolesByIdRoleIdManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmRolesByIdRoleIdManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmRolesByIdRoleIdManagementPermissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}/management/permissions", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmRolesByIdRoleIdManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmRolesRoleName - Update a role by name
  **/
  putRealmRolesRoleName(
    req: operations.PutRealmRolesRoleNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmRolesRoleNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmRolesRoleNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmRolesRoleNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmRolesRoleNameManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
  **/
  putRealmRolesRoleNameManagementPermissions(
    req: operations.PutRealmRolesRoleNameManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmRolesRoleNameManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmRolesRoleNameManagementPermissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/management/permissions", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmRolesRoleNameManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmUsersId - Update the user
  **/
  putRealmUsersId(
    req: operations.PutRealmUsersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmUsersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmUsersIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmUsersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmUsersIdCredentialsCredentialIdUserLabel - Update a credential label for a user
  **/
  putRealmUsersIdCredentialsCredentialIdUserLabel(
    req: operations.PutRealmUsersIdCredentialsCredentialIdUserLabelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmUsersIdCredentialsCredentialIdUserLabelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmUsersIdCredentialsCredentialIdUserLabelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/credentials/{credentialId}/userLabel", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmUsersIdCredentialsCredentialIdUserLabelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmUsersIdDisableCredentialTypes - Disable all credentials for a user of a specific type
  **/
  putRealmUsersIdDisableCredentialTypes(
    req: operations.PutRealmUsersIdDisableCredentialTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmUsersIdDisableCredentialTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmUsersIdDisableCredentialTypesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/disable-credential-types", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmUsersIdDisableCredentialTypesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmUsersIdExecuteActionsEmail - Send a update account email to the user   An email contains a link the user can click to perform a set of required actions.
  **/
  putRealmUsersIdExecuteActionsEmail(
    req: operations.PutRealmUsersIdExecuteActionsEmailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmUsersIdExecuteActionsEmailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmUsersIdExecuteActionsEmailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/execute-actions-email", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        method: "put",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutRealmUsersIdExecuteActionsEmailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  putRealmUsersIdGroupsGroupId(
    req: operations.PutRealmUsersIdGroupsGroupIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmUsersIdGroupsGroupIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmUsersIdGroupsGroupIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/groups/{groupId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutRealmUsersIdGroupsGroupIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmUsersIdResetPassword - Set up a new password for the user.
  **/
  putRealmUsersIdResetPassword(
    req: operations.PutRealmUsersIdResetPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmUsersIdResetPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmUsersIdResetPasswordRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/reset-password", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmUsersIdResetPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRealmUsersIdSendVerifyEmail - Send an email-verification email to the user   An email contains a link the user can click to verify their email address.
  **/
  putRealmUsersIdSendVerifyEmail(
    req: operations.PutRealmUsersIdSendVerifyEmailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmUsersIdSendVerifyEmailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmUsersIdSendVerifyEmailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/send-verify-email", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "put",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutRealmUsersIdSendVerifyEmailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  putRealmUsersManagementPermissions(
    req: operations.PutRealmUsersManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmUsersManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmUsersManagementPermissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users-management-permissions", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutRealmUsersManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
