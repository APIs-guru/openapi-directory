from dataclasses import dataclass, field



@dataclass
class GetDigestAuthQopUserPasswdAlgorithmPathParams:
    algorithm: str = field(metadata={'path_param': { 'field_name': 'algorithm', 'style': 'simple', 'explode': False }})
    passwd: str = field(metadata={'path_param': { 'field_name': 'passwd', 'style': 'simple', 'explode': False }})
    qop: str = field(metadata={'path_param': { 'field_name': 'qop', 'style': 'simple', 'explode': False }})
    user: str = field(metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDigestAuthQopUserPasswdAlgorithmRequest:
    path_params: GetDigestAuthQopUserPasswdAlgorithmPathParams = field()
    

@dataclass
class GetDigestAuthQopUserPasswdAlgorithmResponse:
    content_type: str = field()
    status_code: int = field()
    
