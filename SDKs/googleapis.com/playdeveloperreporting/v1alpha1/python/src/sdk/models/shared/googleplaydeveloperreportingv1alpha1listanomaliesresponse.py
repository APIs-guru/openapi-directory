from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleplaydeveloperreportingv1alpha1anomaly


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse:
    anomalies: Optional[List[googleplaydeveloperreportingv1alpha1anomaly.GooglePlayDeveloperReportingV1alpha1Anomaly]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anomalies' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
