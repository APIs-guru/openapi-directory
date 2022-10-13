from dataclasses import dataclass, field



@dataclass
class WikiReadPathParams:
    wiki_id: str = field(default=None, metadata={'path_param': { 'field_name': 'wiki_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class WikiReadRequest:
    path_params: WikiReadPathParams = field(default=None)
    

@dataclass
class WikiReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
