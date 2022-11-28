from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostVolumesIDActionsAttachPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostVolumesIDActionsAttachAttachVolumeRequest:
    server: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    automount: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automount') }})
    

@dataclass_json
@dataclass
class PostVolumesIDActionsAttachActionResponseActionError:
    r"""PostVolumesIDActionsAttachActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostVolumesIDActionsAttachActionResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostVolumesIDActionsAttachActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostVolumesIDActionsAttachActionResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostVolumesIDActionsAttachActionResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostVolumesIDActionsAttachActionResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostVolumesIDActionsAttachActionResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostVolumesIDActionsAttachActionResponse:
    action: PostVolumesIDActionsAttachActionResponseAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class PostVolumesIDActionsAttachRequest:
    path_params: PostVolumesIDActionsAttachPathParams = field()
    request: Optional[PostVolumesIDActionsAttachAttachVolumeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostVolumesIDActionsAttachResponse:
    content_type: str = field()
    status_code: int = field()
    action_response: Optional[PostVolumesIDActionsAttachActionResponse] = field(default=None)
    
