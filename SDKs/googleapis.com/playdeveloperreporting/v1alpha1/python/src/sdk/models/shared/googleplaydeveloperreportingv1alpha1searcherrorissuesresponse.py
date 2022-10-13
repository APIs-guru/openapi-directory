from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleplaydeveloperreportingv1alpha1errorissue


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse:
    error_issues: Optional[List[googleplaydeveloperreportingv1alpha1errorissue.GooglePlayDeveloperReportingV1alpha1ErrorIssue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorIssues' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
