from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RunAggregationQueryRequest:
    r"""RunAggregationQueryRequest
    The request for Firestore.RunAggregationQuery.
    """
    
    new_transaction: Optional[TransactionOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newTransaction') }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    structured_aggregation_query: Optional[StructuredAggregationQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structuredAggregationQuery') }})
    transaction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    
