from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StructuredAggregationQuery:
    r"""StructuredAggregationQuery
    Firestore query for running an aggregation over a StructuredQuery.
    """
    
    aggregations: Optional[List[Aggregation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregations') }})
    structured_query: Optional[StructuredQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structuredQuery') }})
    
