from dataclasses import dataclass, field



@dataclass
class WikiContentPathParams:
    wiki_id: str = field(metadata={'path_param': { 'field_name': 'wiki_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class WikiContentRequest:
    path_params: WikiContentPathParams = field()
    

@dataclass
class WikiContentResponse:
    content_type: str = field()
    status_code: int = field()
    
