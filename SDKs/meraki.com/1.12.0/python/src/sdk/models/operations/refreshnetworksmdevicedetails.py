from dataclasses import dataclass, field



@dataclass
class RefreshNetworkSmDeviceDetailsPathParams:
    device_id: str = field(default=None, metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RefreshNetworkSmDeviceDetailsRequest:
    path_params: RefreshNetworkSmDeviceDetailsPathParams = field(default=None)
    

@dataclass
class RefreshNetworkSmDeviceDetailsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
