from dataclasses import dataclass, field



@dataclass
class GetRequestSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRequestRequest:
    security: GetRequestSecurity = field(default=None)
    

@dataclass
class GetRequestResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
