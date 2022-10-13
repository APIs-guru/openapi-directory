from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googletypedatetime
from . import googletypedatetime

class GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum(str, Enum):
    AGGREGATION_PERIOD_UNSPECIFIED = "AGGREGATION_PERIOD_UNSPECIFIED"
    HOURLY = "HOURLY"
    DAILY = "DAILY"


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1beta1TimelineSpec:
    aggregation_period: Optional[GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregationPeriod' }})
    end_time: Optional[googletypedatetime.GoogleTypeDateTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    start_time: Optional[googletypedatetime.GoogleTypeDateTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
