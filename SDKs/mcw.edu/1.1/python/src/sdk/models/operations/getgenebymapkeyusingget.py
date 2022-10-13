from dataclasses import dataclass, field



@dataclass
class GetGeneByMapKeyUsingGetPathParams:
    map_key: int = field(default=None, metadata={'path_param': { 'field_name': 'mapKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeneByMapKeyUsingGetRequest:
    path_params: GetGeneByMapKeyUsingGetPathParams = field(default=None)
    

@dataclass
class GetGeneByMapKeyUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
