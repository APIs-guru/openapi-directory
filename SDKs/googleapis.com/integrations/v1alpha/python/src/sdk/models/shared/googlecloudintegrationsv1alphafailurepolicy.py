from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""GoogleCloudIntegrationsV1alphaFailurePolicy
    Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied).
    """
    
    interval_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intervalTime') }})
    max_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRetries') }})
    retry_strategy: Optional[GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryStrategy') }})
    
