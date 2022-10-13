from dataclasses import dataclass, field



@dataclass
class DeleteNetworkCameraWirelessProfilePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    wireless_profile_id: str = field(default=None, metadata={'path_param': { 'field_name': 'wirelessProfileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkCameraWirelessProfileRequest:
    path_params: DeleteNetworkCameraWirelessProfilePathParams = field(default=None)
    

@dataclass
class DeleteNetworkCameraWirelessProfileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
