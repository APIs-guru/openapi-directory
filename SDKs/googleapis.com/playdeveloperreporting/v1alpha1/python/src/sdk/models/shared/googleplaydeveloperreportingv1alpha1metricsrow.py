from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleplaydeveloperreportingv1alpha1dimensionvalue
from . import googleplaydeveloperreportingv1alpha1metricvalue
from . import googletypedatetime

class GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum(str, Enum):
    AGGREGATION_PERIOD_UNSPECIFIED = "AGGREGATION_PERIOD_UNSPECIFIED"
    HOURLY = "HOURLY"
    DAILY = "DAILY"


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1alpha1MetricsRow:
    aggregation_period: Optional[GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregationPeriod' }})
    dimensions: Optional[List[googleplaydeveloperreportingv1alpha1dimensionvalue.GooglePlayDeveloperReportingV1alpha1DimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    metrics: Optional[List[googleplaydeveloperreportingv1alpha1metricvalue.GooglePlayDeveloperReportingV1alpha1MetricValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    start_time: Optional[googletypedatetime.GoogleTypeDateTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
