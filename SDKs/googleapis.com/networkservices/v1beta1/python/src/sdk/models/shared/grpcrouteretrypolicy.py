from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GrpcRouteRetryPolicy:
    r"""GrpcRouteRetryPolicy
    The specifications for retries.
    """
    
    num_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numRetries') }})
    retry_conditions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryConditions') }})
    
