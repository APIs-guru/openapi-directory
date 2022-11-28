from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetRealmAuthenticationFormProvidersPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmAuthenticationFormProvidersRequest:
    path_params: GetRealmAuthenticationFormProvidersPathParams = field()
    

@dataclass
class GetRealmAuthenticationFormProvidersResponse:
    content_type: str = field()
    status_code: int = field()
    get_realm_authentication_form_providers_2_xx_application_json_objects: Optional[List[dict[str, Any]]] = field(default=None)
    
