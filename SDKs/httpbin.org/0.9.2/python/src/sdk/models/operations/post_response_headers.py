from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostResponseHeadersQueryParams:
    freeform: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'freeform', 'style': 'form', 'explode': True }})
    

@dataclass
class PostResponseHeadersRequest:
    query_params: PostResponseHeadersQueryParams = field()
    

@dataclass
class PostResponseHeadersResponse:
    content_type: str = field()
    status_code: int = field()
    
