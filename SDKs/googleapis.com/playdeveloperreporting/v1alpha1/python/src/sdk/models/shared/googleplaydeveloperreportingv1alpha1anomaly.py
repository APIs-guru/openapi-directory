from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleplaydeveloperreportingv1alpha1dimensionvalue
from . import googleplaydeveloperreportingv1alpha1metricvalue
from . import googleplaydeveloperreportingv1alpha1timelinespec


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1alpha1Anomaly:
    dimensions: Optional[List[googleplaydeveloperreportingv1alpha1dimensionvalue.GooglePlayDeveloperReportingV1alpha1DimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    metric: Optional[googleplaydeveloperreportingv1alpha1metricvalue.GooglePlayDeveloperReportingV1alpha1MetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    metric_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricSet' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    timeline_spec: Optional[googleplaydeveloperreportingv1alpha1timelinespec.GooglePlayDeveloperReportingV1alpha1TimelineSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timelineSpec' }})
    
