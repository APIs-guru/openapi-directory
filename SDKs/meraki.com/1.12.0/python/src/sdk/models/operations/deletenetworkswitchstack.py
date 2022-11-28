from dataclasses import dataclass, field



@dataclass
class DeleteNetworkSwitchStackPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = field(metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkSwitchStackRequest:
    path_params: DeleteNetworkSwitchStackPathParams = field()
    

@dataclass
class DeleteNetworkSwitchStackResponse:
    content_type: str = field()
    status_code: int = field()
    
