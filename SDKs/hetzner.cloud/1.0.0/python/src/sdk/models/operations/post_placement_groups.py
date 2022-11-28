from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PostPlacementGroupsCreatePlacementGroupRequestTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclass
class PostPlacementGroupsCreatePlacementGroupRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: PostPlacementGroupsCreatePlacementGroupRequestTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    

@dataclass_json
@dataclass
class PostPlacementGroupsCreatePlacementGroupResponseNullableActionError:
    r"""PostPlacementGroupsCreatePlacementGroupResponseNullableActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostPlacementGroupsCreatePlacementGroupResponseNullableAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostPlacementGroupsCreatePlacementGroupResponseNullableActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum(str, Enum):
    SPREAD = "spread"


@dataclass_json
@dataclass
class PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup:
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    servers: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    type: PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PostPlacementGroupsCreatePlacementGroupResponse:
    placement_group: PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement_group') }})
    action: Optional[PostPlacementGroupsCreatePlacementGroupResponseNullableAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class PostPlacementGroupsRequest:
    request: Optional[PostPlacementGroupsCreatePlacementGroupRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPlacementGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    create_placement_group_response: Optional[PostPlacementGroupsCreatePlacementGroupResponse] = field(default=None)
    
