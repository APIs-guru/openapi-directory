from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleplaydeveloperreportingv1beta1anomaly


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse:
    anomalies: Optional[List[googleplaydeveloperreportingv1beta1anomaly.GooglePlayDeveloperReportingV1beta1Anomaly]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anomalies' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
