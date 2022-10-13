from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metricupdate


@dataclass_json
@dataclass
class JobMetrics:
    metric_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricTime' }})
    metrics: Optional[List[metricupdate.MetricUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    
