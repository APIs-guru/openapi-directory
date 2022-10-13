from dataclasses import dataclass, field



@dataclass
class GetDistributionsIncludeRemotesSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetDistributionsIncludeRemotesRequest:
    security: GetDistributionsIncludeRemotesSecurity = field(default=None)
    

@dataclass
class GetDistributionsIncludeRemotesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
