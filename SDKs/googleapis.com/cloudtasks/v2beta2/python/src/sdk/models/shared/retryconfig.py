from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RetryConfig:
    r"""RetryConfig
    Retry config. These settings determine how a failed task attempt is retried.
    """
    
    max_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAttempts') }})
    max_backoff: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxBackoff') }})
    max_doublings: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDoublings') }})
    max_retry_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRetryDuration') }})
    min_backoff: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minBackoff') }})
    unlimited_attempts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unlimitedAttempts') }})
    
