from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googletypedatetime

class GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshnessAggregationPeriodEnum(str, Enum):
    AGGREGATION_PERIOD_UNSPECIFIED = "AGGREGATION_PERIOD_UNSPECIFIED"
    HOURLY = "HOURLY"
    DAILY = "DAILY"


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness:
    aggregation_period: Optional[GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshnessAggregationPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregationPeriod' }})
    latest_end_time: Optional[googletypedatetime.GoogleTypeDateTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestEndTime' }})
    
