from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metricvalueset

class QuotaOperationQuotaModeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    NORMAL = "NORMAL"
    BEST_EFFORT = "BEST_EFFORT"
    CHECK_ONLY = "CHECK_ONLY"
    ADJUST_ONLY = "ADJUST_ONLY"


@dataclass_json
@dataclass
class QuotaOperation:
    consumer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerId' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    method_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'methodName' }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationId' }})
    quota_metrics: Optional[List[metricvalueset.MetricValueSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaMetrics' }})
    quota_mode: Optional[QuotaOperationQuotaModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaMode' }})
    
