from dataclasses import dataclass, field



@dataclass
class GetIssueTrackersIssueTrackerNameIssuesIssueNamePathParams:
    issue_name: str = field(default=None, metadata={'path_param': { 'field_name': 'issue_name', 'style': 'simple', 'explode': False }})
    issue_tracker_name: str = field(default=None, metadata={'path_param': { 'field_name': 'issue_tracker_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIssueTrackersIssueTrackerNameIssuesIssueNameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetIssueTrackersIssueTrackerNameIssuesIssueNameRequest:
    path_params: GetIssueTrackersIssueTrackerNameIssuesIssueNamePathParams = field(default=None)
    security: GetIssueTrackersIssueTrackerNameIssuesIssueNameSecurity = field(default=None)
    

@dataclass
class GetIssueTrackersIssueTrackerNameIssuesIssueNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
