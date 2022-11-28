from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetLoadBalancersIDActionsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetLoadBalancersIDActionsSortParameterSortEnum(str, Enum):
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

class GetLoadBalancersIDActionsStatusParameterStatusEnum(str, Enum):
    RUNNING = "running"
    SUCCESS = "success"
    ERROR = "error"


@dataclass
class GetLoadBalancersIDActionsQueryParams:
    sort: Optional[GetLoadBalancersIDActionsSortParameterSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    status: Optional[GetLoadBalancersIDActionsStatusParameterStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetLoadBalancersIDActionsActionsResponseActionError:
    r"""GetLoadBalancersIDActionsActionsResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersIDActionsActionsResponseActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class GetLoadBalancersIDActionsActionsResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class GetLoadBalancersIDActionsActionsResponseAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: GetLoadBalancersIDActionsActionsResponseActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[GetLoadBalancersIDActionsActionsResponseActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: GetLoadBalancersIDActionsActionsResponseActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersIDActionsActionsResponseMetaPagination:
    last_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersIDActionsActionsResponseMeta:
    pagination: GetLoadBalancersIDActionsActionsResponseMetaPagination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersIDActionsActionsResponse:
    actions: List[GetLoadBalancersIDActionsActionsResponseAction] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    meta: Optional[GetLoadBalancersIDActionsActionsResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class GetLoadBalancersIDActionsRequest:
    path_params: GetLoadBalancersIDActionsPathParams = field()
    query_params: GetLoadBalancersIDActionsQueryParams = field()
    

@dataclass
class GetLoadBalancersIDActionsResponse:
    content_type: str = field()
    status_code: int = field()
    actions_response: Optional[GetLoadBalancersIDActionsActionsResponse] = field(default=None)
    
