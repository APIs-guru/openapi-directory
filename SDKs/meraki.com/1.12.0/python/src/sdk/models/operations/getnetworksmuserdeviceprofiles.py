from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSmUserDeviceProfilesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSmUserDeviceProfilesRequest:
    path_params: GetNetworkSmUserDeviceProfilesPathParams = field()
    

@dataclass
class GetNetworkSmUserDeviceProfilesResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_sm_user_device_profiles_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
