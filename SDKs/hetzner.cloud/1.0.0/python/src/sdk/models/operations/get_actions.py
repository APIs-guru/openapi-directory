from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GetActionsSortParameterSortEnum(str, Enum):
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

class GetActionsStatusParameterStatusEnum(str, Enum):
    RUNNING = "running"
    SUCCESS = "success"
    ERROR = "error"


@dataclass
class GetActionsQueryParams:
    id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    sort: Optional[GetActionsSortParameterSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    status: Optional[GetActionsStatusParameterStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionsRequest:
    query_params: GetActionsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetActions200ApplicationJSONActionsError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetActions200ApplicationJSONActionsResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class GetActions200ApplicationJSONActionsStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class GetActions200ApplicationJSONActionsAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: GetActions200ApplicationJSONActionsError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[GetActions200ApplicationJSONActionsResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: GetActions200ApplicationJSONActionsStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class GetActions200ApplicationJSONMetaPagination:
    last_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_page' }})
    next_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page' }})
    page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    previous_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page' }})
    total_entries: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_entries' }})
    

@dataclass_json
@dataclass
class GetActions200ApplicationJSONMeta:
    pagination: GetActions200ApplicationJSONMetaPagination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    

@dataclass_json
@dataclass
class GetActions200ApplicationJSONActionsResponse:
    actions: List[GetActions200ApplicationJSONActionsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    meta: Optional[GetActions200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class GetActionsResponse:
    actions_response: Optional[GetActions200ApplicationJSONActionsResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
