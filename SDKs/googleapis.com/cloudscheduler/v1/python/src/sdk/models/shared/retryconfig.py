from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RetryConfig:
    r"""RetryConfig
    Settings that determine the retry behavior. By default, if a job does not complete successfully (meaning that an acknowledgement is not received from the handler, then it will be retried with exponential backoff according to the settings in RetryConfig.
    """
    
    max_backoff_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxBackoffDuration') }})
    max_doublings: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDoublings') }})
    max_retry_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRetryDuration') }})
    min_backoff_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minBackoffDuration') }})
    retry_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryCount') }})
    
