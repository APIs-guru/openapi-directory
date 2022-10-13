from dataclasses import dataclass, field



@dataclass
class GetPersonLoginPathParams:
    login: str = field(default=None, metadata={'path_param': { 'field_name': 'login', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPersonLoginSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPersonLoginRequest:
    path_params: GetPersonLoginPathParams = field(default=None)
    security: GetPersonLoginSecurity = field(default=None)
    

@dataclass
class GetPersonLoginResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
