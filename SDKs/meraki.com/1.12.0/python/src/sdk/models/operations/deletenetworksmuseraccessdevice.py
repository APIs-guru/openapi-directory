from dataclasses import dataclass, field



@dataclass
class DeleteNetworkSmUserAccessDevicePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    user_access_device_id: str = field(metadata={'path_param': { 'field_name': 'userAccessDeviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkSmUserAccessDeviceRequest:
    path_params: DeleteNetworkSmUserAccessDevicePathParams = field()
    

@dataclass
class DeleteNetworkSmUserAccessDeviceResponse:
    content_type: str = field()
    status_code: int = field()
    
