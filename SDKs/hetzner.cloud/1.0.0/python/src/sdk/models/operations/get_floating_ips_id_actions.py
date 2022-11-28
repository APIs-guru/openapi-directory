from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetFloatingIpsIDActionsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetFloatingIpsIDActionsSortParameterSortEnum(str, Enum):
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

class GetFloatingIpsIDActionsStatusParameterStatusEnum(str, Enum):
    RUNNING = "running"
    SUCCESS = "success"
    ERROR = "error"


@dataclass
class GetFloatingIpsIDActionsQueryParams:
    sort: Optional[GetFloatingIpsIDActionsSortParameterSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    status: Optional[GetFloatingIpsIDActionsStatusParameterStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetFloatingIpsIDActions200ApplicationJSONActionError:
    r"""GetFloatingIpsIDActions200ApplicationJSONActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetFloatingIpsIDActions200ApplicationJSONActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class GetFloatingIpsIDActions200ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class GetFloatingIpsIDActions200ApplicationJSONAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: GetFloatingIpsIDActions200ApplicationJSONActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[GetFloatingIpsIDActions200ApplicationJSONActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: GetFloatingIpsIDActions200ApplicationJSONActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetFloatingIpsIDActions200ApplicationJSON:
    actions: List[GetFloatingIpsIDActions200ApplicationJSONAction] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    

@dataclass
class GetFloatingIpsIDActionsRequest:
    path_params: GetFloatingIpsIDActionsPathParams = field()
    query_params: GetFloatingIpsIDActionsQueryParams = field()
    

@dataclass
class GetFloatingIpsIDActionsResponse:
    content_type: str = field()
    status_code: int = field()
    get_floating_ips_id_actions_200_application_json_object: Optional[GetFloatingIpsIDActions200ApplicationJSON] = field(default=None)
    
