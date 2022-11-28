from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshnessAggregationPeriodEnum(str, Enum):
    AGGREGATION_PERIOD_UNSPECIFIED = "AGGREGATION_PERIOD_UNSPECIFIED"
    HOURLY = "HOURLY"
    DAILY = "DAILY"


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness:
    r"""GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness
    Information about data freshness for a single aggregation period.
    """
    
    aggregation_period: Optional[GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshnessAggregationPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationPeriod') }})
    latest_end_time: Optional[GoogleTypeDateTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestEndTime') }})
    
