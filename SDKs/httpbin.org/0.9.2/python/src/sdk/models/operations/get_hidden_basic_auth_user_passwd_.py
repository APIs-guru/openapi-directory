from dataclasses import dataclass, field



@dataclass
class GetHiddenBasicAuthUserPasswdPathParams:
    passwd: str = field(metadata={'path_param': { 'field_name': 'passwd', 'style': 'simple', 'explode': False }})
    user: str = field(metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHiddenBasicAuthUserPasswdRequest:
    path_params: GetHiddenBasicAuthUserPasswdPathParams = field()
    

@dataclass
class GetHiddenBasicAuthUserPasswdResponse:
    content_type: str = field()
    status_code: int = field()
    
