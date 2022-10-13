from dataclasses import dataclass, field



@dataclass
class GetDigestAuthQopUserPasswdAlgorithmStaleAfterPathParams:
    algorithm: str = field(default=None, metadata={'path_param': { 'field_name': 'algorithm', 'style': 'simple', 'explode': False }})
    passwd: str = field(default=None, metadata={'path_param': { 'field_name': 'passwd', 'style': 'simple', 'explode': False }})
    qop: str = field(default=None, metadata={'path_param': { 'field_name': 'qop', 'style': 'simple', 'explode': False }})
    stale_after: str = field(default=None, metadata={'path_param': { 'field_name': 'stale_after', 'style': 'simple', 'explode': False }})
    user: str = field(default=None, metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDigestAuthQopUserPasswdAlgorithmStaleAfterRequest:
    path_params: GetDigestAuthQopUserPasswdAlgorithmStaleAfterPathParams = field(default=None)
    

@dataclass
class GetDigestAuthQopUserPasswdAlgorithmStaleAfterResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
