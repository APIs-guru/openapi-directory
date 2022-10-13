from dataclasses import dataclass, field



@dataclass
class GetBasicAuthUserPasswdPathParams:
    passwd: str = field(default=None, metadata={'path_param': { 'field_name': 'passwd', 'style': 'simple', 'explode': False }})
    user: str = field(default=None, metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBasicAuthUserPasswdRequest:
    path_params: GetBasicAuthUserPasswdPathParams = field(default=None)
    

@dataclass
class GetBasicAuthUserPasswdResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
