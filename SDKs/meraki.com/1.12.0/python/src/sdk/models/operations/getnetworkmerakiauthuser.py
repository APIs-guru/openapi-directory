from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkMerakiAuthUserPathParams:
    meraki_auth_user_id: str = field(metadata={'path_param': { 'field_name': 'merakiAuthUserId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkMerakiAuthUserRequest:
    path_params: GetNetworkMerakiAuthUserPathParams = field()
    

@dataclass
class GetNetworkMerakiAuthUserResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_meraki_auth_user_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
