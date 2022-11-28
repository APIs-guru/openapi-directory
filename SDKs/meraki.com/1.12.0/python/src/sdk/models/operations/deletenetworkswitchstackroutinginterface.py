from dataclasses import dataclass, field



@dataclass
class DeleteNetworkSwitchStackRoutingInterfacePathParams:
    interface_id: str = field(metadata={'path_param': { 'field_name': 'interfaceId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = field(metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkSwitchStackRoutingInterfaceRequest:
    path_params: DeleteNetworkSwitchStackRoutingInterfacePathParams = field()
    

@dataclass
class DeleteNetworkSwitchStackRoutingInterfaceResponse:
    content_type: str = field()
    status_code: int = field()
    
