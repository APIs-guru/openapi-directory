from dataclasses import dataclass, field



@dataclass
class PostIssueTrackersSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostIssueTrackersRequest:
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    security: PostIssueTrackersSecurity = field(default=None)
    

@dataclass
class PostIssueTrackersResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
