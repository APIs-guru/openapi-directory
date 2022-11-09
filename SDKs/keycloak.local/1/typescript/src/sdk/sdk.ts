import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
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
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk.security = security;
  };
}

// SDK Documentation: https://github.com/keycloak/keycloak/tree/6.0.1/core/src/main/java/org/keycloak/representations - Schema source code
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
  
  // DeleteRealm - Delete the realm
  DeleteRealm(
    req: operations.DeleteRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmAdminEvents - Delete all admin events
  DeleteRealmAdminEvents(
    req: operations.DeleteRealmAdminEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmAdminEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmAdminEventsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/admin-events", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmAdminEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmAttackDetectionBruteForceUsers - Clear any user login failures for all users   This can release temporary disabled users
  DeleteRealmAttackDetectionBruteForceUsers(
    req: operations.DeleteRealmAttackDetectionBruteForceUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmAttackDetectionBruteForceUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmAttackDetectionBruteForceUsersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/attack-detection/brute-force/users", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmAttackDetectionBruteForceUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmAttackDetectionBruteForceUsersUserId - Clear any user login failures for the user   This can release temporary disabled user
  DeleteRealmAttackDetectionBruteForceUsersUserId(
    req: operations.DeleteRealmAttackDetectionBruteForceUsersUserIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmAttackDetectionBruteForceUsersUserIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmAttackDetectionBruteForceUsersUserIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/attack-detection/brute-force/users/{userId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmAttackDetectionBruteForceUsersUserIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmAuthenticationConfigId - Delete authenticator configuration
  DeleteRealmAuthenticationConfigId(
    req: operations.DeleteRealmAuthenticationConfigIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmAuthenticationConfigIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmAuthenticationConfigIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/config/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmAuthenticationConfigIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmAuthenticationExecutionsExecutionId - Delete execution
  DeleteRealmAuthenticationExecutionsExecutionId(
    req: operations.DeleteRealmAuthenticationExecutionsExecutionIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmAuthenticationExecutionsExecutionIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmAuthenticationExecutionsExecutionIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/executions/{executionId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmAuthenticationExecutionsExecutionIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmAuthenticationFlowsId - Delete an authentication flow
  DeleteRealmAuthenticationFlowsId(
    req: operations.DeleteRealmAuthenticationFlowsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmAuthenticationFlowsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmAuthenticationFlowsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmAuthenticationFlowsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmAuthenticationRequiredActionsAlias - Delete required action
  DeleteRealmAuthenticationRequiredActionsAlias(
    req: operations.DeleteRealmAuthenticationRequiredActionsAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmAuthenticationRequiredActionsAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmAuthenticationRequiredActionsAliasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/required-actions/{alias}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmAuthenticationRequiredActionsAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmClientScopesId1ProtocolMappersModelsId2 - Delete the mapper
  DeleteRealmClientScopesId1ProtocolMappersModelsId2(
    req: operations.DeleteRealmClientScopesId1ProtocolMappersModelsId2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientScopesId1ProtocolMappersModelsId2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientScopesId1ProtocolMappersModelsId2Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmClientScopesId1ProtocolMappersModelsId2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmClientScopesId - Delete the client scope
  DeleteRealmClientScopesId(
    req: operations.DeleteRealmClientScopesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientScopesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientScopesIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmClientScopesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmClientScopesIdScopeMappingsClientsClient - Remove client-level roles from the client’s scope.
  DeleteRealmClientScopesIdScopeMappingsClientsClient(
    req: operations.DeleteRealmClientScopesIdScopeMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientScopesIdScopeMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientScopesIdScopeMappingsClientsClientRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .delete(url, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmClientScopesIdScopeMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmClientScopesIdScopeMappingsRealm - Remove a set of realm-level roles from the client’s scope
  DeleteRealmClientScopesIdScopeMappingsRealm(
    req: operations.DeleteRealmClientScopesIdScopeMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientScopesIdScopeMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientScopesIdScopeMappingsRealmRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .delete(url, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmClientScopesIdScopeMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmClientsId1ProtocolMappersModelsId2 - Delete the mapper
  DeleteRealmClientsId1ProtocolMappersModelsId2(
    req: operations.DeleteRealmClientsId1ProtocolMappersModelsId2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientsId1ProtocolMappersModelsId2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientsId1ProtocolMappersModelsId2Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id1}/protocol-mappers/models/{id2}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmClientsId1ProtocolMappersModelsId2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmClientsId - Delete the client
  DeleteRealmClientsId(
    req: operations.DeleteRealmClientsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmClientsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteRealmClientsIdDefaultClientScopesClientScopeId(
    req: operations.DeleteRealmClientsIdDefaultClientScopesClientScopeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientsIdDefaultClientScopesClientScopeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientsIdDefaultClientScopesClientScopeIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/default-client-scopes/{clientScopeId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmClientsIdDefaultClientScopesClientScopeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmClientsIdNodesNode - Unregister a cluster node from the client
  DeleteRealmClientsIdNodesNode(
    req: operations.DeleteRealmClientsIdNodesNodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientsIdNodesNodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientsIdNodesNodeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/nodes/{node}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmClientsIdNodesNodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteRealmClientsIdOptionalClientScopesClientScopeId(
    req: operations.DeleteRealmClientsIdOptionalClientScopesClientScopeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientsIdOptionalClientScopesClientScopeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientsIdOptionalClientScopesClientScopeIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/optional-client-scopes/{clientScopeId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmClientsIdOptionalClientScopesClientScopeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmClientsIdRolesRoleName - Delete a role by name
  DeleteRealmClientsIdRolesRoleName(
    req: operations.DeleteRealmClientsIdRolesRoleNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientsIdRolesRoleNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientsIdRolesRoleNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmClientsIdRolesRoleNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmClientsIdRolesRoleNameComposites - Remove roles from the role’s composite
  DeleteRealmClientsIdRolesRoleNameComposites(
    req: operations.DeleteRealmClientsIdRolesRoleNameCompositesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientsIdRolesRoleNameCompositesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientsIdRolesRoleNameCompositesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/composites", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .delete(url, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmClientsIdRolesRoleNameCompositesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmClientsIdScopeMappingsClientsClient - Remove client-level roles from the client’s scope.
  DeleteRealmClientsIdScopeMappingsClientsClient(
    req: operations.DeleteRealmClientsIdScopeMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientsIdScopeMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientsIdScopeMappingsClientsClientRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .delete(url, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmClientsIdScopeMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmClientsIdScopeMappingsRealm - Remove a set of realm-level roles from the client’s scope
  DeleteRealmClientsIdScopeMappingsRealm(
    req: operations.DeleteRealmClientsIdScopeMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientsIdScopeMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientsIdScopeMappingsRealmRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/realm", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .delete(url, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmClientsIdScopeMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteRealmClientsInitialAccessId(
    req: operations.DeleteRealmClientsInitialAccessIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmClientsInitialAccessIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmClientsInitialAccessIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients-initial-access/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmClientsInitialAccessIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteRealmComponentsId(
    req: operations.DeleteRealmComponentsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmComponentsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmComponentsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/components/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmComponentsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteRealmDefaultDefaultClientScopesClientScopeId(
    req: operations.DeleteRealmDefaultDefaultClientScopesClientScopeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmDefaultDefaultClientScopesClientScopeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmDefaultDefaultClientScopesClientScopeIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/default-default-client-scopes/{clientScopeId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmDefaultDefaultClientScopesClientScopeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteRealmDefaultGroupsGroupId(
    req: operations.DeleteRealmDefaultGroupsGroupIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmDefaultGroupsGroupIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmDefaultGroupsGroupIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/default-groups/{groupId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmDefaultGroupsGroupIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteRealmDefaultOptionalClientScopesClientScopeId(
    req: operations.DeleteRealmDefaultOptionalClientScopesClientScopeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmDefaultOptionalClientScopesClientScopeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmDefaultOptionalClientScopesClientScopeIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/default-optional-client-scopes/{clientScopeId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmDefaultOptionalClientScopesClientScopeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmEvents - Delete all events
  DeleteRealmEvents(
    req: operations.DeleteRealmEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmEventsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/events", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteRealmGroupsId(
    req: operations.DeleteRealmGroupsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmGroupsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmGroupsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmGroupsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmGroupsIdRoleMappingsClientsClient - Delete client-level roles from user role mapping
  DeleteRealmGroupsIdRoleMappingsClientsClient(
    req: operations.DeleteRealmGroupsIdRoleMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmGroupsIdRoleMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmGroupsIdRoleMappingsClientsClientRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .delete(url, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmGroupsIdRoleMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmGroupsIdRoleMappingsRealm - Delete realm-level role mappings
  DeleteRealmGroupsIdRoleMappingsRealm(
    req: operations.DeleteRealmGroupsIdRoleMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmGroupsIdRoleMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmGroupsIdRoleMappingsRealmRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/realm", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .delete(url, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmGroupsIdRoleMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmIdentityProviderInstancesAlias - Delete the identity provider
  DeleteRealmIdentityProviderInstancesAlias(
    req: operations.DeleteRealmIdentityProviderInstancesAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmIdentityProviderInstancesAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmIdentityProviderInstancesAliasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmIdentityProviderInstancesAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmIdentityProviderInstancesAliasMappersId - Delete a mapper for the identity provider
  DeleteRealmIdentityProviderInstancesAliasMappersId(
    req: operations.DeleteRealmIdentityProviderInstancesAliasMappersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmIdentityProviderInstancesAliasMappersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmIdentityProviderInstancesAliasMappersIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/mappers/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmIdentityProviderInstancesAliasMappersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmRolesByIdRoleId - Delete the role
  DeleteRealmRolesByIdRoleId(
    req: operations.DeleteRealmRolesByIdRoleIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmRolesByIdRoleIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmRolesByIdRoleIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmRolesByIdRoleIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmRolesByIdRoleIdComposites - Remove a set of roles from the role’s composite
  DeleteRealmRolesByIdRoleIdComposites(
    req: operations.DeleteRealmRolesByIdRoleIdCompositesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmRolesByIdRoleIdCompositesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmRolesByIdRoleIdCompositesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}/composites", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .delete(url, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmRolesByIdRoleIdCompositesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmRolesRoleName - Delete a role by name
  DeleteRealmRolesRoleName(
    req: operations.DeleteRealmRolesRoleNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmRolesRoleNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmRolesRoleNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmRolesRoleNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmRolesRoleNameComposites - Remove roles from the role’s composite
  DeleteRealmRolesRoleNameComposites(
    req: operations.DeleteRealmRolesRoleNameCompositesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmRolesRoleNameCompositesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmRolesRoleNameCompositesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/composites", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .delete(url, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmRolesRoleNameCompositesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmSessionsSession - Remove a specific user session.
  DeleteRealmSessionsSession(
    req: operations.DeleteRealmSessionsSessionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmSessionsSessionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmSessionsSessionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/sessions/{session}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmSessionsSessionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmUsersId - Delete the user
  DeleteRealmUsersId(
    req: operations.DeleteRealmUsersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmUsersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmUsersIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmUsersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmUsersIdConsentsClient - Revoke consent and offline tokens for particular client from user
  DeleteRealmUsersIdConsentsClient(
    req: operations.DeleteRealmUsersIdConsentsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmUsersIdConsentsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmUsersIdConsentsClientRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/consents/{client}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmUsersIdConsentsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmUsersIdCredentialsCredentialId - Remove a credential for a user
  DeleteRealmUsersIdCredentialsCredentialId(
    req: operations.DeleteRealmUsersIdCredentialsCredentialIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmUsersIdCredentialsCredentialIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmUsersIdCredentialsCredentialIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/credentials/{credentialId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmUsersIdCredentialsCredentialIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmUsersIdFederatedIdentityProvider - Remove a social login provider from user
  DeleteRealmUsersIdFederatedIdentityProvider(
    req: operations.DeleteRealmUsersIdFederatedIdentityProviderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmUsersIdFederatedIdentityProviderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmUsersIdFederatedIdentityProviderRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/federated-identity/{provider}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmUsersIdFederatedIdentityProviderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteRealmUsersIdGroupsGroupId(
    req: operations.DeleteRealmUsersIdGroupsGroupIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmUsersIdGroupsGroupIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmUsersIdGroupsGroupIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/groups/{groupId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmUsersIdGroupsGroupIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmUsersIdRoleMappingsClientsClient - Delete client-level roles from user role mapping
  DeleteRealmUsersIdRoleMappingsClientsClient(
    req: operations.DeleteRealmUsersIdRoleMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmUsersIdRoleMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmUsersIdRoleMappingsClientsClientRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .delete(url, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmUsersIdRoleMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRealmUsersIdRoleMappingsRealm - Delete realm-level role mappings
  DeleteRealmUsersIdRoleMappingsRealm(
    req: operations.DeleteRealmUsersIdRoleMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRealmUsersIdRoleMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRealmUsersIdRoleMappingsRealmRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/realm", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .delete(url, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRealmUsersIdRoleMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Get - Get themes, social providers, auth providers, and event listeners available on this server
  Get(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.serverInfoRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetIdName - Need this for admin console to display simple name of provider when displaying client detail   KEYCLOAK-4328
  GetIdName(
    req: operations.GetIdNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIdNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIdNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{id}/name", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetIdNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.getIdName2XxApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealm - Get the top-level representation of the realm   It will not include nested information like User and Client representations.
  GetRealm(
    req: operations.GetRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.realmRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmAdminEvents - Get admin events   Returns all admin events, or filters events based on URL query parameters listed here
  GetRealmAdminEvents(
    req: operations.GetRealmAdminEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAdminEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAdminEventsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/admin-events", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmAdminEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.adminEventRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmAttackDetectionBruteForceUsersUserId - Get status of a username in brute force detection
  GetRealmAttackDetectionBruteForceUsersUserId(
    req: operations.GetRealmAttackDetectionBruteForceUsersUserIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAttackDetectionBruteForceUsersUserIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAttackDetectionBruteForceUsersUserIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/attack-detection/brute-force/users/{userId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmAttackDetectionBruteForceUsersUserIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.getRealmAttackDetectionBruteForceUsersUserId2XxApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmAuthenticationAuthenticatorProviders - Get authenticator providers   Returns a list of authenticator providers.
  GetRealmAuthenticationAuthenticatorProviders(
    req: operations.GetRealmAuthenticationAuthenticatorProvidersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationAuthenticatorProvidersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationAuthenticatorProvidersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/authenticator-providers", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmAuthenticationAuthenticatorProvidersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.getRealmAuthenticationAuthenticatorProviders2XxApplicationJsonObjects = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmAuthenticationClientAuthenticatorProviders - Get client authenticator providers   Returns a list of client authenticator providers.
  GetRealmAuthenticationClientAuthenticatorProviders(
    req: operations.GetRealmAuthenticationClientAuthenticatorProvidersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationClientAuthenticatorProvidersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationClientAuthenticatorProvidersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/client-authenticator-providers", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmAuthenticationClientAuthenticatorProvidersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.getRealmAuthenticationClientAuthenticatorProviders2XxApplicationJsonObjects = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmAuthenticationConfigDescriptionProviderId - Get authenticator provider’s configuration description
  GetRealmAuthenticationConfigDescriptionProviderId(
    req: operations.GetRealmAuthenticationConfigDescriptionProviderIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationConfigDescriptionProviderIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationConfigDescriptionProviderIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/config-description/{providerId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmAuthenticationConfigDescriptionProviderIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.authenticatorConfigInfoRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmAuthenticationConfigId - Get authenticator configuration
  GetRealmAuthenticationConfigId(
    req: operations.GetRealmAuthenticationConfigIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationConfigIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationConfigIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/config/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmAuthenticationConfigIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.authenticatorConfigRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmAuthenticationExecutionsExecutionId - Get Single Execution
  GetRealmAuthenticationExecutionsExecutionId(
    req: operations.GetRealmAuthenticationExecutionsExecutionIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationExecutionsExecutionIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationExecutionsExecutionIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/executions/{executionId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmAuthenticationExecutionsExecutionIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmAuthenticationFlows - Get authentication flows   Returns a list of authentication flows.
  GetRealmAuthenticationFlows(
    req: operations.GetRealmAuthenticationFlowsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationFlowsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationFlowsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/flows", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmAuthenticationFlowsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.authenticationFlowRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmAuthenticationFlowsFlowAliasExecutions - Get authentication executions for a flow
  GetRealmAuthenticationFlowsFlowAliasExecutions(
    req: operations.GetRealmAuthenticationFlowsFlowAliasExecutionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationFlowsFlowAliasExecutionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationFlowsFlowAliasExecutionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{flowAlias}/executions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmAuthenticationFlowsFlowAliasExecutionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmAuthenticationFlowsId - Get authentication flow for id
  GetRealmAuthenticationFlowsId(
    req: operations.GetRealmAuthenticationFlowsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationFlowsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationFlowsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmAuthenticationFlowsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.authenticationFlowRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmAuthenticationFormActionProviders - Get form action providers   Returns a list of form action providers.
  GetRealmAuthenticationFormActionProviders(
    req: operations.GetRealmAuthenticationFormActionProvidersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationFormActionProvidersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationFormActionProvidersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/form-action-providers", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmAuthenticationFormActionProvidersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.getRealmAuthenticationFormActionProviders2XxApplicationJsonObjects = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmAuthenticationFormProviders - Get form providers   Returns a list of form providers.
  GetRealmAuthenticationFormProviders(
    req: operations.GetRealmAuthenticationFormProvidersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationFormProvidersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationFormProvidersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/form-providers", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmAuthenticationFormProvidersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.getRealmAuthenticationFormProviders2XxApplicationJsonObjects = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmAuthenticationPerClientConfigDescription - Get configuration descriptions for all clients
  GetRealmAuthenticationPerClientConfigDescription(
    req: operations.GetRealmAuthenticationPerClientConfigDescriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationPerClientConfigDescriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationPerClientConfigDescriptionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/per-client-config-description", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmAuthenticationPerClientConfigDescriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.getRealmAuthenticationPerClientConfigDescription2XxApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmAuthenticationRequiredActions - Get required actions   Returns a list of required actions.
  GetRealmAuthenticationRequiredActions(
    req: operations.GetRealmAuthenticationRequiredActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationRequiredActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationRequiredActionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/required-actions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmAuthenticationRequiredActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.requiredActionProviderRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmAuthenticationRequiredActionsAlias - Get required action for alias
  GetRealmAuthenticationRequiredActionsAlias(
    req: operations.GetRealmAuthenticationRequiredActionsAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationRequiredActionsAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationRequiredActionsAliasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/required-actions/{alias}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmAuthenticationRequiredActionsAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.requiredActionProviderRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmAuthenticationUnregisteredRequiredActions - Get unregistered required actions   Returns a list of unregistered required actions.
  GetRealmAuthenticationUnregisteredRequiredActions(
    req: operations.GetRealmAuthenticationUnregisteredRequiredActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmAuthenticationUnregisteredRequiredActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmAuthenticationUnregisteredRequiredActionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/unregistered-required-actions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmAuthenticationUnregisteredRequiredActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.getRealmAuthenticationUnregisteredRequiredActions2XxApplicationJsonObjects = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientRegistrationPolicyProviders - Base path for retrieve providers with the configProperties properly filled
  GetRealmClientRegistrationPolicyProviders(
    req: operations.GetRealmClientRegistrationPolicyProvidersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientRegistrationPolicyProvidersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientRegistrationPolicyProvidersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-registration-policy/providers", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientRegistrationPolicyProvidersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.componentTypeRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientScopes - Get client scopes belonging to the realm   Returns a list of client scopes belonging to the realm
  GetRealmClientScopes(
    req: operations.GetRealmClientScopesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientScopesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.clientScopeRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientScopesId1ProtocolMappersModelsId2 - Get mapper by id
  GetRealmClientScopesId1ProtocolMappersModelsId2(
    req: operations.GetRealmClientScopesId1ProtocolMappersModelsId2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesId1ProtocolMappersModelsId2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesId1ProtocolMappersModelsId2Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientScopesId1ProtocolMappersModelsId2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMapperRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientScopesId - Get representation of the client scope
  GetRealmClientScopesId(
    req: operations.GetRealmClientScopesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientScopesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.clientScopeRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientScopesIdProtocolMappersModels - Get mappers
  GetRealmClientScopesIdProtocolMappersModels(
    req: operations.GetRealmClientScopesIdProtocolMappersModelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesIdProtocolMappersModelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesIdProtocolMappersModelsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/protocol-mappers/models", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientScopesIdProtocolMappersModelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMapperRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientScopesIdProtocolMappersProtocolProtocol - Get mappers by name for a specific protocol
  GetRealmClientScopesIdProtocolMappersProtocolProtocol(
    req: operations.GetRealmClientScopesIdProtocolMappersProtocolProtocolRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesIdProtocolMappersProtocolProtocolResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesIdProtocolMappersProtocolProtocolRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/protocol-mappers/protocol/{protocol}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientScopesIdProtocolMappersProtocolProtocolResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMapperRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientScopesIdScopeMappings - Get all scope mappings for the client
  GetRealmClientScopesIdScopeMappings(
    req: operations.GetRealmClientScopesIdScopeMappingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesIdScopeMappingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesIdScopeMappingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientScopesIdScopeMappingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.mappingsRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientScopesIdScopeMappingsClientsClient - Get the roles associated with a client’s scope   Returns roles for the client.
  GetRealmClientScopesIdScopeMappingsClientsClient(
    req: operations.GetRealmClientScopesIdScopeMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesIdScopeMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesIdScopeMappingsClientsClientRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientScopesIdScopeMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientScopesIdScopeMappingsClientsClientAvailable - The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
  GetRealmClientScopesIdScopeMappingsClientsClientAvailable(
    req: operations.GetRealmClientScopesIdScopeMappingsClientsClientAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesIdScopeMappingsClientsClientAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesIdScopeMappingsClientsClientAvailableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}/available", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientScopesIdScopeMappingsClientsClientAvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientScopesIdScopeMappingsClientsClientComposite - Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
  GetRealmClientScopesIdScopeMappingsClientsClientComposite(
    req: operations.GetRealmClientScopesIdScopeMappingsClientsClientCompositeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesIdScopeMappingsClientsClientCompositeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesIdScopeMappingsClientsClientCompositeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}/composite", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientScopesIdScopeMappingsClientsClientCompositeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientScopesIdScopeMappingsRealm - Get realm-level roles associated with the client’s scope
  GetRealmClientScopesIdScopeMappingsRealm(
    req: operations.GetRealmClientScopesIdScopeMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesIdScopeMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesIdScopeMappingsRealmRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientScopesIdScopeMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientScopesIdScopeMappingsRealmAvailable - Get realm-level roles that are available to attach to this client’s scope
  GetRealmClientScopesIdScopeMappingsRealmAvailable(
    req: operations.GetRealmClientScopesIdScopeMappingsRealmAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesIdScopeMappingsRealmAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesIdScopeMappingsRealmAvailableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm/available", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientScopesIdScopeMappingsRealmAvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientScopesIdScopeMappingsRealmComposite - Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
  GetRealmClientScopesIdScopeMappingsRealmComposite(
    req: operations.GetRealmClientScopesIdScopeMappingsRealmCompositeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientScopesIdScopeMappingsRealmCompositeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientScopesIdScopeMappingsRealmCompositeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm/composite", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientScopesIdScopeMappingsRealmCompositeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientSessionStats - Get client session stats   Returns a JSON map.
  GetRealmClientSessionStats(
    req: operations.GetRealmClientSessionStatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientSessionStatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientSessionStatsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-session-stats", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientSessionStatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.getRealmClientSessionStats2XxApplicationJsonObjects = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClients - Get clients belonging to the realm   Returns a list of clients belonging to the realm
  GetRealmClients(
    req: operations.GetRealmClientsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmClientsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.clientRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsId1ProtocolMappersModelsId2 - Get mapper by id
  GetRealmClientsId1ProtocolMappersModelsId2(
    req: operations.GetRealmClientsId1ProtocolMappersModelsId2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsId1ProtocolMappersModelsId2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsId1ProtocolMappersModelsId2Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id1}/protocol-mappers/models/{id2}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsId1ProtocolMappersModelsId2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMapperRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsId - Get representation of the client
  GetRealmClientsId(
    req: operations.GetRealmClientsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.clientRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdCertificatesAttr - Get key info
  GetRealmClientsIdCertificatesAttr(
    req: operations.GetRealmClientsIdCertificatesAttrRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdCertificatesAttrResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdCertificatesAttrRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/certificates/{attr}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdCertificatesAttrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.certificateRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdClientSecret - Get the client secret
  GetRealmClientsIdClientSecret(
    req: operations.GetRealmClientsIdClientSecretRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdClientSecretResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdClientSecretRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/client-secret", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdClientSecretResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.credentialRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdDefaultClientScopes - Get default client scopes.
  GetRealmClientsIdDefaultClientScopes(
    req: operations.GetRealmClientsIdDefaultClientScopesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdDefaultClientScopesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdDefaultClientScopesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/default-client-scopes", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdDefaultClientScopesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.clientScopeRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdEvaluateScopesGenerateExampleAccessToken - Create JSON with payload of example access token
  GetRealmClientsIdEvaluateScopesGenerateExampleAccessToken(
    req: operations.GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/evaluate-scopes/generate-example-access-token", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.accessToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdEvaluateScopesProtocolMappers - Return list of all protocol mappers, which will be used when generating tokens issued for particular client.
  GetRealmClientsIdEvaluateScopesProtocolMappers(
    req: operations.GetRealmClientsIdEvaluateScopesProtocolMappersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdEvaluateScopesProtocolMappersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdEvaluateScopesProtocolMappersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/evaluate-scopes/protocol-mappers", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmClientsIdEvaluateScopesProtocolMappersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.clientScopeEvaluateResourceProtocolMapperEvaluationRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGranted - Get effective scope mapping of all roles of particular role container, which this client is defacto allowed to have in the accessToken issued for him.
  GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGranted(
    req: operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/evaluate-scopes/scope-mappings/{roleContainerId}/granted", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGranted - Get roles, which this client doesn’t have scope for and can’t have them in the accessToken issued for him.
  GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGranted(
    req: operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/evaluate-scopes/scope-mappings/{roleContainerId}/not-granted", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetRealmClientsIdInstallationProvidersProviderId(
    req: operations.GetRealmClientsIdInstallationProvidersProviderIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdInstallationProvidersProviderIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdInstallationProvidersProviderIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/installation/providers/{providerId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdInstallationProvidersProviderIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
  GetRealmClientsIdManagementPermissions(
    req: operations.GetRealmClientsIdManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdManagementPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/management/permissions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdOfflineSessionCount - Get application offline session count   Returns a number of offline user sessions associated with this client   {      "count": number  }
  GetRealmClientsIdOfflineSessionCount(
    req: operations.GetRealmClientsIdOfflineSessionCountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdOfflineSessionCountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdOfflineSessionCountRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/offline-session-count", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdOfflineSessionCountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.getRealmClientsIdOfflineSessionCount2XxApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdOfflineSessions - Get offline sessions for client   Returns a list of offline user sessions associated with this client
  GetRealmClientsIdOfflineSessions(
    req: operations.GetRealmClientsIdOfflineSessionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdOfflineSessionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdOfflineSessionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/offline-sessions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmClientsIdOfflineSessionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.userSessionRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdOptionalClientScopes - Get optional client scopes.
  GetRealmClientsIdOptionalClientScopes(
    req: operations.GetRealmClientsIdOptionalClientScopesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdOptionalClientScopesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdOptionalClientScopesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/optional-client-scopes", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdOptionalClientScopesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.clientScopeRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdProtocolMappersModels - Get mappers
  GetRealmClientsIdProtocolMappersModels(
    req: operations.GetRealmClientsIdProtocolMappersModelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdProtocolMappersModelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdProtocolMappersModelsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/protocol-mappers/models", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdProtocolMappersModelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMapperRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdProtocolMappersProtocolProtocol - Get mappers by name for a specific protocol
  GetRealmClientsIdProtocolMappersProtocolProtocol(
    req: operations.GetRealmClientsIdProtocolMappersProtocolProtocolRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdProtocolMappersProtocolProtocolResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdProtocolMappersProtocolProtocolRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/protocol-mappers/protocol/{protocol}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdProtocolMappersProtocolProtocolResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMapperRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdRoles - Get all roles for the realm or client
  GetRealmClientsIdRoles(
    req: operations.GetRealmClientsIdRolesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdRolesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdRolesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmClientsIdRolesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdRolesRoleName - Get a role by name
  GetRealmClientsIdRolesRoleName(
    req: operations.GetRealmClientsIdRolesRoleNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdRolesRoleNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdRolesRoleNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdRolesRoleNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdRolesRoleNameComposites - Get composites of the role
  GetRealmClientsIdRolesRoleNameComposites(
    req: operations.GetRealmClientsIdRolesRoleNameCompositesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdRolesRoleNameCompositesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdRolesRoleNameCompositesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/composites", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdRolesRoleNameCompositesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdRolesRoleNameCompositesClientsClient - An app-level roles for the specified app for the role’s composite
  GetRealmClientsIdRolesRoleNameCompositesClientsClient(
    req: operations.GetRealmClientsIdRolesRoleNameCompositesClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdRolesRoleNameCompositesClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdRolesRoleNameCompositesClientsClientRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/composites/clients/{client}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdRolesRoleNameCompositesClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdRolesRoleNameCompositesRealm - Get realm-level roles of the role’s composite
  GetRealmClientsIdRolesRoleNameCompositesRealm(
    req: operations.GetRealmClientsIdRolesRoleNameCompositesRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdRolesRoleNameCompositesRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdRolesRoleNameCompositesRealmRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/composites/realm", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdRolesRoleNameCompositesRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdRolesRoleNameGroups - Return List of Groups that have the specified role name
  GetRealmClientsIdRolesRoleNameGroups(
    req: operations.GetRealmClientsIdRolesRoleNameGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdRolesRoleNameGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdRolesRoleNameGroupsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/groups", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmClientsIdRolesRoleNameGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.groupRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdRolesRoleNameManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
  GetRealmClientsIdRolesRoleNameManagementPermissions(
    req: operations.GetRealmClientsIdRolesRoleNameManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdRolesRoleNameManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdRolesRoleNameManagementPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/management/permissions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdRolesRoleNameManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdRolesRoleNameUsers - Return List of Users that have the specified role name
  GetRealmClientsIdRolesRoleNameUsers(
    req: operations.GetRealmClientsIdRolesRoleNameUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdRolesRoleNameUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdRolesRoleNameUsersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/users", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmClientsIdRolesRoleNameUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.userRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdScopeMappings - Get all scope mappings for the client
  GetRealmClientsIdScopeMappings(
    req: operations.GetRealmClientsIdScopeMappingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdScopeMappingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdScopeMappingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdScopeMappingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.mappingsRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdScopeMappingsClientsClient - Get the roles associated with a client’s scope   Returns roles for the client.
  GetRealmClientsIdScopeMappingsClientsClient(
    req: operations.GetRealmClientsIdScopeMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdScopeMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdScopeMappingsClientsClientRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdScopeMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdScopeMappingsClientsClientAvailable - The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
  GetRealmClientsIdScopeMappingsClientsClientAvailable(
    req: operations.GetRealmClientsIdScopeMappingsClientsClientAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdScopeMappingsClientsClientAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdScopeMappingsClientsClientAvailableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}/available", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdScopeMappingsClientsClientAvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdScopeMappingsClientsClientComposite - Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
  GetRealmClientsIdScopeMappingsClientsClientComposite(
    req: operations.GetRealmClientsIdScopeMappingsClientsClientCompositeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdScopeMappingsClientsClientCompositeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdScopeMappingsClientsClientCompositeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}/composite", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdScopeMappingsClientsClientCompositeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdScopeMappingsRealm - Get realm-level roles associated with the client’s scope
  GetRealmClientsIdScopeMappingsRealm(
    req: operations.GetRealmClientsIdScopeMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdScopeMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdScopeMappingsRealmRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/realm", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdScopeMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdScopeMappingsRealmAvailable - Get realm-level roles that are available to attach to this client’s scope
  GetRealmClientsIdScopeMappingsRealmAvailable(
    req: operations.GetRealmClientsIdScopeMappingsRealmAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdScopeMappingsRealmAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdScopeMappingsRealmAvailableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/realm/available", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdScopeMappingsRealmAvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdScopeMappingsRealmComposite - Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
  GetRealmClientsIdScopeMappingsRealmComposite(
    req: operations.GetRealmClientsIdScopeMappingsRealmCompositeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdScopeMappingsRealmCompositeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdScopeMappingsRealmCompositeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/realm/composite", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdScopeMappingsRealmCompositeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdServiceAccountUser - Get a user dedicated to the service account
  GetRealmClientsIdServiceAccountUser(
    req: operations.GetRealmClientsIdServiceAccountUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdServiceAccountUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdServiceAccountUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/service-account-user", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdServiceAccountUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.userRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdSessionCount - Get application session count   Returns a number of user sessions associated with this client   {      "count": number  }
  GetRealmClientsIdSessionCount(
    req: operations.GetRealmClientsIdSessionCountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdSessionCountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdSessionCountRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/session-count", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdSessionCountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.getRealmClientsIdSessionCount2XxApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdTestNodesAvailable - Test if registered cluster nodes are available   Tests availability by sending 'ping' request to all cluster nodes.
  GetRealmClientsIdTestNodesAvailable(
    req: operations.GetRealmClientsIdTestNodesAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdTestNodesAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdTestNodesAvailableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/test-nodes-available", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsIdTestNodesAvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.globalRequestResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmClientsIdUserSessions - Get user sessions for client   Returns a list of user sessions associated with this client
  GetRealmClientsIdUserSessions(
    req: operations.GetRealmClientsIdUserSessionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsIdUserSessionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsIdUserSessionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/user-sessions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmClientsIdUserSessionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.userSessionRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetRealmClientsInitialAccess(
    req: operations.GetRealmClientsInitialAccessRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmClientsInitialAccessResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmClientsInitialAccessRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients-initial-access", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmClientsInitialAccessResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.clientInitialAccessPresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetRealmComponents(
    req: operations.GetRealmComponentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmComponentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmComponentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/components", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmComponentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.componentRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetRealmComponentsId(
    req: operations.GetRealmComponentsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmComponentsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmComponentsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/components/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmComponentsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.componentRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmComponentsIdSubComponentTypes - List of subcomponent types that are available to configure for a particular parent component.
  GetRealmComponentsIdSubComponentTypes(
    req: operations.GetRealmComponentsIdSubComponentTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmComponentsIdSubComponentTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmComponentsIdSubComponentTypesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/components/{id}/sub-component-types", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmComponentsIdSubComponentTypesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.componentTypeRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetRealmCredentialRegistrators(
    req: operations.GetRealmCredentialRegistratorsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmCredentialRegistratorsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmCredentialRegistratorsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/credential-registrators", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmCredentialRegistratorsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.getRealmCredentialRegistrators2XxApplicationJsonStrings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmDefaultDefaultClientScopes - Get realm default client scopes.
  GetRealmDefaultDefaultClientScopes(
    req: operations.GetRealmDefaultDefaultClientScopesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmDefaultDefaultClientScopesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmDefaultDefaultClientScopesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/default-default-client-scopes", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmDefaultDefaultClientScopesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.clientScopeRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmDefaultGroups - Get group hierarchy.
  GetRealmDefaultGroups(
    req: operations.GetRealmDefaultGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmDefaultGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmDefaultGroupsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/default-groups", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmDefaultGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.groupRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmDefaultOptionalClientScopes - Get realm optional client scopes.
  GetRealmDefaultOptionalClientScopes(
    req: operations.GetRealmDefaultOptionalClientScopesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmDefaultOptionalClientScopesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmDefaultOptionalClientScopesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/default-optional-client-scopes", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmDefaultOptionalClientScopesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.clientScopeRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmEvents - Get events   Returns all events, or filters them based on URL query parameters listed here
  GetRealmEvents(
    req: operations.GetRealmEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmEventsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/events", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.eventRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmEventsConfig - Get the events provider configuration   Returns JSON object with events provider configuration
  GetRealmEventsConfig(
    req: operations.GetRealmEventsConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmEventsConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmEventsConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/events/config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmEventsConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.realmEventsConfigRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetRealmGroupByPathPath(
    req: operations.GetRealmGroupByPathPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupByPathPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupByPathPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/group-by-path/{path}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmGroupByPathPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.groupRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmGroups - Get group hierarchy.
  GetRealmGroups(
    req: operations.GetRealmGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.groupRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmGroupsCount - Returns the groups counts.
  GetRealmGroupsCount(
    req: operations.GetRealmGroupsCountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsCountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsCountRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/count", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmGroupsCountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.getRealmGroupsCount2XxApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetRealmGroupsId(
    req: operations.GetRealmGroupsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmGroupsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.groupRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmGroupsIdManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
  GetRealmGroupsIdManagementPermissions(
    req: operations.GetRealmGroupsIdManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsIdManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsIdManagementPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/management/permissions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmGroupsIdManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmGroupsIdMembers - Get users   Returns a list of users, filtered according to query parameters
  GetRealmGroupsIdMembers(
    req: operations.GetRealmGroupsIdMembersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsIdMembersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsIdMembersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/members", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmGroupsIdMembersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.userRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmGroupsIdRoleMappings - Get role mappings
  GetRealmGroupsIdRoleMappings(
    req: operations.GetRealmGroupsIdRoleMappingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsIdRoleMappingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsIdRoleMappingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmGroupsIdRoleMappingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.mappingsRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmGroupsIdRoleMappingsClientsClient - Get client-level role mappings for the user, and the app
  GetRealmGroupsIdRoleMappingsClientsClient(
    req: operations.GetRealmGroupsIdRoleMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsIdRoleMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsIdRoleMappingsClientsClientRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmGroupsIdRoleMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmGroupsIdRoleMappingsClientsClientAvailable - Get available client-level roles that can be mapped to the user
  GetRealmGroupsIdRoleMappingsClientsClientAvailable(
    req: operations.GetRealmGroupsIdRoleMappingsClientsClientAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsIdRoleMappingsClientsClientAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsIdRoleMappingsClientsClientAvailableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}/available", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmGroupsIdRoleMappingsClientsClientAvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmGroupsIdRoleMappingsClientsClientComposite - Get effective client-level role mappings   This recurses any composite roles
  GetRealmGroupsIdRoleMappingsClientsClientComposite(
    req: operations.GetRealmGroupsIdRoleMappingsClientsClientCompositeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsIdRoleMappingsClientsClientCompositeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsIdRoleMappingsClientsClientCompositeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}/composite", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmGroupsIdRoleMappingsClientsClientCompositeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmGroupsIdRoleMappingsRealm - Get realm-level role mappings
  GetRealmGroupsIdRoleMappingsRealm(
    req: operations.GetRealmGroupsIdRoleMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsIdRoleMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsIdRoleMappingsRealmRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/realm", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmGroupsIdRoleMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmGroupsIdRoleMappingsRealmAvailable - Get realm-level roles that can be mapped
  GetRealmGroupsIdRoleMappingsRealmAvailable(
    req: operations.GetRealmGroupsIdRoleMappingsRealmAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsIdRoleMappingsRealmAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsIdRoleMappingsRealmAvailableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/realm/available", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmGroupsIdRoleMappingsRealmAvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmGroupsIdRoleMappingsRealmComposite - Get effective realm-level role mappings   This will recurse all composite roles to get the result.
  GetRealmGroupsIdRoleMappingsRealmComposite(
    req: operations.GetRealmGroupsIdRoleMappingsRealmCompositeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmGroupsIdRoleMappingsRealmCompositeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmGroupsIdRoleMappingsRealmCompositeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/realm/composite", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmGroupsIdRoleMappingsRealmCompositeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmIdentityProviderInstances - Get identity providers
  GetRealmIdentityProviderInstances(
    req: operations.GetRealmIdentityProviderInstancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmIdentityProviderInstancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmIdentityProviderInstancesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmIdentityProviderInstancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.identityProviderRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmIdentityProviderInstancesAlias - Get the identity provider
  GetRealmIdentityProviderInstancesAlias(
    req: operations.GetRealmIdentityProviderInstancesAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmIdentityProviderInstancesAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmIdentityProviderInstancesAliasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmIdentityProviderInstancesAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.identityProviderRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmIdentityProviderInstancesAliasExport - Export public broker configuration for identity provider
  GetRealmIdentityProviderInstancesAliasExport(
    req: operations.GetRealmIdentityProviderInstancesAliasExportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmIdentityProviderInstancesAliasExportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmIdentityProviderInstancesAliasExportRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/export", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmIdentityProviderInstancesAliasExportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmIdentityProviderInstancesAliasManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
  GetRealmIdentityProviderInstancesAliasManagementPermissions(
    req: operations.GetRealmIdentityProviderInstancesAliasManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmIdentityProviderInstancesAliasManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmIdentityProviderInstancesAliasManagementPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/management/permissions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmIdentityProviderInstancesAliasManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmIdentityProviderInstancesAliasMapperTypes - Get mapper types for identity provider
  GetRealmIdentityProviderInstancesAliasMapperTypes(
    req: operations.GetRealmIdentityProviderInstancesAliasMapperTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmIdentityProviderInstancesAliasMapperTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmIdentityProviderInstancesAliasMapperTypesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/mapper-types", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmIdentityProviderInstancesAliasMapperTypesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmIdentityProviderInstancesAliasMappers - Get mappers for identity provider
  GetRealmIdentityProviderInstancesAliasMappers(
    req: operations.GetRealmIdentityProviderInstancesAliasMappersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmIdentityProviderInstancesAliasMappersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmIdentityProviderInstancesAliasMappersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/mappers", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmIdentityProviderInstancesAliasMappersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.identityProviderMapperRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmIdentityProviderInstancesAliasMappersId - Get mapper by id for the identity provider
  GetRealmIdentityProviderInstancesAliasMappersId(
    req: operations.GetRealmIdentityProviderInstancesAliasMappersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmIdentityProviderInstancesAliasMappersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmIdentityProviderInstancesAliasMappersIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/mappers/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmIdentityProviderInstancesAliasMappersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.identityProviderMapperRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmIdentityProviderProvidersProviderId - Get identity providers
  GetRealmIdentityProviderProvidersProviderId(
    req: operations.GetRealmIdentityProviderProvidersProviderIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmIdentityProviderProvidersProviderIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmIdentityProviderProvidersProviderIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/providers/{provider_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmIdentityProviderProvidersProviderIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetRealmKeys(
    req: operations.GetRealmKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/keys", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.keysMetadataRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmRoles - Get all roles for the realm or client
  GetRealmRoles(
    req: operations.GetRealmRolesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmRolesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmRolesByIdRoleId - Get a specific role’s representation
  GetRealmRolesByIdRoleId(
    req: operations.GetRealmRolesByIdRoleIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesByIdRoleIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesByIdRoleIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmRolesByIdRoleIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmRolesByIdRoleIdComposites - Get role’s children   Returns a set of role’s children provided the role is a composite.
  GetRealmRolesByIdRoleIdComposites(
    req: operations.GetRealmRolesByIdRoleIdCompositesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesByIdRoleIdCompositesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesByIdRoleIdCompositesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}/composites", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmRolesByIdRoleIdCompositesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmRolesByIdRoleIdCompositesClientsClient - Get client-level roles for the client that are in the role’s composite
  GetRealmRolesByIdRoleIdCompositesClientsClient(
    req: operations.GetRealmRolesByIdRoleIdCompositesClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesByIdRoleIdCompositesClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesByIdRoleIdCompositesClientsClientRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}/composites/clients/{client}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmRolesByIdRoleIdCompositesClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmRolesByIdRoleIdCompositesRealm - Get realm-level roles that are in the role’s composite
  GetRealmRolesByIdRoleIdCompositesRealm(
    req: operations.GetRealmRolesByIdRoleIdCompositesRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesByIdRoleIdCompositesRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesByIdRoleIdCompositesRealmRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}/composites/realm", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmRolesByIdRoleIdCompositesRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmRolesByIdRoleIdManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
  GetRealmRolesByIdRoleIdManagementPermissions(
    req: operations.GetRealmRolesByIdRoleIdManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesByIdRoleIdManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesByIdRoleIdManagementPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}/management/permissions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmRolesByIdRoleIdManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmRolesRoleName - Get a role by name
  GetRealmRolesRoleName(
    req: operations.GetRealmRolesRoleNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesRoleNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesRoleNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmRolesRoleNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmRolesRoleNameComposites - Get composites of the role
  GetRealmRolesRoleNameComposites(
    req: operations.GetRealmRolesRoleNameCompositesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesRoleNameCompositesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesRoleNameCompositesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/composites", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmRolesRoleNameCompositesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmRolesRoleNameCompositesClientsClient - An app-level roles for the specified app for the role’s composite
  GetRealmRolesRoleNameCompositesClientsClient(
    req: operations.GetRealmRolesRoleNameCompositesClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesRoleNameCompositesClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesRoleNameCompositesClientsClientRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/composites/clients/{client}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmRolesRoleNameCompositesClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmRolesRoleNameCompositesRealm - Get realm-level roles of the role’s composite
  GetRealmRolesRoleNameCompositesRealm(
    req: operations.GetRealmRolesRoleNameCompositesRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesRoleNameCompositesRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesRoleNameCompositesRealmRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/composites/realm", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmRolesRoleNameCompositesRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmRolesRoleNameGroups - Return List of Groups that have the specified role name
  GetRealmRolesRoleNameGroups(
    req: operations.GetRealmRolesRoleNameGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesRoleNameGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesRoleNameGroupsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/groups", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmRolesRoleNameGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.groupRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmRolesRoleNameManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
  GetRealmRolesRoleNameManagementPermissions(
    req: operations.GetRealmRolesRoleNameManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesRoleNameManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesRoleNameManagementPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/management/permissions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmRolesRoleNameManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmRolesRoleNameUsers - Return List of Users that have the specified role name
  GetRealmRolesRoleNameUsers(
    req: operations.GetRealmRolesRoleNameUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmRolesRoleNameUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmRolesRoleNameUsersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/users", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmRolesRoleNameUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.userRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmUserStorageIdName - Need this for admin console to display simple name of provider when displaying user detail   KEYCLOAK-4328
  GetRealmUserStorageIdName(
    req: operations.GetRealmUserStorageIdNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUserStorageIdNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUserStorageIdNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/user-storage/{id}/name", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmUserStorageIdNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.getRealmUserStorageIdName2XxApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmUsers - Get users   Returns a list of users, filtered according to query parameters
  GetRealmUsers(
    req: operations.GetRealmUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.userRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmUsersCount - Returns the number of users that match the given criteria.
  GetRealmUsersCount(
    req: operations.GetRealmUsersCountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersCountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersCountRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/count", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmUsersCountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.getRealmUsersCount2XxApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmUsersId - Get representation of the user
  GetRealmUsersId(
    req: operations.GetRealmUsersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmUsersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.userRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmUsersIdConfiguredUserStorageCredentialTypes - Return credential types, which are provided by the user storage where user is stored.
  GetRealmUsersIdConfiguredUserStorageCredentialTypes(
    req: operations.GetRealmUsersIdConfiguredUserStorageCredentialTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdConfiguredUserStorageCredentialTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdConfiguredUserStorageCredentialTypesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/configured-user-storage-credential-types", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmUsersIdConfiguredUserStorageCredentialTypesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.getRealmUsersIdConfiguredUserStorageCredentialTypes2XxApplicationJsonStrings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmUsersIdConsents - Get consents granted by the user
  GetRealmUsersIdConsents(
    req: operations.GetRealmUsersIdConsentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdConsentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdConsentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/consents", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmUsersIdConsentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.getRealmUsersIdConsents2XxApplicationJsonObjects = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetRealmUsersIdCredentials(
    req: operations.GetRealmUsersIdCredentialsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdCredentialsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdCredentialsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/credentials", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmUsersIdCredentialsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.credentialRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmUsersIdFederatedIdentity - Get social logins associated with the user
  GetRealmUsersIdFederatedIdentity(
    req: operations.GetRealmUsersIdFederatedIdentityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdFederatedIdentityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdFederatedIdentityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/federated-identity", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmUsersIdFederatedIdentityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.federatedIdentityRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetRealmUsersIdGroups(
    req: operations.GetRealmUsersIdGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdGroupsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/groups", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmUsersIdGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.groupRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetRealmUsersIdGroupsCount(
    req: operations.GetRealmUsersIdGroupsCountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdGroupsCountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdGroupsCountRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/groups/count", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.GetRealmUsersIdGroupsCountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.getRealmUsersIdGroupsCount2XxApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmUsersIdOfflineSessionsClientId - Get offline sessions associated with the user and client
  GetRealmUsersIdOfflineSessionsClientId(
    req: operations.GetRealmUsersIdOfflineSessionsClientIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdOfflineSessionsClientIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdOfflineSessionsClientIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/offline-sessions/{clientId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmUsersIdOfflineSessionsClientIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.userSessionRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmUsersIdRoleMappings - Get role mappings
  GetRealmUsersIdRoleMappings(
    req: operations.GetRealmUsersIdRoleMappingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdRoleMappingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdRoleMappingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmUsersIdRoleMappingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.mappingsRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmUsersIdRoleMappingsClientsClient - Get client-level role mappings for the user, and the app
  GetRealmUsersIdRoleMappingsClientsClient(
    req: operations.GetRealmUsersIdRoleMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdRoleMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdRoleMappingsClientsClientRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmUsersIdRoleMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmUsersIdRoleMappingsClientsClientAvailable - Get available client-level roles that can be mapped to the user
  GetRealmUsersIdRoleMappingsClientsClientAvailable(
    req: operations.GetRealmUsersIdRoleMappingsClientsClientAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdRoleMappingsClientsClientAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdRoleMappingsClientsClientAvailableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}/available", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmUsersIdRoleMappingsClientsClientAvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmUsersIdRoleMappingsClientsClientComposite - Get effective client-level role mappings   This recurses any composite roles
  GetRealmUsersIdRoleMappingsClientsClientComposite(
    req: operations.GetRealmUsersIdRoleMappingsClientsClientCompositeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdRoleMappingsClientsClientCompositeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdRoleMappingsClientsClientCompositeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}/composite", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmUsersIdRoleMappingsClientsClientCompositeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmUsersIdRoleMappingsRealm - Get realm-level role mappings
  GetRealmUsersIdRoleMappingsRealm(
    req: operations.GetRealmUsersIdRoleMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdRoleMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdRoleMappingsRealmRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/realm", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmUsersIdRoleMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmUsersIdRoleMappingsRealmAvailable - Get realm-level roles that can be mapped
  GetRealmUsersIdRoleMappingsRealmAvailable(
    req: operations.GetRealmUsersIdRoleMappingsRealmAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdRoleMappingsRealmAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdRoleMappingsRealmAvailableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/realm/available", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmUsersIdRoleMappingsRealmAvailableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmUsersIdRoleMappingsRealmComposite - Get effective realm-level role mappings   This will recurse all composite roles to get the result.
  GetRealmUsersIdRoleMappingsRealmComposite(
    req: operations.GetRealmUsersIdRoleMappingsRealmCompositeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdRoleMappingsRealmCompositeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdRoleMappingsRealmCompositeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/realm/composite", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmUsersIdRoleMappingsRealmCompositeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.roleRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRealmUsersIdSessions - Get sessions associated with the user
  GetRealmUsersIdSessions(
    req: operations.GetRealmUsersIdSessionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersIdSessionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersIdSessionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/sessions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmUsersIdSessionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.userSessionRepresentations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetRealmUsersManagementPermissions(
    req: operations.GetRealmUsersManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRealmUsersManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRealmUsersManagementPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users-management-permissions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRealmUsersManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Post - Import a realm   Imports a realm from a full representation of that realm.
  Post(
    req: operations.PostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmAuthenticationExecutions - Add new authentication execution
  PostRealmAuthenticationExecutions(
    req: operations.PostRealmAuthenticationExecutionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationExecutionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationExecutionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/executions", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmAuthenticationExecutionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmAuthenticationExecutionsExecutionIdConfig - Update execution with new configuration
  PostRealmAuthenticationExecutionsExecutionIdConfig(
    req: operations.PostRealmAuthenticationExecutionsExecutionIdConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationExecutionsExecutionIdConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationExecutionsExecutionIdConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/executions/{executionId}/config", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmAuthenticationExecutionsExecutionIdConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmAuthenticationExecutionsExecutionIdLowerPriority - Lower execution’s priority
  PostRealmAuthenticationExecutionsExecutionIdLowerPriority(
    req: operations.PostRealmAuthenticationExecutionsExecutionIdLowerPriorityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationExecutionsExecutionIdLowerPriorityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationExecutionsExecutionIdLowerPriorityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/executions/{executionId}/lower-priority", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmAuthenticationExecutionsExecutionIdLowerPriorityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmAuthenticationExecutionsExecutionIdRaisePriority - Raise execution’s priority
  PostRealmAuthenticationExecutionsExecutionIdRaisePriority(
    req: operations.PostRealmAuthenticationExecutionsExecutionIdRaisePriorityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationExecutionsExecutionIdRaisePriorityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationExecutionsExecutionIdRaisePriorityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/executions/{executionId}/raise-priority", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmAuthenticationExecutionsExecutionIdRaisePriorityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmAuthenticationFlows - Create a new authentication flow
  PostRealmAuthenticationFlows(
    req: operations.PostRealmAuthenticationFlowsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationFlowsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationFlowsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/flows", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmAuthenticationFlowsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmAuthenticationFlowsFlowAliasCopy - Copy existing authentication flow under a new name   The new name is given as 'newName' attribute of the passed JSON object
  PostRealmAuthenticationFlowsFlowAliasCopy(
    req: operations.PostRealmAuthenticationFlowsFlowAliasCopyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationFlowsFlowAliasCopyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationFlowsFlowAliasCopyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{flowAlias}/copy", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmAuthenticationFlowsFlowAliasCopyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmAuthenticationFlowsFlowAliasExecutionsExecution - Add new authentication execution to a flow
  PostRealmAuthenticationFlowsFlowAliasExecutionsExecution(
    req: operations.PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{flowAlias}/executions/execution", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmAuthenticationFlowsFlowAliasExecutionsFlow - Add new flow with new execution to existing flow
  PostRealmAuthenticationFlowsFlowAliasExecutionsFlow(
    req: operations.PostRealmAuthenticationFlowsFlowAliasExecutionsFlowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationFlowsFlowAliasExecutionsFlowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationFlowsFlowAliasExecutionsFlowRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{flowAlias}/executions/flow", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmAuthenticationFlowsFlowAliasExecutionsFlowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmAuthenticationRegisterRequiredAction - Register a new required actions
  PostRealmAuthenticationRegisterRequiredAction(
    req: operations.PostRealmAuthenticationRegisterRequiredActionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationRegisterRequiredActionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationRegisterRequiredActionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/register-required-action", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmAuthenticationRegisterRequiredActionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmAuthenticationRequiredActionsAliasLowerPriority - Lower required action’s priority
  PostRealmAuthenticationRequiredActionsAliasLowerPriority(
    req: operations.PostRealmAuthenticationRequiredActionsAliasLowerPriorityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationRequiredActionsAliasLowerPriorityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationRequiredActionsAliasLowerPriorityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/required-actions/{alias}/lower-priority", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmAuthenticationRequiredActionsAliasLowerPriorityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmAuthenticationRequiredActionsAliasRaisePriority - Raise required action’s priority
  PostRealmAuthenticationRequiredActionsAliasRaisePriority(
    req: operations.PostRealmAuthenticationRequiredActionsAliasRaisePriorityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmAuthenticationRequiredActionsAliasRaisePriorityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmAuthenticationRequiredActionsAliasRaisePriorityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/required-actions/{alias}/raise-priority", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmAuthenticationRequiredActionsAliasRaisePriorityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClearKeysCache - Clear cache of external public keys (Public keys of clients or Identity providers)
  PostRealmClearKeysCache(
    req: operations.PostRealmClearKeysCacheRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClearKeysCacheResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClearKeysCacheRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clear-keys-cache", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmClearKeysCacheResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClearRealmCache - Clear realm cache
  PostRealmClearRealmCache(
    req: operations.PostRealmClearRealmCacheRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClearRealmCacheResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClearRealmCacheRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clear-realm-cache", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmClearRealmCacheResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClearUserCache - Clear user cache
  PostRealmClearUserCache(
    req: operations.PostRealmClearUserCacheRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClearUserCacheResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClearUserCacheRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clear-user-cache", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmClearUserCacheResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientDescriptionConverter - Base path for importing clients under this realm.
  PostRealmClientDescriptionConverter(
    req: operations.PostRealmClientDescriptionConverterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientDescriptionConverterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientDescriptionConverterRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-description-converter", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmClientDescriptionConverterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.clientRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientScopes - Create a new client scope   Client Scope’s name must be unique!
  PostRealmClientScopes(
    req: operations.PostRealmClientScopesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientScopesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientScopesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmClientScopesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientScopesIdProtocolMappersAddModels - Create multiple mappers
  PostRealmClientScopesIdProtocolMappersAddModels(
    req: operations.PostRealmClientScopesIdProtocolMappersAddModelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientScopesIdProtocolMappersAddModelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientScopesIdProtocolMappersAddModelsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/protocol-mappers/add-models", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmClientScopesIdProtocolMappersAddModelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientScopesIdProtocolMappersModels - Create a mapper
  PostRealmClientScopesIdProtocolMappersModels(
    req: operations.PostRealmClientScopesIdProtocolMappersModelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientScopesIdProtocolMappersModelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientScopesIdProtocolMappersModelsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/protocol-mappers/models", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmClientScopesIdProtocolMappersModelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientScopesIdScopeMappingsClientsClient - Add client-level roles to the client’s scope
  PostRealmClientScopesIdScopeMappingsClientsClient(
    req: operations.PostRealmClientScopesIdScopeMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientScopesIdScopeMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientScopesIdScopeMappingsClientsClientRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmClientScopesIdScopeMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientScopesIdScopeMappingsRealm - Add a set of realm-level roles to the client’s scope
  PostRealmClientScopesIdScopeMappingsRealm(
    req: operations.PostRealmClientScopesIdScopeMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientScopesIdScopeMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientScopesIdScopeMappingsRealmRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmClientScopesIdScopeMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClients - Create a new client   Client’s client_id must be unique!
  PostRealmClients(
    req: operations.PostRealmClientsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmClientsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientsIdCertificatesAttrDownload - Get a keystore file for the client, containing private key and public certificate
  PostRealmClientsIdCertificatesAttrDownload(
    req: operations.PostRealmClientsIdCertificatesAttrDownloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdCertificatesAttrDownloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdCertificatesAttrDownloadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/certificates/{attr}/download", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmClientsIdCertificatesAttrDownloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/octet-stream`)) {
                res.postRealmClientsIdCertificatesAttrDownload2XxApplicationOctetStreamByteString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientsIdCertificatesAttrGenerate - Generate a new certificate with new key pair
  PostRealmClientsIdCertificatesAttrGenerate(
    req: operations.PostRealmClientsIdCertificatesAttrGenerateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdCertificatesAttrGenerateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdCertificatesAttrGenerateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/certificates/{attr}/generate", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmClientsIdCertificatesAttrGenerateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.certificateRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientsIdCertificatesAttrGenerateAndDownload - Generate a new keypair and certificate, and get the private key file   Generates a keypair and certificate and serves the private key in a specified keystore format.
  PostRealmClientsIdCertificatesAttrGenerateAndDownload(
    req: operations.PostRealmClientsIdCertificatesAttrGenerateAndDownloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdCertificatesAttrGenerateAndDownloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdCertificatesAttrGenerateAndDownloadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/certificates/{attr}/generate-and-download", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmClientsIdCertificatesAttrGenerateAndDownloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/octet-stream`)) {
                res.postRealmClientsIdCertificatesAttrGenerateAndDownload2XxApplicationOctetStreamByteString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientsIdCertificatesAttrUpload - Upload certificate and eventually private key
  PostRealmClientsIdCertificatesAttrUpload(
    req: operations.PostRealmClientsIdCertificatesAttrUploadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdCertificatesAttrUploadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdCertificatesAttrUploadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/certificates/{attr}/upload", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmClientsIdCertificatesAttrUploadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.certificateRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientsIdCertificatesAttrUploadCertificate - Upload only certificate, not private key
  PostRealmClientsIdCertificatesAttrUploadCertificate(
    req: operations.PostRealmClientsIdCertificatesAttrUploadCertificateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdCertificatesAttrUploadCertificateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdCertificatesAttrUploadCertificateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/certificates/{attr}/upload-certificate", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmClientsIdCertificatesAttrUploadCertificateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.certificateRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientsIdClientSecret - Generate a new secret for the client
  PostRealmClientsIdClientSecret(
    req: operations.PostRealmClientsIdClientSecretRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdClientSecretResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdClientSecretRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/client-secret", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmClientsIdClientSecretResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.credentialRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientsIdNodes - Register a cluster node with the client   Manually register cluster node to this client - usually it’s not needed to call this directly as adapter should handle  by sending registration request to Keycloak
  PostRealmClientsIdNodes(
    req: operations.PostRealmClientsIdNodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdNodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdNodesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/nodes", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmClientsIdNodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientsIdProtocolMappersAddModels - Create multiple mappers
  PostRealmClientsIdProtocolMappersAddModels(
    req: operations.PostRealmClientsIdProtocolMappersAddModelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdProtocolMappersAddModelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdProtocolMappersAddModelsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/protocol-mappers/add-models", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmClientsIdProtocolMappersAddModelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientsIdProtocolMappersModels - Create a mapper
  PostRealmClientsIdProtocolMappersModels(
    req: operations.PostRealmClientsIdProtocolMappersModelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdProtocolMappersModelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdProtocolMappersModelsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/protocol-mappers/models", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmClientsIdProtocolMappersModelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientsIdPushRevocation - Push the client’s revocation policy to its admin URL   If the client has an admin URL, push revocation policy to it.
  PostRealmClientsIdPushRevocation(
    req: operations.PostRealmClientsIdPushRevocationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdPushRevocationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdPushRevocationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/push-revocation", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmClientsIdPushRevocationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.globalRequestResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientsIdRegistrationAccessToken - Generate a new registration access token for the client
  PostRealmClientsIdRegistrationAccessToken(
    req: operations.PostRealmClientsIdRegistrationAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdRegistrationAccessTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdRegistrationAccessTokenRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/registration-access-token", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmClientsIdRegistrationAccessTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.clientRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientsIdRoles - Create a new role for the realm or client
  PostRealmClientsIdRoles(
    req: operations.PostRealmClientsIdRolesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdRolesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdRolesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmClientsIdRolesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientsIdRolesRoleNameComposites - Add a composite to the role
  PostRealmClientsIdRolesRoleNameComposites(
    req: operations.PostRealmClientsIdRolesRoleNameCompositesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdRolesRoleNameCompositesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdRolesRoleNameCompositesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/composites", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmClientsIdRolesRoleNameCompositesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientsIdScopeMappingsClientsClient - Add client-level roles to the client’s scope
  PostRealmClientsIdScopeMappingsClientsClient(
    req: operations.PostRealmClientsIdScopeMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdScopeMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdScopeMappingsClientsClientRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmClientsIdScopeMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientsIdScopeMappingsRealm - Add a set of realm-level roles to the client’s scope
  PostRealmClientsIdScopeMappingsRealm(
    req: operations.PostRealmClientsIdScopeMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsIdScopeMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsIdScopeMappingsRealmRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/scope-mappings/realm", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmClientsIdScopeMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmClientsInitialAccess - Create a new initial access token.
  PostRealmClientsInitialAccess(
    req: operations.PostRealmClientsInitialAccessRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmClientsInitialAccessResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmClientsInitialAccessRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients-initial-access", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmClientsInitialAccessResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.clientInitialAccessPresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostRealmComponents(
    req: operations.PostRealmComponentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmComponentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmComponentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/components", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmComponentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmGroups - create or add a top level realm groupSet or create child.
  PostRealmGroups(
    req: operations.PostRealmGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmGroupsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmGroupsIdChildren - Set or create child.
  PostRealmGroupsIdChildren(
    req: operations.PostRealmGroupsIdChildrenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmGroupsIdChildrenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmGroupsIdChildrenRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/children", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmGroupsIdChildrenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmGroupsIdRoleMappingsClientsClient - Add client-level roles to the user role mapping
  PostRealmGroupsIdRoleMappingsClientsClient(
    req: operations.PostRealmGroupsIdRoleMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmGroupsIdRoleMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmGroupsIdRoleMappingsClientsClientRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmGroupsIdRoleMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmGroupsIdRoleMappingsRealm - Add realm-level role mappings to the user
  PostRealmGroupsIdRoleMappingsRealm(
    req: operations.PostRealmGroupsIdRoleMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmGroupsIdRoleMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmGroupsIdRoleMappingsRealmRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/role-mappings/realm", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmGroupsIdRoleMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmIdentityProviderImportConfig - Import identity provider from uploaded JSON file
  PostRealmIdentityProviderImportConfig(
    req: operations.PostRealmIdentityProviderImportConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmIdentityProviderImportConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmIdentityProviderImportConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/import-config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmIdentityProviderImportConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.postRealmIdentityProviderImportConfig2XxApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmIdentityProviderInstances - Create a new identity provider
  PostRealmIdentityProviderInstances(
    req: operations.PostRealmIdentityProviderInstancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmIdentityProviderInstancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmIdentityProviderInstancesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmIdentityProviderInstancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmIdentityProviderInstancesAliasMappers - Add a mapper to identity provider
  PostRealmIdentityProviderInstancesAliasMappers(
    req: operations.PostRealmIdentityProviderInstancesAliasMappersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmIdentityProviderInstancesAliasMappersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmIdentityProviderInstancesAliasMappersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/mappers", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmIdentityProviderInstancesAliasMappersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmLogoutAll - Removes all user sessions.
  PostRealmLogoutAll(
    req: operations.PostRealmLogoutAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmLogoutAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmLogoutAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/logout-all", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmLogoutAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmPartialImport - Partial import from a JSON file to an existing realm.
  PostRealmPartialImport(
    req: operations.PostRealmPartialImportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmPartialImportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmPartialImportRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/partialImport", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmPartialImportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmPartialExport - Partial export of existing realm into a JSON file.
  PostRealmPartialExport(
    req: operations.PostRealmPartialExportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmPartialExportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmPartialExportRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/partial-export", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.PostRealmPartialExportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.realmRepresentation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmPushRevocation - Push the realm’s revocation policy to any client that has an admin url associated with it.
  PostRealmPushRevocation(
    req: operations.PostRealmPushRevocationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmPushRevocationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmPushRevocationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/push-revocation", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmPushRevocationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmRoles - Create a new role for the realm or client
  PostRealmRoles(
    req: operations.PostRealmRolesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmRolesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmRolesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmRolesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmRolesByIdRoleIdComposites - Make the role a composite role by associating some child roles
  PostRealmRolesByIdRoleIdComposites(
    req: operations.PostRealmRolesByIdRoleIdCompositesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmRolesByIdRoleIdCompositesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmRolesByIdRoleIdCompositesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}/composites", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmRolesByIdRoleIdCompositesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmRolesRoleNameComposites - Add a composite to the role
  PostRealmRolesRoleNameComposites(
    req: operations.PostRealmRolesRoleNameCompositesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmRolesRoleNameCompositesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmRolesRoleNameCompositesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/composites", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmRolesRoleNameCompositesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmTestLdapConnection - Test LDAP connection
  PostRealmTestLdapConnection(
    req: operations.PostRealmTestLdapConnectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmTestLdapConnectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmTestLdapConnectionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/testLDAPConnection", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmTestLdapConnectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostRealmTestSmtpConnection(
    req: operations.PostRealmTestSmtpConnectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmTestSmtpConnectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmTestSmtpConnectionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/testSMTPConnection", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmTestSmtpConnectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmUserStorageIdRemoveImportedUsers - Remove imported users
  PostRealmUserStorageIdRemoveImportedUsers(
    req: operations.PostRealmUserStorageIdRemoveImportedUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUserStorageIdRemoveImportedUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUserStorageIdRemoveImportedUsersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/user-storage/{id}/remove-imported-users", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmUserStorageIdRemoveImportedUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmUserStorageIdSync - Trigger sync of users   Action can be "triggerFullSync" or "triggerChangedUsersSync"
  PostRealmUserStorageIdSync(
    req: operations.PostRealmUserStorageIdSyncRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUserStorageIdSyncResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUserStorageIdSyncRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/user-storage/{id}/sync", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.PostRealmUserStorageIdSyncResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.synchronizationResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmUserStorageIdUnlinkUsers - Unlink imported users from a storage provider
  PostRealmUserStorageIdUnlinkUsers(
    req: operations.PostRealmUserStorageIdUnlinkUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUserStorageIdUnlinkUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUserStorageIdUnlinkUsersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/user-storage/{id}/unlink-users", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmUserStorageIdUnlinkUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmUserStorageParentIdMappersIdSync - Trigger sync of mapper data related to ldap mapper (roles, groups, …​)   direction is "fedToKeycloak" or "keycloakToFed"
  PostRealmUserStorageParentIdMappersIdSync(
    req: operations.PostRealmUserStorageParentIdMappersIdSyncRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUserStorageParentIdMappersIdSyncResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUserStorageParentIdMappersIdSyncRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/user-storage/{parentId}/mappers/{id}/sync", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
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
        let res: operations.PostRealmUserStorageParentIdMappersIdSyncResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.synchronizationResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmUsers - Create a new user   Username must be unique.
  PostRealmUsers(
    req: operations.PostRealmUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUsersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialId - Move a credential to a position behind another credential
  PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialId(
    req: operations.PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/credentials/{credentialId}/moveAfter/{newPreviousCredentialId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmUsersIdCredentialsCredentialIdMoveToFirst - Move a credential to a first position in the credentials list of the user
  PostRealmUsersIdCredentialsCredentialIdMoveToFirst(
    req: operations.PostRealmUsersIdCredentialsCredentialIdMoveToFirstRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUsersIdCredentialsCredentialIdMoveToFirstResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUsersIdCredentialsCredentialIdMoveToFirstRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/credentials/{credentialId}/moveToFirst", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmUsersIdCredentialsCredentialIdMoveToFirstResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmUsersIdFederatedIdentityProvider - Add a social login provider to the user
  PostRealmUsersIdFederatedIdentityProvider(
    req: operations.PostRealmUsersIdFederatedIdentityProviderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUsersIdFederatedIdentityProviderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUsersIdFederatedIdentityProviderRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/federated-identity/{provider}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmUsersIdFederatedIdentityProviderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmUsersIdImpersonation - Impersonate the user
  PostRealmUsersIdImpersonation(
    req: operations.PostRealmUsersIdImpersonationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUsersIdImpersonationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUsersIdImpersonationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/impersonation", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmUsersIdImpersonationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.postRealmUsersIdImpersonation2XxApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmUsersIdLogout - Remove all user sessions associated with the user   Also send notification to all clients that have an admin URL to invalidate the sessions for the particular user.
  PostRealmUsersIdLogout(
    req: operations.PostRealmUsersIdLogoutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUsersIdLogoutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUsersIdLogoutRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/logout", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRealmUsersIdLogoutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmUsersIdRoleMappingsClientsClient - Add client-level roles to the user role mapping
  PostRealmUsersIdRoleMappingsClientsClient(
    req: operations.PostRealmUsersIdRoleMappingsClientsClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUsersIdRoleMappingsClientsClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUsersIdRoleMappingsClientsClientRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmUsersIdRoleMappingsClientsClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRealmUsersIdRoleMappingsRealm - Add realm-level role mappings to the user
  PostRealmUsersIdRoleMappingsRealm(
    req: operations.PostRealmUsersIdRoleMappingsRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRealmUsersIdRoleMappingsRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRealmUsersIdRoleMappingsRealmRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/role-mappings/realm", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostRealmUsersIdRoleMappingsRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealm - Update the top-level information of the realm   Any user, roles or client information in the representation  will be ignored.
  PutRealm(
    req: operations.PutRealmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmAuthenticationConfigId - Update authenticator configuration
  PutRealmAuthenticationConfigId(
    req: operations.PutRealmAuthenticationConfigIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmAuthenticationConfigIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmAuthenticationConfigIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/config/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmAuthenticationConfigIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmAuthenticationFlowsFlowAliasExecutions - Update authentication executions of a flow
  PutRealmAuthenticationFlowsFlowAliasExecutions(
    req: operations.PutRealmAuthenticationFlowsFlowAliasExecutionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmAuthenticationFlowsFlowAliasExecutionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmAuthenticationFlowsFlowAliasExecutionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{flowAlias}/executions", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmAuthenticationFlowsFlowAliasExecutionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmAuthenticationFlowsId - Update an authentication flow
  PutRealmAuthenticationFlowsId(
    req: operations.PutRealmAuthenticationFlowsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmAuthenticationFlowsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmAuthenticationFlowsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/flows/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmAuthenticationFlowsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmAuthenticationRequiredActionsAlias - Update required action
  PutRealmAuthenticationRequiredActionsAlias(
    req: operations.PutRealmAuthenticationRequiredActionsAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmAuthenticationRequiredActionsAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmAuthenticationRequiredActionsAliasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/authentication/required-actions/{alias}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmAuthenticationRequiredActionsAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmClientScopesId1ProtocolMappersModelsId2 - Update the mapper
  PutRealmClientScopesId1ProtocolMappersModelsId2(
    req: operations.PutRealmClientScopesId1ProtocolMappersModelsId2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmClientScopesId1ProtocolMappersModelsId2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmClientScopesId1ProtocolMappersModelsId2Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmClientScopesId1ProtocolMappersModelsId2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmClientScopesId - Update the client scope
  PutRealmClientScopesId(
    req: operations.PutRealmClientScopesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmClientScopesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmClientScopesIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/client-scopes/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmClientScopesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmClientsId1ProtocolMappersModelsId2 - Update the mapper
  PutRealmClientsId1ProtocolMappersModelsId2(
    req: operations.PutRealmClientsId1ProtocolMappersModelsId2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmClientsId1ProtocolMappersModelsId2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmClientsId1ProtocolMappersModelsId2Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id1}/protocol-mappers/models/{id2}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmClientsId1ProtocolMappersModelsId2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmClientsId - Update the client
  PutRealmClientsId(
    req: operations.PutRealmClientsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmClientsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmClientsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmClientsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PutRealmClientsIdDefaultClientScopesClientScopeId(
    req: operations.PutRealmClientsIdDefaultClientScopesClientScopeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmClientsIdDefaultClientScopesClientScopeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmClientsIdDefaultClientScopesClientScopeIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/default-client-scopes/{clientScopeId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmClientsIdDefaultClientScopesClientScopeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmClientsIdManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
  PutRealmClientsIdManagementPermissions(
    req: operations.PutRealmClientsIdManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmClientsIdManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmClientsIdManagementPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/management/permissions", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmClientsIdManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PutRealmClientsIdOptionalClientScopesClientScopeId(
    req: operations.PutRealmClientsIdOptionalClientScopesClientScopeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmClientsIdOptionalClientScopesClientScopeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmClientsIdOptionalClientScopesClientScopeIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/optional-client-scopes/{clientScopeId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmClientsIdOptionalClientScopesClientScopeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmClientsIdRolesRoleName - Update a role by name
  PutRealmClientsIdRolesRoleName(
    req: operations.PutRealmClientsIdRolesRoleNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmClientsIdRolesRoleNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmClientsIdRolesRoleNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmClientsIdRolesRoleNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmClientsIdRolesRoleNameManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
  PutRealmClientsIdRolesRoleNameManagementPermissions(
    req: operations.PutRealmClientsIdRolesRoleNameManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmClientsIdRolesRoleNameManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmClientsIdRolesRoleNameManagementPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/clients/{id}/roles/{role-name}/management/permissions", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmClientsIdRolesRoleNameManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PutRealmComponentsId(
    req: operations.PutRealmComponentsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmComponentsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmComponentsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/components/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmComponentsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PutRealmDefaultDefaultClientScopesClientScopeId(
    req: operations.PutRealmDefaultDefaultClientScopesClientScopeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmDefaultDefaultClientScopesClientScopeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmDefaultDefaultClientScopesClientScopeIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/default-default-client-scopes/{clientScopeId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmDefaultDefaultClientScopesClientScopeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PutRealmDefaultGroupsGroupId(
    req: operations.PutRealmDefaultGroupsGroupIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmDefaultGroupsGroupIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmDefaultGroupsGroupIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/default-groups/{groupId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmDefaultGroupsGroupIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PutRealmDefaultOptionalClientScopesClientScopeId(
    req: operations.PutRealmDefaultOptionalClientScopesClientScopeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmDefaultOptionalClientScopesClientScopeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmDefaultOptionalClientScopesClientScopeIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/default-optional-client-scopes/{clientScopeId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmDefaultOptionalClientScopesClientScopeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmEventsConfig - Update the events provider   Change the events provider and/or its configuration
  PutRealmEventsConfig(
    req: operations.PutRealmEventsConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmEventsConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmEventsConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/events/config", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmEventsConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmGroupsId - Update group, ignores subgroups.
  PutRealmGroupsId(
    req: operations.PutRealmGroupsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmGroupsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmGroupsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmGroupsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmGroupsIdManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
  PutRealmGroupsIdManagementPermissions(
    req: operations.PutRealmGroupsIdManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmGroupsIdManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmGroupsIdManagementPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/groups/{id}/management/permissions", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmGroupsIdManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmIdentityProviderInstancesAlias - Update the identity provider
  PutRealmIdentityProviderInstancesAlias(
    req: operations.PutRealmIdentityProviderInstancesAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmIdentityProviderInstancesAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmIdentityProviderInstancesAliasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmIdentityProviderInstancesAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmIdentityProviderInstancesAliasManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
  PutRealmIdentityProviderInstancesAliasManagementPermissions(
    req: operations.PutRealmIdentityProviderInstancesAliasManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmIdentityProviderInstancesAliasManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmIdentityProviderInstancesAliasManagementPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/management/permissions", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmIdentityProviderInstancesAliasManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmIdentityProviderInstancesAliasMappersId - Update a mapper for the identity provider
  PutRealmIdentityProviderInstancesAliasMappersId(
    req: operations.PutRealmIdentityProviderInstancesAliasMappersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmIdentityProviderInstancesAliasMappersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmIdentityProviderInstancesAliasMappersIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/identity-provider/instances/{alias}/mappers/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmIdentityProviderInstancesAliasMappersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmRolesByIdRoleId - Update the role
  PutRealmRolesByIdRoleId(
    req: operations.PutRealmRolesByIdRoleIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmRolesByIdRoleIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmRolesByIdRoleIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmRolesByIdRoleIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmRolesByIdRoleIdManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
  PutRealmRolesByIdRoleIdManagementPermissions(
    req: operations.PutRealmRolesByIdRoleIdManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmRolesByIdRoleIdManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmRolesByIdRoleIdManagementPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles-by-id/{role-id}/management/permissions", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmRolesByIdRoleIdManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmRolesRoleName - Update a role by name
  PutRealmRolesRoleName(
    req: operations.PutRealmRolesRoleNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmRolesRoleNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmRolesRoleNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmRolesRoleNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmRolesRoleNameManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
  PutRealmRolesRoleNameManagementPermissions(
    req: operations.PutRealmRolesRoleNameManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmRolesRoleNameManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmRolesRoleNameManagementPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/roles/{role-name}/management/permissions", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmRolesRoleNameManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmUsersId - Update the user
  PutRealmUsersId(
    req: operations.PutRealmUsersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmUsersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmUsersIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmUsersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmUsersIdCredentialsCredentialIdUserLabel - Update a credential label for a user
  PutRealmUsersIdCredentialsCredentialIdUserLabel(
    req: operations.PutRealmUsersIdCredentialsCredentialIdUserLabelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmUsersIdCredentialsCredentialIdUserLabelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmUsersIdCredentialsCredentialIdUserLabelRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/credentials/{credentialId}/userLabel", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmUsersIdCredentialsCredentialIdUserLabelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmUsersIdDisableCredentialTypes - Disable all credentials for a user of a specific type
  PutRealmUsersIdDisableCredentialTypes(
    req: operations.PutRealmUsersIdDisableCredentialTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmUsersIdDisableCredentialTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmUsersIdDisableCredentialTypesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/disable-credential-types", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmUsersIdDisableCredentialTypesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmUsersIdExecuteActionsEmail - Send a update account email to the user   An email contains a link the user can click to perform a set of required actions.
  PutRealmUsersIdExecuteActionsEmail(
    req: operations.PutRealmUsersIdExecuteActionsEmailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmUsersIdExecuteActionsEmailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmUsersIdExecuteActionsEmailRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/execute-actions-email", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
      .put(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmUsersIdExecuteActionsEmailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PutRealmUsersIdGroupsGroupId(
    req: operations.PutRealmUsersIdGroupsGroupIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmUsersIdGroupsGroupIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmUsersIdGroupsGroupIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/groups/{groupId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmUsersIdGroupsGroupIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmUsersIdResetPassword - Set up a new password for the user.
  PutRealmUsersIdResetPassword(
    req: operations.PutRealmUsersIdResetPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmUsersIdResetPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmUsersIdResetPasswordRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/reset-password", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmUsersIdResetPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutRealmUsersIdSendVerifyEmail - Send an email-verification email to the user   An email contains a link the user can click to verify their email address.
  PutRealmUsersIdSendVerifyEmail(
    req: operations.PutRealmUsersIdSendVerifyEmailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmUsersIdSendVerifyEmailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmUsersIdSendVerifyEmailRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users/{id}/send-verify-email", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .put(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmUsersIdSendVerifyEmailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PutRealmUsersManagementPermissions(
    req: operations.PutRealmUsersManagementPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRealmUsersManagementPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRealmUsersManagementPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{realm}/users-management-permissions", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutRealmUsersManagementPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case (httpRes.status >= 200 && httpRes.status < 300):
            if (MatchContentType(contentType, `application/json`)) {
                res.managementPermissionReference = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
