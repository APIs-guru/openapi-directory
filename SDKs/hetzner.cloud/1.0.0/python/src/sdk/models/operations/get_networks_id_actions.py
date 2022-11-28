from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetNetworksIDActionsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetNetworksIDActionsSortParameterSortEnum(str, Enum):
    ID = "id"
    ID_ASC = "id:asc"
    ID_DESC = "id:desc"
    COMMAND = "command"
    COMMAND_ASC = "command:asc"
    COMMAND_DESC = "command:desc"
    STATUS = "status"
    STATUS_ASC = "status:asc"
    STATUS_DESC = "status:desc"
    PROGRESS = "progress"
    PROGRESS_ASC = "progress:asc"
    PROGRESS_DESC = "progress:desc"
    STARTED = "started"
    STARTED_ASC = "started:asc"
    STARTED_DESC = "started:desc"
    FINISHED = "finished"
    FINISHED_ASC = "finished:asc"
    FINISHED_DESC = "finished:desc"

class GetNetworksIDActionsStatusParameterStatusEnum(str, Enum):
    RUNNING = "running"
    SUCCESS = "success"
    ERROR = "error"


@dataclass
class GetNetworksIDActionsQueryParams:
    sort: Optional[GetNetworksIDActionsSortParameterSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    status: Optional[GetNetworksIDActionsStatusParameterStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetNetworksIDActionsActionsResponseActionError:
    r"""GetNetworksIDActionsActionsResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetNetworksIDActionsActionsResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class GetNetworksIDActionsActionsResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class GetNetworksIDActionsActionsResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: GetNetworksIDActionsActionsResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[GetNetworksIDActionsActionsResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: GetNetworksIDActionsActionsResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetNetworksIDActionsActionsResponseMetaPagination:
    last_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclass
class GetNetworksIDActionsActionsResponseMeta:
    pagination: GetNetworksIDActionsActionsResponseMetaPagination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclass
class GetNetworksIDActionsActionsResponse:
    actions: List[GetNetworksIDActionsActionsResponseAction] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    meta: Optional[GetNetworksIDActionsActionsResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class GetNetworksIDActionsRequest:
    path_params: GetNetworksIDActionsPathParams = field()
    query_params: GetNetworksIDActionsQueryParams = field()
    

@dataclass
class GetNetworksIDActionsResponse:
    content_type: str = field()
    status_code: int = field()
    actions_response: Optional[GetNetworksIDActionsActionsResponse] = field(default=None)
    
