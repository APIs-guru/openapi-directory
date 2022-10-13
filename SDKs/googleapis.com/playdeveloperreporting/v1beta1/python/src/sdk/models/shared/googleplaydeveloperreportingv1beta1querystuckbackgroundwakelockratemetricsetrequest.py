from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleplaydeveloperreportingv1beta1timelinespec


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest:
    dimensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    metrics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    timeline_spec: Optional[googleplaydeveloperreportingv1beta1timelinespec.GooglePlayDeveloperReportingV1beta1TimelineSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timelineSpec' }})
    
