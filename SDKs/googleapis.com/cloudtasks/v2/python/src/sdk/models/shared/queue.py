from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import appenginerouting
from . import ratelimits
from . import retryconfig
from . import stackdriverloggingconfig

class QueueStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    PAUSED = "PAUSED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class Queue:
    app_engine_routing_override: Optional[appenginerouting.AppEngineRouting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appEngineRoutingOverride' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    purge_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purgeTime' }})
    rate_limits: Optional[ratelimits.RateLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateLimits' }})
    retry_config: Optional[retryconfig.RetryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryConfig' }})
    stackdriver_logging_config: Optional[stackdriverloggingconfig.StackdriverLoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stackdriverLoggingConfig' }})
    state: Optional[QueueStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
