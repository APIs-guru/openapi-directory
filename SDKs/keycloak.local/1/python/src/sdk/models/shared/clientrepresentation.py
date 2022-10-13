from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import resourceserverrepresentation
from . import protocolmapperrepresentation


@dataclass_json
@dataclass
class ClientRepresentation:
    access: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    admin_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminUrl' }})
    always_display_in_console: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alwaysDisplayInConsole' }})
    attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    authentication_flow_binding_overrides: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticationFlowBindingOverrides' }})
    authorization_services_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationServicesEnabled' }})
    authorization_settings: Optional[resourceserverrepresentation.ResourceServerRepresentation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationSettings' }})
    base_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseUrl' }})
    bearer_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bearerOnly' }})
    client_authenticator_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientAuthenticatorType' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    consent_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentRequired' }})
    default_client_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultClientScopes' }})
    default_roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultRoles' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    direct_access_grants_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directAccessGrantsEnabled' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    frontchannel_logout: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frontchannelLogout' }})
    full_scope_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullScopeAllowed' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    implicit_flow_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'implicitFlowEnabled' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_re_registration_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeReRegistrationTimeout' }})
    not_before: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notBefore' }})
    optional_client_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optionalClientScopes' }})
    origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origin' }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    protocol_mappers: Optional[List[protocolmapperrepresentation.ProtocolMapperRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocolMappers' }})
    public_client: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicClient' }})
    redirect_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectUris' }})
    registered_nodes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registeredNodes' }})
    registration_access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrationAccessToken' }})
    root_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootUrl' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    service_accounts_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountsEnabled' }})
    standard_flow_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standardFlowEnabled' }})
    surrogate_auth_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'surrogateAuthRequired' }})
    web_origins: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webOrigins' }})
    
