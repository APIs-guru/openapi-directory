from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetRealmAuthenticationUnregisteredRequiredActionsPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmAuthenticationUnregisteredRequiredActionsRequest:
    path_params: GetRealmAuthenticationUnregisteredRequiredActionsPathParams = field(default=None)
    

@dataclass
class GetRealmAuthenticationUnregisteredRequiredActionsResponse:
    content_type: str = field(default=None)
    get_realm_authentication_unregistered_required_actions_2_xx_application_json_objects: Optional[List[dict[str, Any]]] = field(default=None)
    status_code: int = field(default=None)
    
