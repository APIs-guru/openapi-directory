from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetRealmAuthenticationClientAuthenticatorProvidersPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmAuthenticationClientAuthenticatorProvidersRequest:
    path_params: GetRealmAuthenticationClientAuthenticatorProvidersPathParams = field(default=None)
    

@dataclass
class GetRealmAuthenticationClientAuthenticatorProvidersResponse:
    content_type: str = field(default=None)
    get_realm_authentication_client_authenticator_providers_2_xx_application_json_objects: Optional[List[dict[str, Any]]] = field(default=None)
    status_code: int = field(default=None)
    
