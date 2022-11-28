from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class RemoveNetworkSwitchStackPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = field(metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RemoveNetworkSwitchStackRequestBody:
    serial: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    

@dataclass
class RemoveNetworkSwitchStackRequest:
    path_params: RemoveNetworkSwitchStackPathParams = field()
    request: RemoveNetworkSwitchStackRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveNetworkSwitchStackResponse:
    content_type: str = field()
    status_code: int = field()
    remove_network_switch_stack_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
