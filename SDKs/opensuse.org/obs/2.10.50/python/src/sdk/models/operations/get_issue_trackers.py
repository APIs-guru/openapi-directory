from dataclasses import dataclass, field



@dataclass
class GetIssueTrackersSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetIssueTrackersRequest:
    security: GetIssueTrackersSecurity = field(default=None)
    

@dataclass
class GetIssueTrackersResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
