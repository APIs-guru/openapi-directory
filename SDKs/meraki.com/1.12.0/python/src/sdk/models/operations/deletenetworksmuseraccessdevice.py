from dataclasses import dataclass, field



@dataclass
class DeleteNetworkSmUserAccessDevicePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    user_access_device_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userAccessDeviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkSmUserAccessDeviceRequest:
    path_params: DeleteNetworkSmUserAccessDevicePathParams = field(default=None)
    

@dataclass
class DeleteNetworkSmUserAccessDeviceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
