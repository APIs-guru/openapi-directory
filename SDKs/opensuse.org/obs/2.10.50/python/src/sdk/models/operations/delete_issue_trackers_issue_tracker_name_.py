from dataclasses import dataclass, field



@dataclass
class DeleteIssueTrackersIssueTrackerNamePathParams:
    issue_tracker_name: str = field(default=None, metadata={'path_param': { 'field_name': 'issue_tracker_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteIssueTrackersIssueTrackerNameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteIssueTrackersIssueTrackerNameRequest:
    path_params: DeleteIssueTrackersIssueTrackerNamePathParams = field(default=None)
    security: DeleteIssueTrackersIssueTrackerNameSecurity = field(default=None)
    

@dataclass
class DeleteIssueTrackersIssueTrackerNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
