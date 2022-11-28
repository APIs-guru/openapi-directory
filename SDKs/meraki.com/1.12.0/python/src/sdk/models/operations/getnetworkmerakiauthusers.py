from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkMerakiAuthUsersPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkMerakiAuthUsersRequest:
    path_params: GetNetworkMerakiAuthUsersPathParams = field()
    

@dataclass
class GetNetworkMerakiAuthUsersResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_meraki_auth_users_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
