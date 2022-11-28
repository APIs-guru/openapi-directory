from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostServersIDActionsAttachIsoPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostServersIDActionsAttachIsoRequestBody:
    iso: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso') }})
    

@dataclass_json
@dataclass
class PostServersIDActionsAttachIsoActionResponseActionError:
    r"""PostServersIDActionsAttachIsoActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostServersIDActionsAttachIsoActionResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostServersIDActionsAttachIsoActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostServersIDActionsAttachIsoActionResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostServersIDActionsAttachIsoActionResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostServersIDActionsAttachIsoActionResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostServersIDActionsAttachIsoActionResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostServersIDActionsAttachIsoActionResponse:
    action: PostServersIDActionsAttachIsoActionResponseAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class PostServersIDActionsAttachIsoRequest:
    path_params: PostServersIDActionsAttachIsoPathParams = field()
    request: Optional[PostServersIDActionsAttachIsoRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostServersIDActionsAttachIsoResponse:
    content_type: str = field()
    status_code: int = field()
    action_response: Optional[PostServersIDActionsAttachIsoActionResponse] = field(default=None)
    
