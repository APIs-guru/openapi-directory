from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metricrequest
from . import timerange


@dataclass_json
@dataclass
class BasicMetricsRequest:
    metric_requests: Optional[List[metricrequest.MetricRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricRequests' }})
    time_range: Optional[timerange.TimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeRange' }})
    
