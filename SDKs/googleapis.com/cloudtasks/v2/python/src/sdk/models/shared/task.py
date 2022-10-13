from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import appenginehttprequest
from . import attempt
from . import httprequest
from . import attempt

class TaskViewEnum(str, Enum):
    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass_json
@dataclass
class Task:
    app_engine_http_request: Optional[appenginehttprequest.AppEngineHTTPRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appEngineHttpRequest' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    dispatch_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dispatchCount' }})
    dispatch_deadline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dispatchDeadline' }})
    first_attempt: Optional[attempt.Attempt] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstAttempt' }})
    http_request: Optional[httprequest.HTTPRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpRequest' }})
    last_attempt: Optional[attempt.Attempt] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastAttempt' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    response_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseCount' }})
    schedule_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleTime' }})
    view: Optional[TaskViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    
