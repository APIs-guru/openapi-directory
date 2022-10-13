from dataclasses import dataclass, field



@dataclass
class GetAnnotsByRefrerenceUsingGetPathParams:
    ref_rgd_id: int = field(default=None, metadata={'path_param': { 'field_name': 'refRgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnnotsByRefrerenceUsingGetRequest:
    path_params: GetAnnotsByRefrerenceUsingGetPathParams = field(default=None)
    

@dataclass
class GetAnnotsByRefrerenceUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
