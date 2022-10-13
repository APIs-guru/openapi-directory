from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkCameraWirelessProfilesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkCameraWirelessProfilesRequest:
    path_params: GetNetworkCameraWirelessProfilesPathParams = field(default=None)
    

@dataclass
class GetNetworkCameraWirelessProfilesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_camera_wireless_profiles_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
