from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum(str, Enum):
    AGGREGATION_PERIOD_UNSPECIFIED = "AGGREGATION_PERIOD_UNSPECIFIED"
    HOURLY = "HOURLY"
    DAILY = "DAILY"


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1beta1MetricsRow:
    r"""GooglePlayDeveloperReportingV1beta1MetricsRow
    Represents a row of dimensions and metrics.
    """
    
    aggregation_period: Optional[GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationPeriod') }})
    dimensions: Optional[List[GooglePlayDeveloperReportingV1beta1DimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    metrics: Optional[List[GooglePlayDeveloperReportingV1beta1MetricValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    start_time: Optional[GoogleTypeDateTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
