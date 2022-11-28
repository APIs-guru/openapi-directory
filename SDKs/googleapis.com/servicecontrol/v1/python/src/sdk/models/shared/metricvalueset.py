from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetricValueSet:
    r"""MetricValueSet
    Represents a set of metric values in the same metric. Each metric value in the set should have a unique combination of start time, end time, and label values.
    """
    
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    metric_values: Optional[List[MetricValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricValues') }})
    
