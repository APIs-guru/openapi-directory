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
    dispatch_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dispatchCount') }})
    dispatch_deadline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dispatchDeadline') }})
    first_attempt: Optional[Attempt] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstAttempt') }})
    http_request: Optional[HTTPRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpRequest') }})
    last_attempt: Optional[Attempt] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastAttempt') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    response_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseCount') }})
    schedule_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleTime') }})
    view: Optional[TaskViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    
