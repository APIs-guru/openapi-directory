from dataclasses import dataclass, field
from typing import Optional


@dataclass
class WikiReadPathParams:
    wiki_id: str = field(metadata={'path_param': { 'field_name': 'wiki_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class WikiReadRequest:
    path_params: WikiReadPathParams = field()
    

@dataclass
class WikiReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
