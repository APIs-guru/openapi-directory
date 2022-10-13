from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import aggregatemetrics

class BusinessCallsInsightsMetricTypeEnum(str, Enum):
    METRIC_TYPE_UNSPECIFIED = "METRIC_TYPE_UNSPECIFIED"
    AGGREGATE_COUNT = "AGGREGATE_COUNT"


@dataclass_json
@dataclass
class BusinessCallsInsights:
    aggregate_metrics: Optional[aggregatemetrics.AggregateMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregateMetrics' }})
    metric_type: Optional[BusinessCallsInsightsMetricTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
