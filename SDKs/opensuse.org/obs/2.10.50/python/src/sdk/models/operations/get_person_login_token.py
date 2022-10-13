from dataclasses import dataclass, field



@dataclass
class GetPersonLoginTokenPathParams:
    login: str = field(default=None, metadata={'path_param': { 'field_name': 'login', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPersonLoginTokenSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPersonLoginTokenRequest:
    path_params: GetPersonLoginTokenPathParams = field(default=None)
    security: GetPersonLoginTokenSecurity = field(default=None)
    

@dataclass
class GetPersonLoginTokenResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
