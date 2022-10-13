from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkMerakiAuthUsersPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkMerakiAuthUsersRequest:
    path_params: GetNetworkMerakiAuthUsersPathParams = field(default=None)
    

@dataclass
class GetNetworkMerakiAuthUsersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_meraki_auth_users_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
