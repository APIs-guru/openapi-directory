from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AggregationResultBatchMoreResultsEnum(str, Enum):
    MORE_RESULTS_TYPE_UNSPECIFIED = "MORE_RESULTS_TYPE_UNSPECIFIED"
    NOT_FINISHED = "NOT_FINISHED"
    MORE_RESULTS_AFTER_LIMIT = "MORE_RESULTS_AFTER_LIMIT"
    MORE_RESULTS_AFTER_CURSOR = "MORE_RESULTS_AFTER_CURSOR"
    NO_MORE_RESULTS = "NO_MORE_RESULTS"


@dataclass_json
@dataclass
class AggregationResultBatch:
    r"""AggregationResultBatch
    A batch of aggregation results produced by an aggregation query.
    """
    
    aggregation_results: Optional[List[AggregationResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationResults') }})
    more_results: Optional[AggregationResultBatchMoreResultsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moreResults') }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    
