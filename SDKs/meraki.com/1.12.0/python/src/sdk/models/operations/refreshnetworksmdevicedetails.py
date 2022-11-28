from dataclasses import dataclass, field



@dataclass
class RefreshNetworkSmDeviceDetailsPathParams:
    device_id: str = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RefreshNetworkSmDeviceDetailsRequest:
    path_params: RefreshNetworkSmDeviceDetailsPathParams = field()
    

@dataclass
class RefreshNetworkSmDeviceDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    
