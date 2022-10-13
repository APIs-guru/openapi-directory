from dataclasses import dataclass, field



@dataclass
class GetAttributeSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAttributeRequest:
    security: GetAttributeSecurity = field(default=None)
    

@dataclass
class GetAttributeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
