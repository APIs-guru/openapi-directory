from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleAppsScriptTypeProcessProcessStatusEnum(str, Enum):
    PROCESS_STATUS_UNSPECIFIED = "PROCESS_STATUS_UNSPECIFIED"
    RUNNING = "RUNNING"
    PAUSED = "PAUSED"
    COMPLETED = "COMPLETED"
    CANCELED = "CANCELED"
    FAILED = "FAILED"
    TIMED_OUT = "TIMED_OUT"
    UNKNOWN = "UNKNOWN"
    DELAYED = "DELAYED"

class GoogleAppsScriptTypeProcessProcessTypeEnum(str, Enum):
    PROCESS_TYPE_UNSPECIFIED = "PROCESS_TYPE_UNSPECIFIED"
    ADD_ON = "ADD_ON"
    EXECUTION_API = "EXECUTION_API"
    TIME_DRIVEN = "TIME_DRIVEN"
    TRIGGER = "TRIGGER"
    WEBAPP = "WEBAPP"
    EDITOR = "EDITOR"
    SIMPLE_TRIGGER = "SIMPLE_TRIGGER"
    MENU = "MENU"
    BATCH_TASK = "BATCH_TASK"

class GoogleAppsScriptTypeProcessUserAccessLevelEnum(str, Enum):
    USER_ACCESS_LEVEL_UNSPECIFIED = "USER_ACCESS_LEVEL_UNSPECIFIED"
    NONE = "NONE"
    READ = "READ"
    WRITE = "WRITE"
    OWNER = "OWNER"


@dataclass_json
@dataclass
class GoogleAppsScriptTypeProcess:
    r"""GoogleAppsScriptTypeProcess
    Representation of a single script process execution that was started from the script editor, a trigger, an application, or using the Apps Script API. This is distinct from the `Operation` resource, which only represents executions started via the Apps Script API.
    """
    
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    function_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionName') }})
    process_status: Optional[GoogleAppsScriptTypeProcessProcessStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processStatus') }})
    process_type: Optional[GoogleAppsScriptTypeProcessProcessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processType') }})
    project_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectName') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    user_access_level: Optional[GoogleAppsScriptTypeProcessUserAccessLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAccessLevel') }})
    
