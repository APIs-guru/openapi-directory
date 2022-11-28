from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetRealmAuthenticationFormActionProvidersPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmAuthenticationFormActionProvidersRequest:
    path_params: GetRealmAuthenticationFormActionProvidersPathParams = field()
    

@dataclass
class GetRealmAuthenticationFormActionProvidersResponse:
    content_type: str = field()
    status_code: int = field()
    get_realm_authentication_form_action_providers_2_xx_application_json_objects: Optional[List[dict[str, Any]]] = field(default=None)
    
