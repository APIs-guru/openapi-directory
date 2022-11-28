from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BusinessCallsInsightsMetricTypeEnum(str, Enum):
    METRIC_TYPE_UNSPECIFIED = "METRIC_TYPE_UNSPECIFIED"
    AGGREGATE_COUNT = "AGGREGATE_COUNT"


@dataclass_json
@dataclass
class BusinessCallsInsights:
    r"""BusinessCallsInsights
    Insights for calls made to a location.
    """
    
    aggregate_metrics: Optional[AggregateMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregateMetrics') }})
    metric_type: Optional[BusinessCallsInsightsMetricTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
