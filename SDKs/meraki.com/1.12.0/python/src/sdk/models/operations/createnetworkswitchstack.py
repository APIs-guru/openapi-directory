from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkSwitchStackPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchStackRequestBody:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    serials: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serials' }})
    

@dataclass
class CreateNetworkSwitchStackRequest:
    path_params: CreateNetworkSwitchStackPathParams = field(default=None)
    request: CreateNetworkSwitchStackRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkSwitchStackResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_switch_stack_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
