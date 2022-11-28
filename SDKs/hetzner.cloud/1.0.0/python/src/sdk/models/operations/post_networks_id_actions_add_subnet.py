from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostNetworksIDActionsAddSubnetPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PostNetworksIDActionsAddSubnetAddSubnetRequestTypeEnum(str, Enum):
    CLOUD = "cloud"
    SERVER = "server"
    VSWITCH = "vswitch"


@dataclass_json
@dataclass
class PostNetworksIDActionsAddSubnetAddSubnetRequest:
    network_zone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_zone') }})
    type: PostNetworksIDActionsAddSubnetAddSubnetRequestTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_range') }})
    vswitch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vswitch_id') }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsAddSubnetActionResponseActionError:
    r"""PostNetworksIDActionsAddSubnetActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsAddSubnetActionResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostNetworksIDActionsAddSubnetActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostNetworksIDActionsAddSubnetActionResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostNetworksIDActionsAddSubnetActionResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostNetworksIDActionsAddSubnetActionResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostNetworksIDActionsAddSubnetActionResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsAddSubnetActionResponse:
    action: PostNetworksIDActionsAddSubnetActionResponseAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class PostNetworksIDActionsAddSubnetRequest:
    path_params: PostNetworksIDActionsAddSubnetPathParams = field()
    request: Optional[PostNetworksIDActionsAddSubnetAddSubnetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostNetworksIDActionsAddSubnetResponse:
    content_type: str = field()
    status_code: int = field()
    action_response: Optional[PostNetworksIDActionsAddSubnetActionResponse] = field(default=None)
    
