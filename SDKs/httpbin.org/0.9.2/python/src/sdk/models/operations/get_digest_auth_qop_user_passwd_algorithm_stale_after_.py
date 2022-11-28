from dataclasses import dataclass, field



@dataclass
class GetDigestAuthQopUserPasswdAlgorithmStaleAfterPathParams:
    algorithm: str = field(metadata={'path_param': { 'field_name': 'algorithm', 'style': 'simple', 'explode': False }})
    passwd: str = field(metadata={'path_param': { 'field_name': 'passwd', 'style': 'simple', 'explode': False }})
    qop: str = field(metadata={'path_param': { 'field_name': 'qop', 'style': 'simple', 'explode': False }})
    stale_after: str = field(metadata={'path_param': { 'field_name': 'stale_after', 'style': 'simple', 'explode': False }})
    user: str = field(metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDigestAuthQopUserPasswdAlgorithmStaleAfterRequest:
    path_params: GetDigestAuthQopUserPasswdAlgorithmStaleAfterPathParams = field()
    

@dataclass
class GetDigestAuthQopUserPasswdAlgorithmStaleAfterResponse:
    content_type: str = field()
    status_code: int = field()
    
