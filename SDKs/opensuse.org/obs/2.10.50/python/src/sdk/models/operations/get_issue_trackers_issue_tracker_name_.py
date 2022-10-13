from dataclasses import dataclass, field



@dataclass
class GetIssueTrackersIssueTrackerNamePathParams:
    issue_tracker_name: str = field(default=None, metadata={'path_param': { 'field_name': 'issue_tracker_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIssueTrackersIssueTrackerNameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetIssueTrackersIssueTrackerNameRequest:
    path_params: GetIssueTrackersIssueTrackerNamePathParams = field(default=None)
    security: GetIssueTrackersIssueTrackerNameSecurity = field(default=None)
    

@dataclass
class GetIssueTrackersIssueTrackerNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
