from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class RemoveNetworkSwitchStackPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = field(default=None, metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RemoveNetworkSwitchStackRequestBody:
    serial: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serial' }})
    

@dataclass
class RemoveNetworkSwitchStackRequest:
    path_params: RemoveNetworkSwitchStackPathParams = field(default=None)
    request: RemoveNetworkSwitchStackRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveNetworkSwitchStackResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    remove_network_switch_stack_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
