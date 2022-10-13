from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSmUserDeviceProfilesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSmUserDeviceProfilesRequest:
    path_params: GetNetworkSmUserDeviceProfilesPathParams = field(default=None)
    

@dataclass
class GetNetworkSmUserDeviceProfilesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_sm_user_device_profiles_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
