from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    IGNORE = "IGNORE"
    NONE = "NONE"
    FATAL = "FATAL"
    FIXED_INTERVAL = "FIXED_INTERVAL"
    LINEAR_BACKOFF = "LINEAR_BACKOFF"
    EXPONENTIAL_BACKOFF = "EXPONENTIAL_BACKOFF"
    RESTART_WORKFLOW_WITH_BACKOFF = "RESTART_WORKFLOW_WITH_BACKOFF"


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoFailurePolicy:
    interval_in_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intervalInSeconds' }})
    max_num_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxNumRetries' }})
    retry_strategy: Optional[EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryStrategy' }})
    
