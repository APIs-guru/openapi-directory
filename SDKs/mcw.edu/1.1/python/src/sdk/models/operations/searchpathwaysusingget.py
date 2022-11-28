from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SearchPathwaysUsingGetPathParams:
    search_string: str = field(metadata={'path_param': { 'field_name': 'searchString', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchPathwaysUsingGetRequest:
    path_params: SearchPathwaysUsingGetPathParams = field()
    

@dataclass
class SearchPathwaysUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
