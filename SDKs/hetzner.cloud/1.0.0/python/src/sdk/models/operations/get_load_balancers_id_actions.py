from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetLoadBalancersIDActionsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
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
    

@dataclass
class GetLoadBalancersIDActionsRequest:
    path_params: GetLoadBalancersIDActionsPathParams = field(default=None)
    query_params: GetLoadBalancersIDActionsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetLoadBalancersIDActions200ApplicationJSONActionsError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetLoadBalancersIDActions200ApplicationJSONActionsResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class GetLoadBalancersIDActions200ApplicationJSONActionsStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class GetLoadBalancersIDActions200ApplicationJSONActionsAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: GetLoadBalancersIDActions200ApplicationJSONActionsError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[GetLoadBalancersIDActions200ApplicationJSONActionsResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: GetLoadBalancersIDActions200ApplicationJSONActionsStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class GetLoadBalancersIDActions200ApplicationJSONMetaPagination:
    last_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_page' }})
    next_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page' }})
    page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    previous_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page' }})
    total_entries: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_entries' }})
    

@dataclass_json
@dataclass
class GetLoadBalancersIDActions200ApplicationJSONMeta:
    pagination: GetLoadBalancersIDActions200ApplicationJSONMetaPagination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    

@dataclass_json
@dataclass
class GetLoadBalancersIDActions200ApplicationJSONActionsResponse:
    actions: List[GetLoadBalancersIDActions200ApplicationJSONActionsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    meta: Optional[GetLoadBalancersIDActions200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class GetLoadBalancersIDActionsResponse:
    actions_response: Optional[GetLoadBalancersIDActions200ApplicationJSONActionsResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
