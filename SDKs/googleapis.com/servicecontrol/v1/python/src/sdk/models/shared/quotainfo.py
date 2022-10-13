from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metricvalueset


@dataclass_json
@dataclass
class QuotaInfo:
    limit_exceeded: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitExceeded' }})
    quota_consumed: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaConsumed' }})
    quota_metrics: Optional[List[metricvalueset.MetricValueSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaMetrics' }})
    
