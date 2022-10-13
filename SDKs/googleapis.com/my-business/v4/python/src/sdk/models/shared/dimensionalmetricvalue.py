from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import timedimension

class DimensionalMetricValueMetricOptionEnum(str, Enum):
    METRIC_OPTION_UNSPECIFIED = "METRIC_OPTION_UNSPECIFIED"
    AGGREGATED_TOTAL = "AGGREGATED_TOTAL"
    AGGREGATED_DAILY = "AGGREGATED_DAILY"
    BREAKDOWN_DAY_OF_WEEK = "BREAKDOWN_DAY_OF_WEEK"
    BREAKDOWN_HOUR_OF_DAY = "BREAKDOWN_HOUR_OF_DAY"


@dataclass_json
@dataclass
class DimensionalMetricValue:
    metric_option: Optional[DimensionalMetricValueMetricOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricOption' }})
    time_dimension: Optional[timedimension.TimeDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeDimension' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
