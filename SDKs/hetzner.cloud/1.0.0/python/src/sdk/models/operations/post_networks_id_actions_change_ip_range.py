from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostNetworksIDActionsChangeIPRangePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsChangeIPRangeChangeIPRangeRequest:
    ip_range: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_range') }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsChangeIPRangeActionResponseActionError:
    r"""PostNetworksIDActionsChangeIPRangeActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsChangeIPRangeActionResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostNetworksIDActionsChangeIPRangeActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostNetworksIDActionsChangeIPRangeActionResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostNetworksIDActionsChangeIPRangeActionResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostNetworksIDActionsChangeIPRangeActionResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostNetworksIDActionsChangeIPRangeActionResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsChangeIPRangeActionResponse:
    action: PostNetworksIDActionsChangeIPRangeActionResponseAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class PostNetworksIDActionsChangeIPRangeRequest:
    path_params: PostNetworksIDActionsChangeIPRangePathParams = field()
    request: Optional[PostNetworksIDActionsChangeIPRangeChangeIPRangeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostNetworksIDActionsChangeIPRangeResponse:
    content_type: str = field()
    status_code: int = field()
    action_response: Optional[PostNetworksIDActionsChangeIPRangeActionResponse] = field(default=None)
    
