from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetIssueTrackersIssueTrackerNamePathParams:
    issue_tracker_name: str = field(metadata={'path_param': { 'field_name': 'issue_tracker_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIssueTrackersIssueTrackerNameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetIssueTrackersIssueTrackerNameRequest:
    path_params: GetIssueTrackersIssueTrackerNamePathParams = field()
    security: GetIssueTrackersIssueTrackerNameSecurity = field()
    

@dataclass
class GetIssueTrackersIssueTrackerNameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
