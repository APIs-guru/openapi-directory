from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetIssueTrackersIssueTrackerNameIssuesIssueNamePathParams:
    issue_name: str = field(metadata={'path_param': { 'field_name': 'issue_name', 'style': 'simple', 'explode': False }})
    issue_tracker_name: str = field(metadata={'path_param': { 'field_name': 'issue_tracker_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIssueTrackersIssueTrackerNameIssuesIssueNameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetIssueTrackersIssueTrackerNameIssuesIssueNameRequest:
    path_params: GetIssueTrackersIssueTrackerNameIssuesIssueNamePathParams = field()
    security: GetIssueTrackersIssueTrackerNameIssuesIssueNameSecurity = field()
    

@dataclass
class GetIssueTrackersIssueTrackerNameIssuesIssueNameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
