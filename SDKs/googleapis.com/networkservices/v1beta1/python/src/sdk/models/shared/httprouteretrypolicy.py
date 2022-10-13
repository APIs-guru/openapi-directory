from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HTTPRouteRetryPolicy:
    num_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numRetries' }})
    per_try_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perTryTimeout' }})
    retry_conditions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryConditions' }})
    
