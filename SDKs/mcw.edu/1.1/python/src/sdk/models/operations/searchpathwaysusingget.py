from dataclasses import dataclass, field



@dataclass
class SearchPathwaysUsingGetPathParams:
    search_string: str = field(default=None, metadata={'path_param': { 'field_name': 'searchString', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchPathwaysUsingGetRequest:
    path_params: SearchPathwaysUsingGetPathParams = field(default=None)
    

@dataclass
class SearchPathwaysUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
