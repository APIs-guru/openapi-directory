from dataclasses import dataclass, field



@dataclass
class GetDigestAuthQopUserPasswdPathParams:
    passwd: str = field(metadata={'path_param': { 'field_name': 'passwd', 'style': 'simple', 'explode': False }})
    qop: str = field(metadata={'path_param': { 'field_name': 'qop', 'style': 'simple', 'explode': False }})
    user: str = field(metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDigestAuthQopUserPasswdRequest:
    path_params: GetDigestAuthQopUserPasswdPathParams = field()
    

@dataclass
class GetDigestAuthQopUserPasswdResponse:
    content_type: str = field()
    status_code: int = field()
    
