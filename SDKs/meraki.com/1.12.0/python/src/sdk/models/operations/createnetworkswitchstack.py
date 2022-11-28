from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkSwitchStackPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchStackRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    serials: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serials') }})
    

@dataclass
class CreateNetworkSwitchStackRequest:
    path_params: CreateNetworkSwitchStackPathParams = field()
    request: CreateNetworkSwitchStackRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkSwitchStackResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_switch_stack_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
