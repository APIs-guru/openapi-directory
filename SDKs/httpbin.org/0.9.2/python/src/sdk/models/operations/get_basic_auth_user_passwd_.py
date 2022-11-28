from dataclasses import dataclass, field



@dataclass
class GetBasicAuthUserPasswdPathParams:
    passwd: str = field(metadata={'path_param': { 'field_name': 'passwd', 'style': 'simple', 'explode': False }})
    user: str = field(metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBasicAuthUserPasswdRequest:
    path_params: GetBasicAuthUserPasswdPathParams = field()
    

@dataclass
class GetBasicAuthUserPasswdResponse:
    content_type: str = field()
    status_code: int = field()
    
