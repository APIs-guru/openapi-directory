import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://keycloak.local"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * deleteRealm - Delete the realm
    **/
    deleteRealm(req: operations.DeleteRealmRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmResponse>;
    /**
     * deleteRealmAdminEvents - Delete all admin events
    **/
    deleteRealmAdminEvents(req: operations.DeleteRealmAdminEventsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmAdminEventsResponse>;
    /**
     * deleteRealmAttackDetectionBruteForceUsers - Clear any user login failures for all users   This can release temporary disabled users
    **/
    deleteRealmAttackDetectionBruteForceUsers(req: operations.DeleteRealmAttackDetectionBruteForceUsersRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmAttackDetectionBruteForceUsersResponse>;
    /**
     * deleteRealmAttackDetectionBruteForceUsersUserId - Clear any user login failures for the user   This can release temporary disabled user
    **/
    deleteRealmAttackDetectionBruteForceUsersUserId(req: operations.DeleteRealmAttackDetectionBruteForceUsersUserIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmAttackDetectionBruteForceUsersUserIdResponse>;
    /**
     * deleteRealmAuthenticationConfigId - Delete authenticator configuration
    **/
    deleteRealmAuthenticationConfigId(req: operations.DeleteRealmAuthenticationConfigIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmAuthenticationConfigIdResponse>;
    /**
     * deleteRealmAuthenticationExecutionsExecutionId - Delete execution
    **/
    deleteRealmAuthenticationExecutionsExecutionId(req: operations.DeleteRealmAuthenticationExecutionsExecutionIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmAuthenticationExecutionsExecutionIdResponse>;
    /**
     * deleteRealmAuthenticationFlowsId - Delete an authentication flow
    **/
    deleteRealmAuthenticationFlowsId(req: operations.DeleteRealmAuthenticationFlowsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmAuthenticationFlowsIdResponse>;
    /**
     * deleteRealmAuthenticationRequiredActionsAlias - Delete required action
    **/
    deleteRealmAuthenticationRequiredActionsAlias(req: operations.DeleteRealmAuthenticationRequiredActionsAliasRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmAuthenticationRequiredActionsAliasResponse>;
    /**
     * deleteRealmClientScopesId1ProtocolMappersModelsId2 - Delete the mapper
    **/
    deleteRealmClientScopesId1ProtocolMappersModelsId2(req: operations.DeleteRealmClientScopesId1ProtocolMappersModelsId2Request, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientScopesId1ProtocolMappersModelsId2Response>;
    /**
     * deleteRealmClientScopesId - Delete the client scope
    **/
    deleteRealmClientScopesId(req: operations.DeleteRealmClientScopesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientScopesIdResponse>;
    /**
     * deleteRealmClientScopesIdScopeMappingsClientsClient - Remove client-level roles from the client’s scope.
    **/
    deleteRealmClientScopesIdScopeMappingsClientsClient(req: operations.DeleteRealmClientScopesIdScopeMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientScopesIdScopeMappingsClientsClientResponse>;
    /**
     * deleteRealmClientScopesIdScopeMappingsRealm - Remove a set of realm-level roles from the client’s scope
    **/
    deleteRealmClientScopesIdScopeMappingsRealm(req: operations.DeleteRealmClientScopesIdScopeMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientScopesIdScopeMappingsRealmResponse>;
    /**
     * deleteRealmClientsId1ProtocolMappersModelsId2 - Delete the mapper
    **/
    deleteRealmClientsId1ProtocolMappersModelsId2(req: operations.DeleteRealmClientsId1ProtocolMappersModelsId2Request, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientsId1ProtocolMappersModelsId2Response>;
    /**
     * deleteRealmClientsId - Delete the client
    **/
    deleteRealmClientsId(req: operations.DeleteRealmClientsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientsIdResponse>;
    deleteRealmClientsIdDefaultClientScopesClientScopeId(req: operations.DeleteRealmClientsIdDefaultClientScopesClientScopeIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientsIdDefaultClientScopesClientScopeIdResponse>;
    /**
     * deleteRealmClientsIdNodesNode - Unregister a cluster node from the client
    **/
    deleteRealmClientsIdNodesNode(req: operations.DeleteRealmClientsIdNodesNodeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientsIdNodesNodeResponse>;
    deleteRealmClientsIdOptionalClientScopesClientScopeId(req: operations.DeleteRealmClientsIdOptionalClientScopesClientScopeIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientsIdOptionalClientScopesClientScopeIdResponse>;
    /**
     * deleteRealmClientsIdRolesRoleName - Delete a role by name
    **/
    deleteRealmClientsIdRolesRoleName(req: operations.DeleteRealmClientsIdRolesRoleNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientsIdRolesRoleNameResponse>;
    /**
     * deleteRealmClientsIdRolesRoleNameComposites - Remove roles from the role’s composite
    **/
    deleteRealmClientsIdRolesRoleNameComposites(req: operations.DeleteRealmClientsIdRolesRoleNameCompositesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientsIdRolesRoleNameCompositesResponse>;
    /**
     * deleteRealmClientsIdScopeMappingsClientsClient - Remove client-level roles from the client’s scope.
    **/
    deleteRealmClientsIdScopeMappingsClientsClient(req: operations.DeleteRealmClientsIdScopeMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientsIdScopeMappingsClientsClientResponse>;
    /**
     * deleteRealmClientsIdScopeMappingsRealm - Remove a set of realm-level roles from the client’s scope
    **/
    deleteRealmClientsIdScopeMappingsRealm(req: operations.DeleteRealmClientsIdScopeMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientsIdScopeMappingsRealmResponse>;
    deleteRealmClientsInitialAccessId(req: operations.DeleteRealmClientsInitialAccessIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientsInitialAccessIdResponse>;
    deleteRealmComponentsId(req: operations.DeleteRealmComponentsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmComponentsIdResponse>;
    deleteRealmDefaultDefaultClientScopesClientScopeId(req: operations.DeleteRealmDefaultDefaultClientScopesClientScopeIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmDefaultDefaultClientScopesClientScopeIdResponse>;
    deleteRealmDefaultGroupsGroupId(req: operations.DeleteRealmDefaultGroupsGroupIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmDefaultGroupsGroupIdResponse>;
    deleteRealmDefaultOptionalClientScopesClientScopeId(req: operations.DeleteRealmDefaultOptionalClientScopesClientScopeIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmDefaultOptionalClientScopesClientScopeIdResponse>;
    /**
     * deleteRealmEvents - Delete all events
    **/
    deleteRealmEvents(req: operations.DeleteRealmEventsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmEventsResponse>;
    deleteRealmGroupsId(req: operations.DeleteRealmGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmGroupsIdResponse>;
    /**
     * deleteRealmGroupsIdRoleMappingsClientsClient - Delete client-level roles from user role mapping
    **/
    deleteRealmGroupsIdRoleMappingsClientsClient(req: operations.DeleteRealmGroupsIdRoleMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmGroupsIdRoleMappingsClientsClientResponse>;
    /**
     * deleteRealmGroupsIdRoleMappingsRealm - Delete realm-level role mappings
    **/
    deleteRealmGroupsIdRoleMappingsRealm(req: operations.DeleteRealmGroupsIdRoleMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmGroupsIdRoleMappingsRealmResponse>;
    /**
     * deleteRealmIdentityProviderInstancesAlias - Delete the identity provider
    **/
    deleteRealmIdentityProviderInstancesAlias(req: operations.DeleteRealmIdentityProviderInstancesAliasRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmIdentityProviderInstancesAliasResponse>;
    /**
     * deleteRealmIdentityProviderInstancesAliasMappersId - Delete a mapper for the identity provider
    **/
    deleteRealmIdentityProviderInstancesAliasMappersId(req: operations.DeleteRealmIdentityProviderInstancesAliasMappersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmIdentityProviderInstancesAliasMappersIdResponse>;
    /**
     * deleteRealmRolesByIdRoleId - Delete the role
    **/
    deleteRealmRolesByIdRoleId(req: operations.DeleteRealmRolesByIdRoleIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmRolesByIdRoleIdResponse>;
    /**
     * deleteRealmRolesByIdRoleIdComposites - Remove a set of roles from the role’s composite
    **/
    deleteRealmRolesByIdRoleIdComposites(req: operations.DeleteRealmRolesByIdRoleIdCompositesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmRolesByIdRoleIdCompositesResponse>;
    /**
     * deleteRealmRolesRoleName - Delete a role by name
    **/
    deleteRealmRolesRoleName(req: operations.DeleteRealmRolesRoleNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmRolesRoleNameResponse>;
    /**
     * deleteRealmRolesRoleNameComposites - Remove roles from the role’s composite
    **/
    deleteRealmRolesRoleNameComposites(req: operations.DeleteRealmRolesRoleNameCompositesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmRolesRoleNameCompositesResponse>;
    /**
     * deleteRealmSessionsSession - Remove a specific user session.
    **/
    deleteRealmSessionsSession(req: operations.DeleteRealmSessionsSessionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmSessionsSessionResponse>;
    /**
     * deleteRealmUsersId - Delete the user
    **/
    deleteRealmUsersId(req: operations.DeleteRealmUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmUsersIdResponse>;
    /**
     * deleteRealmUsersIdConsentsClient - Revoke consent and offline tokens for particular client from user
    **/
    deleteRealmUsersIdConsentsClient(req: operations.DeleteRealmUsersIdConsentsClientRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmUsersIdConsentsClientResponse>;
    /**
     * deleteRealmUsersIdCredentialsCredentialId - Remove a credential for a user
    **/
    deleteRealmUsersIdCredentialsCredentialId(req: operations.DeleteRealmUsersIdCredentialsCredentialIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmUsersIdCredentialsCredentialIdResponse>;
    /**
     * deleteRealmUsersIdFederatedIdentityProvider - Remove a social login provider from user
    **/
    deleteRealmUsersIdFederatedIdentityProvider(req: operations.DeleteRealmUsersIdFederatedIdentityProviderRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmUsersIdFederatedIdentityProviderResponse>;
    deleteRealmUsersIdGroupsGroupId(req: operations.DeleteRealmUsersIdGroupsGroupIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmUsersIdGroupsGroupIdResponse>;
    /**
     * deleteRealmUsersIdRoleMappingsClientsClient - Delete client-level roles from user role mapping
    **/
    deleteRealmUsersIdRoleMappingsClientsClient(req: operations.DeleteRealmUsersIdRoleMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmUsersIdRoleMappingsClientsClientResponse>;
    /**
     * deleteRealmUsersIdRoleMappingsRealm - Delete realm-level role mappings
    **/
    deleteRealmUsersIdRoleMappingsRealm(req: operations.DeleteRealmUsersIdRoleMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmUsersIdRoleMappingsRealmResponse>;
    /**
     * get - Get themes, social providers, auth providers, and event listeners available on this server
    **/
    get(config?: AxiosRequestConfig): Promise<operations.GetResponse>;
    /**
     * getIdName - Need this for admin console to display simple name of provider when displaying client detail   KEYCLOAK-4328
    **/
    getIdName(req: operations.GetIdNameRequest, config?: AxiosRequestConfig): Promise<operations.GetIdNameResponse>;
    /**
     * getRealm - Get the top-level representation of the realm   It will not include nested information like User and Client representations.
    **/
    getRealm(req: operations.GetRealmRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmResponse>;
    /**
     * getRealmAdminEvents - Get admin events   Returns all admin events, or filters events based on URL query parameters listed here
    **/
    getRealmAdminEvents(req: operations.GetRealmAdminEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAdminEventsResponse>;
    /**
     * getRealmAttackDetectionBruteForceUsersUserId - Get status of a username in brute force detection
    **/
    getRealmAttackDetectionBruteForceUsersUserId(req: operations.GetRealmAttackDetectionBruteForceUsersUserIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAttackDetectionBruteForceUsersUserIdResponse>;
    /**
     * getRealmAuthenticationAuthenticatorProviders - Get authenticator providers   Returns a list of authenticator providers.
    **/
    getRealmAuthenticationAuthenticatorProviders(req: operations.GetRealmAuthenticationAuthenticatorProvidersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationAuthenticatorProvidersResponse>;
    /**
     * getRealmAuthenticationClientAuthenticatorProviders - Get client authenticator providers   Returns a list of client authenticator providers.
    **/
    getRealmAuthenticationClientAuthenticatorProviders(req: operations.GetRealmAuthenticationClientAuthenticatorProvidersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationClientAuthenticatorProvidersResponse>;
    /**
     * getRealmAuthenticationConfigDescriptionProviderId - Get authenticator provider’s configuration description
    **/
    getRealmAuthenticationConfigDescriptionProviderId(req: operations.GetRealmAuthenticationConfigDescriptionProviderIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationConfigDescriptionProviderIdResponse>;
    /**
     * getRealmAuthenticationConfigId - Get authenticator configuration
    **/
    getRealmAuthenticationConfigId(req: operations.GetRealmAuthenticationConfigIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationConfigIdResponse>;
    /**
     * getRealmAuthenticationExecutionsExecutionId - Get Single Execution
    **/
    getRealmAuthenticationExecutionsExecutionId(req: operations.GetRealmAuthenticationExecutionsExecutionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationExecutionsExecutionIdResponse>;
    /**
     * getRealmAuthenticationFlows - Get authentication flows   Returns a list of authentication flows.
    **/
    getRealmAuthenticationFlows(req: operations.GetRealmAuthenticationFlowsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationFlowsResponse>;
    /**
     * getRealmAuthenticationFlowsFlowAliasExecutions - Get authentication executions for a flow
    **/
    getRealmAuthenticationFlowsFlowAliasExecutions(req: operations.GetRealmAuthenticationFlowsFlowAliasExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationFlowsFlowAliasExecutionsResponse>;
    /**
     * getRealmAuthenticationFlowsId - Get authentication flow for id
    **/
    getRealmAuthenticationFlowsId(req: operations.GetRealmAuthenticationFlowsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationFlowsIdResponse>;
    /**
     * getRealmAuthenticationFormActionProviders - Get form action providers   Returns a list of form action providers.
    **/
    getRealmAuthenticationFormActionProviders(req: operations.GetRealmAuthenticationFormActionProvidersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationFormActionProvidersResponse>;
    /**
     * getRealmAuthenticationFormProviders - Get form providers   Returns a list of form providers.
    **/
    getRealmAuthenticationFormProviders(req: operations.GetRealmAuthenticationFormProvidersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationFormProvidersResponse>;
    /**
     * getRealmAuthenticationPerClientConfigDescription - Get configuration descriptions for all clients
    **/
    getRealmAuthenticationPerClientConfigDescription(req: operations.GetRealmAuthenticationPerClientConfigDescriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationPerClientConfigDescriptionResponse>;
    /**
     * getRealmAuthenticationRequiredActions - Get required actions   Returns a list of required actions.
    **/
    getRealmAuthenticationRequiredActions(req: operations.GetRealmAuthenticationRequiredActionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationRequiredActionsResponse>;
    /**
     * getRealmAuthenticationRequiredActionsAlias - Get required action for alias
    **/
    getRealmAuthenticationRequiredActionsAlias(req: operations.GetRealmAuthenticationRequiredActionsAliasRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationRequiredActionsAliasResponse>;
    /**
     * getRealmAuthenticationUnregisteredRequiredActions - Get unregistered required actions   Returns a list of unregistered required actions.
    **/
    getRealmAuthenticationUnregisteredRequiredActions(req: operations.GetRealmAuthenticationUnregisteredRequiredActionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationUnregisteredRequiredActionsResponse>;
    /**
     * getRealmClientRegistrationPolicyProviders - Base path for retrieve providers with the configProperties properly filled
    **/
    getRealmClientRegistrationPolicyProviders(req: operations.GetRealmClientRegistrationPolicyProvidersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientRegistrationPolicyProvidersResponse>;
    /**
     * getRealmClientScopes - Get client scopes belonging to the realm   Returns a list of client scopes belonging to the realm
    **/
    getRealmClientScopes(req: operations.GetRealmClientScopesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesResponse>;
    /**
     * getRealmClientScopesId1ProtocolMappersModelsId2 - Get mapper by id
    **/
    getRealmClientScopesId1ProtocolMappersModelsId2(req: operations.GetRealmClientScopesId1ProtocolMappersModelsId2Request, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesId1ProtocolMappersModelsId2Response>;
    /**
     * getRealmClientScopesId - Get representation of the client scope
    **/
    getRealmClientScopesId(req: operations.GetRealmClientScopesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesIdResponse>;
    /**
     * getRealmClientScopesIdProtocolMappersModels - Get mappers
    **/
    getRealmClientScopesIdProtocolMappersModels(req: operations.GetRealmClientScopesIdProtocolMappersModelsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesIdProtocolMappersModelsResponse>;
    /**
     * getRealmClientScopesIdProtocolMappersProtocolProtocol - Get mappers by name for a specific protocol
    **/
    getRealmClientScopesIdProtocolMappersProtocolProtocol(req: operations.GetRealmClientScopesIdProtocolMappersProtocolProtocolRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesIdProtocolMappersProtocolProtocolResponse>;
    /**
     * getRealmClientScopesIdScopeMappings - Get all scope mappings for the client
    **/
    getRealmClientScopesIdScopeMappings(req: operations.GetRealmClientScopesIdScopeMappingsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesIdScopeMappingsResponse>;
    /**
     * getRealmClientScopesIdScopeMappingsClientsClient - Get the roles associated with a client’s scope   Returns roles for the client.
    **/
    getRealmClientScopesIdScopeMappingsClientsClient(req: operations.GetRealmClientScopesIdScopeMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesIdScopeMappingsClientsClientResponse>;
    /**
     * getRealmClientScopesIdScopeMappingsClientsClientAvailable - The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
    **/
    getRealmClientScopesIdScopeMappingsClientsClientAvailable(req: operations.GetRealmClientScopesIdScopeMappingsClientsClientAvailableRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesIdScopeMappingsClientsClientAvailableResponse>;
    /**
     * getRealmClientScopesIdScopeMappingsClientsClientComposite - Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
    **/
    getRealmClientScopesIdScopeMappingsClientsClientComposite(req: operations.GetRealmClientScopesIdScopeMappingsClientsClientCompositeRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesIdScopeMappingsClientsClientCompositeResponse>;
    /**
     * getRealmClientScopesIdScopeMappingsRealm - Get realm-level roles associated with the client’s scope
    **/
    getRealmClientScopesIdScopeMappingsRealm(req: operations.GetRealmClientScopesIdScopeMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesIdScopeMappingsRealmResponse>;
    /**
     * getRealmClientScopesIdScopeMappingsRealmAvailable - Get realm-level roles that are available to attach to this client’s scope
    **/
    getRealmClientScopesIdScopeMappingsRealmAvailable(req: operations.GetRealmClientScopesIdScopeMappingsRealmAvailableRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesIdScopeMappingsRealmAvailableResponse>;
    /**
     * getRealmClientScopesIdScopeMappingsRealmComposite - Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
    **/
    getRealmClientScopesIdScopeMappingsRealmComposite(req: operations.GetRealmClientScopesIdScopeMappingsRealmCompositeRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientScopesIdScopeMappingsRealmCompositeResponse>;
    /**
     * getRealmClientSessionStats - Get client session stats   Returns a JSON map.
    **/
    getRealmClientSessionStats(req: operations.GetRealmClientSessionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientSessionStatsResponse>;
    /**
     * getRealmClients - Get clients belonging to the realm   Returns a list of clients belonging to the realm
    **/
    getRealmClients(req: operations.GetRealmClientsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsResponse>;
    /**
     * getRealmClientsId1ProtocolMappersModelsId2 - Get mapper by id
    **/
    getRealmClientsId1ProtocolMappersModelsId2(req: operations.GetRealmClientsId1ProtocolMappersModelsId2Request, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsId1ProtocolMappersModelsId2Response>;
    /**
     * getRealmClientsId - Get representation of the client
    **/
    getRealmClientsId(req: operations.GetRealmClientsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdResponse>;
    /**
     * getRealmClientsIdCertificatesAttr - Get key info
    **/
    getRealmClientsIdCertificatesAttr(req: operations.GetRealmClientsIdCertificatesAttrRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdCertificatesAttrResponse>;
    /**
     * getRealmClientsIdClientSecret - Get the client secret
    **/
    getRealmClientsIdClientSecret(req: operations.GetRealmClientsIdClientSecretRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdClientSecretResponse>;
    /**
     * getRealmClientsIdDefaultClientScopes - Get default client scopes.
    **/
    getRealmClientsIdDefaultClientScopes(req: operations.GetRealmClientsIdDefaultClientScopesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdDefaultClientScopesResponse>;
    /**
     * getRealmClientsIdEvaluateScopesGenerateExampleAccessToken - Create JSON with payload of example access token
    **/
    getRealmClientsIdEvaluateScopesGenerateExampleAccessToken(req: operations.GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenResponse>;
    /**
     * getRealmClientsIdEvaluateScopesProtocolMappers - Return list of all protocol mappers, which will be used when generating tokens issued for particular client.
    **/
    getRealmClientsIdEvaluateScopesProtocolMappers(req: operations.GetRealmClientsIdEvaluateScopesProtocolMappersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdEvaluateScopesProtocolMappersResponse>;
    /**
     * getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGranted - Get effective scope mapping of all roles of particular role container, which this client is defacto allowed to have in the accessToken issued for him.
    **/
    getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGranted(req: operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedResponse>;
    /**
     * getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGranted - Get roles, which this client doesn’t have scope for and can’t have them in the accessToken issued for him.
    **/
    getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGranted(req: operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedResponse>;
    getRealmClientsIdInstallationProvidersProviderId(req: operations.GetRealmClientsIdInstallationProvidersProviderIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdInstallationProvidersProviderIdResponse>;
    /**
     * getRealmClientsIdManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
    **/
    getRealmClientsIdManagementPermissions(req: operations.GetRealmClientsIdManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdManagementPermissionsResponse>;
    /**
     * getRealmClientsIdOfflineSessionCount - Get application offline session count   Returns a number of offline user sessions associated with this client   {      "count": number  }
    **/
    getRealmClientsIdOfflineSessionCount(req: operations.GetRealmClientsIdOfflineSessionCountRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdOfflineSessionCountResponse>;
    /**
     * getRealmClientsIdOfflineSessions - Get offline sessions for client   Returns a list of offline user sessions associated with this client
    **/
    getRealmClientsIdOfflineSessions(req: operations.GetRealmClientsIdOfflineSessionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdOfflineSessionsResponse>;
    /**
     * getRealmClientsIdOptionalClientScopes - Get optional client scopes.
    **/
    getRealmClientsIdOptionalClientScopes(req: operations.GetRealmClientsIdOptionalClientScopesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdOptionalClientScopesResponse>;
    /**
     * getRealmClientsIdProtocolMappersModels - Get mappers
    **/
    getRealmClientsIdProtocolMappersModels(req: operations.GetRealmClientsIdProtocolMappersModelsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdProtocolMappersModelsResponse>;
    /**
     * getRealmClientsIdProtocolMappersProtocolProtocol - Get mappers by name for a specific protocol
    **/
    getRealmClientsIdProtocolMappersProtocolProtocol(req: operations.GetRealmClientsIdProtocolMappersProtocolProtocolRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdProtocolMappersProtocolProtocolResponse>;
    /**
     * getRealmClientsIdRoles - Get all roles for the realm or client
    **/
    getRealmClientsIdRoles(req: operations.GetRealmClientsIdRolesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdRolesResponse>;
    /**
     * getRealmClientsIdRolesRoleName - Get a role by name
    **/
    getRealmClientsIdRolesRoleName(req: operations.GetRealmClientsIdRolesRoleNameRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdRolesRoleNameResponse>;
    /**
     * getRealmClientsIdRolesRoleNameComposites - Get composites of the role
    **/
    getRealmClientsIdRolesRoleNameComposites(req: operations.GetRealmClientsIdRolesRoleNameCompositesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdRolesRoleNameCompositesResponse>;
    /**
     * getRealmClientsIdRolesRoleNameCompositesClientsClient - An app-level roles for the specified app for the role’s composite
    **/
    getRealmClientsIdRolesRoleNameCompositesClientsClient(req: operations.GetRealmClientsIdRolesRoleNameCompositesClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdRolesRoleNameCompositesClientsClientResponse>;
    /**
     * getRealmClientsIdRolesRoleNameCompositesRealm - Get realm-level roles of the role’s composite
    **/
    getRealmClientsIdRolesRoleNameCompositesRealm(req: operations.GetRealmClientsIdRolesRoleNameCompositesRealmRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdRolesRoleNameCompositesRealmResponse>;
    /**
     * getRealmClientsIdRolesRoleNameGroups - Return List of Groups that have the specified role name
    **/
    getRealmClientsIdRolesRoleNameGroups(req: operations.GetRealmClientsIdRolesRoleNameGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdRolesRoleNameGroupsResponse>;
    /**
     * getRealmClientsIdRolesRoleNameManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
    **/
    getRealmClientsIdRolesRoleNameManagementPermissions(req: operations.GetRealmClientsIdRolesRoleNameManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdRolesRoleNameManagementPermissionsResponse>;
    /**
     * getRealmClientsIdRolesRoleNameUsers - Return List of Users that have the specified role name
    **/
    getRealmClientsIdRolesRoleNameUsers(req: operations.GetRealmClientsIdRolesRoleNameUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdRolesRoleNameUsersResponse>;
    /**
     * getRealmClientsIdScopeMappings - Get all scope mappings for the client
    **/
    getRealmClientsIdScopeMappings(req: operations.GetRealmClientsIdScopeMappingsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdScopeMappingsResponse>;
    /**
     * getRealmClientsIdScopeMappingsClientsClient - Get the roles associated with a client’s scope   Returns roles for the client.
    **/
    getRealmClientsIdScopeMappingsClientsClient(req: operations.GetRealmClientsIdScopeMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdScopeMappingsClientsClientResponse>;
    /**
     * getRealmClientsIdScopeMappingsClientsClientAvailable - The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
    **/
    getRealmClientsIdScopeMappingsClientsClientAvailable(req: operations.GetRealmClientsIdScopeMappingsClientsClientAvailableRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdScopeMappingsClientsClientAvailableResponse>;
    /**
     * getRealmClientsIdScopeMappingsClientsClientComposite - Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
    **/
    getRealmClientsIdScopeMappingsClientsClientComposite(req: operations.GetRealmClientsIdScopeMappingsClientsClientCompositeRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdScopeMappingsClientsClientCompositeResponse>;
    /**
     * getRealmClientsIdScopeMappingsRealm - Get realm-level roles associated with the client’s scope
    **/
    getRealmClientsIdScopeMappingsRealm(req: operations.GetRealmClientsIdScopeMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdScopeMappingsRealmResponse>;
    /**
     * getRealmClientsIdScopeMappingsRealmAvailable - Get realm-level roles that are available to attach to this client’s scope
    **/
    getRealmClientsIdScopeMappingsRealmAvailable(req: operations.GetRealmClientsIdScopeMappingsRealmAvailableRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdScopeMappingsRealmAvailableResponse>;
    /**
     * getRealmClientsIdScopeMappingsRealmComposite - Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
    **/
    getRealmClientsIdScopeMappingsRealmComposite(req: operations.GetRealmClientsIdScopeMappingsRealmCompositeRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdScopeMappingsRealmCompositeResponse>;
    /**
     * getRealmClientsIdServiceAccountUser - Get a user dedicated to the service account
    **/
    getRealmClientsIdServiceAccountUser(req: operations.GetRealmClientsIdServiceAccountUserRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdServiceAccountUserResponse>;
    /**
     * getRealmClientsIdSessionCount - Get application session count   Returns a number of user sessions associated with this client   {      "count": number  }
    **/
    getRealmClientsIdSessionCount(req: operations.GetRealmClientsIdSessionCountRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdSessionCountResponse>;
    /**
     * getRealmClientsIdTestNodesAvailable - Test if registered cluster nodes are available   Tests availability by sending 'ping' request to all cluster nodes.
    **/
    getRealmClientsIdTestNodesAvailable(req: operations.GetRealmClientsIdTestNodesAvailableRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdTestNodesAvailableResponse>;
    /**
     * getRealmClientsIdUserSessions - Get user sessions for client   Returns a list of user sessions associated with this client
    **/
    getRealmClientsIdUserSessions(req: operations.GetRealmClientsIdUserSessionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdUserSessionsResponse>;
    getRealmClientsInitialAccess(req: operations.GetRealmClientsInitialAccessRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsInitialAccessResponse>;
    getRealmComponents(req: operations.GetRealmComponentsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmComponentsResponse>;
    getRealmComponentsId(req: operations.GetRealmComponentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmComponentsIdResponse>;
    /**
     * getRealmComponentsIdSubComponentTypes - List of subcomponent types that are available to configure for a particular parent component.
    **/
    getRealmComponentsIdSubComponentTypes(req: operations.GetRealmComponentsIdSubComponentTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmComponentsIdSubComponentTypesResponse>;
    getRealmCredentialRegistrators(req: operations.GetRealmCredentialRegistratorsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmCredentialRegistratorsResponse>;
    /**
     * getRealmDefaultDefaultClientScopes - Get realm default client scopes.
    **/
    getRealmDefaultDefaultClientScopes(req: operations.GetRealmDefaultDefaultClientScopesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmDefaultDefaultClientScopesResponse>;
    /**
     * getRealmDefaultGroups - Get group hierarchy.
    **/
    getRealmDefaultGroups(req: operations.GetRealmDefaultGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmDefaultGroupsResponse>;
    /**
     * getRealmDefaultOptionalClientScopes - Get realm optional client scopes.
    **/
    getRealmDefaultOptionalClientScopes(req: operations.GetRealmDefaultOptionalClientScopesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmDefaultOptionalClientScopesResponse>;
    /**
     * getRealmEvents - Get events   Returns all events, or filters them based on URL query parameters listed here
    **/
    getRealmEvents(req: operations.GetRealmEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmEventsResponse>;
    /**
     * getRealmEventsConfig - Get the events provider configuration   Returns JSON object with events provider configuration
    **/
    getRealmEventsConfig(req: operations.GetRealmEventsConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmEventsConfigResponse>;
    getRealmGroupByPathPath(req: operations.GetRealmGroupByPathPathRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupByPathPathResponse>;
    /**
     * getRealmGroups - Get group hierarchy.
    **/
    getRealmGroups(req: operations.GetRealmGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsResponse>;
    /**
     * getRealmGroupsCount - Returns the groups counts.
    **/
    getRealmGroupsCount(req: operations.GetRealmGroupsCountRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsCountResponse>;
    getRealmGroupsId(req: operations.GetRealmGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsIdResponse>;
    /**
     * getRealmGroupsIdManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
    **/
    getRealmGroupsIdManagementPermissions(req: operations.GetRealmGroupsIdManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsIdManagementPermissionsResponse>;
    /**
     * getRealmGroupsIdMembers - Get users   Returns a list of users, filtered according to query parameters
    **/
    getRealmGroupsIdMembers(req: operations.GetRealmGroupsIdMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsIdMembersResponse>;
    /**
     * getRealmGroupsIdRoleMappings - Get role mappings
    **/
    getRealmGroupsIdRoleMappings(req: operations.GetRealmGroupsIdRoleMappingsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsIdRoleMappingsResponse>;
    /**
     * getRealmGroupsIdRoleMappingsClientsClient - Get client-level role mappings for the user, and the app
    **/
    getRealmGroupsIdRoleMappingsClientsClient(req: operations.GetRealmGroupsIdRoleMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsIdRoleMappingsClientsClientResponse>;
    /**
     * getRealmGroupsIdRoleMappingsClientsClientAvailable - Get available client-level roles that can be mapped to the user
    **/
    getRealmGroupsIdRoleMappingsClientsClientAvailable(req: operations.GetRealmGroupsIdRoleMappingsClientsClientAvailableRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsIdRoleMappingsClientsClientAvailableResponse>;
    /**
     * getRealmGroupsIdRoleMappingsClientsClientComposite - Get effective client-level role mappings   This recurses any composite roles
    **/
    getRealmGroupsIdRoleMappingsClientsClientComposite(req: operations.GetRealmGroupsIdRoleMappingsClientsClientCompositeRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsIdRoleMappingsClientsClientCompositeResponse>;
    /**
     * getRealmGroupsIdRoleMappingsRealm - Get realm-level role mappings
    **/
    getRealmGroupsIdRoleMappingsRealm(req: operations.GetRealmGroupsIdRoleMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsIdRoleMappingsRealmResponse>;
    /**
     * getRealmGroupsIdRoleMappingsRealmAvailable - Get realm-level roles that can be mapped
    **/
    getRealmGroupsIdRoleMappingsRealmAvailable(req: operations.GetRealmGroupsIdRoleMappingsRealmAvailableRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsIdRoleMappingsRealmAvailableResponse>;
    /**
     * getRealmGroupsIdRoleMappingsRealmComposite - Get effective realm-level role mappings   This will recurse all composite roles to get the result.
    **/
    getRealmGroupsIdRoleMappingsRealmComposite(req: operations.GetRealmGroupsIdRoleMappingsRealmCompositeRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsIdRoleMappingsRealmCompositeResponse>;
    /**
     * getRealmIdentityProviderInstances - Get identity providers
    **/
    getRealmIdentityProviderInstances(req: operations.GetRealmIdentityProviderInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmIdentityProviderInstancesResponse>;
    /**
     * getRealmIdentityProviderInstancesAlias - Get the identity provider
    **/
    getRealmIdentityProviderInstancesAlias(req: operations.GetRealmIdentityProviderInstancesAliasRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmIdentityProviderInstancesAliasResponse>;
    /**
     * getRealmIdentityProviderInstancesAliasExport - Export public broker configuration for identity provider
    **/
    getRealmIdentityProviderInstancesAliasExport(req: operations.GetRealmIdentityProviderInstancesAliasExportRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmIdentityProviderInstancesAliasExportResponse>;
    /**
     * getRealmIdentityProviderInstancesAliasManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
    **/
    getRealmIdentityProviderInstancesAliasManagementPermissions(req: operations.GetRealmIdentityProviderInstancesAliasManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmIdentityProviderInstancesAliasManagementPermissionsResponse>;
    /**
     * getRealmIdentityProviderInstancesAliasMapperTypes - Get mapper types for identity provider
    **/
    getRealmIdentityProviderInstancesAliasMapperTypes(req: operations.GetRealmIdentityProviderInstancesAliasMapperTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmIdentityProviderInstancesAliasMapperTypesResponse>;
    /**
     * getRealmIdentityProviderInstancesAliasMappers - Get mappers for identity provider
    **/
    getRealmIdentityProviderInstancesAliasMappers(req: operations.GetRealmIdentityProviderInstancesAliasMappersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmIdentityProviderInstancesAliasMappersResponse>;
    /**
     * getRealmIdentityProviderInstancesAliasMappersId - Get mapper by id for the identity provider
    **/
    getRealmIdentityProviderInstancesAliasMappersId(req: operations.GetRealmIdentityProviderInstancesAliasMappersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmIdentityProviderInstancesAliasMappersIdResponse>;
    /**
     * getRealmIdentityProviderProvidersProviderId - Get identity providers
    **/
    getRealmIdentityProviderProvidersProviderId(req: operations.GetRealmIdentityProviderProvidersProviderIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmIdentityProviderProvidersProviderIdResponse>;
    getRealmKeys(req: operations.GetRealmKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmKeysResponse>;
    /**
     * getRealmRoles - Get all roles for the realm or client
    **/
    getRealmRoles(req: operations.GetRealmRolesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesResponse>;
    /**
     * getRealmRolesByIdRoleId - Get a specific role’s representation
    **/
    getRealmRolesByIdRoleId(req: operations.GetRealmRolesByIdRoleIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesByIdRoleIdResponse>;
    /**
     * getRealmRolesByIdRoleIdComposites - Get role’s children   Returns a set of role’s children provided the role is a composite.
    **/
    getRealmRolesByIdRoleIdComposites(req: operations.GetRealmRolesByIdRoleIdCompositesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesByIdRoleIdCompositesResponse>;
    /**
     * getRealmRolesByIdRoleIdCompositesClientsClient - Get client-level roles for the client that are in the role’s composite
    **/
    getRealmRolesByIdRoleIdCompositesClientsClient(req: operations.GetRealmRolesByIdRoleIdCompositesClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesByIdRoleIdCompositesClientsClientResponse>;
    /**
     * getRealmRolesByIdRoleIdCompositesRealm - Get realm-level roles that are in the role’s composite
    **/
    getRealmRolesByIdRoleIdCompositesRealm(req: operations.GetRealmRolesByIdRoleIdCompositesRealmRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesByIdRoleIdCompositesRealmResponse>;
    /**
     * getRealmRolesByIdRoleIdManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
    **/
    getRealmRolesByIdRoleIdManagementPermissions(req: operations.GetRealmRolesByIdRoleIdManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesByIdRoleIdManagementPermissionsResponse>;
    /**
     * getRealmRolesRoleName - Get a role by name
    **/
    getRealmRolesRoleName(req: operations.GetRealmRolesRoleNameRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesRoleNameResponse>;
    /**
     * getRealmRolesRoleNameComposites - Get composites of the role
    **/
    getRealmRolesRoleNameComposites(req: operations.GetRealmRolesRoleNameCompositesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesRoleNameCompositesResponse>;
    /**
     * getRealmRolesRoleNameCompositesClientsClient - An app-level roles for the specified app for the role’s composite
    **/
    getRealmRolesRoleNameCompositesClientsClient(req: operations.GetRealmRolesRoleNameCompositesClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesRoleNameCompositesClientsClientResponse>;
    /**
     * getRealmRolesRoleNameCompositesRealm - Get realm-level roles of the role’s composite
    **/
    getRealmRolesRoleNameCompositesRealm(req: operations.GetRealmRolesRoleNameCompositesRealmRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesRoleNameCompositesRealmResponse>;
    /**
     * getRealmRolesRoleNameGroups - Return List of Groups that have the specified role name
    **/
    getRealmRolesRoleNameGroups(req: operations.GetRealmRolesRoleNameGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesRoleNameGroupsResponse>;
    /**
     * getRealmRolesRoleNameManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
    **/
    getRealmRolesRoleNameManagementPermissions(req: operations.GetRealmRolesRoleNameManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesRoleNameManagementPermissionsResponse>;
    /**
     * getRealmRolesRoleNameUsers - Return List of Users that have the specified role name
    **/
    getRealmRolesRoleNameUsers(req: operations.GetRealmRolesRoleNameUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmRolesRoleNameUsersResponse>;
    /**
     * getRealmUserStorageIdName - Need this for admin console to display simple name of provider when displaying user detail   KEYCLOAK-4328
    **/
    getRealmUserStorageIdName(req: operations.GetRealmUserStorageIdNameRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUserStorageIdNameResponse>;
    /**
     * getRealmUsers - Get users   Returns a list of users, filtered according to query parameters
    **/
    getRealmUsers(req: operations.GetRealmUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersResponse>;
    /**
     * getRealmUsersCount - Returns the number of users that match the given criteria.
    **/
    getRealmUsersCount(req: operations.GetRealmUsersCountRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersCountResponse>;
    /**
     * getRealmUsersId - Get representation of the user
    **/
    getRealmUsersId(req: operations.GetRealmUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdResponse>;
    /**
     * getRealmUsersIdConfiguredUserStorageCredentialTypes - Return credential types, which are provided by the user storage where user is stored.
    **/
    getRealmUsersIdConfiguredUserStorageCredentialTypes(req: operations.GetRealmUsersIdConfiguredUserStorageCredentialTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdConfiguredUserStorageCredentialTypesResponse>;
    /**
     * getRealmUsersIdConsents - Get consents granted by the user
    **/
    getRealmUsersIdConsents(req: operations.GetRealmUsersIdConsentsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdConsentsResponse>;
    getRealmUsersIdCredentials(req: operations.GetRealmUsersIdCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdCredentialsResponse>;
    /**
     * getRealmUsersIdFederatedIdentity - Get social logins associated with the user
    **/
    getRealmUsersIdFederatedIdentity(req: operations.GetRealmUsersIdFederatedIdentityRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdFederatedIdentityResponse>;
    getRealmUsersIdGroups(req: operations.GetRealmUsersIdGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdGroupsResponse>;
    getRealmUsersIdGroupsCount(req: operations.GetRealmUsersIdGroupsCountRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdGroupsCountResponse>;
    /**
     * getRealmUsersIdOfflineSessionsClientId - Get offline sessions associated with the user and client
    **/
    getRealmUsersIdOfflineSessionsClientId(req: operations.GetRealmUsersIdOfflineSessionsClientIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdOfflineSessionsClientIdResponse>;
    /**
     * getRealmUsersIdRoleMappings - Get role mappings
    **/
    getRealmUsersIdRoleMappings(req: operations.GetRealmUsersIdRoleMappingsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdRoleMappingsResponse>;
    /**
     * getRealmUsersIdRoleMappingsClientsClient - Get client-level role mappings for the user, and the app
    **/
    getRealmUsersIdRoleMappingsClientsClient(req: operations.GetRealmUsersIdRoleMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdRoleMappingsClientsClientResponse>;
    /**
     * getRealmUsersIdRoleMappingsClientsClientAvailable - Get available client-level roles that can be mapped to the user
    **/
    getRealmUsersIdRoleMappingsClientsClientAvailable(req: operations.GetRealmUsersIdRoleMappingsClientsClientAvailableRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdRoleMappingsClientsClientAvailableResponse>;
    /**
     * getRealmUsersIdRoleMappingsClientsClientComposite - Get effective client-level role mappings   This recurses any composite roles
    **/
    getRealmUsersIdRoleMappingsClientsClientComposite(req: operations.GetRealmUsersIdRoleMappingsClientsClientCompositeRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdRoleMappingsClientsClientCompositeResponse>;
    /**
     * getRealmUsersIdRoleMappingsRealm - Get realm-level role mappings
    **/
    getRealmUsersIdRoleMappingsRealm(req: operations.GetRealmUsersIdRoleMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdRoleMappingsRealmResponse>;
    /**
     * getRealmUsersIdRoleMappingsRealmAvailable - Get realm-level roles that can be mapped
    **/
    getRealmUsersIdRoleMappingsRealmAvailable(req: operations.GetRealmUsersIdRoleMappingsRealmAvailableRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdRoleMappingsRealmAvailableResponse>;
    /**
     * getRealmUsersIdRoleMappingsRealmComposite - Get effective realm-level role mappings   This will recurse all composite roles to get the result.
    **/
    getRealmUsersIdRoleMappingsRealmComposite(req: operations.GetRealmUsersIdRoleMappingsRealmCompositeRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdRoleMappingsRealmCompositeResponse>;
    /**
     * getRealmUsersIdSessions - Get sessions associated with the user
    **/
    getRealmUsersIdSessions(req: operations.GetRealmUsersIdSessionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersIdSessionsResponse>;
    getRealmUsersManagementPermissions(req: operations.GetRealmUsersManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersManagementPermissionsResponse>;
    /**
     * post - Import a realm   Imports a realm from a full representation of that realm.
    **/
    post(req: operations.PostRequest, config?: AxiosRequestConfig): Promise<operations.PostResponse>;
    /**
     * postRealmAuthenticationExecutions - Add new authentication execution
    **/
    postRealmAuthenticationExecutions(req: operations.PostRealmAuthenticationExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationExecutionsResponse>;
    /**
     * postRealmAuthenticationExecutionsExecutionIdConfig - Update execution with new configuration
    **/
    postRealmAuthenticationExecutionsExecutionIdConfig(req: operations.PostRealmAuthenticationExecutionsExecutionIdConfigRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationExecutionsExecutionIdConfigResponse>;
    /**
     * postRealmAuthenticationExecutionsExecutionIdLowerPriority - Lower execution’s priority
    **/
    postRealmAuthenticationExecutionsExecutionIdLowerPriority(req: operations.PostRealmAuthenticationExecutionsExecutionIdLowerPriorityRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationExecutionsExecutionIdLowerPriorityResponse>;
    /**
     * postRealmAuthenticationExecutionsExecutionIdRaisePriority - Raise execution’s priority
    **/
    postRealmAuthenticationExecutionsExecutionIdRaisePriority(req: operations.PostRealmAuthenticationExecutionsExecutionIdRaisePriorityRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationExecutionsExecutionIdRaisePriorityResponse>;
    /**
     * postRealmAuthenticationFlows - Create a new authentication flow
    **/
    postRealmAuthenticationFlows(req: operations.PostRealmAuthenticationFlowsRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationFlowsResponse>;
    /**
     * postRealmAuthenticationFlowsFlowAliasCopy - Copy existing authentication flow under a new name   The new name is given as 'newName' attribute of the passed JSON object
    **/
    postRealmAuthenticationFlowsFlowAliasCopy(req: operations.PostRealmAuthenticationFlowsFlowAliasCopyRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationFlowsFlowAliasCopyResponse>;
    /**
     * postRealmAuthenticationFlowsFlowAliasExecutionsExecution - Add new authentication execution to a flow
    **/
    postRealmAuthenticationFlowsFlowAliasExecutionsExecution(req: operations.PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionResponse>;
    /**
     * postRealmAuthenticationFlowsFlowAliasExecutionsFlow - Add new flow with new execution to existing flow
    **/
    postRealmAuthenticationFlowsFlowAliasExecutionsFlow(req: operations.PostRealmAuthenticationFlowsFlowAliasExecutionsFlowRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationFlowsFlowAliasExecutionsFlowResponse>;
    /**
     * postRealmAuthenticationRegisterRequiredAction - Register a new required actions
    **/
    postRealmAuthenticationRegisterRequiredAction(req: operations.PostRealmAuthenticationRegisterRequiredActionRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationRegisterRequiredActionResponse>;
    /**
     * postRealmAuthenticationRequiredActionsAliasLowerPriority - Lower required action’s priority
    **/
    postRealmAuthenticationRequiredActionsAliasLowerPriority(req: operations.PostRealmAuthenticationRequiredActionsAliasLowerPriorityRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationRequiredActionsAliasLowerPriorityResponse>;
    /**
     * postRealmAuthenticationRequiredActionsAliasRaisePriority - Raise required action’s priority
    **/
    postRealmAuthenticationRequiredActionsAliasRaisePriority(req: operations.PostRealmAuthenticationRequiredActionsAliasRaisePriorityRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationRequiredActionsAliasRaisePriorityResponse>;
    /**
     * postRealmClearKeysCache - Clear cache of external public keys (Public keys of clients or Identity providers)
    **/
    postRealmClearKeysCache(req: operations.PostRealmClearKeysCacheRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClearKeysCacheResponse>;
    /**
     * postRealmClearRealmCache - Clear realm cache
    **/
    postRealmClearRealmCache(req: operations.PostRealmClearRealmCacheRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClearRealmCacheResponse>;
    /**
     * postRealmClearUserCache - Clear user cache
    **/
    postRealmClearUserCache(req: operations.PostRealmClearUserCacheRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClearUserCacheResponse>;
    /**
     * postRealmClientDescriptionConverter - Base path for importing clients under this realm.
    **/
    postRealmClientDescriptionConverter(req: operations.PostRealmClientDescriptionConverterRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientDescriptionConverterResponse>;
    /**
     * postRealmClientScopes - Create a new client scope   Client Scope’s name must be unique!
    **/
    postRealmClientScopes(req: operations.PostRealmClientScopesRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientScopesResponse>;
    /**
     * postRealmClientScopesIdProtocolMappersAddModels - Create multiple mappers
    **/
    postRealmClientScopesIdProtocolMappersAddModels(req: operations.PostRealmClientScopesIdProtocolMappersAddModelsRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientScopesIdProtocolMappersAddModelsResponse>;
    /**
     * postRealmClientScopesIdProtocolMappersModels - Create a mapper
    **/
    postRealmClientScopesIdProtocolMappersModels(req: operations.PostRealmClientScopesIdProtocolMappersModelsRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientScopesIdProtocolMappersModelsResponse>;
    /**
     * postRealmClientScopesIdScopeMappingsClientsClient - Add client-level roles to the client’s scope
    **/
    postRealmClientScopesIdScopeMappingsClientsClient(req: operations.PostRealmClientScopesIdScopeMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientScopesIdScopeMappingsClientsClientResponse>;
    /**
     * postRealmClientScopesIdScopeMappingsRealm - Add a set of realm-level roles to the client’s scope
    **/
    postRealmClientScopesIdScopeMappingsRealm(req: operations.PostRealmClientScopesIdScopeMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientScopesIdScopeMappingsRealmResponse>;
    /**
     * postRealmClients - Create a new client   Client’s client_id must be unique!
    **/
    postRealmClients(req: operations.PostRealmClientsRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsResponse>;
    /**
     * postRealmClientsIdCertificatesAttrDownload - Get a keystore file for the client, containing private key and public certificate
    **/
    postRealmClientsIdCertificatesAttrDownload(req: operations.PostRealmClientsIdCertificatesAttrDownloadRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdCertificatesAttrDownloadResponse>;
    /**
     * postRealmClientsIdCertificatesAttrGenerate - Generate a new certificate with new key pair
    **/
    postRealmClientsIdCertificatesAttrGenerate(req: operations.PostRealmClientsIdCertificatesAttrGenerateRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdCertificatesAttrGenerateResponse>;
    /**
     * postRealmClientsIdCertificatesAttrGenerateAndDownload - Generate a new keypair and certificate, and get the private key file   Generates a keypair and certificate and serves the private key in a specified keystore format.
    **/
    postRealmClientsIdCertificatesAttrGenerateAndDownload(req: operations.PostRealmClientsIdCertificatesAttrGenerateAndDownloadRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdCertificatesAttrGenerateAndDownloadResponse>;
    /**
     * postRealmClientsIdCertificatesAttrUpload - Upload certificate and eventually private key
    **/
    postRealmClientsIdCertificatesAttrUpload(req: operations.PostRealmClientsIdCertificatesAttrUploadRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdCertificatesAttrUploadResponse>;
    /**
     * postRealmClientsIdCertificatesAttrUploadCertificate - Upload only certificate, not private key
    **/
    postRealmClientsIdCertificatesAttrUploadCertificate(req: operations.PostRealmClientsIdCertificatesAttrUploadCertificateRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdCertificatesAttrUploadCertificateResponse>;
    /**
     * postRealmClientsIdClientSecret - Generate a new secret for the client
    **/
    postRealmClientsIdClientSecret(req: operations.PostRealmClientsIdClientSecretRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdClientSecretResponse>;
    /**
     * postRealmClientsIdNodes - Register a cluster node with the client   Manually register cluster node to this client - usually it’s not needed to call this directly as adapter should handle  by sending registration request to Keycloak
    **/
    postRealmClientsIdNodes(req: operations.PostRealmClientsIdNodesRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdNodesResponse>;
    /**
     * postRealmClientsIdProtocolMappersAddModels - Create multiple mappers
    **/
    postRealmClientsIdProtocolMappersAddModels(req: operations.PostRealmClientsIdProtocolMappersAddModelsRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdProtocolMappersAddModelsResponse>;
    /**
     * postRealmClientsIdProtocolMappersModels - Create a mapper
    **/
    postRealmClientsIdProtocolMappersModels(req: operations.PostRealmClientsIdProtocolMappersModelsRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdProtocolMappersModelsResponse>;
    /**
     * postRealmClientsIdPushRevocation - Push the client’s revocation policy to its admin URL   If the client has an admin URL, push revocation policy to it.
    **/
    postRealmClientsIdPushRevocation(req: operations.PostRealmClientsIdPushRevocationRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdPushRevocationResponse>;
    /**
     * postRealmClientsIdRegistrationAccessToken - Generate a new registration access token for the client
    **/
    postRealmClientsIdRegistrationAccessToken(req: operations.PostRealmClientsIdRegistrationAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdRegistrationAccessTokenResponse>;
    /**
     * postRealmClientsIdRoles - Create a new role for the realm or client
    **/
    postRealmClientsIdRoles(req: operations.PostRealmClientsIdRolesRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdRolesResponse>;
    /**
     * postRealmClientsIdRolesRoleNameComposites - Add a composite to the role
    **/
    postRealmClientsIdRolesRoleNameComposites(req: operations.PostRealmClientsIdRolesRoleNameCompositesRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdRolesRoleNameCompositesResponse>;
    /**
     * postRealmClientsIdScopeMappingsClientsClient - Add client-level roles to the client’s scope
    **/
    postRealmClientsIdScopeMappingsClientsClient(req: operations.PostRealmClientsIdScopeMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdScopeMappingsClientsClientResponse>;
    /**
     * postRealmClientsIdScopeMappingsRealm - Add a set of realm-level roles to the client’s scope
    **/
    postRealmClientsIdScopeMappingsRealm(req: operations.PostRealmClientsIdScopeMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdScopeMappingsRealmResponse>;
    /**
     * postRealmClientsInitialAccess - Create a new initial access token.
    **/
    postRealmClientsInitialAccess(req: operations.PostRealmClientsInitialAccessRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsInitialAccessResponse>;
    postRealmComponents(req: operations.PostRealmComponentsRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmComponentsResponse>;
    /**
     * postRealmGroups - create or add a top level realm groupSet or create child.
    **/
    postRealmGroups(req: operations.PostRealmGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmGroupsResponse>;
    /**
     * postRealmGroupsIdChildren - Set or create child.
    **/
    postRealmGroupsIdChildren(req: operations.PostRealmGroupsIdChildrenRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmGroupsIdChildrenResponse>;
    /**
     * postRealmGroupsIdRoleMappingsClientsClient - Add client-level roles to the user role mapping
    **/
    postRealmGroupsIdRoleMappingsClientsClient(req: operations.PostRealmGroupsIdRoleMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmGroupsIdRoleMappingsClientsClientResponse>;
    /**
     * postRealmGroupsIdRoleMappingsRealm - Add realm-level role mappings to the user
    **/
    postRealmGroupsIdRoleMappingsRealm(req: operations.PostRealmGroupsIdRoleMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmGroupsIdRoleMappingsRealmResponse>;
    /**
     * postRealmIdentityProviderImportConfig - Import identity provider from uploaded JSON file
    **/
    postRealmIdentityProviderImportConfig(req: operations.PostRealmIdentityProviderImportConfigRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmIdentityProviderImportConfigResponse>;
    /**
     * postRealmIdentityProviderInstances - Create a new identity provider
    **/
    postRealmIdentityProviderInstances(req: operations.PostRealmIdentityProviderInstancesRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmIdentityProviderInstancesResponse>;
    /**
     * postRealmIdentityProviderInstancesAliasMappers - Add a mapper to identity provider
    **/
    postRealmIdentityProviderInstancesAliasMappers(req: operations.PostRealmIdentityProviderInstancesAliasMappersRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmIdentityProviderInstancesAliasMappersResponse>;
    /**
     * postRealmLogoutAll - Removes all user sessions.
    **/
    postRealmLogoutAll(req: operations.PostRealmLogoutAllRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmLogoutAllResponse>;
    /**
     * postRealmPartialImport - Partial import from a JSON file to an existing realm.
    **/
    postRealmPartialImport(req: operations.PostRealmPartialImportRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmPartialImportResponse>;
    /**
     * postRealmPartialExport - Partial export of existing realm into a JSON file.
    **/
    postRealmPartialExport(req: operations.PostRealmPartialExportRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmPartialExportResponse>;
    /**
     * postRealmPushRevocation - Push the realm’s revocation policy to any client that has an admin url associated with it.
    **/
    postRealmPushRevocation(req: operations.PostRealmPushRevocationRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmPushRevocationResponse>;
    /**
     * postRealmRoles - Create a new role for the realm or client
    **/
    postRealmRoles(req: operations.PostRealmRolesRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmRolesResponse>;
    /**
     * postRealmRolesByIdRoleIdComposites - Make the role a composite role by associating some child roles
    **/
    postRealmRolesByIdRoleIdComposites(req: operations.PostRealmRolesByIdRoleIdCompositesRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmRolesByIdRoleIdCompositesResponse>;
    /**
     * postRealmRolesRoleNameComposites - Add a composite to the role
    **/
    postRealmRolesRoleNameComposites(req: operations.PostRealmRolesRoleNameCompositesRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmRolesRoleNameCompositesResponse>;
    /**
     * postRealmTestLdapConnection - Test LDAP connection
    **/
    postRealmTestLdapConnection(req: operations.PostRealmTestLdapConnectionRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmTestLdapConnectionResponse>;
    postRealmTestSmtpConnection(req: operations.PostRealmTestSmtpConnectionRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmTestSmtpConnectionResponse>;
    /**
     * postRealmUserStorageIdRemoveImportedUsers - Remove imported users
    **/
    postRealmUserStorageIdRemoveImportedUsers(req: operations.PostRealmUserStorageIdRemoveImportedUsersRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUserStorageIdRemoveImportedUsersResponse>;
    /**
     * postRealmUserStorageIdSync - Trigger sync of users   Action can be "triggerFullSync" or "triggerChangedUsersSync"
    **/
    postRealmUserStorageIdSync(req: operations.PostRealmUserStorageIdSyncRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUserStorageIdSyncResponse>;
    /**
     * postRealmUserStorageIdUnlinkUsers - Unlink imported users from a storage provider
    **/
    postRealmUserStorageIdUnlinkUsers(req: operations.PostRealmUserStorageIdUnlinkUsersRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUserStorageIdUnlinkUsersResponse>;
    /**
     * postRealmUserStorageParentIdMappersIdSync - Trigger sync of mapper data related to ldap mapper (roles, groups, …​)   direction is "fedToKeycloak" or "keycloakToFed"
    **/
    postRealmUserStorageParentIdMappersIdSync(req: operations.PostRealmUserStorageParentIdMappersIdSyncRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUserStorageParentIdMappersIdSyncResponse>;
    /**
     * postRealmUsers - Create a new user   Username must be unique.
    **/
    postRealmUsers(req: operations.PostRealmUsersRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUsersResponse>;
    /**
     * postRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialId - Move a credential to a position behind another credential
    **/
    postRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialId(req: operations.PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdResponse>;
    /**
     * postRealmUsersIdCredentialsCredentialIdMoveToFirst - Move a credential to a first position in the credentials list of the user
    **/
    postRealmUsersIdCredentialsCredentialIdMoveToFirst(req: operations.PostRealmUsersIdCredentialsCredentialIdMoveToFirstRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUsersIdCredentialsCredentialIdMoveToFirstResponse>;
    /**
     * postRealmUsersIdFederatedIdentityProvider - Add a social login provider to the user
    **/
    postRealmUsersIdFederatedIdentityProvider(req: operations.PostRealmUsersIdFederatedIdentityProviderRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUsersIdFederatedIdentityProviderResponse>;
    /**
     * postRealmUsersIdImpersonation - Impersonate the user
    **/
    postRealmUsersIdImpersonation(req: operations.PostRealmUsersIdImpersonationRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUsersIdImpersonationResponse>;
    /**
     * postRealmUsersIdLogout - Remove all user sessions associated with the user   Also send notification to all clients that have an admin URL to invalidate the sessions for the particular user.
    **/
    postRealmUsersIdLogout(req: operations.PostRealmUsersIdLogoutRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUsersIdLogoutResponse>;
    /**
     * postRealmUsersIdRoleMappingsClientsClient - Add client-level roles to the user role mapping
    **/
    postRealmUsersIdRoleMappingsClientsClient(req: operations.PostRealmUsersIdRoleMappingsClientsClientRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUsersIdRoleMappingsClientsClientResponse>;
    /**
     * postRealmUsersIdRoleMappingsRealm - Add realm-level role mappings to the user
    **/
    postRealmUsersIdRoleMappingsRealm(req: operations.PostRealmUsersIdRoleMappingsRealmRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmUsersIdRoleMappingsRealmResponse>;
    /**
     * putRealm - Update the top-level information of the realm   Any user, roles or client information in the representation  will be ignored.
    **/
    putRealm(req: operations.PutRealmRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmResponse>;
    /**
     * putRealmAuthenticationConfigId - Update authenticator configuration
    **/
    putRealmAuthenticationConfigId(req: operations.PutRealmAuthenticationConfigIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmAuthenticationConfigIdResponse>;
    /**
     * putRealmAuthenticationFlowsFlowAliasExecutions - Update authentication executions of a flow
    **/
    putRealmAuthenticationFlowsFlowAliasExecutions(req: operations.PutRealmAuthenticationFlowsFlowAliasExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmAuthenticationFlowsFlowAliasExecutionsResponse>;
    /**
     * putRealmAuthenticationFlowsId - Update an authentication flow
    **/
    putRealmAuthenticationFlowsId(req: operations.PutRealmAuthenticationFlowsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmAuthenticationFlowsIdResponse>;
    /**
     * putRealmAuthenticationRequiredActionsAlias - Update required action
    **/
    putRealmAuthenticationRequiredActionsAlias(req: operations.PutRealmAuthenticationRequiredActionsAliasRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmAuthenticationRequiredActionsAliasResponse>;
    /**
     * putRealmClientScopesId1ProtocolMappersModelsId2 - Update the mapper
    **/
    putRealmClientScopesId1ProtocolMappersModelsId2(req: operations.PutRealmClientScopesId1ProtocolMappersModelsId2Request, config?: AxiosRequestConfig): Promise<operations.PutRealmClientScopesId1ProtocolMappersModelsId2Response>;
    /**
     * putRealmClientScopesId - Update the client scope
    **/
    putRealmClientScopesId(req: operations.PutRealmClientScopesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmClientScopesIdResponse>;
    /**
     * putRealmClientsId1ProtocolMappersModelsId2 - Update the mapper
    **/
    putRealmClientsId1ProtocolMappersModelsId2(req: operations.PutRealmClientsId1ProtocolMappersModelsId2Request, config?: AxiosRequestConfig): Promise<operations.PutRealmClientsId1ProtocolMappersModelsId2Response>;
    /**
     * putRealmClientsId - Update the client
    **/
    putRealmClientsId(req: operations.PutRealmClientsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmClientsIdResponse>;
    putRealmClientsIdDefaultClientScopesClientScopeId(req: operations.PutRealmClientsIdDefaultClientScopesClientScopeIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmClientsIdDefaultClientScopesClientScopeIdResponse>;
    /**
     * putRealmClientsIdManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
    **/
    putRealmClientsIdManagementPermissions(req: operations.PutRealmClientsIdManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmClientsIdManagementPermissionsResponse>;
    putRealmClientsIdOptionalClientScopesClientScopeId(req: operations.PutRealmClientsIdOptionalClientScopesClientScopeIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmClientsIdOptionalClientScopesClientScopeIdResponse>;
    /**
     * putRealmClientsIdRolesRoleName - Update a role by name
    **/
    putRealmClientsIdRolesRoleName(req: operations.PutRealmClientsIdRolesRoleNameRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmClientsIdRolesRoleNameResponse>;
    /**
     * putRealmClientsIdRolesRoleNameManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
    **/
    putRealmClientsIdRolesRoleNameManagementPermissions(req: operations.PutRealmClientsIdRolesRoleNameManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmClientsIdRolesRoleNameManagementPermissionsResponse>;
    putRealmComponentsId(req: operations.PutRealmComponentsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmComponentsIdResponse>;
    putRealmDefaultDefaultClientScopesClientScopeId(req: operations.PutRealmDefaultDefaultClientScopesClientScopeIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmDefaultDefaultClientScopesClientScopeIdResponse>;
    putRealmDefaultGroupsGroupId(req: operations.PutRealmDefaultGroupsGroupIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmDefaultGroupsGroupIdResponse>;
    putRealmDefaultOptionalClientScopesClientScopeId(req: operations.PutRealmDefaultOptionalClientScopesClientScopeIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmDefaultOptionalClientScopesClientScopeIdResponse>;
    /**
     * putRealmEventsConfig - Update the events provider   Change the events provider and/or its configuration
    **/
    putRealmEventsConfig(req: operations.PutRealmEventsConfigRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmEventsConfigResponse>;
    /**
     * putRealmGroupsId - Update group, ignores subgroups.
    **/
    putRealmGroupsId(req: operations.PutRealmGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmGroupsIdResponse>;
    /**
     * putRealmGroupsIdManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
    **/
    putRealmGroupsIdManagementPermissions(req: operations.PutRealmGroupsIdManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmGroupsIdManagementPermissionsResponse>;
    /**
     * putRealmIdentityProviderInstancesAlias - Update the identity provider
    **/
    putRealmIdentityProviderInstancesAlias(req: operations.PutRealmIdentityProviderInstancesAliasRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmIdentityProviderInstancesAliasResponse>;
    /**
     * putRealmIdentityProviderInstancesAliasManagementPermissions - Return object stating whether client Authorization permissions have been initialized or not and a reference
    **/
    putRealmIdentityProviderInstancesAliasManagementPermissions(req: operations.PutRealmIdentityProviderInstancesAliasManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmIdentityProviderInstancesAliasManagementPermissionsResponse>;
    /**
     * putRealmIdentityProviderInstancesAliasMappersId - Update a mapper for the identity provider
    **/
    putRealmIdentityProviderInstancesAliasMappersId(req: operations.PutRealmIdentityProviderInstancesAliasMappersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmIdentityProviderInstancesAliasMappersIdResponse>;
    /**
     * putRealmRolesByIdRoleId - Update the role
    **/
    putRealmRolesByIdRoleId(req: operations.PutRealmRolesByIdRoleIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmRolesByIdRoleIdResponse>;
    /**
     * putRealmRolesByIdRoleIdManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
    **/
    putRealmRolesByIdRoleIdManagementPermissions(req: operations.PutRealmRolesByIdRoleIdManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmRolesByIdRoleIdManagementPermissionsResponse>;
    /**
     * putRealmRolesRoleName - Update a role by name
    **/
    putRealmRolesRoleName(req: operations.PutRealmRolesRoleNameRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmRolesRoleNameResponse>;
    /**
     * putRealmRolesRoleNameManagementPermissions - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
    **/
    putRealmRolesRoleNameManagementPermissions(req: operations.PutRealmRolesRoleNameManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmRolesRoleNameManagementPermissionsResponse>;
    /**
     * putRealmUsersId - Update the user
    **/
    putRealmUsersId(req: operations.PutRealmUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmUsersIdResponse>;
    /**
     * putRealmUsersIdCredentialsCredentialIdUserLabel - Update a credential label for a user
    **/
    putRealmUsersIdCredentialsCredentialIdUserLabel(req: operations.PutRealmUsersIdCredentialsCredentialIdUserLabelRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmUsersIdCredentialsCredentialIdUserLabelResponse>;
    /**
     * putRealmUsersIdDisableCredentialTypes - Disable all credentials for a user of a specific type
    **/
    putRealmUsersIdDisableCredentialTypes(req: operations.PutRealmUsersIdDisableCredentialTypesRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmUsersIdDisableCredentialTypesResponse>;
    /**
     * putRealmUsersIdExecuteActionsEmail - Send a update account email to the user   An email contains a link the user can click to perform a set of required actions.
    **/
    putRealmUsersIdExecuteActionsEmail(req: operations.PutRealmUsersIdExecuteActionsEmailRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmUsersIdExecuteActionsEmailResponse>;
    putRealmUsersIdGroupsGroupId(req: operations.PutRealmUsersIdGroupsGroupIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmUsersIdGroupsGroupIdResponse>;
    /**
     * putRealmUsersIdResetPassword - Set up a new password for the user.
    **/
    putRealmUsersIdResetPassword(req: operations.PutRealmUsersIdResetPasswordRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmUsersIdResetPasswordResponse>;
    /**
     * putRealmUsersIdSendVerifyEmail - Send an email-verification email to the user   An email contains a link the user can click to verify their email address.
    **/
    putRealmUsersIdSendVerifyEmail(req: operations.PutRealmUsersIdSendVerifyEmailRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmUsersIdSendVerifyEmailResponse>;
    putRealmUsersManagementPermissions(req: operations.PutRealmUsersManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmUsersManagementPermissionsResponse>;
}
export {};
