from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RetryConfig:
    max_backoff_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxBackoffDuration' }})
    max_doublings: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDoublings' }})
    max_retry_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxRetryDuration' }})
    min_backoff_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minBackoffDuration' }})
    retry_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryCount' }})
    
