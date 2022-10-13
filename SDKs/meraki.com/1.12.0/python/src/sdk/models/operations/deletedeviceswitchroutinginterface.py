from dataclasses import dataclass, field



@dataclass
class DeleteDeviceSwitchRoutingInterfacePathParams:
    interface_id: str = field(default=None, metadata={'path_param': { 'field_name': 'interfaceId', 'style': 'simple', 'explode': False }})
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDeviceSwitchRoutingInterfaceRequest:
    path_params: DeleteDeviceSwitchRoutingInterfacePathParams = field(default=None)
    

@dataclass
class DeleteDeviceSwitchRoutingInterfaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
