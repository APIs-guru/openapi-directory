from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleplaydeveloperreportingv1alpha1metricsrow


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    rows: Optional[List[googleplaydeveloperreportingv1alpha1metricsrow.GooglePlayDeveloperReportingV1alpha1MetricsRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    
