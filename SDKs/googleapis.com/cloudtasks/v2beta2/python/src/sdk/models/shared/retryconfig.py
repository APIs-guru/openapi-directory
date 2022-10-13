from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RetryConfig:
    max_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxAttempts' }})
    max_backoff: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxBackoff' }})
    max_doublings: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDoublings' }})
    max_retry_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxRetryDuration' }})
    min_backoff: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minBackoff' }})
    unlimited_attempts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unlimitedAttempts' }})
    
