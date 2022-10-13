from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum(str, Enum):
    RETRY_STRATEGY_UNSPECIFIED = "RETRY_STRATEGY_UNSPECIFIED"
    IGNORE = "IGNORE"
    NONE = "NONE"
    FATAL = "FATAL"
    FIXED_INTERVAL = "FIXED_INTERVAL"
    LINEAR_BACKOFF = "LINEAR_BACKOFF"
    EXPONENTIAL_BACKOFF = "EXPONENTIAL_BACKOFF"
    RESTART_INTEGRATION_WITH_BACKOFF = "RESTART_INTEGRATION_WITH_BACKOFF"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaFailurePolicy:
    interval_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intervalTime' }})
    max_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxRetries' }})
    retry_strategy: Optional[GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryStrategy' }})
    
