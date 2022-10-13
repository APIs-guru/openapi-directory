from dataclasses import dataclass, field



@dataclass
class GetQtlByRgdIDUsingGetPathParams:
    rgd_id: int = field(default=None, metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQtlByRgdIDUsingGetRequest:
    path_params: GetQtlByRgdIDUsingGetPathParams = field(default=None)
    

@dataclass
class GetQtlByRgdIDUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
