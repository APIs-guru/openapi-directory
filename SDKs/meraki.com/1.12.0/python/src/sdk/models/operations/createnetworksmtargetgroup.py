from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkSmTargetGroupPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkSmTargetGroupRequestBody:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    

@dataclass
class CreateNetworkSmTargetGroupRequest:
    path_params: CreateNetworkSmTargetGroupPathParams = field()
    request: Optional[CreateNetworkSmTargetGroupRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkSmTargetGroupResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_sm_target_group_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
