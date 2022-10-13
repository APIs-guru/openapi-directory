from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GrpcRouteRetryPolicy:
    num_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numRetries' }})
    retry_conditions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryConditions' }})
    
