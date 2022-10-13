from dataclasses import dataclass, field



@dataclass
class WikiContentPathParams:
    wiki_id: str = field(default=None, metadata={'path_param': { 'field_name': 'wiki_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class WikiContentRequest:
    path_params: WikiContentPathParams = field(default=None)
    

@dataclass
class WikiContentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
