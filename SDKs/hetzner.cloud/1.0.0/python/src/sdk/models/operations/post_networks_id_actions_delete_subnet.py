from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostNetworksIDActionsDeleteSubnetPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsDeleteSubnetDeleteSubnetRequest:
    ip_range: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_range') }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsDeleteSubnetActionResponseActionError:
    r"""PostNetworksIDActionsDeleteSubnetActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsDeleteSubnetActionResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostNetworksIDActionsDeleteSubnetActionResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostNetworksIDActionsDeleteSubnetActionResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostNetworksIDActionsDeleteSubnetActionResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsDeleteSubnetActionResponse:
    action: PostNetworksIDActionsDeleteSubnetActionResponseAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class PostNetworksIDActionsDeleteSubnetRequest:
    path_params: PostNetworksIDActionsDeleteSubnetPathParams = field()
    request: Optional[PostNetworksIDActionsDeleteSubnetDeleteSubnetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostNetworksIDActionsDeleteSubnetResponse:
    content_type: str = field()
    status_code: int = field()
    action_response: Optional[PostNetworksIDActionsDeleteSubnetActionResponse] = field(default=None)
    
