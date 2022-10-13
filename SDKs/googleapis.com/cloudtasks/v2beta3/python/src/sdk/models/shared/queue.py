from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import appenginehttpqueue
from . import ratelimits
from . import retryconfig
from . import stackdriverloggingconfig
from . import queuestats

class QueueStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    PAUSED = "PAUSED"
    DISABLED = "DISABLED"

class QueueTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    PULL = "PULL"
    PUSH = "PUSH"


@dataclass_json
@dataclass
class Queue:
    app_engine_http_queue: Optional[appenginehttpqueue.AppEngineHTTPQueue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appEngineHttpQueue' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    purge_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purgeTime' }})
    rate_limits: Optional[ratelimits.RateLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateLimits' }})
    retry_config: Optional[retryconfig.RetryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryConfig' }})
    stackdriver_logging_config: Optional[stackdriverloggingconfig.StackdriverLoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stackdriverLoggingConfig' }})
    state: Optional[QueueStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    stats: Optional[queuestats.QueueStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    task_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskTtl' }})
    tombstone_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tombstoneTtl' }})
    type: Optional[QueueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
