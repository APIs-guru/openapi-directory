from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class QueueStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    PAUSED = "PAUSED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class Queue:
    r"""Queue
    A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, target types, and others.
    """
    
    app_engine_http_target: Optional[AppEngineHTTPTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngineHttpTarget') }})
    http_target: Optional[HTTPTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpTarget') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pull_target: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullTarget') }})
    purge_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purgeTime') }})
    rate_limits: Optional[RateLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateLimits') }})
    retry_config: Optional[RetryConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryConfig') }})
    state: Optional[QueueStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    task_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskTtl') }})
    tombstone_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tombstoneTtl') }})
    
