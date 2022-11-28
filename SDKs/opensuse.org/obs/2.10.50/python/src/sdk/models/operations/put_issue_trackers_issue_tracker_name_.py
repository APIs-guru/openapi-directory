from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutIssueTrackersIssueTrackerNamePathParams:
    issue_tracker_name: str = field(metadata={'path_param': { 'field_name': 'issue_tracker_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutIssueTrackersIssueTrackerNameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutIssueTrackersIssueTrackerNameRequest:
    path_params: PutIssueTrackersIssueTrackerNamePathParams = field()
    request: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    security: PutIssueTrackersIssueTrackerNameSecurity = field()
    

@dataclass
class PutIssueTrackersIssueTrackerNameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
