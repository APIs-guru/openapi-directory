from dataclasses import dataclass, field



@dataclass
class DeleteNetworkWirelessRfProfilePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    rf_profile_id: str = field(default=None, metadata={'path_param': { 'field_name': 'rfProfileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkWirelessRfProfileRequest:
    path_params: DeleteNetworkWirelessRfProfilePathParams = field(default=None)
    

@dataclass
class DeleteNetworkWirelessRfProfileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
