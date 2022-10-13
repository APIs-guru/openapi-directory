from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import appenginehttptarget
from . import httptarget
from . import ratelimits
from . import retryconfig
from . import queuestats

class QueueStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    PAUSED = "PAUSED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class Queue:
    app_engine_http_target: Optional[appenginehttptarget.AppEngineHTTPTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appEngineHttpTarget' }})
    http_target: Optional[httptarget.HTTPTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpTarget' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pull_target: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullTarget' }})
    purge_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purgeTime' }})
    rate_limits: Optional[ratelimits.RateLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateLimits' }})
    retry_config: Optional[retryconfig.RetryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryConfig' }})
    state: Optional[QueueStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    stats: Optional[queuestats.QueueStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    task_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskTtl' }})
    tombstone_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tombstoneTtl' }})
    
