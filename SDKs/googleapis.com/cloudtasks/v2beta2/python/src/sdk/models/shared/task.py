from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import appenginehttprequest
from . import httprequest
from . import pullmessage
from . import taskstatus

class TaskViewEnum(str, Enum):
    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass_json
@dataclass
class Task:
    app_engine_http_request: Optional[appenginehttprequest.AppEngineHTTPRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appEngineHttpRequest' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    http_request: Optional[httprequest.HTTPRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpRequest' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pull_message: Optional[pullmessage.PullMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullMessage' }})
    schedule_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleTime' }})
    status: Optional[taskstatus.TaskStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    view: Optional[TaskViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    
