from dataclasses import dataclass, field



@dataclass
class DeleteDeviceSwitchRoutingInterfacePathParams:
    interface_id: str = field(metadata={'path_param': { 'field_name': 'interfaceId', 'style': 'simple', 'explode': False }})
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDeviceSwitchRoutingInterfaceRequest:
    path_params: DeleteDeviceSwitchRoutingInterfacePathParams = field()
    

@dataclass
class DeleteDeviceSwitchRoutingInterfaceResponse:
    content_type: str = field()
    status_code: int = field()
    
