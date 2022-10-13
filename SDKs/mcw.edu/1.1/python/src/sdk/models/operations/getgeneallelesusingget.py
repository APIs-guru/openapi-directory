from dataclasses import dataclass, field



@dataclass
class GetGeneAllelesUsingGetPathParams:
    rgd_id: int = field(default=None, metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeneAllelesUsingGetRequest:
    path_params: GetGeneAllelesUsingGetPathParams = field(default=None)
    

@dataclass
class GetGeneAllelesUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
