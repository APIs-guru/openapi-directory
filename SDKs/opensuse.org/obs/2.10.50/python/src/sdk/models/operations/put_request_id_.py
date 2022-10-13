from dataclasses import dataclass, field



@dataclass
class PutRequestIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRequestIDSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutRequestIDRequest:
    path_params: PutRequestIDPathParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    security: PutRequestIDSecurity = field(default=None)
    

@dataclass
class PutRequestIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
