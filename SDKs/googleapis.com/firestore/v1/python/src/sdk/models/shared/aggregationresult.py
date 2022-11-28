from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AggregationResult:
    r"""AggregationResult
    The result of a single bucket from a Firestore aggregation query. The keys of `aggregate_fields` are the same for all results in an aggregation query, unlike document queries which can have different fields present for each result.
    """
    
    aggregate_fields: Optional[dict[str, Value]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregateFields') }})
    
