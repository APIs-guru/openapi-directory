from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RunAggregationQueryRequest:
    r"""RunAggregationQueryRequest
    The request for Datastore.RunAggregationQuery.
    """
    
    aggregation_query: Optional[AggregationQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationQuery') }})
    gql_query: Optional[GqlQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gqlQuery') }})
    partition_id: Optional[PartitionID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionId') }})
    read_options: Optional[ReadOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readOptions') }})
    
