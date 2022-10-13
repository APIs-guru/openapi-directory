from dataclasses import dataclass, field



@dataclass
class GetPersonLoginGroupPathParams:
    login: str = field(default=None, metadata={'path_param': { 'field_name': 'login', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPersonLoginGroupSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPersonLoginGroupRequest:
    path_params: GetPersonLoginGroupPathParams = field(default=None)
    security: GetPersonLoginGroupSecurity = field(default=None)
    

@dataclass
class GetPersonLoginGroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
