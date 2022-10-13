from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleplaydeveloperreportingv1alpha1errorreport


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse:
    error_reports: Optional[List[googleplaydeveloperreportingv1alpha1errorreport.GooglePlayDeveloperReportingV1alpha1ErrorReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorReports' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
