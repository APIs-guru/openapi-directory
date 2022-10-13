from dataclasses import dataclass, field



@dataclass
class PutIssueTrackersIssueTrackerNamePathParams:
    issue_tracker_name: str = field(default=None, metadata={'path_param': { 'field_name': 'issue_tracker_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutIssueTrackersIssueTrackerNameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutIssueTrackersIssueTrackerNameRequest:
    path_params: PutIssueTrackersIssueTrackerNamePathParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    security: PutIssueTrackersIssueTrackerNameSecurity = field(default=None)
    

@dataclass
class PutIssueTrackersIssueTrackerNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
