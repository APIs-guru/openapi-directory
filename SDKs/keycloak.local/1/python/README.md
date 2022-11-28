# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        access_token=shared.SchemeAccessToken(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    )
)
    
req = operations.DeleteRealmRequest(
    path_params=operations.DeleteRealmPathParams(
        realm="et",
    ),
)
    
res = s.sdk.delete_realm_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `delete_realm_` - Delete the realm
* `delete_realm_admin_events` - Delete all admin events
* `delete_realm_attack_detection_brute_force_users` - Clear any user login failures for all users   This can release temporary disabled users
* `delete_realm_attack_detection_brute_force_users_user_id_` - Clear any user login failures for the user   This can release temporary disabled user
* `delete_realm_authentication_config_id_` - Delete authenticator configuration
* `delete_realm_authentication_executions_execution_id_` - Delete execution
* `delete_realm_authentication_flows_id_` - Delete an authentication flow
* `delete_realm_authentication_required_actions_alias_` - Delete required action
* `delete_realm_client_scopes_id1_protocol_mappers_models_id2_` - Delete the mapper
* `delete_realm_client_scopes_id_` - Delete the client scope
* `delete_realm_client_scopes_id_scope_mappings_clients_client_` - Remove client-level roles from the client’s scope.
* `delete_realm_client_scopes_id_scope_mappings_realm` - Remove a set of realm-level roles from the client’s scope
* `delete_realm_clients_id1_protocol_mappers_models_id2_` - Delete the mapper
* `delete_realm_clients_id_` - Delete the client
* `delete_realm_clients_id_default_client_scopes_client_scope_id_`
* `delete_realm_clients_id_nodes_node_` - Unregister a cluster node from the client
* `delete_realm_clients_id_optional_client_scopes_client_scope_id_`
* `delete_realm_clients_id_roles_role_name_` - Delete a role by name
* `delete_realm_clients_id_roles_role_name_composites` - Remove roles from the role’s composite
* `delete_realm_clients_id_scope_mappings_clients_client_` - Remove client-level roles from the client’s scope.
* `delete_realm_clients_id_scope_mappings_realm` - Remove a set of realm-level roles from the client’s scope
* `delete_realm_clients_initial_access_id_`
* `delete_realm_components_id_`
* `delete_realm_default_default_client_scopes_client_scope_id_`
* `delete_realm_default_groups_group_id_`
* `delete_realm_default_optional_client_scopes_client_scope_id_`
* `delete_realm_events` - Delete all events
* `delete_realm_groups_id_`
* `delete_realm_groups_id_role_mappings_clients_client_` - Delete client-level roles from user role mapping
* `delete_realm_groups_id_role_mappings_realm` - Delete realm-level role mappings
* `delete_realm_identity_provider_instances_alias_` - Delete the identity provider
* `delete_realm_identity_provider_instances_alias_mappers_id_` - Delete a mapper for the identity provider
* `delete_realm_roles_by_id_role_id_` - Delete the role
* `delete_realm_roles_by_id_role_id_composites` - Remove a set of roles from the role’s composite
* `delete_realm_roles_role_name_` - Delete a role by name
* `delete_realm_roles_role_name_composites` - Remove roles from the role’s composite
* `delete_realm_sessions_session_` - Remove a specific user session.
* `delete_realm_users_id_` - Delete the user
* `delete_realm_users_id_consents_client_` - Revoke consent and offline tokens for particular client from user
* `delete_realm_users_id_credentials_credential_id_` - Remove a credential for a user
* `delete_realm_users_id_federated_identity_provider_` - Remove a social login provider from user
* `delete_realm_users_id_groups_group_id_`
* `delete_realm_users_id_role_mappings_clients_client_` - Delete client-level roles from user role mapping
* `delete_realm_users_id_role_mappings_realm` - Delete realm-level role mappings
* `get_` - Get themes, social providers, auth providers, and event listeners available on this server
* `get_id_name` - Need this for admin console to display simple name of provider when displaying client detail   KEYCLOAK-4328
* `get_realm_` - Get the top-level representation of the realm   It will not include nested information like User and Client representations.
* `get_realm_admin_events` - Get admin events   Returns all admin events, or filters events based on URL query parameters listed here
* `get_realm_attack_detection_brute_force_users_user_id_` - Get status of a username in brute force detection
* `get_realm_authentication_authenticator_providers` - Get authenticator providers   Returns a list of authenticator providers.
* `get_realm_authentication_client_authenticator_providers` - Get client authenticator providers   Returns a list of client authenticator providers.
* `get_realm_authentication_config_description_provider_id_` - Get authenticator provider’s configuration description
* `get_realm_authentication_config_id_` - Get authenticator configuration
* `get_realm_authentication_executions_execution_id_` - Get Single Execution
* `get_realm_authentication_flows` - Get authentication flows   Returns a list of authentication flows.
* `get_realm_authentication_flows_flow_alias_executions` - Get authentication executions for a flow
* `get_realm_authentication_flows_id_` - Get authentication flow for id
* `get_realm_authentication_form_action_providers` - Get form action providers   Returns a list of form action providers.
* `get_realm_authentication_form_providers` - Get form providers   Returns a list of form providers.
* `get_realm_authentication_per_client_config_description` - Get configuration descriptions for all clients
* `get_realm_authentication_required_actions` - Get required actions   Returns a list of required actions.
* `get_realm_authentication_required_actions_alias_` - Get required action for alias
* `get_realm_authentication_unregistered_required_actions` - Get unregistered required actions   Returns a list of unregistered required actions.
* `get_realm_client_registration_policy_providers` - Base path for retrieve providers with the configProperties properly filled
* `get_realm_client_scopes` - Get client scopes belonging to the realm   Returns a list of client scopes belonging to the realm
* `get_realm_client_scopes_id1_protocol_mappers_models_id2_` - Get mapper by id
* `get_realm_client_scopes_id_` - Get representation of the client scope
* `get_realm_client_scopes_id_protocol_mappers_models` - Get mappers
* `get_realm_client_scopes_id_protocol_mappers_protocol_protocol_` - Get mappers by name for a specific protocol
* `get_realm_client_scopes_id_scope_mappings` - Get all scope mappings for the client
* `get_realm_client_scopes_id_scope_mappings_clients_client_` - Get the roles associated with a client’s scope   Returns roles for the client.
* `get_realm_client_scopes_id_scope_mappings_clients_client_available` - The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
* `get_realm_client_scopes_id_scope_mappings_clients_client_composite` - Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
* `get_realm_client_scopes_id_scope_mappings_realm` - Get realm-level roles associated with the client’s scope
* `get_realm_client_scopes_id_scope_mappings_realm_available` - Get realm-level roles that are available to attach to this client’s scope
* `get_realm_client_scopes_id_scope_mappings_realm_composite` - Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
* `get_realm_client_session_stats` - Get client session stats   Returns a JSON map.
* `get_realm_clients` - Get clients belonging to the realm   Returns a list of clients belonging to the realm
* `get_realm_clients_id1_protocol_mappers_models_id2_` - Get mapper by id
* `get_realm_clients_id_` - Get representation of the client
* `get_realm_clients_id_certificates_attr_` - Get key info
* `get_realm_clients_id_client_secret` - Get the client secret
* `get_realm_clients_id_default_client_scopes` - Get default client scopes.
* `get_realm_clients_id_evaluate_scopes_generate_example_access_token` - Create JSON with payload of example access token
* `get_realm_clients_id_evaluate_scopes_protocol_mappers` - Return list of all protocol mappers, which will be used when generating tokens issued for particular client.
* `get_realm_clients_id_evaluate_scopes_scope_mappings_role_container_id_granted` - Get effective scope mapping of all roles of particular role container, which this client is defacto allowed to have in the accessToken issued for him.
* `get_realm_clients_id_evaluate_scopes_scope_mappings_role_container_id_not_granted` - Get roles, which this client doesn’t have scope for and can’t have them in the accessToken issued for him.
* `get_realm_clients_id_installation_providers_provider_id_`
* `get_realm_clients_id_management_permissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `get_realm_clients_id_offline_session_count` - Get application offline session count   Returns a number of offline user sessions associated with this client   {      "count": number  }
* `get_realm_clients_id_offline_sessions` - Get offline sessions for client   Returns a list of offline user sessions associated with this client
* `get_realm_clients_id_optional_client_scopes` - Get optional client scopes.
* `get_realm_clients_id_protocol_mappers_models` - Get mappers
* `get_realm_clients_id_protocol_mappers_protocol_protocol_` - Get mappers by name for a specific protocol
* `get_realm_clients_id_roles` - Get all roles for the realm or client
* `get_realm_clients_id_roles_role_name_` - Get a role by name
* `get_realm_clients_id_roles_role_name_composites` - Get composites of the role
* `get_realm_clients_id_roles_role_name_composites_clients_client_` - An app-level roles for the specified app for the role’s composite
* `get_realm_clients_id_roles_role_name_composites_realm` - Get realm-level roles of the role’s composite
* `get_realm_clients_id_roles_role_name_groups` - Return List of Groups that have the specified role name
* `get_realm_clients_id_roles_role_name_management_permissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
* `get_realm_clients_id_roles_role_name_users` - Return List of Users that have the specified role name
* `get_realm_clients_id_scope_mappings` - Get all scope mappings for the client
* `get_realm_clients_id_scope_mappings_clients_client_` - Get the roles associated with a client’s scope   Returns roles for the client.
* `get_realm_clients_id_scope_mappings_clients_client_available` - The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
* `get_realm_clients_id_scope_mappings_clients_client_composite` - Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
* `get_realm_clients_id_scope_mappings_realm` - Get realm-level roles associated with the client’s scope
* `get_realm_clients_id_scope_mappings_realm_available` - Get realm-level roles that are available to attach to this client’s scope
* `get_realm_clients_id_scope_mappings_realm_composite` - Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
* `get_realm_clients_id_service_account_user` - Get a user dedicated to the service account
* `get_realm_clients_id_session_count` - Get application session count   Returns a number of user sessions associated with this client   {      "count": number  }
* `get_realm_clients_id_test_nodes_available` - Test if registered cluster nodes are available   Tests availability by sending 'ping' request to all cluster nodes.
* `get_realm_clients_id_user_sessions` - Get user sessions for client   Returns a list of user sessions associated with this client
* `get_realm_clients_initial_access`
* `get_realm_components`
* `get_realm_components_id_`
* `get_realm_components_id_sub_component_types` - List of subcomponent types that are available to configure for a particular parent component.
* `get_realm_credential_registrators`
* `get_realm_default_default_client_scopes` - Get realm default client scopes.
* `get_realm_default_groups` - Get group hierarchy.
* `get_realm_default_optional_client_scopes` - Get realm optional client scopes.
* `get_realm_events` - Get events   Returns all events, or filters them based on URL query parameters listed here
* `get_realm_events_config` - Get the events provider configuration   Returns JSON object with events provider configuration
* `get_realm_group_by_path_path_`
* `get_realm_groups` - Get group hierarchy.
* `get_realm_groups_count` - Returns the groups counts.
* `get_realm_groups_id_`
* `get_realm_groups_id_management_permissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `get_realm_groups_id_members` - Get users   Returns a list of users, filtered according to query parameters
* `get_realm_groups_id_role_mappings` - Get role mappings
* `get_realm_groups_id_role_mappings_clients_client_` - Get client-level role mappings for the user, and the app
* `get_realm_groups_id_role_mappings_clients_client_available` - Get available client-level roles that can be mapped to the user
* `get_realm_groups_id_role_mappings_clients_client_composite` - Get effective client-level role mappings   This recurses any composite roles
* `get_realm_groups_id_role_mappings_realm` - Get realm-level role mappings
* `get_realm_groups_id_role_mappings_realm_available` - Get realm-level roles that can be mapped
* `get_realm_groups_id_role_mappings_realm_composite` - Get effective realm-level role mappings   This will recurse all composite roles to get the result.
* `get_realm_identity_provider_instances` - Get identity providers
* `get_realm_identity_provider_instances_alias_` - Get the identity provider
* `get_realm_identity_provider_instances_alias_export` - Export public broker configuration for identity provider
* `get_realm_identity_provider_instances_alias_management_permissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `get_realm_identity_provider_instances_alias_mapper_types` - Get mapper types for identity provider
* `get_realm_identity_provider_instances_alias_mappers` - Get mappers for identity provider
* `get_realm_identity_provider_instances_alias_mappers_id_` - Get mapper by id for the identity provider
* `get_realm_identity_provider_providers_provider_id_` - Get identity providers
* `get_realm_keys`
* `get_realm_roles` - Get all roles for the realm or client
* `get_realm_roles_by_id_role_id_` - Get a specific role’s representation
* `get_realm_roles_by_id_role_id_composites` - Get role’s children   Returns a set of role’s children provided the role is a composite.
* `get_realm_roles_by_id_role_id_composites_clients_client_` - Get client-level roles for the client that are in the role’s composite
* `get_realm_roles_by_id_role_id_composites_realm` - Get realm-level roles that are in the role’s composite
* `get_realm_roles_by_id_role_id_management_permissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
* `get_realm_roles_role_name_` - Get a role by name
* `get_realm_roles_role_name_composites` - Get composites of the role
* `get_realm_roles_role_name_composites_clients_client_` - An app-level roles for the specified app for the role’s composite
* `get_realm_roles_role_name_composites_realm` - Get realm-level roles of the role’s composite
* `get_realm_roles_role_name_groups` - Return List of Groups that have the specified role name
* `get_realm_roles_role_name_management_permissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
* `get_realm_roles_role_name_users` - Return List of Users that have the specified role name
* `get_realm_user_storage_id_name` - Need this for admin console to display simple name of provider when displaying user detail   KEYCLOAK-4328
* `get_realm_users` - Get users   Returns a list of users, filtered according to query parameters
* `get_realm_users_count` - Returns the number of users that match the given criteria.
* `get_realm_users_id_` - Get representation of the user
* `get_realm_users_id_configured_user_storage_credential_types` - Return credential types, which are provided by the user storage where user is stored.
* `get_realm_users_id_consents` - Get consents granted by the user
* `get_realm_users_id_credentials`
* `get_realm_users_id_federated_identity` - Get social logins associated with the user
* `get_realm_users_id_groups`
* `get_realm_users_id_groups_count`
* `get_realm_users_id_offline_sessions_client_id_` - Get offline sessions associated with the user and client
* `get_realm_users_id_role_mappings` - Get role mappings
* `get_realm_users_id_role_mappings_clients_client_` - Get client-level role mappings for the user, and the app
* `get_realm_users_id_role_mappings_clients_client_available` - Get available client-level roles that can be mapped to the user
* `get_realm_users_id_role_mappings_clients_client_composite` - Get effective client-level role mappings   This recurses any composite roles
* `get_realm_users_id_role_mappings_realm` - Get realm-level role mappings
* `get_realm_users_id_role_mappings_realm_available` - Get realm-level roles that can be mapped
* `get_realm_users_id_role_mappings_realm_composite` - Get effective realm-level role mappings   This will recurse all composite roles to get the result.
* `get_realm_users_id_sessions` - Get sessions associated with the user
* `get_realm_users_management_permissions`
* `post_` - Import a realm   Imports a realm from a full representation of that realm.
* `post_realm_authentication_executions` - Add new authentication execution
* `post_realm_authentication_executions_execution_id_config` - Update execution with new configuration
* `post_realm_authentication_executions_execution_id_lower_priority` - Lower execution’s priority
* `post_realm_authentication_executions_execution_id_raise_priority` - Raise execution’s priority
* `post_realm_authentication_flows` - Create a new authentication flow
* `post_realm_authentication_flows_flow_alias_copy` - Copy existing authentication flow under a new name   The new name is given as 'newName' attribute of the passed JSON object
* `post_realm_authentication_flows_flow_alias_executions_execution` - Add new authentication execution to a flow
* `post_realm_authentication_flows_flow_alias_executions_flow` - Add new flow with new execution to existing flow
* `post_realm_authentication_register_required_action` - Register a new required actions
* `post_realm_authentication_required_actions_alias_lower_priority` - Lower required action’s priority
* `post_realm_authentication_required_actions_alias_raise_priority` - Raise required action’s priority
* `post_realm_clear_keys_cache` - Clear cache of external public keys (Public keys of clients or Identity providers)
* `post_realm_clear_realm_cache` - Clear realm cache
* `post_realm_clear_user_cache` - Clear user cache
* `post_realm_client_description_converter` - Base path for importing clients under this realm.
* `post_realm_client_scopes` - Create a new client scope   Client Scope’s name must be unique!
* `post_realm_client_scopes_id_protocol_mappers_add_models` - Create multiple mappers
* `post_realm_client_scopes_id_protocol_mappers_models` - Create a mapper
* `post_realm_client_scopes_id_scope_mappings_clients_client_` - Add client-level roles to the client’s scope
* `post_realm_client_scopes_id_scope_mappings_realm` - Add a set of realm-level roles to the client’s scope
* `post_realm_clients` - Create a new client   Client’s client_id must be unique!
* `post_realm_clients_id_certificates_attr_download` - Get a keystore file for the client, containing private key and public certificate
* `post_realm_clients_id_certificates_attr_generate` - Generate a new certificate with new key pair
* `post_realm_clients_id_certificates_attr_generate_and_download` - Generate a new keypair and certificate, and get the private key file   Generates a keypair and certificate and serves the private key in a specified keystore format.
* `post_realm_clients_id_certificates_attr_upload` - Upload certificate and eventually private key
* `post_realm_clients_id_certificates_attr_upload_certificate` - Upload only certificate, not private key
* `post_realm_clients_id_client_secret` - Generate a new secret for the client
* `post_realm_clients_id_nodes` - Register a cluster node with the client   Manually register cluster node to this client - usually it’s not needed to call this directly as adapter should handle  by sending registration request to Keycloak
* `post_realm_clients_id_protocol_mappers_add_models` - Create multiple mappers
* `post_realm_clients_id_protocol_mappers_models` - Create a mapper
* `post_realm_clients_id_push_revocation` - Push the client’s revocation policy to its admin URL   If the client has an admin URL, push revocation policy to it.
* `post_realm_clients_id_registration_access_token` - Generate a new registration access token for the client
* `post_realm_clients_id_roles` - Create a new role for the realm or client
* `post_realm_clients_id_roles_role_name_composites` - Add a composite to the role
* `post_realm_clients_id_scope_mappings_clients_client_` - Add client-level roles to the client’s scope
* `post_realm_clients_id_scope_mappings_realm` - Add a set of realm-level roles to the client’s scope
* `post_realm_clients_initial_access` - Create a new initial access token.
* `post_realm_components`
* `post_realm_groups` - create or add a top level realm groupSet or create child.
* `post_realm_groups_id_children` - Set or create child.
* `post_realm_groups_id_role_mappings_clients_client_` - Add client-level roles to the user role mapping
* `post_realm_groups_id_role_mappings_realm` - Add realm-level role mappings to the user
* `post_realm_identity_provider_import_config` - Import identity provider from uploaded JSON file
* `post_realm_identity_provider_instances` - Create a new identity provider
* `post_realm_identity_provider_instances_alias_mappers` - Add a mapper to identity provider
* `post_realm_logout_all` - Removes all user sessions.
* `post_realm_partial_import` - Partial import from a JSON file to an existing realm.
* `post_realm_partial_export` - Partial export of existing realm into a JSON file.
* `post_realm_push_revocation` - Push the realm’s revocation policy to any client that has an admin url associated with it.
* `post_realm_roles` - Create a new role for the realm or client
* `post_realm_roles_by_id_role_id_composites` - Make the role a composite role by associating some child roles
* `post_realm_roles_role_name_composites` - Add a composite to the role
* `post_realm_test_ldap_connection` - Test LDAP connection
* `post_realm_test_smtp_connection`
* `post_realm_user_storage_id_remove_imported_users` - Remove imported users
* `post_realm_user_storage_id_sync` - Trigger sync of users   Action can be "triggerFullSync" or "triggerChangedUsersSync"
* `post_realm_user_storage_id_unlink_users` - Unlink imported users from a storage provider
* `post_realm_user_storage_parent_id_mappers_id_sync` - Trigger sync of mapper data related to ldap mapper (roles, groups, …​)   direction is "fedToKeycloak" or "keycloakToFed"
* `post_realm_users` - Create a new user   Username must be unique.
* `post_realm_users_id_credentials_credential_id_move_after_new_previous_credential_id_` - Move a credential to a position behind another credential
* `post_realm_users_id_credentials_credential_id_move_to_first` - Move a credential to a first position in the credentials list of the user
* `post_realm_users_id_federated_identity_provider_` - Add a social login provider to the user
* `post_realm_users_id_impersonation` - Impersonate the user
* `post_realm_users_id_logout` - Remove all user sessions associated with the user   Also send notification to all clients that have an admin URL to invalidate the sessions for the particular user.
* `post_realm_users_id_role_mappings_clients_client_` - Add client-level roles to the user role mapping
* `post_realm_users_id_role_mappings_realm` - Add realm-level role mappings to the user
* `put_realm_` - Update the top-level information of the realm   Any user, roles or client information in the representation  will be ignored.
* `put_realm_authentication_config_id_` - Update authenticator configuration
* `put_realm_authentication_flows_flow_alias_executions` - Update authentication executions of a flow
* `put_realm_authentication_flows_id_` - Update an authentication flow
* `put_realm_authentication_required_actions_alias_` - Update required action
* `put_realm_client_scopes_id1_protocol_mappers_models_id2_` - Update the mapper
* `put_realm_client_scopes_id_` - Update the client scope
* `put_realm_clients_id1_protocol_mappers_models_id2_` - Update the mapper
* `put_realm_clients_id_` - Update the client
* `put_realm_clients_id_default_client_scopes_client_scope_id_`
* `put_realm_clients_id_management_permissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `put_realm_clients_id_optional_client_scopes_client_scope_id_`
* `put_realm_clients_id_roles_role_name_` - Update a role by name
* `put_realm_clients_id_roles_role_name_management_permissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
* `put_realm_components_id_`
* `put_realm_default_default_client_scopes_client_scope_id_`
* `put_realm_default_groups_group_id_`
* `put_realm_default_optional_client_scopes_client_scope_id_`
* `put_realm_events_config` - Update the events provider   Change the events provider and/or its configuration
* `put_realm_groups_id_` - Update group, ignores subgroups.
* `put_realm_groups_id_management_permissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `put_realm_identity_provider_instances_alias_` - Update the identity provider
* `put_realm_identity_provider_instances_alias_management_permissions` - Return object stating whether client Authorization permissions have been initialized or not and a reference
* `put_realm_identity_provider_instances_alias_mappers_id_` - Update a mapper for the identity provider
* `put_realm_roles_by_id_role_id_` - Update the role
* `put_realm_roles_by_id_role_id_management_permissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
* `put_realm_roles_role_name_` - Update a role by name
* `put_realm_roles_role_name_management_permissions` - Return object stating whether role Authoirzation permissions have been initialized or not and a reference
* `put_realm_users_id_` - Update the user
* `put_realm_users_id_credentials_credential_id_user_label` - Update a credential label for a user
* `put_realm_users_id_disable_credential_types` - Disable all credentials for a user of a specific type
* `put_realm_users_id_execute_actions_email` - Send a update account email to the user   An email contains a link the user can click to perform a set of required actions.
* `put_realm_users_id_groups_group_id_`
* `put_realm_users_id_reset_password` - Set up a new password for the user.
* `put_realm_users_id_send_verify_email` - Send an email-verification email to the user   An email contains a link the user can click to verify their email address.
* `put_realm_users_management_permissions`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
