from dataclasses import dataclass, field



@dataclass
class DeleteNetworkSwitchStackPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = field(default=None, metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkSwitchStackRequest:
    path_params: DeleteNetworkSwitchStackPathParams = field(default=None)
    

@dataclass
class DeleteNetworkSwitchStackResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
