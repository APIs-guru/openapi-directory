from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetImagesIDActionsActionIDPathParams:
    action_id: int = field(metadata={'path_param': { 'field_name': 'action_id', 'style': 'simple', 'explode': False }})
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetImagesIDActionsActionIDActionResponseActionError:
    r"""GetImagesIDActionsActionIDActionResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetImagesIDActionsActionIDActionResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class GetImagesIDActionsActionIDActionResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class GetImagesIDActionsActionIDActionResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: GetImagesIDActionsActionIDActionResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[GetImagesIDActionsActionIDActionResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: GetImagesIDActionsActionIDActionResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetImagesIDActionsActionIDActionResponse:
    action: GetImagesIDActionsActionIDActionResponseAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class GetImagesIDActionsActionIDRequest:
    path_params: GetImagesIDActionsActionIDPathParams = field()
    

@dataclass
class GetImagesIDActionsActionIDResponse:
    content_type: str = field()
    status_code: int = field()
    action_response: Optional[GetImagesIDActionsActionIDActionResponse] = field(default=None)
    
