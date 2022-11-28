from dataclasses import dataclass, field



@dataclass
class DeleteNetworkCameraWirelessProfilePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    wireless_profile_id: str = field(metadata={'path_param': { 'field_name': 'wirelessProfileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkCameraWirelessProfileRequest:
    path_params: DeleteNetworkCameraWirelessProfilePathParams = field()
    

@dataclass
class DeleteNetworkCameraWirelessProfileResponse:
    content_type: str = field()
    status_code: int = field()
    
