from dataclasses import dataclass, field



@dataclass
class GetGeneOrthologsUsingGetPathParams:
    rgd_id: int = field(default=None, metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeneOrthologsUsingGetRequest:
    path_params: GetGeneOrthologsUsingGetPathParams = field(default=None)
    

@dataclass
class GetGeneOrthologsUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
