import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"http://keycloak.local",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)
    
    def delete_realm_(self, request: operations.DeleteRealmRequest) -> operations.DeleteRealmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_admin_events(self, request: operations.DeleteRealmAdminEventsRequest) -> operations.DeleteRealmAdminEventsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/admin-events", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmAdminEventsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_attack_detection_brute_force_users(self, request: operations.DeleteRealmAttackDetectionBruteForceUsersRequest) -> operations.DeleteRealmAttackDetectionBruteForceUsersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/attack-detection/brute-force/users", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmAttackDetectionBruteForceUsersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_attack_detection_brute_force_users_user_id_(self, request: operations.DeleteRealmAttackDetectionBruteForceUsersUserIDRequest) -> operations.DeleteRealmAttackDetectionBruteForceUsersUserIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/attack-detection/brute-force/users/{userId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmAttackDetectionBruteForceUsersUserIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_authentication_config_id_(self, request: operations.DeleteRealmAuthenticationConfigIDRequest) -> operations.DeleteRealmAuthenticationConfigIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/config/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmAuthenticationConfigIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_authentication_executions_execution_id_(self, request: operations.DeleteRealmAuthenticationExecutionsExecutionIDRequest) -> operations.DeleteRealmAuthenticationExecutionsExecutionIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/executions/{executionId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmAuthenticationExecutionsExecutionIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_authentication_flows_id_(self, request: operations.DeleteRealmAuthenticationFlowsIDRequest) -> operations.DeleteRealmAuthenticationFlowsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/flows/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmAuthenticationFlowsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_authentication_required_actions_alias_(self, request: operations.DeleteRealmAuthenticationRequiredActionsAliasRequest) -> operations.DeleteRealmAuthenticationRequiredActionsAliasResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/required-actions/{alias}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmAuthenticationRequiredActionsAliasResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_client_scopes_id1_protocol_mappers_models_id2_(self, request: operations.DeleteRealmClientScopesId1ProtocolMappersModelsId2Request) -> operations.DeleteRealmClientScopesId1ProtocolMappersModelsId2Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmClientScopesId1ProtocolMappersModelsId2Response(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_client_scopes_id_(self, request: operations.DeleteRealmClientScopesIDRequest) -> operations.DeleteRealmClientScopesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmClientScopesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_client_scopes_id_scope_mappings_clients_client_(self, request: operations.DeleteRealmClientScopesIDScopeMappingsClientsClientRequest) -> operations.DeleteRealmClientScopesIDScopeMappingsClientsClientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmClientScopesIDScopeMappingsClientsClientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_client_scopes_id_scope_mappings_realm(self, request: operations.DeleteRealmClientScopesIDScopeMappingsRealmRequest) -> operations.DeleteRealmClientScopesIDScopeMappingsRealmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes/{id}/scope-mappings/realm", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmClientScopesIDScopeMappingsRealmResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_clients_id1_protocol_mappers_models_id2_(self, request: operations.DeleteRealmClientsId1ProtocolMappersModelsId2Request) -> operations.DeleteRealmClientsId1ProtocolMappersModelsId2Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id1}/protocol-mappers/models/{id2}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmClientsId1ProtocolMappersModelsId2Response(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_clients_id_(self, request: operations.DeleteRealmClientsIDRequest) -> operations.DeleteRealmClientsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmClientsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_clients_id_default_client_scopes_client_scope_id_(self, request: operations.DeleteRealmClientsIDDefaultClientScopesClientScopeIDRequest) -> operations.DeleteRealmClientsIDDefaultClientScopesClientScopeIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/default-client-scopes/{clientScopeId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmClientsIDDefaultClientScopesClientScopeIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_clients_id_nodes_node_(self, request: operations.DeleteRealmClientsIDNodesNodeRequest) -> operations.DeleteRealmClientsIDNodesNodeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/nodes/{node}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmClientsIDNodesNodeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_clients_id_optional_client_scopes_client_scope_id_(self, request: operations.DeleteRealmClientsIDOptionalClientScopesClientScopeIDRequest) -> operations.DeleteRealmClientsIDOptionalClientScopesClientScopeIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/optional-client-scopes/{clientScopeId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmClientsIDOptionalClientScopesClientScopeIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_clients_id_roles_role_name_(self, request: operations.DeleteRealmClientsIDRolesRoleNameRequest) -> operations.DeleteRealmClientsIDRolesRoleNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/roles/{role-name}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmClientsIDRolesRoleNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_clients_id_roles_role_name_composites(self, request: operations.DeleteRealmClientsIDRolesRoleNameCompositesRequest) -> operations.DeleteRealmClientsIDRolesRoleNameCompositesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/roles/{role-name}/composites", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmClientsIDRolesRoleNameCompositesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_clients_id_scope_mappings_clients_client_(self, request: operations.DeleteRealmClientsIDScopeMappingsClientsClientRequest) -> operations.DeleteRealmClientsIDScopeMappingsClientsClientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/scope-mappings/clients/{client}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmClientsIDScopeMappingsClientsClientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_clients_id_scope_mappings_realm(self, request: operations.DeleteRealmClientsIDScopeMappingsRealmRequest) -> operations.DeleteRealmClientsIDScopeMappingsRealmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/scope-mappings/realm", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmClientsIDScopeMappingsRealmResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_clients_initial_access_id_(self, request: operations.DeleteRealmClientsInitialAccessIDRequest) -> operations.DeleteRealmClientsInitialAccessIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients-initial-access/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmClientsInitialAccessIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_components_id_(self, request: operations.DeleteRealmComponentsIDRequest) -> operations.DeleteRealmComponentsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/components/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmComponentsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_default_default_client_scopes_client_scope_id_(self, request: operations.DeleteRealmDefaultDefaultClientScopesClientScopeIDRequest) -> operations.DeleteRealmDefaultDefaultClientScopesClientScopeIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/default-default-client-scopes/{clientScopeId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmDefaultDefaultClientScopesClientScopeIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_default_groups_group_id_(self, request: operations.DeleteRealmDefaultGroupsGroupIDRequest) -> operations.DeleteRealmDefaultGroupsGroupIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/default-groups/{groupId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmDefaultGroupsGroupIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_default_optional_client_scopes_client_scope_id_(self, request: operations.DeleteRealmDefaultOptionalClientScopesClientScopeIDRequest) -> operations.DeleteRealmDefaultOptionalClientScopesClientScopeIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/default-optional-client-scopes/{clientScopeId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmDefaultOptionalClientScopesClientScopeIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_events(self, request: operations.DeleteRealmEventsRequest) -> operations.DeleteRealmEventsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/events", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmEventsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_groups_id_(self, request: operations.DeleteRealmGroupsIDRequest) -> operations.DeleteRealmGroupsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/groups/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmGroupsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_groups_id_role_mappings_clients_client_(self, request: operations.DeleteRealmGroupsIDRoleMappingsClientsClientRequest) -> operations.DeleteRealmGroupsIDRoleMappingsClientsClientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/groups/{id}/role-mappings/clients/{client}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmGroupsIDRoleMappingsClientsClientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_groups_id_role_mappings_realm(self, request: operations.DeleteRealmGroupsIDRoleMappingsRealmRequest) -> operations.DeleteRealmGroupsIDRoleMappingsRealmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/groups/{id}/role-mappings/realm", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmGroupsIDRoleMappingsRealmResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_identity_provider_instances_alias_(self, request: operations.DeleteRealmIdentityProviderInstancesAliasRequest) -> operations.DeleteRealmIdentityProviderInstancesAliasResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/identity-provider/instances/{alias}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmIdentityProviderInstancesAliasResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_identity_provider_instances_alias_mappers_id_(self, request: operations.DeleteRealmIdentityProviderInstancesAliasMappersIDRequest) -> operations.DeleteRealmIdentityProviderInstancesAliasMappersIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/identity-provider/instances/{alias}/mappers/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmIdentityProviderInstancesAliasMappersIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_roles_by_id_role_id_(self, request: operations.DeleteRealmRolesByIDRoleIDRequest) -> operations.DeleteRealmRolesByIDRoleIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles-by-id/{role-id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmRolesByIDRoleIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_roles_by_id_role_id_composites(self, request: operations.DeleteRealmRolesByIDRoleIDCompositesRequest) -> operations.DeleteRealmRolesByIDRoleIDCompositesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles-by-id/{role-id}/composites", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmRolesByIDRoleIDCompositesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_roles_role_name_(self, request: operations.DeleteRealmRolesRoleNameRequest) -> operations.DeleteRealmRolesRoleNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles/{role-name}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmRolesRoleNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_roles_role_name_composites(self, request: operations.DeleteRealmRolesRoleNameCompositesRequest) -> operations.DeleteRealmRolesRoleNameCompositesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles/{role-name}/composites", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmRolesRoleNameCompositesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_sessions_session_(self, request: operations.DeleteRealmSessionsSessionRequest) -> operations.DeleteRealmSessionsSessionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/sessions/{session}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmSessionsSessionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_users_id_(self, request: operations.DeleteRealmUsersIDRequest) -> operations.DeleteRealmUsersIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmUsersIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_users_id_consents_client_(self, request: operations.DeleteRealmUsersIDConsentsClientRequest) -> operations.DeleteRealmUsersIDConsentsClientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/consents/{client}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmUsersIDConsentsClientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_users_id_credentials_credential_id_(self, request: operations.DeleteRealmUsersIDCredentialsCredentialIDRequest) -> operations.DeleteRealmUsersIDCredentialsCredentialIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/credentials/{credentialId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmUsersIDCredentialsCredentialIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_users_id_federated_identity_provider_(self, request: operations.DeleteRealmUsersIDFederatedIdentityProviderRequest) -> operations.DeleteRealmUsersIDFederatedIdentityProviderResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/federated-identity/{provider}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmUsersIDFederatedIdentityProviderResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_users_id_groups_group_id_(self, request: operations.DeleteRealmUsersIDGroupsGroupIDRequest) -> operations.DeleteRealmUsersIDGroupsGroupIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/groups/{groupId}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmUsersIDGroupsGroupIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_users_id_role_mappings_clients_client_(self, request: operations.DeleteRealmUsersIDRoleMappingsClientsClientRequest) -> operations.DeleteRealmUsersIDRoleMappingsClientsClientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/role-mappings/clients/{client}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmUsersIDRoleMappingsClientsClientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def delete_realm_users_id_role_mappings_realm(self, request: operations.DeleteRealmUsersIDRoleMappingsRealmRequest) -> operations.DeleteRealmUsersIDRoleMappingsRealmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/role-mappings/realm", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRealmUsersIDRoleMappingsRealmResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def get_(self) -> operations.GetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServerInfoRepresentation])
                res.server_info_representation = out

        return res

    
    
    def get_id_name(self, request: operations.GetIDNameRequest) -> operations.GetIDNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{id}/name", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIDNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_id_name_2_xx_application_json_object = out

        return res

    
    
    def get_realm_(self, request: operations.GetRealmRequest) -> operations.GetRealmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RealmRepresentation])
                res.realm_representation = out

        return res

    
    
    def get_realm_admin_events(self, request: operations.GetRealmAdminEventsRequest) -> operations.GetRealmAdminEventsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/admin-events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmAdminEventsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AdminEventRepresentation]])
                res.admin_event_representations = out

        return res

    
    
    def get_realm_attack_detection_brute_force_users_user_id_(self, request: operations.GetRealmAttackDetectionBruteForceUsersUserIDRequest) -> operations.GetRealmAttackDetectionBruteForceUsersUserIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/attack-detection/brute-force/users/{userId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmAttackDetectionBruteForceUsersUserIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_realm_attack_detection_brute_force_users_user_id_2_xx_application_json_object = out

        return res

    
    
    def get_realm_authentication_authenticator_providers(self, request: operations.GetRealmAuthenticationAuthenticatorProvidersRequest) -> operations.GetRealmAuthenticationAuthenticatorProvidersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/authenticator-providers", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmAuthenticationAuthenticatorProvidersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[dict[str, Any]]])
                res.get_realm_authentication_authenticator_providers_2_xx_application_json_objects = out

        return res

    
    
    def get_realm_authentication_client_authenticator_providers(self, request: operations.GetRealmAuthenticationClientAuthenticatorProvidersRequest) -> operations.GetRealmAuthenticationClientAuthenticatorProvidersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/client-authenticator-providers", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmAuthenticationClientAuthenticatorProvidersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[dict[str, Any]]])
                res.get_realm_authentication_client_authenticator_providers_2_xx_application_json_objects = out

        return res

    
    
    def get_realm_authentication_config_description_provider_id_(self, request: operations.GetRealmAuthenticationConfigDescriptionProviderIDRequest) -> operations.GetRealmAuthenticationConfigDescriptionProviderIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/config-description/{providerId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmAuthenticationConfigDescriptionProviderIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthenticatorConfigInfoRepresentation])
                res.authenticator_config_info_representation = out

        return res

    
    
    def get_realm_authentication_config_id_(self, request: operations.GetRealmAuthenticationConfigIDRequest) -> operations.GetRealmAuthenticationConfigIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/config/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmAuthenticationConfigIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthenticatorConfigRepresentation])
                res.authenticator_config_representation = out

        return res

    
    
    def get_realm_authentication_executions_execution_id_(self, request: operations.GetRealmAuthenticationExecutionsExecutionIDRequest) -> operations.GetRealmAuthenticationExecutionsExecutionIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/executions/{executionId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmAuthenticationExecutionsExecutionIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def get_realm_authentication_flows(self, request: operations.GetRealmAuthenticationFlowsRequest) -> operations.GetRealmAuthenticationFlowsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/flows", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmAuthenticationFlowsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AuthenticationFlowRepresentation]])
                res.authentication_flow_representations = out

        return res

    
    
    def get_realm_authentication_flows_flow_alias_executions(self, request: operations.GetRealmAuthenticationFlowsFlowAliasExecutionsRequest) -> operations.GetRealmAuthenticationFlowsFlowAliasExecutionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/flows/{flowAlias}/executions", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmAuthenticationFlowsFlowAliasExecutionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def get_realm_authentication_flows_id_(self, request: operations.GetRealmAuthenticationFlowsIDRequest) -> operations.GetRealmAuthenticationFlowsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/flows/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmAuthenticationFlowsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthenticationFlowRepresentation])
                res.authentication_flow_representation = out

        return res

    
    
    def get_realm_authentication_form_action_providers(self, request: operations.GetRealmAuthenticationFormActionProvidersRequest) -> operations.GetRealmAuthenticationFormActionProvidersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/form-action-providers", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmAuthenticationFormActionProvidersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[dict[str, Any]]])
                res.get_realm_authentication_form_action_providers_2_xx_application_json_objects = out

        return res

    
    
    def get_realm_authentication_form_providers(self, request: operations.GetRealmAuthenticationFormProvidersRequest) -> operations.GetRealmAuthenticationFormProvidersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/form-providers", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmAuthenticationFormProvidersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[dict[str, Any]]])
                res.get_realm_authentication_form_providers_2_xx_application_json_objects = out

        return res

    
    
    def get_realm_authentication_per_client_config_description(self, request: operations.GetRealmAuthenticationPerClientConfigDescriptionRequest) -> operations.GetRealmAuthenticationPerClientConfigDescriptionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/per-client-config-description", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmAuthenticationPerClientConfigDescriptionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_realm_authentication_per_client_config_description_2_xx_application_json_object = out

        return res

    
    
    def get_realm_authentication_required_actions(self, request: operations.GetRealmAuthenticationRequiredActionsRequest) -> operations.GetRealmAuthenticationRequiredActionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/required-actions", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmAuthenticationRequiredActionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RequiredActionProviderRepresentation]])
                res.required_action_provider_representations = out

        return res

    
    
    def get_realm_authentication_required_actions_alias_(self, request: operations.GetRealmAuthenticationRequiredActionsAliasRequest) -> operations.GetRealmAuthenticationRequiredActionsAliasResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/required-actions/{alias}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmAuthenticationRequiredActionsAliasResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RequiredActionProviderRepresentation])
                res.required_action_provider_representation = out

        return res

    
    
    def get_realm_authentication_unregistered_required_actions(self, request: operations.GetRealmAuthenticationUnregisteredRequiredActionsRequest) -> operations.GetRealmAuthenticationUnregisteredRequiredActionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/unregistered-required-actions", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmAuthenticationUnregisteredRequiredActionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[dict[str, Any]]])
                res.get_realm_authentication_unregistered_required_actions_2_xx_application_json_objects = out

        return res

    
    
    def get_realm_client_registration_policy_providers(self, request: operations.GetRealmClientRegistrationPolicyProvidersRequest) -> operations.GetRealmClientRegistrationPolicyProvidersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-registration-policy/providers", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientRegistrationPolicyProvidersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ComponentTypeRepresentation]])
                res.component_type_representations = out

        return res

    
    
    def get_realm_client_scopes(self, request: operations.GetRealmClientScopesRequest) -> operations.GetRealmClientScopesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientScopesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ClientScopeRepresentation]])
                res.client_scope_representations = out

        return res

    
    
    def get_realm_client_scopes_id1_protocol_mappers_models_id2_(self, request: operations.GetRealmClientScopesId1ProtocolMappersModelsId2Request) -> operations.GetRealmClientScopesId1ProtocolMappersModelsId2Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientScopesId1ProtocolMappersModelsId2Response(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProtocolMapperRepresentation])
                res.protocol_mapper_representation = out

        return res

    
    
    def get_realm_client_scopes_id_(self, request: operations.GetRealmClientScopesIDRequest) -> operations.GetRealmClientScopesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientScopesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientScopeRepresentation])
                res.client_scope_representation = out

        return res

    
    
    def get_realm_client_scopes_id_protocol_mappers_models(self, request: operations.GetRealmClientScopesIDProtocolMappersModelsRequest) -> operations.GetRealmClientScopesIDProtocolMappersModelsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes/{id}/protocol-mappers/models", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientScopesIDProtocolMappersModelsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ProtocolMapperRepresentation]])
                res.protocol_mapper_representations = out

        return res

    
    
    def get_realm_client_scopes_id_protocol_mappers_protocol_protocol_(self, request: operations.GetRealmClientScopesIDProtocolMappersProtocolProtocolRequest) -> operations.GetRealmClientScopesIDProtocolMappersProtocolProtocolResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes/{id}/protocol-mappers/protocol/{protocol}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientScopesIDProtocolMappersProtocolProtocolResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ProtocolMapperRepresentation]])
                res.protocol_mapper_representations = out

        return res

    
    
    def get_realm_client_scopes_id_scope_mappings(self, request: operations.GetRealmClientScopesIDScopeMappingsRequest) -> operations.GetRealmClientScopesIDScopeMappingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes/{id}/scope-mappings", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientScopesIDScopeMappingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MappingsRepresentation])
                res.mappings_representation = out

        return res

    
    
    def get_realm_client_scopes_id_scope_mappings_clients_client_(self, request: operations.GetRealmClientScopesIDScopeMappingsClientsClientRequest) -> operations.GetRealmClientScopesIDScopeMappingsClientsClientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientScopesIDScopeMappingsClientsClientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_client_scopes_id_scope_mappings_clients_client_available(self, request: operations.GetRealmClientScopesIDScopeMappingsClientsClientAvailableRequest) -> operations.GetRealmClientScopesIDScopeMappingsClientsClientAvailableResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}/available", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientScopesIDScopeMappingsClientsClientAvailableResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_client_scopes_id_scope_mappings_clients_client_composite(self, request: operations.GetRealmClientScopesIDScopeMappingsClientsClientCompositeRequest) -> operations.GetRealmClientScopesIDScopeMappingsClientsClientCompositeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}/composite", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientScopesIDScopeMappingsClientsClientCompositeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_client_scopes_id_scope_mappings_realm(self, request: operations.GetRealmClientScopesIDScopeMappingsRealmRequest) -> operations.GetRealmClientScopesIDScopeMappingsRealmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes/{id}/scope-mappings/realm", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientScopesIDScopeMappingsRealmResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_client_scopes_id_scope_mappings_realm_available(self, request: operations.GetRealmClientScopesIDScopeMappingsRealmAvailableRequest) -> operations.GetRealmClientScopesIDScopeMappingsRealmAvailableResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes/{id}/scope-mappings/realm/available", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientScopesIDScopeMappingsRealmAvailableResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_client_scopes_id_scope_mappings_realm_composite(self, request: operations.GetRealmClientScopesIDScopeMappingsRealmCompositeRequest) -> operations.GetRealmClientScopesIDScopeMappingsRealmCompositeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes/{id}/scope-mappings/realm/composite", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientScopesIDScopeMappingsRealmCompositeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_client_session_stats(self, request: operations.GetRealmClientSessionStatsRequest) -> operations.GetRealmClientSessionStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-session-stats", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientSessionStatsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[dict[str, Any]]])
                res.get_realm_client_session_stats_2_xx_application_json_objects = out

        return res

    
    
    def get_realm_clients(self, request: operations.GetRealmClientsRequest) -> operations.GetRealmClientsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ClientRepresentation]])
                res.client_representations = out

        return res

    
    
    def get_realm_clients_id1_protocol_mappers_models_id2_(self, request: operations.GetRealmClientsId1ProtocolMappersModelsId2Request) -> operations.GetRealmClientsId1ProtocolMappersModelsId2Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id1}/protocol-mappers/models/{id2}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsId1ProtocolMappersModelsId2Response(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProtocolMapperRepresentation])
                res.protocol_mapper_representation = out

        return res

    
    
    def get_realm_clients_id_(self, request: operations.GetRealmClientsIDRequest) -> operations.GetRealmClientsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientRepresentation])
                res.client_representation = out

        return res

    
    
    def get_realm_clients_id_certificates_attr_(self, request: operations.GetRealmClientsIDCertificatesAttrRequest) -> operations.GetRealmClientsIDCertificatesAttrResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/certificates/{attr}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDCertificatesAttrResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CertificateRepresentation])
                res.certificate_representation = out

        return res

    
    
    def get_realm_clients_id_client_secret(self, request: operations.GetRealmClientsIDClientSecretRequest) -> operations.GetRealmClientsIDClientSecretResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/client-secret", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDClientSecretResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CredentialRepresentation])
                res.credential_representation = out

        return res

    
    
    def get_realm_clients_id_default_client_scopes(self, request: operations.GetRealmClientsIDDefaultClientScopesRequest) -> operations.GetRealmClientsIDDefaultClientScopesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/default-client-scopes", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDDefaultClientScopesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ClientScopeRepresentation]])
                res.client_scope_representations = out

        return res

    
    
    def get_realm_clients_id_evaluate_scopes_generate_example_access_token(self, request: operations.GetRealmClientsIDEvaluateScopesGenerateExampleAccessTokenRequest) -> operations.GetRealmClientsIDEvaluateScopesGenerateExampleAccessTokenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/evaluate-scopes/generate-example-access-token", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDEvaluateScopesGenerateExampleAccessTokenResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccessToken])
                res.access_token = out

        return res

    
    
    def get_realm_clients_id_evaluate_scopes_protocol_mappers(self, request: operations.GetRealmClientsIDEvaluateScopesProtocolMappersRequest) -> operations.GetRealmClientsIDEvaluateScopesProtocolMappersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/evaluate-scopes/protocol-mappers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDEvaluateScopesProtocolMappersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentation]])
                res.client_scope_evaluate_resource_protocol_mapper_evaluation_representations = out

        return res

    
    
    def get_realm_clients_id_evaluate_scopes_scope_mappings_role_container_id_granted(self, request: operations.GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDGrantedRequest) -> operations.GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDGrantedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/evaluate-scopes/scope-mappings/{roleContainerId}/granted", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDGrantedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_clients_id_evaluate_scopes_scope_mappings_role_container_id_not_granted(self, request: operations.GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDNotGrantedRequest) -> operations.GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDNotGrantedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/evaluate-scopes/scope-mappings/{roleContainerId}/not-granted", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDNotGrantedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_clients_id_installation_providers_provider_id_(self, request: operations.GetRealmClientsIDInstallationProvidersProviderIDRequest) -> operations.GetRealmClientsIDInstallationProvidersProviderIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/installation/providers/{providerId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDInstallationProvidersProviderIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def get_realm_clients_id_management_permissions(self, request: operations.GetRealmClientsIDManagementPermissionsRequest) -> operations.GetRealmClientsIDManagementPermissionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/management/permissions", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDManagementPermissionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagementPermissionReference])
                res.management_permission_reference = out

        return res

    
    
    def get_realm_clients_id_offline_session_count(self, request: operations.GetRealmClientsIDOfflineSessionCountRequest) -> operations.GetRealmClientsIDOfflineSessionCountResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/offline-session-count", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDOfflineSessionCountResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_realm_clients_id_offline_session_count_2_xx_application_json_object = out

        return res

    
    
    def get_realm_clients_id_offline_sessions(self, request: operations.GetRealmClientsIDOfflineSessionsRequest) -> operations.GetRealmClientsIDOfflineSessionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/offline-sessions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDOfflineSessionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserSessionRepresentation]])
                res.user_session_representations = out

        return res

    
    
    def get_realm_clients_id_optional_client_scopes(self, request: operations.GetRealmClientsIDOptionalClientScopesRequest) -> operations.GetRealmClientsIDOptionalClientScopesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/optional-client-scopes", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDOptionalClientScopesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ClientScopeRepresentation]])
                res.client_scope_representations = out

        return res

    
    
    def get_realm_clients_id_protocol_mappers_models(self, request: operations.GetRealmClientsIDProtocolMappersModelsRequest) -> operations.GetRealmClientsIDProtocolMappersModelsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/protocol-mappers/models", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDProtocolMappersModelsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ProtocolMapperRepresentation]])
                res.protocol_mapper_representations = out

        return res

    
    
    def get_realm_clients_id_protocol_mappers_protocol_protocol_(self, request: operations.GetRealmClientsIDProtocolMappersProtocolProtocolRequest) -> operations.GetRealmClientsIDProtocolMappersProtocolProtocolResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/protocol-mappers/protocol/{protocol}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDProtocolMappersProtocolProtocolResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ProtocolMapperRepresentation]])
                res.protocol_mapper_representations = out

        return res

    
    
    def get_realm_clients_id_roles(self, request: operations.GetRealmClientsIDRolesRequest) -> operations.GetRealmClientsIDRolesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/roles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDRolesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_clients_id_roles_role_name_(self, request: operations.GetRealmClientsIDRolesRoleNameRequest) -> operations.GetRealmClientsIDRolesRoleNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/roles/{role-name}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDRolesRoleNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RoleRepresentation])
                res.role_representation = out

        return res

    
    
    def get_realm_clients_id_roles_role_name_composites(self, request: operations.GetRealmClientsIDRolesRoleNameCompositesRequest) -> operations.GetRealmClientsIDRolesRoleNameCompositesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/roles/{role-name}/composites", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDRolesRoleNameCompositesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_clients_id_roles_role_name_composites_clients_client_(self, request: operations.GetRealmClientsIDRolesRoleNameCompositesClientsClientRequest) -> operations.GetRealmClientsIDRolesRoleNameCompositesClientsClientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/roles/{role-name}/composites/clients/{client}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDRolesRoleNameCompositesClientsClientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_clients_id_roles_role_name_composites_realm(self, request: operations.GetRealmClientsIDRolesRoleNameCompositesRealmRequest) -> operations.GetRealmClientsIDRolesRoleNameCompositesRealmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/roles/{role-name}/composites/realm", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDRolesRoleNameCompositesRealmResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_clients_id_roles_role_name_groups(self, request: operations.GetRealmClientsIDRolesRoleNameGroupsRequest) -> operations.GetRealmClientsIDRolesRoleNameGroupsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/roles/{role-name}/groups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDRolesRoleNameGroupsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GroupRepresentation]])
                res.group_representations = out

        return res

    
    
    def get_realm_clients_id_roles_role_name_management_permissions(self, request: operations.GetRealmClientsIDRolesRoleNameManagementPermissionsRequest) -> operations.GetRealmClientsIDRolesRoleNameManagementPermissionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/roles/{role-name}/management/permissions", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDRolesRoleNameManagementPermissionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagementPermissionReference])
                res.management_permission_reference = out

        return res

    
    
    def get_realm_clients_id_roles_role_name_users(self, request: operations.GetRealmClientsIDRolesRoleNameUsersRequest) -> operations.GetRealmClientsIDRolesRoleNameUsersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/roles/{role-name}/users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDRolesRoleNameUsersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserRepresentation]])
                res.user_representations = out

        return res

    
    
    def get_realm_clients_id_scope_mappings(self, request: operations.GetRealmClientsIDScopeMappingsRequest) -> operations.GetRealmClientsIDScopeMappingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/scope-mappings", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDScopeMappingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MappingsRepresentation])
                res.mappings_representation = out

        return res

    
    
    def get_realm_clients_id_scope_mappings_clients_client_(self, request: operations.GetRealmClientsIDScopeMappingsClientsClientRequest) -> operations.GetRealmClientsIDScopeMappingsClientsClientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/scope-mappings/clients/{client}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDScopeMappingsClientsClientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_clients_id_scope_mappings_clients_client_available(self, request: operations.GetRealmClientsIDScopeMappingsClientsClientAvailableRequest) -> operations.GetRealmClientsIDScopeMappingsClientsClientAvailableResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/scope-mappings/clients/{client}/available", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDScopeMappingsClientsClientAvailableResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_clients_id_scope_mappings_clients_client_composite(self, request: operations.GetRealmClientsIDScopeMappingsClientsClientCompositeRequest) -> operations.GetRealmClientsIDScopeMappingsClientsClientCompositeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/scope-mappings/clients/{client}/composite", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDScopeMappingsClientsClientCompositeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_clients_id_scope_mappings_realm(self, request: operations.GetRealmClientsIDScopeMappingsRealmRequest) -> operations.GetRealmClientsIDScopeMappingsRealmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/scope-mappings/realm", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDScopeMappingsRealmResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_clients_id_scope_mappings_realm_available(self, request: operations.GetRealmClientsIDScopeMappingsRealmAvailableRequest) -> operations.GetRealmClientsIDScopeMappingsRealmAvailableResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/scope-mappings/realm/available", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDScopeMappingsRealmAvailableResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_clients_id_scope_mappings_realm_composite(self, request: operations.GetRealmClientsIDScopeMappingsRealmCompositeRequest) -> operations.GetRealmClientsIDScopeMappingsRealmCompositeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/scope-mappings/realm/composite", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDScopeMappingsRealmCompositeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_clients_id_service_account_user(self, request: operations.GetRealmClientsIDServiceAccountUserRequest) -> operations.GetRealmClientsIDServiceAccountUserResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/service-account-user", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDServiceAccountUserResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserRepresentation])
                res.user_representation = out

        return res

    
    
    def get_realm_clients_id_session_count(self, request: operations.GetRealmClientsIDSessionCountRequest) -> operations.GetRealmClientsIDSessionCountResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/session-count", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDSessionCountResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_realm_clients_id_session_count_2_xx_application_json_object = out

        return res

    
    
    def get_realm_clients_id_test_nodes_available(self, request: operations.GetRealmClientsIDTestNodesAvailableRequest) -> operations.GetRealmClientsIDTestNodesAvailableResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/test-nodes-available", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDTestNodesAvailableResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalRequestResult])
                res.global_request_result = out

        return res

    
    
    def get_realm_clients_id_user_sessions(self, request: operations.GetRealmClientsIDUserSessionsRequest) -> operations.GetRealmClientsIDUserSessionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/user-sessions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsIDUserSessionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserSessionRepresentation]])
                res.user_session_representations = out

        return res

    
    
    def get_realm_clients_initial_access(self, request: operations.GetRealmClientsInitialAccessRequest) -> operations.GetRealmClientsInitialAccessResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients-initial-access", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmClientsInitialAccessResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ClientInitialAccessPresentation]])
                res.client_initial_access_presentations = out

        return res

    
    
    def get_realm_components(self, request: operations.GetRealmComponentsRequest) -> operations.GetRealmComponentsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/components", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmComponentsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ComponentRepresentation]])
                res.component_representations = out

        return res

    
    
    def get_realm_components_id_(self, request: operations.GetRealmComponentsIDRequest) -> operations.GetRealmComponentsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/components/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmComponentsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ComponentRepresentation])
                res.component_representation = out

        return res

    
    
    def get_realm_components_id_sub_component_types(self, request: operations.GetRealmComponentsIDSubComponentTypesRequest) -> operations.GetRealmComponentsIDSubComponentTypesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/components/{id}/sub-component-types", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmComponentsIDSubComponentTypesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ComponentTypeRepresentation]])
                res.component_type_representations = out

        return res

    
    
    def get_realm_credential_registrators(self, request: operations.GetRealmCredentialRegistratorsRequest) -> operations.GetRealmCredentialRegistratorsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/credential-registrators", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmCredentialRegistratorsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_realm_credential_registrators_2_xx_application_json_strings = out

        return res

    
    
    def get_realm_default_default_client_scopes(self, request: operations.GetRealmDefaultDefaultClientScopesRequest) -> operations.GetRealmDefaultDefaultClientScopesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/default-default-client-scopes", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmDefaultDefaultClientScopesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ClientScopeRepresentation]])
                res.client_scope_representations = out

        return res

    
    
    def get_realm_default_groups(self, request: operations.GetRealmDefaultGroupsRequest) -> operations.GetRealmDefaultGroupsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/default-groups", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmDefaultGroupsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GroupRepresentation]])
                res.group_representations = out

        return res

    
    
    def get_realm_default_optional_client_scopes(self, request: operations.GetRealmDefaultOptionalClientScopesRequest) -> operations.GetRealmDefaultOptionalClientScopesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/default-optional-client-scopes", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmDefaultOptionalClientScopesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ClientScopeRepresentation]])
                res.client_scope_representations = out

        return res

    
    
    def get_realm_events(self, request: operations.GetRealmEventsRequest) -> operations.GetRealmEventsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmEventsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.EventRepresentation]])
                res.event_representations = out

        return res

    
    
    def get_realm_events_config(self, request: operations.GetRealmEventsConfigRequest) -> operations.GetRealmEventsConfigResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/events/config", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmEventsConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RealmEventsConfigRepresentation])
                res.realm_events_config_representation = out

        return res

    
    
    def get_realm_group_by_path_path_(self, request: operations.GetRealmGroupByPathPathRequest) -> operations.GetRealmGroupByPathPathResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/group-by-path/{path}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmGroupByPathPathResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupRepresentation])
                res.group_representation = out

        return res

    
    
    def get_realm_groups(self, request: operations.GetRealmGroupsRequest) -> operations.GetRealmGroupsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/groups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmGroupsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GroupRepresentation]])
                res.group_representations = out

        return res

    
    
    def get_realm_groups_count(self, request: operations.GetRealmGroupsCountRequest) -> operations.GetRealmGroupsCountResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/groups/count", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmGroupsCountResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_realm_groups_count_2_xx_application_json_object = out

        return res

    
    
    def get_realm_groups_id_(self, request: operations.GetRealmGroupsIDRequest) -> operations.GetRealmGroupsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/groups/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmGroupsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupRepresentation])
                res.group_representation = out

        return res

    
    
    def get_realm_groups_id_management_permissions(self, request: operations.GetRealmGroupsIDManagementPermissionsRequest) -> operations.GetRealmGroupsIDManagementPermissionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/groups/{id}/management/permissions", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmGroupsIDManagementPermissionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagementPermissionReference])
                res.management_permission_reference = out

        return res

    
    
    def get_realm_groups_id_members(self, request: operations.GetRealmGroupsIDMembersRequest) -> operations.GetRealmGroupsIDMembersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/groups/{id}/members", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmGroupsIDMembersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserRepresentation]])
                res.user_representations = out

        return res

    
    
    def get_realm_groups_id_role_mappings(self, request: operations.GetRealmGroupsIDRoleMappingsRequest) -> operations.GetRealmGroupsIDRoleMappingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/groups/{id}/role-mappings", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmGroupsIDRoleMappingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MappingsRepresentation])
                res.mappings_representation = out

        return res

    
    
    def get_realm_groups_id_role_mappings_clients_client_(self, request: operations.GetRealmGroupsIDRoleMappingsClientsClientRequest) -> operations.GetRealmGroupsIDRoleMappingsClientsClientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/groups/{id}/role-mappings/clients/{client}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmGroupsIDRoleMappingsClientsClientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_groups_id_role_mappings_clients_client_available(self, request: operations.GetRealmGroupsIDRoleMappingsClientsClientAvailableRequest) -> operations.GetRealmGroupsIDRoleMappingsClientsClientAvailableResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/groups/{id}/role-mappings/clients/{client}/available", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmGroupsIDRoleMappingsClientsClientAvailableResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_groups_id_role_mappings_clients_client_composite(self, request: operations.GetRealmGroupsIDRoleMappingsClientsClientCompositeRequest) -> operations.GetRealmGroupsIDRoleMappingsClientsClientCompositeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/groups/{id}/role-mappings/clients/{client}/composite", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmGroupsIDRoleMappingsClientsClientCompositeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_groups_id_role_mappings_realm(self, request: operations.GetRealmGroupsIDRoleMappingsRealmRequest) -> operations.GetRealmGroupsIDRoleMappingsRealmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/groups/{id}/role-mappings/realm", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmGroupsIDRoleMappingsRealmResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_groups_id_role_mappings_realm_available(self, request: operations.GetRealmGroupsIDRoleMappingsRealmAvailableRequest) -> operations.GetRealmGroupsIDRoleMappingsRealmAvailableResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/groups/{id}/role-mappings/realm/available", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmGroupsIDRoleMappingsRealmAvailableResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_groups_id_role_mappings_realm_composite(self, request: operations.GetRealmGroupsIDRoleMappingsRealmCompositeRequest) -> operations.GetRealmGroupsIDRoleMappingsRealmCompositeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/groups/{id}/role-mappings/realm/composite", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmGroupsIDRoleMappingsRealmCompositeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_identity_provider_instances(self, request: operations.GetRealmIdentityProviderInstancesRequest) -> operations.GetRealmIdentityProviderInstancesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/identity-provider/instances", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmIdentityProviderInstancesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.IdentityProviderRepresentation]])
                res.identity_provider_representations = out

        return res

    
    
    def get_realm_identity_provider_instances_alias_(self, request: operations.GetRealmIdentityProviderInstancesAliasRequest) -> operations.GetRealmIdentityProviderInstancesAliasResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/identity-provider/instances/{alias}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmIdentityProviderInstancesAliasResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IdentityProviderRepresentation])
                res.identity_provider_representation = out

        return res

    
    
    def get_realm_identity_provider_instances_alias_export(self, request: operations.GetRealmIdentityProviderInstancesAliasExportRequest) -> operations.GetRealmIdentityProviderInstancesAliasExportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/identity-provider/instances/{alias}/export", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmIdentityProviderInstancesAliasExportResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def get_realm_identity_provider_instances_alias_management_permissions(self, request: operations.GetRealmIdentityProviderInstancesAliasManagementPermissionsRequest) -> operations.GetRealmIdentityProviderInstancesAliasManagementPermissionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/identity-provider/instances/{alias}/management/permissions", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmIdentityProviderInstancesAliasManagementPermissionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagementPermissionReference])
                res.management_permission_reference = out

        return res

    
    
    def get_realm_identity_provider_instances_alias_mapper_types(self, request: operations.GetRealmIdentityProviderInstancesAliasMapperTypesRequest) -> operations.GetRealmIdentityProviderInstancesAliasMapperTypesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/identity-provider/instances/{alias}/mapper-types", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmIdentityProviderInstancesAliasMapperTypesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def get_realm_identity_provider_instances_alias_mappers(self, request: operations.GetRealmIdentityProviderInstancesAliasMappersRequest) -> operations.GetRealmIdentityProviderInstancesAliasMappersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/identity-provider/instances/{alias}/mappers", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmIdentityProviderInstancesAliasMappersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.IdentityProviderMapperRepresentation]])
                res.identity_provider_mapper_representations = out

        return res

    
    
    def get_realm_identity_provider_instances_alias_mappers_id_(self, request: operations.GetRealmIdentityProviderInstancesAliasMappersIDRequest) -> operations.GetRealmIdentityProviderInstancesAliasMappersIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/identity-provider/instances/{alias}/mappers/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmIdentityProviderInstancesAliasMappersIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IdentityProviderMapperRepresentation])
                res.identity_provider_mapper_representation = out

        return res

    
    
    def get_realm_identity_provider_providers_provider_id_(self, request: operations.GetRealmIdentityProviderProvidersProviderIDRequest) -> operations.GetRealmIdentityProviderProvidersProviderIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/identity-provider/providers/{provider_id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmIdentityProviderProvidersProviderIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def get_realm_keys(self, request: operations.GetRealmKeysRequest) -> operations.GetRealmKeysResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/keys", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmKeysResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.KeysMetadataRepresentation])
                res.keys_metadata_representation = out

        return res

    
    
    def get_realm_roles(self, request: operations.GetRealmRolesRequest) -> operations.GetRealmRolesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmRolesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_roles_by_id_role_id_(self, request: operations.GetRealmRolesByIDRoleIDRequest) -> operations.GetRealmRolesByIDRoleIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles-by-id/{role-id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmRolesByIDRoleIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RoleRepresentation])
                res.role_representation = out

        return res

    
    
    def get_realm_roles_by_id_role_id_composites(self, request: operations.GetRealmRolesByIDRoleIDCompositesRequest) -> operations.GetRealmRolesByIDRoleIDCompositesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles-by-id/{role-id}/composites", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmRolesByIDRoleIDCompositesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_roles_by_id_role_id_composites_clients_client_(self, request: operations.GetRealmRolesByIDRoleIDCompositesClientsClientRequest) -> operations.GetRealmRolesByIDRoleIDCompositesClientsClientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles-by-id/{role-id}/composites/clients/{client}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmRolesByIDRoleIDCompositesClientsClientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_roles_by_id_role_id_composites_realm(self, request: operations.GetRealmRolesByIDRoleIDCompositesRealmRequest) -> operations.GetRealmRolesByIDRoleIDCompositesRealmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles-by-id/{role-id}/composites/realm", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmRolesByIDRoleIDCompositesRealmResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_roles_by_id_role_id_management_permissions(self, request: operations.GetRealmRolesByIDRoleIDManagementPermissionsRequest) -> operations.GetRealmRolesByIDRoleIDManagementPermissionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles-by-id/{role-id}/management/permissions", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmRolesByIDRoleIDManagementPermissionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagementPermissionReference])
                res.management_permission_reference = out

        return res

    
    
    def get_realm_roles_role_name_(self, request: operations.GetRealmRolesRoleNameRequest) -> operations.GetRealmRolesRoleNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles/{role-name}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmRolesRoleNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RoleRepresentation])
                res.role_representation = out

        return res

    
    
    def get_realm_roles_role_name_composites(self, request: operations.GetRealmRolesRoleNameCompositesRequest) -> operations.GetRealmRolesRoleNameCompositesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles/{role-name}/composites", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmRolesRoleNameCompositesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_roles_role_name_composites_clients_client_(self, request: operations.GetRealmRolesRoleNameCompositesClientsClientRequest) -> operations.GetRealmRolesRoleNameCompositesClientsClientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles/{role-name}/composites/clients/{client}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmRolesRoleNameCompositesClientsClientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_roles_role_name_composites_realm(self, request: operations.GetRealmRolesRoleNameCompositesRealmRequest) -> operations.GetRealmRolesRoleNameCompositesRealmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles/{role-name}/composites/realm", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmRolesRoleNameCompositesRealmResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_roles_role_name_groups(self, request: operations.GetRealmRolesRoleNameGroupsRequest) -> operations.GetRealmRolesRoleNameGroupsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles/{role-name}/groups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmRolesRoleNameGroupsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GroupRepresentation]])
                res.group_representations = out

        return res

    
    
    def get_realm_roles_role_name_management_permissions(self, request: operations.GetRealmRolesRoleNameManagementPermissionsRequest) -> operations.GetRealmRolesRoleNameManagementPermissionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles/{role-name}/management/permissions", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmRolesRoleNameManagementPermissionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagementPermissionReference])
                res.management_permission_reference = out

        return res

    
    
    def get_realm_roles_role_name_users(self, request: operations.GetRealmRolesRoleNameUsersRequest) -> operations.GetRealmRolesRoleNameUsersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles/{role-name}/users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmRolesRoleNameUsersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserRepresentation]])
                res.user_representations = out

        return res

    
    
    def get_realm_user_storage_id_name(self, request: operations.GetRealmUserStorageIDNameRequest) -> operations.GetRealmUserStorageIDNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/user-storage/{id}/name", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmUserStorageIDNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_realm_user_storage_id_name_2_xx_application_json_object = out

        return res

    
    
    def get_realm_users(self, request: operations.GetRealmUsersRequest) -> operations.GetRealmUsersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmUsersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserRepresentation]])
                res.user_representations = out

        return res

    
    
    def get_realm_users_count(self, request: operations.GetRealmUsersCountRequest) -> operations.GetRealmUsersCountResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/count", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmUsersCountResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.get_realm_users_count_2_xx_application_json_int32_integer = out

        return res

    
    
    def get_realm_users_id_(self, request: operations.GetRealmUsersIDRequest) -> operations.GetRealmUsersIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmUsersIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserRepresentation])
                res.user_representation = out

        return res

    
    
    def get_realm_users_id_configured_user_storage_credential_types(self, request: operations.GetRealmUsersIDConfiguredUserStorageCredentialTypesRequest) -> operations.GetRealmUsersIDConfiguredUserStorageCredentialTypesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/configured-user-storage-credential-types", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmUsersIDConfiguredUserStorageCredentialTypesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_realm_users_id_configured_user_storage_credential_types_2_xx_application_json_strings = out

        return res

    
    
    def get_realm_users_id_consents(self, request: operations.GetRealmUsersIDConsentsRequest) -> operations.GetRealmUsersIDConsentsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/consents", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmUsersIDConsentsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[dict[str, Any]]])
                res.get_realm_users_id_consents_2_xx_application_json_objects = out

        return res

    
    
    def get_realm_users_id_credentials(self, request: operations.GetRealmUsersIDCredentialsRequest) -> operations.GetRealmUsersIDCredentialsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/credentials", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmUsersIDCredentialsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CredentialRepresentation]])
                res.credential_representations = out

        return res

    
    
    def get_realm_users_id_federated_identity(self, request: operations.GetRealmUsersIDFederatedIdentityRequest) -> operations.GetRealmUsersIDFederatedIdentityResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/federated-identity", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmUsersIDFederatedIdentityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.FederatedIdentityRepresentation]])
                res.federated_identity_representations = out

        return res

    
    
    def get_realm_users_id_groups(self, request: operations.GetRealmUsersIDGroupsRequest) -> operations.GetRealmUsersIDGroupsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/groups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmUsersIDGroupsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GroupRepresentation]])
                res.group_representations = out

        return res

    
    
    def get_realm_users_id_groups_count(self, request: operations.GetRealmUsersIDGroupsCountRequest) -> operations.GetRealmUsersIDGroupsCountResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/groups/count", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmUsersIDGroupsCountResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_realm_users_id_groups_count_2_xx_application_json_object = out

        return res

    
    
    def get_realm_users_id_offline_sessions_client_id_(self, request: operations.GetRealmUsersIDOfflineSessionsClientIDRequest) -> operations.GetRealmUsersIDOfflineSessionsClientIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/offline-sessions/{clientId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmUsersIDOfflineSessionsClientIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserSessionRepresentation]])
                res.user_session_representations = out

        return res

    
    
    def get_realm_users_id_role_mappings(self, request: operations.GetRealmUsersIDRoleMappingsRequest) -> operations.GetRealmUsersIDRoleMappingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/role-mappings", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmUsersIDRoleMappingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MappingsRepresentation])
                res.mappings_representation = out

        return res

    
    
    def get_realm_users_id_role_mappings_clients_client_(self, request: operations.GetRealmUsersIDRoleMappingsClientsClientRequest) -> operations.GetRealmUsersIDRoleMappingsClientsClientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/role-mappings/clients/{client}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmUsersIDRoleMappingsClientsClientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_users_id_role_mappings_clients_client_available(self, request: operations.GetRealmUsersIDRoleMappingsClientsClientAvailableRequest) -> operations.GetRealmUsersIDRoleMappingsClientsClientAvailableResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/role-mappings/clients/{client}/available", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmUsersIDRoleMappingsClientsClientAvailableResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_users_id_role_mappings_clients_client_composite(self, request: operations.GetRealmUsersIDRoleMappingsClientsClientCompositeRequest) -> operations.GetRealmUsersIDRoleMappingsClientsClientCompositeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/role-mappings/clients/{client}/composite", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmUsersIDRoleMappingsClientsClientCompositeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_users_id_role_mappings_realm(self, request: operations.GetRealmUsersIDRoleMappingsRealmRequest) -> operations.GetRealmUsersIDRoleMappingsRealmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/role-mappings/realm", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmUsersIDRoleMappingsRealmResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_users_id_role_mappings_realm_available(self, request: operations.GetRealmUsersIDRoleMappingsRealmAvailableRequest) -> operations.GetRealmUsersIDRoleMappingsRealmAvailableResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/role-mappings/realm/available", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmUsersIDRoleMappingsRealmAvailableResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_users_id_role_mappings_realm_composite(self, request: operations.GetRealmUsersIDRoleMappingsRealmCompositeRequest) -> operations.GetRealmUsersIDRoleMappingsRealmCompositeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/role-mappings/realm/composite", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmUsersIDRoleMappingsRealmCompositeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RoleRepresentation]])
                res.role_representations = out

        return res

    
    
    def get_realm_users_id_sessions(self, request: operations.GetRealmUsersIDSessionsRequest) -> operations.GetRealmUsersIDSessionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/sessions", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmUsersIDSessionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserSessionRepresentation]])
                res.user_session_representations = out

        return res

    
    
    def get_realm_users_management_permissions(self, request: operations.GetRealmUsersManagementPermissionsRequest) -> operations.GetRealmUsersManagementPermissionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users-management-permissions", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRealmUsersManagementPermissionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagementPermissionReference])
                res.management_permission_reference = out

        return res

    
    
    def post_(self, request: operations.PostRequest) -> operations.PostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_authentication_executions(self, request: operations.PostRealmAuthenticationExecutionsRequest) -> operations.PostRealmAuthenticationExecutionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/executions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmAuthenticationExecutionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_authentication_executions_execution_id_config(self, request: operations.PostRealmAuthenticationExecutionsExecutionIDConfigRequest) -> operations.PostRealmAuthenticationExecutionsExecutionIDConfigResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/executions/{executionId}/config", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmAuthenticationExecutionsExecutionIDConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_authentication_executions_execution_id_lower_priority(self, request: operations.PostRealmAuthenticationExecutionsExecutionIDLowerPriorityRequest) -> operations.PostRealmAuthenticationExecutionsExecutionIDLowerPriorityResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/executions/{executionId}/lower-priority", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmAuthenticationExecutionsExecutionIDLowerPriorityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_authentication_executions_execution_id_raise_priority(self, request: operations.PostRealmAuthenticationExecutionsExecutionIDRaisePriorityRequest) -> operations.PostRealmAuthenticationExecutionsExecutionIDRaisePriorityResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/executions/{executionId}/raise-priority", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmAuthenticationExecutionsExecutionIDRaisePriorityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_authentication_flows(self, request: operations.PostRealmAuthenticationFlowsRequest) -> operations.PostRealmAuthenticationFlowsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/flows", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmAuthenticationFlowsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_authentication_flows_flow_alias_copy(self, request: operations.PostRealmAuthenticationFlowsFlowAliasCopyRequest) -> operations.PostRealmAuthenticationFlowsFlowAliasCopyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/flows/{flowAlias}/copy", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmAuthenticationFlowsFlowAliasCopyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_authentication_flows_flow_alias_executions_execution(self, request: operations.PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionRequest) -> operations.PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/flows/{flowAlias}/executions/execution", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_authentication_flows_flow_alias_executions_flow(self, request: operations.PostRealmAuthenticationFlowsFlowAliasExecutionsFlowRequest) -> operations.PostRealmAuthenticationFlowsFlowAliasExecutionsFlowResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/flows/{flowAlias}/executions/flow", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmAuthenticationFlowsFlowAliasExecutionsFlowResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_authentication_register_required_action(self, request: operations.PostRealmAuthenticationRegisterRequiredActionRequest) -> operations.PostRealmAuthenticationRegisterRequiredActionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/register-required-action", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmAuthenticationRegisterRequiredActionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_authentication_required_actions_alias_lower_priority(self, request: operations.PostRealmAuthenticationRequiredActionsAliasLowerPriorityRequest) -> operations.PostRealmAuthenticationRequiredActionsAliasLowerPriorityResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/required-actions/{alias}/lower-priority", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmAuthenticationRequiredActionsAliasLowerPriorityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_authentication_required_actions_alias_raise_priority(self, request: operations.PostRealmAuthenticationRequiredActionsAliasRaisePriorityRequest) -> operations.PostRealmAuthenticationRequiredActionsAliasRaisePriorityResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/required-actions/{alias}/raise-priority", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmAuthenticationRequiredActionsAliasRaisePriorityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_clear_keys_cache(self, request: operations.PostRealmClearKeysCacheRequest) -> operations.PostRealmClearKeysCacheResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clear-keys-cache", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClearKeysCacheResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_clear_realm_cache(self, request: operations.PostRealmClearRealmCacheRequest) -> operations.PostRealmClearRealmCacheResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clear-realm-cache", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClearRealmCacheResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_clear_user_cache(self, request: operations.PostRealmClearUserCacheRequest) -> operations.PostRealmClearUserCacheResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clear-user-cache", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClearUserCacheResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_client_description_converter(self, request: operations.PostRealmClientDescriptionConverterRequest) -> operations.PostRealmClientDescriptionConverterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-description-converter", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientDescriptionConverterResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientRepresentation])
                res.client_representation = out

        return res

    
    
    def post_realm_client_scopes(self, request: operations.PostRealmClientScopesRequest) -> operations.PostRealmClientScopesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientScopesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_client_scopes_id_protocol_mappers_add_models(self, request: operations.PostRealmClientScopesIDProtocolMappersAddModelsRequest) -> operations.PostRealmClientScopesIDProtocolMappersAddModelsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes/{id}/protocol-mappers/add-models", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientScopesIDProtocolMappersAddModelsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_client_scopes_id_protocol_mappers_models(self, request: operations.PostRealmClientScopesIDProtocolMappersModelsRequest) -> operations.PostRealmClientScopesIDProtocolMappersModelsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes/{id}/protocol-mappers/models", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientScopesIDProtocolMappersModelsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_client_scopes_id_scope_mappings_clients_client_(self, request: operations.PostRealmClientScopesIDScopeMappingsClientsClientRequest) -> operations.PostRealmClientScopesIDScopeMappingsClientsClientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientScopesIDScopeMappingsClientsClientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_client_scopes_id_scope_mappings_realm(self, request: operations.PostRealmClientScopesIDScopeMappingsRealmRequest) -> operations.PostRealmClientScopesIDScopeMappingsRealmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes/{id}/scope-mappings/realm", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientScopesIDScopeMappingsRealmResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_clients(self, request: operations.PostRealmClientsRequest) -> operations.PostRealmClientsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_clients_id_certificates_attr_download(self, request: operations.PostRealmClientsIDCertificatesAttrDownloadRequest) -> operations.PostRealmClientsIDCertificatesAttrDownloadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/certificates/{attr}/download", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientsIDCertificatesAttrDownloadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.post_realm_clients_id_certificates_attr_download_2_xx_application_octet_stream_byte_string = r.content

        return res

    
    
    def post_realm_clients_id_certificates_attr_generate(self, request: operations.PostRealmClientsIDCertificatesAttrGenerateRequest) -> operations.PostRealmClientsIDCertificatesAttrGenerateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/certificates/{attr}/generate", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientsIDCertificatesAttrGenerateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CertificateRepresentation])
                res.certificate_representation = out

        return res

    
    
    def post_realm_clients_id_certificates_attr_generate_and_download(self, request: operations.PostRealmClientsIDCertificatesAttrGenerateAndDownloadRequest) -> operations.PostRealmClientsIDCertificatesAttrGenerateAndDownloadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/certificates/{attr}/generate-and-download", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientsIDCertificatesAttrGenerateAndDownloadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.post_realm_clients_id_certificates_attr_generate_and_download_2_xx_application_octet_stream_byte_string = r.content

        return res

    
    
    def post_realm_clients_id_certificates_attr_upload(self, request: operations.PostRealmClientsIDCertificatesAttrUploadRequest) -> operations.PostRealmClientsIDCertificatesAttrUploadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/certificates/{attr}/upload", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientsIDCertificatesAttrUploadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CertificateRepresentation])
                res.certificate_representation = out

        return res

    
    
    def post_realm_clients_id_certificates_attr_upload_certificate(self, request: operations.PostRealmClientsIDCertificatesAttrUploadCertificateRequest) -> operations.PostRealmClientsIDCertificatesAttrUploadCertificateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/certificates/{attr}/upload-certificate", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientsIDCertificatesAttrUploadCertificateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CertificateRepresentation])
                res.certificate_representation = out

        return res

    
    
    def post_realm_clients_id_client_secret(self, request: operations.PostRealmClientsIDClientSecretRequest) -> operations.PostRealmClientsIDClientSecretResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/client-secret", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientsIDClientSecretResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CredentialRepresentation])
                res.credential_representation = out

        return res

    
    
    def post_realm_clients_id_nodes(self, request: operations.PostRealmClientsIDNodesRequest) -> operations.PostRealmClientsIDNodesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/nodes", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientsIDNodesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_clients_id_protocol_mappers_add_models(self, request: operations.PostRealmClientsIDProtocolMappersAddModelsRequest) -> operations.PostRealmClientsIDProtocolMappersAddModelsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/protocol-mappers/add-models", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientsIDProtocolMappersAddModelsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_clients_id_protocol_mappers_models(self, request: operations.PostRealmClientsIDProtocolMappersModelsRequest) -> operations.PostRealmClientsIDProtocolMappersModelsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/protocol-mappers/models", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientsIDProtocolMappersModelsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_clients_id_push_revocation(self, request: operations.PostRealmClientsIDPushRevocationRequest) -> operations.PostRealmClientsIDPushRevocationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/push-revocation", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientsIDPushRevocationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalRequestResult])
                res.global_request_result = out

        return res

    
    
    def post_realm_clients_id_registration_access_token(self, request: operations.PostRealmClientsIDRegistrationAccessTokenRequest) -> operations.PostRealmClientsIDRegistrationAccessTokenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/registration-access-token", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientsIDRegistrationAccessTokenResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientRepresentation])
                res.client_representation = out

        return res

    
    
    def post_realm_clients_id_roles(self, request: operations.PostRealmClientsIDRolesRequest) -> operations.PostRealmClientsIDRolesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/roles", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientsIDRolesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_clients_id_roles_role_name_composites(self, request: operations.PostRealmClientsIDRolesRoleNameCompositesRequest) -> operations.PostRealmClientsIDRolesRoleNameCompositesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/roles/{role-name}/composites", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientsIDRolesRoleNameCompositesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_clients_id_scope_mappings_clients_client_(self, request: operations.PostRealmClientsIDScopeMappingsClientsClientRequest) -> operations.PostRealmClientsIDScopeMappingsClientsClientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/scope-mappings/clients/{client}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientsIDScopeMappingsClientsClientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_clients_id_scope_mappings_realm(self, request: operations.PostRealmClientsIDScopeMappingsRealmRequest) -> operations.PostRealmClientsIDScopeMappingsRealmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/scope-mappings/realm", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientsIDScopeMappingsRealmResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_clients_initial_access(self, request: operations.PostRealmClientsInitialAccessRequest) -> operations.PostRealmClientsInitialAccessResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients-initial-access", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmClientsInitialAccessResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientInitialAccessPresentation])
                res.client_initial_access_presentation = out

        return res

    
    
    def post_realm_components(self, request: operations.PostRealmComponentsRequest) -> operations.PostRealmComponentsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/components", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmComponentsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_groups(self, request: operations.PostRealmGroupsRequest) -> operations.PostRealmGroupsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/groups", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmGroupsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_groups_id_children(self, request: operations.PostRealmGroupsIDChildrenRequest) -> operations.PostRealmGroupsIDChildrenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/groups/{id}/children", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmGroupsIDChildrenResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_groups_id_role_mappings_clients_client_(self, request: operations.PostRealmGroupsIDRoleMappingsClientsClientRequest) -> operations.PostRealmGroupsIDRoleMappingsClientsClientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/groups/{id}/role-mappings/clients/{client}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmGroupsIDRoleMappingsClientsClientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_groups_id_role_mappings_realm(self, request: operations.PostRealmGroupsIDRoleMappingsRealmRequest) -> operations.PostRealmGroupsIDRoleMappingsRealmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/groups/{id}/role-mappings/realm", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmGroupsIDRoleMappingsRealmResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_identity_provider_import_config(self, request: operations.PostRealmIdentityProviderImportConfigRequest) -> operations.PostRealmIdentityProviderImportConfigResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/identity-provider/import-config", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmIdentityProviderImportConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.post_realm_identity_provider_import_config_2_xx_application_json_object = out

        return res

    
    
    def post_realm_identity_provider_instances(self, request: operations.PostRealmIdentityProviderInstancesRequest) -> operations.PostRealmIdentityProviderInstancesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/identity-provider/instances", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmIdentityProviderInstancesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_identity_provider_instances_alias_mappers(self, request: operations.PostRealmIdentityProviderInstancesAliasMappersRequest) -> operations.PostRealmIdentityProviderInstancesAliasMappersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/identity-provider/instances/{alias}/mappers", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmIdentityProviderInstancesAliasMappersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_logout_all(self, request: operations.PostRealmLogoutAllRequest) -> operations.PostRealmLogoutAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/logout-all", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmLogoutAllResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_partial_import(self, request: operations.PostRealmPartialImportRequest) -> operations.PostRealmPartialImportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/partialImport", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmPartialImportResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_partial_export(self, request: operations.PostRealmPartialExportRequest) -> operations.PostRealmPartialExportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/partial-export", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmPartialExportResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RealmRepresentation])
                res.realm_representation = out

        return res

    
    
    def post_realm_push_revocation(self, request: operations.PostRealmPushRevocationRequest) -> operations.PostRealmPushRevocationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/push-revocation", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmPushRevocationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_roles(self, request: operations.PostRealmRolesRequest) -> operations.PostRealmRolesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmRolesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_roles_by_id_role_id_composites(self, request: operations.PostRealmRolesByIDRoleIDCompositesRequest) -> operations.PostRealmRolesByIDRoleIDCompositesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles-by-id/{role-id}/composites", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmRolesByIDRoleIDCompositesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_roles_role_name_composites(self, request: operations.PostRealmRolesRoleNameCompositesRequest) -> operations.PostRealmRolesRoleNameCompositesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles/{role-name}/composites", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmRolesRoleNameCompositesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_test_ldap_connection(self, request: operations.PostRealmTestLdapConnectionRequest) -> operations.PostRealmTestLdapConnectionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/testLDAPConnection", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmTestLdapConnectionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_test_smtp_connection(self, request: operations.PostRealmTestSMTPConnectionRequest) -> operations.PostRealmTestSMTPConnectionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/testSMTPConnection", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmTestSMTPConnectionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_user_storage_id_remove_imported_users(self, request: operations.PostRealmUserStorageIDRemoveImportedUsersRequest) -> operations.PostRealmUserStorageIDRemoveImportedUsersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/user-storage/{id}/remove-imported-users", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmUserStorageIDRemoveImportedUsersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_user_storage_id_sync(self, request: operations.PostRealmUserStorageIDSyncRequest) -> operations.PostRealmUserStorageIDSyncResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/user-storage/{id}/sync", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmUserStorageIDSyncResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SynchronizationResult])
                res.synchronization_result = out

        return res

    
    
    def post_realm_user_storage_id_unlink_users(self, request: operations.PostRealmUserStorageIDUnlinkUsersRequest) -> operations.PostRealmUserStorageIDUnlinkUsersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/user-storage/{id}/unlink-users", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmUserStorageIDUnlinkUsersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_user_storage_parent_id_mappers_id_sync(self, request: operations.PostRealmUserStorageParentIDMappersIDSyncRequest) -> operations.PostRealmUserStorageParentIDMappersIDSyncResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/user-storage/{parentId}/mappers/{id}/sync", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmUserStorageParentIDMappersIDSyncResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SynchronizationResult])
                res.synchronization_result = out

        return res

    
    
    def post_realm_users(self, request: operations.PostRealmUsersRequest) -> operations.PostRealmUsersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmUsersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_users_id_credentials_credential_id_move_after_new_previous_credential_id_(self, request: operations.PostRealmUsersIDCredentialsCredentialIDMoveAfterNewPreviousCredentialIDRequest) -> operations.PostRealmUsersIDCredentialsCredentialIDMoveAfterNewPreviousCredentialIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/credentials/{credentialId}/moveAfter/{newPreviousCredentialId}", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmUsersIDCredentialsCredentialIDMoveAfterNewPreviousCredentialIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_users_id_credentials_credential_id_move_to_first(self, request: operations.PostRealmUsersIDCredentialsCredentialIDMoveToFirstRequest) -> operations.PostRealmUsersIDCredentialsCredentialIDMoveToFirstResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/credentials/{credentialId}/moveToFirst", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmUsersIDCredentialsCredentialIDMoveToFirstResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_users_id_federated_identity_provider_(self, request: operations.PostRealmUsersIDFederatedIdentityProviderRequest) -> operations.PostRealmUsersIDFederatedIdentityProviderResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/federated-identity/{provider}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmUsersIDFederatedIdentityProviderResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_users_id_impersonation(self, request: operations.PostRealmUsersIDImpersonationRequest) -> operations.PostRealmUsersIDImpersonationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/impersonation", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmUsersIDImpersonationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.post_realm_users_id_impersonation_2_xx_application_json_object = out

        return res

    
    
    def post_realm_users_id_logout(self, request: operations.PostRealmUsersIDLogoutRequest) -> operations.PostRealmUsersIDLogoutResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/logout", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmUsersIDLogoutResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_users_id_role_mappings_clients_client_(self, request: operations.PostRealmUsersIDRoleMappingsClientsClientRequest) -> operations.PostRealmUsersIDRoleMappingsClientsClientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/role-mappings/clients/{client}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmUsersIDRoleMappingsClientsClientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def post_realm_users_id_role_mappings_realm(self, request: operations.PostRealmUsersIDRoleMappingsRealmRequest) -> operations.PostRealmUsersIDRoleMappingsRealmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/role-mappings/realm", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRealmUsersIDRoleMappingsRealmResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_(self, request: operations.PutRealmRequest) -> operations.PutRealmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_authentication_config_id_(self, request: operations.PutRealmAuthenticationConfigIDRequest) -> operations.PutRealmAuthenticationConfigIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/config/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmAuthenticationConfigIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_authentication_flows_flow_alias_executions(self, request: operations.PutRealmAuthenticationFlowsFlowAliasExecutionsRequest) -> operations.PutRealmAuthenticationFlowsFlowAliasExecutionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/flows/{flowAlias}/executions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmAuthenticationFlowsFlowAliasExecutionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_authentication_flows_id_(self, request: operations.PutRealmAuthenticationFlowsIDRequest) -> operations.PutRealmAuthenticationFlowsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/flows/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmAuthenticationFlowsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_authentication_required_actions_alias_(self, request: operations.PutRealmAuthenticationRequiredActionsAliasRequest) -> operations.PutRealmAuthenticationRequiredActionsAliasResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/authentication/required-actions/{alias}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmAuthenticationRequiredActionsAliasResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_client_scopes_id1_protocol_mappers_models_id2_(self, request: operations.PutRealmClientScopesId1ProtocolMappersModelsId2Request) -> operations.PutRealmClientScopesId1ProtocolMappersModelsId2Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmClientScopesId1ProtocolMappersModelsId2Response(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_client_scopes_id_(self, request: operations.PutRealmClientScopesIDRequest) -> operations.PutRealmClientScopesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/client-scopes/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmClientScopesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_clients_id1_protocol_mappers_models_id2_(self, request: operations.PutRealmClientsId1ProtocolMappersModelsId2Request) -> operations.PutRealmClientsId1ProtocolMappersModelsId2Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id1}/protocol-mappers/models/{id2}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmClientsId1ProtocolMappersModelsId2Response(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_clients_id_(self, request: operations.PutRealmClientsIDRequest) -> operations.PutRealmClientsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmClientsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_clients_id_default_client_scopes_client_scope_id_(self, request: operations.PutRealmClientsIDDefaultClientScopesClientScopeIDRequest) -> operations.PutRealmClientsIDDefaultClientScopesClientScopeIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/default-client-scopes/{clientScopeId}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmClientsIDDefaultClientScopesClientScopeIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_clients_id_management_permissions(self, request: operations.PutRealmClientsIDManagementPermissionsRequest) -> operations.PutRealmClientsIDManagementPermissionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/management/permissions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmClientsIDManagementPermissionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagementPermissionReference])
                res.management_permission_reference = out

        return res

    
    
    def put_realm_clients_id_optional_client_scopes_client_scope_id_(self, request: operations.PutRealmClientsIDOptionalClientScopesClientScopeIDRequest) -> operations.PutRealmClientsIDOptionalClientScopesClientScopeIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/optional-client-scopes/{clientScopeId}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmClientsIDOptionalClientScopesClientScopeIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_clients_id_roles_role_name_(self, request: operations.PutRealmClientsIDRolesRoleNameRequest) -> operations.PutRealmClientsIDRolesRoleNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/roles/{role-name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmClientsIDRolesRoleNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_clients_id_roles_role_name_management_permissions(self, request: operations.PutRealmClientsIDRolesRoleNameManagementPermissionsRequest) -> operations.PutRealmClientsIDRolesRoleNameManagementPermissionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/clients/{id}/roles/{role-name}/management/permissions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmClientsIDRolesRoleNameManagementPermissionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagementPermissionReference])
                res.management_permission_reference = out

        return res

    
    
    def put_realm_components_id_(self, request: operations.PutRealmComponentsIDRequest) -> operations.PutRealmComponentsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/components/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmComponentsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_default_default_client_scopes_client_scope_id_(self, request: operations.PutRealmDefaultDefaultClientScopesClientScopeIDRequest) -> operations.PutRealmDefaultDefaultClientScopesClientScopeIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/default-default-client-scopes/{clientScopeId}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmDefaultDefaultClientScopesClientScopeIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_default_groups_group_id_(self, request: operations.PutRealmDefaultGroupsGroupIDRequest) -> operations.PutRealmDefaultGroupsGroupIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/default-groups/{groupId}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmDefaultGroupsGroupIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_default_optional_client_scopes_client_scope_id_(self, request: operations.PutRealmDefaultOptionalClientScopesClientScopeIDRequest) -> operations.PutRealmDefaultOptionalClientScopesClientScopeIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/default-optional-client-scopes/{clientScopeId}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmDefaultOptionalClientScopesClientScopeIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_events_config(self, request: operations.PutRealmEventsConfigRequest) -> operations.PutRealmEventsConfigResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/events/config", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmEventsConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_groups_id_(self, request: operations.PutRealmGroupsIDRequest) -> operations.PutRealmGroupsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/groups/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmGroupsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_groups_id_management_permissions(self, request: operations.PutRealmGroupsIDManagementPermissionsRequest) -> operations.PutRealmGroupsIDManagementPermissionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/groups/{id}/management/permissions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmGroupsIDManagementPermissionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagementPermissionReference])
                res.management_permission_reference = out

        return res

    
    
    def put_realm_identity_provider_instances_alias_(self, request: operations.PutRealmIdentityProviderInstancesAliasRequest) -> operations.PutRealmIdentityProviderInstancesAliasResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/identity-provider/instances/{alias}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmIdentityProviderInstancesAliasResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_identity_provider_instances_alias_management_permissions(self, request: operations.PutRealmIdentityProviderInstancesAliasManagementPermissionsRequest) -> operations.PutRealmIdentityProviderInstancesAliasManagementPermissionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/identity-provider/instances/{alias}/management/permissions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmIdentityProviderInstancesAliasManagementPermissionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagementPermissionReference])
                res.management_permission_reference = out

        return res

    
    
    def put_realm_identity_provider_instances_alias_mappers_id_(self, request: operations.PutRealmIdentityProviderInstancesAliasMappersIDRequest) -> operations.PutRealmIdentityProviderInstancesAliasMappersIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/identity-provider/instances/{alias}/mappers/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmIdentityProviderInstancesAliasMappersIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_roles_by_id_role_id_(self, request: operations.PutRealmRolesByIDRoleIDRequest) -> operations.PutRealmRolesByIDRoleIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles-by-id/{role-id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmRolesByIDRoleIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_roles_by_id_role_id_management_permissions(self, request: operations.PutRealmRolesByIDRoleIDManagementPermissionsRequest) -> operations.PutRealmRolesByIDRoleIDManagementPermissionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles-by-id/{role-id}/management/permissions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmRolesByIDRoleIDManagementPermissionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagementPermissionReference])
                res.management_permission_reference = out

        return res

    
    
    def put_realm_roles_role_name_(self, request: operations.PutRealmRolesRoleNameRequest) -> operations.PutRealmRolesRoleNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles/{role-name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmRolesRoleNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_roles_role_name_management_permissions(self, request: operations.PutRealmRolesRoleNameManagementPermissionsRequest) -> operations.PutRealmRolesRoleNameManagementPermissionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/roles/{role-name}/management/permissions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmRolesRoleNameManagementPermissionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagementPermissionReference])
                res.management_permission_reference = out

        return res

    
    
    def put_realm_users_id_(self, request: operations.PutRealmUsersIDRequest) -> operations.PutRealmUsersIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmUsersIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_users_id_credentials_credential_id_user_label(self, request: operations.PutRealmUsersIDCredentialsCredentialIDUserLabelRequest) -> operations.PutRealmUsersIDCredentialsCredentialIDUserLabelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/credentials/{credentialId}/userLabel", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmUsersIDCredentialsCredentialIDUserLabelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_users_id_disable_credential_types(self, request: operations.PutRealmUsersIDDisableCredentialTypesRequest) -> operations.PutRealmUsersIDDisableCredentialTypesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/disable-credential-types", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmUsersIDDisableCredentialTypesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_users_id_execute_actions_email(self, request: operations.PutRealmUsersIDExecuteActionsEmailRequest) -> operations.PutRealmUsersIDExecuteActionsEmailResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/execute-actions-email", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmUsersIDExecuteActionsEmailResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_users_id_groups_group_id_(self, request: operations.PutRealmUsersIDGroupsGroupIDRequest) -> operations.PutRealmUsersIDGroupsGroupIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/groups/{groupId}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmUsersIDGroupsGroupIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_users_id_reset_password(self, request: operations.PutRealmUsersIDResetPasswordRequest) -> operations.PutRealmUsersIDResetPasswordResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/reset-password", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmUsersIDResetPasswordResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_users_id_send_verify_email(self, request: operations.PutRealmUsersIDSendVerifyEmailRequest) -> operations.PutRealmUsersIDSendVerifyEmailResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users/{id}/send-verify-email", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmUsersIDSendVerifyEmailResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            pass

        return res

    
    
    def put_realm_users_management_permissions(self, request: operations.PutRealmUsersManagementPermissionsRequest) -> operations.PutRealmUsersManagementPermissionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{realm}/users-management-permissions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRealmUsersManagementPermissionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagementPermissionReference])
                res.management_permission_reference = out

        return res

    