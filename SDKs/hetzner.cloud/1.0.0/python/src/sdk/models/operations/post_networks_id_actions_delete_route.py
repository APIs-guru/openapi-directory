from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostNetworksIDActionsDeleteRoutePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsDeleteRouteAddDeleteRouteRequest:
    destination: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    gateway: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsDeleteRouteActionResponseActionError:
    r"""PostNetworksIDActionsDeleteRouteActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsDeleteRouteActionResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostNetworksIDActionsDeleteRouteActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostNetworksIDActionsDeleteRouteActionResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostNetworksIDActionsDeleteRouteActionResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostNetworksIDActionsDeleteRouteActionResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostNetworksIDActionsDeleteRouteActionResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostNetworksIDActionsDeleteRouteActionResponse:
    action: PostNetworksIDActionsDeleteRouteActionResponseAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class PostNetworksIDActionsDeleteRouteRequest:
    path_params: PostNetworksIDActionsDeleteRoutePathParams = field()
    request: Optional[PostNetworksIDActionsDeleteRouteAddDeleteRouteRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostNetworksIDActionsDeleteRouteResponse:
    content_type: str = field()
    status_code: int = field()
    action_response: Optional[PostNetworksIDActionsDeleteRouteActionResponse] = field(default=None)
    
