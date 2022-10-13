from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleplaydeveloperreportingv1beta1dimensionvalue
from . import googleplaydeveloperreportingv1beta1metricvalue
from . import googleplaydeveloperreportingv1beta1timelinespec


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1beta1Anomaly:
    dimensions: Optional[List[googleplaydeveloperreportingv1beta1dimensionvalue.GooglePlayDeveloperReportingV1beta1DimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    metric: Optional[googleplaydeveloperreportingv1beta1metricvalue.GooglePlayDeveloperReportingV1beta1MetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    metric_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricSet' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    timeline_spec: Optional[googleplaydeveloperreportingv1beta1timelinespec.GooglePlayDeveloperReportingV1beta1TimelineSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timelineSpec' }})
    
