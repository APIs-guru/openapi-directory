from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetRealmAuthenticationFormActionProvidersPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmAuthenticationFormActionProvidersRequest:
    path_params: GetRealmAuthenticationFormActionProvidersPathParams = field(default=None)
    

@dataclass
class GetRealmAuthenticationFormActionProvidersResponse:
    content_type: str = field(default=None)
    get_realm_authentication_form_action_providers_2_xx_application_json_objects: Optional[List[dict[str, Any]]] = field(default=None)
    status_code: int = field(default=None)
    
