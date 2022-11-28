from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BasicMetricsRequest:
    r"""BasicMetricsRequest
    A request for basic metric insights.
    """
    
    metric_requests: Optional[List[MetricRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricRequests') }})
    time_range: Optional[TimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeRange') }})
    
