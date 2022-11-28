from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetricAbsence:
    r"""MetricAbsence
    A condition type that checks that monitored resources are reporting data. The configuration defines a metric and a set of monitored resources. The predicate is considered in violation when a time series for the specified metric of a monitored resource does not include any data in the specified duration.
    """
    
    aggregations: Optional[List[Aggregation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregations') }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    trigger: Optional[Trigger] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger') }})
    
