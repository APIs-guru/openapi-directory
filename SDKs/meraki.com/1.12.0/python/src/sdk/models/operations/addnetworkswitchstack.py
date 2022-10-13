from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class AddNetworkSwitchStackPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = field(default=None, metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddNetworkSwitchStackRequestBody:
    serial: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serial' }})
    

@dataclass
class AddNetworkSwitchStackRequest:
    path_params: AddNetworkSwitchStackPathParams = field(default=None)
    request: AddNetworkSwitchStackRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddNetworkSwitchStackResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    add_network_switch_stack_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
