from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import appenginehttptarget
from . import httptarget
from . import pubsubtarget
from . import retryconfig
from . import status

class JobStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ENABLED = "ENABLED"
    PAUSED = "PAUSED"
    DISABLED = "DISABLED"
    UPDATE_FAILED = "UPDATE_FAILED"


@dataclass_json
@dataclass
class Job:
    app_engine_http_target: Optional[appenginehttptarget.AppEngineHTTPTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appEngineHttpTarget' }})
    attempt_deadline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attemptDeadline' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    http_target: Optional[httptarget.HTTPTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpTarget' }})
    last_attempt_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastAttemptTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pubsub_target: Optional[pubsubtarget.PubsubTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsubTarget' }})
    retry_config: Optional[retryconfig.RetryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryConfig' }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    schedule_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleTime' }})
    state: Optional[JobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    user_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userUpdateTime' }})
    
