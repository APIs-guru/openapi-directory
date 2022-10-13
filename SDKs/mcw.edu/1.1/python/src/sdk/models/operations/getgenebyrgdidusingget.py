from dataclasses import dataclass, field



@dataclass
class GetGeneByRgdIDUsingGetPathParams:
    rgd_id: int = field(default=None, metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeneByRgdIDUsingGetRequest:
    path_params: GetGeneByRgdIDUsingGetPathParams = field(default=None)
    

@dataclass
class GetGeneByRgdIDUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
