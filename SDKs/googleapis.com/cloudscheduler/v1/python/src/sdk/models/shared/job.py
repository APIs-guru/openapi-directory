from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class JobStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ENABLED = "ENABLED"
    PAUSED = "PAUSED"
    DISABLED = "DISABLED"
    UPDATE_FAILED = "UPDATE_FAILED"


@dataclass_json
@dataclass
class Job:
    r"""Job
    Configuration for a job. The maximum allowed size for a job is 1MB.
    """
    
    app_engine_http_target: Optional[AppEngineHTTPTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngineHttpTarget') }})
    attempt_deadline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attemptDeadline') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    http_target: Optional[HTTPTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpTarget') }})
    last_attempt_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastAttemptTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pubsub_target: Optional[PubsubTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubTarget') }})
    retry_config: Optional[RetryConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryConfig') }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    schedule_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleTime') }})
    state: Optional[JobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    user_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userUpdateTime') }})
    
