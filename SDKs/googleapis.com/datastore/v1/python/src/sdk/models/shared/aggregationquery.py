from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AggregationQuery:
    r"""AggregationQuery
    Datastore query for running an aggregation over a Query.
    """
    
    aggregations: Optional[List[Aggregation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregations') }})
    nested_query: Optional[Query] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nestedQuery') }})
    
