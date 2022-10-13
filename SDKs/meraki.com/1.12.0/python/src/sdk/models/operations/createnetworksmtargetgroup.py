from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkSmTargetGroupPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkSmTargetGroupRequestBody:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    

@dataclass
class CreateNetworkSmTargetGroupRequest:
    path_params: CreateNetworkSmTargetGroupPathParams = field(default=None)
    request: Optional[CreateNetworkSmTargetGroupRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkSmTargetGroupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_sm_target_group_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
