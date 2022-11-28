from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RunAggregationQueryResponse:
    r"""RunAggregationQueryResponse
    The response for Firestore.RunAggregationQuery.
    """
    
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    result: Optional[AggregationResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    transaction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    
