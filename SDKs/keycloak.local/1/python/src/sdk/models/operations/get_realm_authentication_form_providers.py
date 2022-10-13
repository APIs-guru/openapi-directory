from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetRealmAuthenticationFormProvidersPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmAuthenticationFormProvidersRequest:
    path_params: GetRealmAuthenticationFormProvidersPathParams = field(default=None)
    

@dataclass
class GetRealmAuthenticationFormProvidersResponse:
    content_type: str = field(default=None)
    get_realm_authentication_form_providers_2_xx_application_json_objects: Optional[List[dict[str, Any]]] = field(default=None)
    status_code: int = field(default=None)
    
