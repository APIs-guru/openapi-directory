from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteIssueTrackersIssueTrackerNamePathParams:
    issue_tracker_name: str = field(metadata={'path_param': { 'field_name': 'issue_tracker_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteIssueTrackersIssueTrackerNameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteIssueTrackersIssueTrackerNameRequest:
    path_params: DeleteIssueTrackersIssueTrackerNamePathParams = field()
    security: DeleteIssueTrackersIssueTrackerNameSecurity = field()
    

@dataclass
class DeleteIssueTrackersIssueTrackerNameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
