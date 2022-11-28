from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Queue1:
    r"""Queue1
    A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, queue types, and others.
    """
    
    app_engine_http_queue: Optional[AppEngineHTTPQueue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngineHttpQueue') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    purge_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purgeTime') }})
    rate_limits: Optional[RateLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateLimits') }})
    retry_config: Optional[RetryConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryConfig') }})
    stackdriver_logging_config: Optional[StackdriverLoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackdriverLoggingConfig') }})
    state: Optional[QueueStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    stats: Optional[QueueStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    task_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskTtl') }})
    tombstone_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tombstoneTtl') }})
    type: Optional[QueueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
