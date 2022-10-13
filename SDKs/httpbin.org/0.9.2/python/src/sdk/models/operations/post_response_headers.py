from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostResponseHeadersQueryParams:
    freeform: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'freeform', 'style': 'form', 'explode': True }})
    

@dataclass
class PostResponseHeadersRequest:
    query_params: PostResponseHeadersQueryParams = field(default=None)
    

@dataclass
class PostResponseHeadersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
