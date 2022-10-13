from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metricvalue


@dataclass_json
@dataclass
class LocalPostMetrics:
    local_post_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localPostName' }})
    metric_values: Optional[List[metricvalue.MetricValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricValues' }})
    
