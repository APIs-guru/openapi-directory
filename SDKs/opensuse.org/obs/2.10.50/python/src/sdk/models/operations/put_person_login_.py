from dataclasses import dataclass, field



@dataclass
class PutPersonLoginPathParams:
    login: str = field(default=None, metadata={'path_param': { 'field_name': 'login', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPersonLoginSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutPersonLoginRequest:
    path_params: PutPersonLoginPathParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    security: PutPersonLoginSecurity = field(default=None)
    

@dataclass
class PutPersonLoginResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
