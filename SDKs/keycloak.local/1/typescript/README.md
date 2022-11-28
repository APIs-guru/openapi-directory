# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { DeleteRealmRequest, DeleteRealmResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    accessToken: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));
    
const req: DeleteRealmRequest = {
  pathParams: {
    realm: "et",
  },
};

sdk.sdk.deleteRealm(req).then((res: DeleteRealmResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `deleteRealm` - Delete the realm
* `deleteRealmAdminEvents` - Delete all admin events
* `deleteRealmAttackDetectionBruteForceUsers` - Clear any user login failures for all users   This can release temporary disabled users
* `deleteRealmAttackDetectionBruteForceUsersUserId` - Clear any user login failures for the user   This can release temporary disabled user
* `deleteRealmAuthenticationConfigId` - Delete authenticator configuration
* `deleteRealmAuthenticationExecutionsExecutionId` - Delete execution
* `deleteRealmAuthenticationFlowsId` - Delete an authentication flow
* `deleteRealmAuthenticationRequiredActionsAlias` - Delete required action
* `deleteRealmClientScopesId1ProtocolMappersModelsId2` - Delete the mapper
* `deleteRealmClientScopesId` - Delete the client scope
* `deleteRealmClientScopesIdScopeMappingsClientsClient` - Remove client-level roles from the client’s scope.
* `deleteRealmClientScopesIdScopeMappingsRealm` - Remove a set of realm-level roles from the client’s scope
* `deleteRealmClientsId1ProtocolMappersModelsId2` - Delete the mapper
* `deleteRealmClientsId` - Delete the client
* `deleteRealmClientsIdDefaultClientScopesClientScopeId`
* `deleteRealmClientsIdNodesNode` - Unregister a cluster node from the client
* `deleteRealmClientsIdOptionalClientScopesClientScopeId`
* `deleteRealmClientsIdRolesRoleName` - Delete a role by name
* `deleteRealmClientsIdRolesRoleNameComposites` - Remove roles from the role’s composite
* `deleteRealmClientsIdScopeMappingsClientsClient` - Remove client-level roles from the client’s scope.
* `deleteRealmClientsIdScopeMappingsRealm` - Remove a set of realm-level roles from the client’s scope
* `deleteRealmClientsInitialAccessId`
* `deleteRealmComponentsId`
* `deleteRealmDefaultDefaultClientScopesClientScopeId`
* `deleteRealmDefaultGroupsGroupId`
* `deleteRealmDefaultOptionalClientScopesClientScopeId`
* `deleteRealmEvents` - Delete all events
* `deleteRealmGroupsId`
* `deleteRealmGroupsIdRoleMappingsClientsClient` - Delete client-level roles from user role mapping
* `deleteRealmGroupsIdRoleMappingsRealm` - Delete realm-level role mappings
* `deleteRealmIdentityProviderInstancesAlias` - Delete the identity provider
* `deleteRealmIdentityProviderInstancesAliasMappersId` - Delete a mapper for the identity provider
* `deleteRealmRolesByIdRoleId` - Delete the role
* `deleteRealmRolesByIdRoleIdComposites` - Remove a set of roles from the role’s composite
* `deleteRealmRolesRoleName` - Delete a role by name
* `deleteRealmRolesRoleNameComposites` - Remove roles from the role’s composite
* `deleteRealmSessionsSession` - Remove a specific user session.
* `deleteRealmUsersId` - Delete the user
* `deleteRealmUsersIdConsentsClient` - Revoke consent and offline tokens for particular client from user
* `deleteRealmUsersIdCredentialsCredentialId` - Remove a credential for a user
* `deleteRealmUsersIdFederatedIdentityProvider` - Remove a social login provider from user
* `deleteRealmUsersIdGroupsGroupId`
* `deleteRealmUsersIdRoleMappingsClientsClient` - Delete client-level roles from user role mapping
* `deleteRealmUsersIdRoleMappingsRealm` - Delete realm-level role mappings
* `get` - Get themes, social providers, auth providers, and event listeners available on this server
* `getIdName` - Need this for admin console to display simple name of provider when displaying client detail   KEYCLOAK-4328
* `getRealm` - Get the top-level representation of the realm   It will not include nested information like User and Client representations.
* `getRealmAdminEvents` - Get admin events   Returns all admin events, or filters events based on URL query parameters listed here
* `getRealmAttackDetectionBruteForceUsersUserId` - Get status of a username in brute force detection
* `getRealmAuthenticationAuthenticatorProviders` - Get authenticator providers   Returns a list of authenticator providers.
* `getRealmAuthenticationClientAuthenticatorProviders` - Get client authenticator providers   Returns a list of client authenticator providers.
* `getRealmAuthenticationConfigDescriptionProviderId` - Get authenticator provider’s configuration description
* `getRealmAuthenticationConfigId` - Get authenticator configuration
* `getRealmAuthenticationExecutionsExecutionId` - Get Single Execution
* `getRealmAuthenticationFlows` - Get authentication flows   Returns a list of authentication flows.
* `getRealmAuthenticationFlowsFlowAliasExecutions` - Get authentication executions for a flow
* `getRealmAuthenticationFlowsId` - Get authentication flow for id
* `getRealmAuthenticationFormActionProviders` - Get form action providers   Returns a list of form action providers.
* `getRealmAuthenticationFormProviders` - Get form providers   Returns a list of form providers.
* `getRealmAuthenticationPerClientConfigDescription` - Get configuration descriptions for all clients
* `getRealmAuthenticationRequiredActions` - Get required actions   Returns a list of required actions.
* `getRealmAuthenticationRequiredActionsAlias` - Get required action for alias
* `getRealmAuthenticationUnregisteredRequiredActions` - Get unregistered required actions   Returns a list of unregistered required actions.
* `getRealmClientRegistrationPolicyProviders` - Base path for retrieve providers with the configProperties properly filled
* `getRealmClientScopes` - Get client scopes belonging to the realm   Returns a list of client scopes belonging to the realm
* `getRealmClientScopesId1ProtocolMappersModelsId2` - Get mapper by id
* `getRealmClientScopesId` - Get representation of the client scope
* `getRealmClientScopesIdProtocolMappersModels` - Get mappers
* `getRealmClientScopesIdProtocolMappersProtocolProtocol` - Get mappers by name for a specific protocol
* `getRealmClientScopesIdScopeMappings` - Get all scope mappings for the client
* `getRealmClientScopesIdScopeMappingsClientsClient` - Get the roles associated with a client’s scope   Returns roles for the client.
* `getRealmClientScopesIdScopeMappingsClientsClientAvailable` - The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
* `getRealmClientScopesIdScopeMappingsClientsClientComposite` - Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
* `getRealmClientScopesIdScopeMappingsRealm` - Get realm-level roles associated with the client’s scope
* `getRealmClientScopesIdScopeMappingsRealmAvailable` - Get realm-level roles that are available to attach to this client’s scope
* `getRealmClientScopesIdScopeMappingsRealmComposite` - Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
* `getRealmClientSessionStats` - Get client session stats   Returns a JSON map.
* `getRealmClients` - Get clients belonging to the realm   Returns a list of clients belonging to the realm
* `getRealmClientsId1ProtocolMappersModelsId2` - Get mapper by id
* `getRealmClientsId` - Get representation of the client
* `getRealmClientsIdCertificatesAttr` - Get key info
* `getRealmClientsIdClientSecret` - Get the client secret
* `getRealmClientsIdDefaultClientScopes` - Get default client scopes.
* `getRealmClientsIdEvaluateScopesGenerateExampleAccessToken` - Create JSON with payload of example access token
* `getRealmClientsIdEvaluateScopesProtocolMappers` - Return list of all protocol mappers, which will be used when generating tokens issued for particular client.
* `getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGranted` - Get effective scope mapping of all roles of particular role container, which this client is defacto allowed to have in the accessToken issued for him.
* `getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGranted` - Get roles, which this client doesn’t have scope for and can’t have them in the accessToken issued for him.
* `getRealmClientsIdInstallationProvidersProviderId`
* `getRealmClientsIdManagementPermissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `getRealmClientsIdOfflineSessionCount` - Get application offline session count   Returns a number of offline user sessions associated with this client   {      "count": number  }
* `getRealmClientsIdOfflineSessions` - Get offline sessions for client   Returns a list of offline user sessions associated with this client
* `getRealmClientsIdOptionalClientScopes` - Get optional client scopes.
* `getRealmClientsIdProtocolMappersModels` - Get mappers
* `getRealmClientsIdProtocolMappersProtocolProtocol` - Get mappers by name for a specific protocol
* `getRealmClientsIdRoles` - Get all roles for the realm or client
* `getRealmClientsIdRolesRoleName` - Get a role by name
* `getRealmClientsIdRolesRoleNameComposites` - Get composites of the role
* `getRealmClientsIdRolesRoleNameCompositesClientsClient` - An app-level roles for the specified app for the role’s composite
* `getRealmClientsIdRolesRoleNameCompositesRealm` - Get realm-level roles of the role’s composite
* `getRealmClientsIdRolesRoleNameGroups` - Return List of Groups that have the specified role name
* `getRealmClientsIdRolesRoleNameManagementPermissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
* `getRealmClientsIdRolesRoleNameUsers` - Return List of Users that have the specified role name
* `getRealmClientsIdScopeMappings` - Get all scope mappings for the client
* `getRealmClientsIdScopeMappingsClientsClient` - Get the roles associated with a client’s scope   Returns roles for the client.
* `getRealmClientsIdScopeMappingsClientsClientAvailable` - The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
* `getRealmClientsIdScopeMappingsClientsClientComposite` - Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
* `getRealmClientsIdScopeMappingsRealm` - Get realm-level roles associated with the client’s scope
* `getRealmClientsIdScopeMappingsRealmAvailable` - Get realm-level roles that are available to attach to this client’s scope
* `getRealmClientsIdScopeMappingsRealmComposite` - Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
* `getRealmClientsIdServiceAccountUser` - Get a user dedicated to the service account
* `getRealmClientsIdSessionCount` - Get application session count   Returns a number of user sessions associated with this client   {      "count": number  }
* `getRealmClientsIdTestNodesAvailable` - Test if registered cluster nodes are available   Tests availability by sending 'ping' request to all cluster nodes.
* `getRealmClientsIdUserSessions` - Get user sessions for client   Returns a list of user sessions associated with this client
* `getRealmClientsInitialAccess`
* `getRealmComponents`
* `getRealmComponentsId`
* `getRealmComponentsIdSubComponentTypes` - List of subcomponent types that are available to configure for a particular parent component.
* `getRealmCredentialRegistrators`
* `getRealmDefaultDefaultClientScopes` - Get realm default client scopes.
* `getRealmDefaultGroups` - Get group hierarchy.
* `getRealmDefaultOptionalClientScopes` - Get realm optional client scopes.
* `getRealmEvents` - Get events   Returns all events, or filters them based on URL query parameters listed here
* `getRealmEventsConfig` - Get the events provider configuration   Returns JSON object with events provider configuration
* `getRealmGroupByPathPath`
* `getRealmGroups` - Get group hierarchy.
* `getRealmGroupsCount` - Returns the groups counts.
* `getRealmGroupsId`
* `getRealmGroupsIdManagementPermissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `getRealmGroupsIdMembers` - Get users   Returns a list of users, filtered according to query parameters
* `getRealmGroupsIdRoleMappings` - Get role mappings
* `getRealmGroupsIdRoleMappingsClientsClient` - Get client-level role mappings for the user, and the app
* `getRealmGroupsIdRoleMappingsClientsClientAvailable` - Get available client-level roles that can be mapped to the user
* `getRealmGroupsIdRoleMappingsClientsClientComposite` - Get effective client-level role mappings   This recurses any composite roles
* `getRealmGroupsIdRoleMappingsRealm` - Get realm-level role mappings
* `getRealmGroupsIdRoleMappingsRealmAvailable` - Get realm-level roles that can be mapped
* `getRealmGroupsIdRoleMappingsRealmComposite` - Get effective realm-level role mappings   This will recurse all composite roles to get the result.
* `getRealmIdentityProviderInstances` - Get identity providers
* `getRealmIdentityProviderInstancesAlias` - Get the identity provider
* `getRealmIdentityProviderInstancesAliasExport` - Export public broker configuration for identity provider
* `getRealmIdentityProviderInstancesAliasManagementPermissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `getRealmIdentityProviderInstancesAliasMapperTypes` - Get mapper types for identity provider
* `getRealmIdentityProviderInstancesAliasMappers` - Get mappers for identity provider
* `getRealmIdentityProviderInstancesAliasMappersId` - Get mapper by id for the identity provider
* `getRealmIdentityProviderProvidersProviderId` - Get identity providers
* `getRealmKeys`
* `getRealmRoles` - Get all roles for the realm or client
* `getRealmRolesByIdRoleId` - Get a specific role’s representation
* `getRealmRolesByIdRoleIdComposites` - Get role’s children   Returns a set of role’s children provided the role is a composite.
* `getRealmRolesByIdRoleIdCompositesClientsClient` - Get client-level roles for the client that are in the role’s composite
* `getRealmRolesByIdRoleIdCompositesRealm` - Get realm-level roles that are in the role’s composite
* `getRealmRolesByIdRoleIdManagementPermissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
* `getRealmRolesRoleName` - Get a role by name
* `getRealmRolesRoleNameComposites` - Get composites of the role
* `getRealmRolesRoleNameCompositesClientsClient` - An app-level roles for the specified app for the role’s composite
* `getRealmRolesRoleNameCompositesRealm` - Get realm-level roles of the role’s composite
* `getRealmRolesRoleNameGroups` - Return List of Groups that have the specified role name
* `getRealmRolesRoleNameManagementPermissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
* `getRealmRolesRoleNameUsers` - Return List of Users that have the specified role name
* `getRealmUserStorageIdName` - Need this for admin console to display simple name of provider when displaying user detail   KEYCLOAK-4328
* `getRealmUsers` - Get users   Returns a list of users, filtered according to query parameters
* `getRealmUsersCount` - Returns the number of users that match the given criteria.
* `getRealmUsersId` - Get representation of the user
* `getRealmUsersIdConfiguredUserStorageCredentialTypes` - Return credential types, which are provided by the user storage where user is stored.
* `getRealmUsersIdConsents` - Get consents granted by the user
* `getRealmUsersIdCredentials`
* `getRealmUsersIdFederatedIdentity` - Get social logins associated with the user
* `getRealmUsersIdGroups`
* `getRealmUsersIdGroupsCount`
* `getRealmUsersIdOfflineSessionsClientId` - Get offline sessions associated with the user and client
* `getRealmUsersIdRoleMappings` - Get role mappings
* `getRealmUsersIdRoleMappingsClientsClient` - Get client-level role mappings for the user, and the app
* `getRealmUsersIdRoleMappingsClientsClientAvailable` - Get available client-level roles that can be mapped to the user
* `getRealmUsersIdRoleMappingsClientsClientComposite` - Get effective client-level role mappings   This recurses any composite roles
* `getRealmUsersIdRoleMappingsRealm` - Get realm-level role mappings
* `getRealmUsersIdRoleMappingsRealmAvailable` - Get realm-level roles that can be mapped
* `getRealmUsersIdRoleMappingsRealmComposite` - Get effective realm-level role mappings   This will recurse all composite roles to get the result.
* `getRealmUsersIdSessions` - Get sessions associated with the user
* `getRealmUsersManagementPermissions`
* `post` - Import a realm   Imports a realm from a full representation of that realm.
* `postRealmAuthenticationExecutions` - Add new authentication execution
* `postRealmAuthenticationExecutionsExecutionIdConfig` - Update execution with new configuration
* `postRealmAuthenticationExecutionsExecutionIdLowerPriority` - Lower execution’s priority
* `postRealmAuthenticationExecutionsExecutionIdRaisePriority` - Raise execution’s priority
* `postRealmAuthenticationFlows` - Create a new authentication flow
* `postRealmAuthenticationFlowsFlowAliasCopy` - Copy existing authentication flow under a new name   The new name is given as 'newName' attribute of the passed JSON object
* `postRealmAuthenticationFlowsFlowAliasExecutionsExecution` - Add new authentication execution to a flow
* `postRealmAuthenticationFlowsFlowAliasExecutionsFlow` - Add new flow with new execution to existing flow
* `postRealmAuthenticationRegisterRequiredAction` - Register a new required actions
* `postRealmAuthenticationRequiredActionsAliasLowerPriority` - Lower required action’s priority
* `postRealmAuthenticationRequiredActionsAliasRaisePriority` - Raise required action’s priority
* `postRealmClearKeysCache` - Clear cache of external public keys (Public keys of clients or Identity providers)
* `postRealmClearRealmCache` - Clear realm cache
* `postRealmClearUserCache` - Clear user cache
* `postRealmClientDescriptionConverter` - Base path for importing clients under this realm.
* `postRealmClientScopes` - Create a new client scope   Client Scope’s name must be unique!
* `postRealmClientScopesIdProtocolMappersAddModels` - Create multiple mappers
* `postRealmClientScopesIdProtocolMappersModels` - Create a mapper
* `postRealmClientScopesIdScopeMappingsClientsClient` - Add client-level roles to the client’s scope
* `postRealmClientScopesIdScopeMappingsRealm` - Add a set of realm-level roles to the client’s scope
* `postRealmClients` - Create a new client   Client’s client_id must be unique!
* `postRealmClientsIdCertificatesAttrDownload` - Get a keystore file for the client, containing private key and public certificate
* `postRealmClientsIdCertificatesAttrGenerate` - Generate a new certificate with new key pair
* `postRealmClientsIdCertificatesAttrGenerateAndDownload` - Generate a new keypair and certificate, and get the private key file   Generates a keypair and certificate and serves the private key in a specified keystore format.
* `postRealmClientsIdCertificatesAttrUpload` - Upload certificate and eventually private key
* `postRealmClientsIdCertificatesAttrUploadCertificate` - Upload only certificate, not private key
* `postRealmClientsIdClientSecret` - Generate a new secret for the client
* `postRealmClientsIdNodes` - Register a cluster node with the client   Manually register cluster node to this client - usually it’s not needed to call this directly as adapter should handle  by sending registration request to Keycloak
* `postRealmClientsIdProtocolMappersAddModels` - Create multiple mappers
* `postRealmClientsIdProtocolMappersModels` - Create a mapper
* `postRealmClientsIdPushRevocation` - Push the client’s revocation policy to its admin URL   If the client has an admin URL, push revocation policy to it.
* `postRealmClientsIdRegistrationAccessToken` - Generate a new registration access token for the client
* `postRealmClientsIdRoles` - Create a new role for the realm or client
* `postRealmClientsIdRolesRoleNameComposites` - Add a composite to the role
* `postRealmClientsIdScopeMappingsClientsClient` - Add client-level roles to the client’s scope
* `postRealmClientsIdScopeMappingsRealm` - Add a set of realm-level roles to the client’s scope
* `postRealmClientsInitialAccess` - Create a new initial access token.
* `postRealmComponents`
* `postRealmGroups` - create or add a top level realm groupSet or create child.
* `postRealmGroupsIdChildren` - Set or create child.
* `postRealmGroupsIdRoleMappingsClientsClient` - Add client-level roles to the user role mapping
* `postRealmGroupsIdRoleMappingsRealm` - Add realm-level role mappings to the user
* `postRealmIdentityProviderImportConfig` - Import identity provider from uploaded JSON file
* `postRealmIdentityProviderInstances` - Create a new identity provider
* `postRealmIdentityProviderInstancesAliasMappers` - Add a mapper to identity provider
* `postRealmLogoutAll` - Removes all user sessions.
* `postRealmPartialImport` - Partial import from a JSON file to an existing realm.
* `postRealmPartialExport` - Partial export of existing realm into a JSON file.
* `postRealmPushRevocation` - Push the realm’s revocation policy to any client that has an admin url associated with it.
* `postRealmRoles` - Create a new role for the realm or client
* `postRealmRolesByIdRoleIdComposites` - Make the role a composite role by associating some child roles
* `postRealmRolesRoleNameComposites` - Add a composite to the role
* `postRealmTestLdapConnection` - Test LDAP connection
* `postRealmTestSmtpConnection`
* `postRealmUserStorageIdRemoveImportedUsers` - Remove imported users
* `postRealmUserStorageIdSync` - Trigger sync of users   Action can be "triggerFullSync" or "triggerChangedUsersSync"
* `postRealmUserStorageIdUnlinkUsers` - Unlink imported users from a storage provider
* `postRealmUserStorageParentIdMappersIdSync` - Trigger sync of mapper data related to ldap mapper (roles, groups, …​)   direction is "fedToKeycloak" or "keycloakToFed"
* `postRealmUsers` - Create a new user   Username must be unique.
* `postRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialId` - Move a credential to a position behind another credential
* `postRealmUsersIdCredentialsCredentialIdMoveToFirst` - Move a credential to a first position in the credentials list of the user
* `postRealmUsersIdFederatedIdentityProvider` - Add a social login provider to the user
* `postRealmUsersIdImpersonation` - Impersonate the user
* `postRealmUsersIdLogout` - Remove all user sessions associated with the user   Also send notification to all clients that have an admin URL to invalidate the sessions for the particular user.
* `postRealmUsersIdRoleMappingsClientsClient` - Add client-level roles to the user role mapping
* `postRealmUsersIdRoleMappingsRealm` - Add realm-level role mappings to the user
* `putRealm` - Update the top-level information of the realm   Any user, roles or client information in the representation  will be ignored.
* `putRealmAuthenticationConfigId` - Update authenticator configuration
* `putRealmAuthenticationFlowsFlowAliasExecutions` - Update authentication executions of a flow
* `putRealmAuthenticationFlowsId` - Update an authentication flow
* `putRealmAuthenticationRequiredActionsAlias` - Update required action
* `putRealmClientScopesId1ProtocolMappersModelsId2` - Update the mapper
* `putRealmClientScopesId` - Update the client scope
* `putRealmClientsId1ProtocolMappersModelsId2` - Update the mapper
* `putRealmClientsId` - Update the client
* `putRealmClientsIdDefaultClientScopesClientScopeId`
* `putRealmClientsIdManagementPermissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `putRealmClientsIdOptionalClientScopesClientScopeId`
* `putRealmClientsIdRolesRoleName` - Update a role by name
* `putRealmClientsIdRolesRoleNameManagementPermissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
* `putRealmComponentsId`
* `putRealmDefaultDefaultClientScopesClientScopeId`
* `putRealmDefaultGroupsGroupId`
* `putRealmDefaultOptionalClientScopesClientScopeId`
* `putRealmEventsConfig` - Update the events provider   Change the events provider and/or its configuration
* `putRealmGroupsId` - Update group, ignores subgroups.
* `putRealmGroupsIdManagementPermissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `putRealmIdentityProviderInstancesAlias` - Update the identity provider
* `putRealmIdentityProviderInstancesAliasManagementPermissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `putRealmIdentityProviderInstancesAliasMappersId` - Update a mapper for the identity provider
* `putRealmRolesByIdRoleId` - Update the role
* `putRealmRolesByIdRoleIdManagementPermissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
* `putRealmRolesRoleName` - Update a role by name
* `putRealmRolesRoleNameManagementPermissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
* `putRealmUsersId` - Update the user
* `putRealmUsersIdCredentialsCredentialIdUserLabel` - Update a credential label for a user
* `putRealmUsersIdDisableCredentialTypes` - Disable all credentials for a user of a specific type
* `putRealmUsersIdExecuteActionsEmail` - Send a update account email to the user   An email contains a link the user can click to perform a set of required actions.
* `putRealmUsersIdGroupsGroupId`
* `putRealmUsersIdResetPassword` - Set up a new password for the user.
* `putRealmUsersIdSendVerifyEmail` - Send an email-verification email to the user   An email contains a link the user can click to verify their email address.
* `putRealmUsersManagementPermissions`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
