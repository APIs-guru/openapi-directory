from dataclasses import dataclass, field



@dataclass
class GetDigestAuthQopUserPasswdPathParams:
    passwd: str = field(default=None, metadata={'path_param': { 'field_name': 'passwd', 'style': 'simple', 'explode': False }})
    qop: str = field(default=None, metadata={'path_param': { 'field_name': 'qop', 'style': 'simple', 'explode': False }})
    user: str = field(default=None, metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDigestAuthQopUserPasswdRequest:
    path_params: GetDigestAuthQopUserPasswdPathParams = field(default=None)
    

@dataclass
class GetDigestAuthQopUserPasswdResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
