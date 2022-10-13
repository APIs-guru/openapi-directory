from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkCameraWirelessProfilePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    wireless_profile_id: str = field(default=None, metadata={'path_param': { 'field_name': 'wirelessProfileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkCameraWirelessProfileRequest:
    path_params: GetNetworkCameraWirelessProfilePathParams = field(default=None)
    

@dataclass
class GetNetworkCameraWirelessProfileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_camera_wireless_profile_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
