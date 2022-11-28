from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class AddNetworkSwitchStackPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = field(metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddNetworkSwitchStackRequestBody:
    serial: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    

@dataclass
class AddNetworkSwitchStackRequest:
    path_params: AddNetworkSwitchStackPathParams = field()
    request: AddNetworkSwitchStackRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddNetworkSwitchStackResponse:
    content_type: str = field()
    status_code: int = field()
    add_network_switch_stack_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
