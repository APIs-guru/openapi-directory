from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TaskViewEnum(str, Enum):
    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass_json
@dataclass
class Task:
    r"""Task
    A unit of scheduled work.
    """
    
    app_engine_http_request: Optional[AppEngineHTTPRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngineHttpRequest') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    http_request: Optional[HTTPRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpRequest') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pull_message: Optional[PullMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullMessage') }})
    schedule_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleTime') }})
    status: Optional[TaskStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    view: Optional[TaskViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    
