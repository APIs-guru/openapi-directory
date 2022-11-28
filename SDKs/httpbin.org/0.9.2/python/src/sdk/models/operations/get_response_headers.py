from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetResponseHeadersQueryParams:
    freeform: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'freeform', 'style': 'form', 'explode': True }})
    

@dataclass
class GetResponseHeadersRequest:
    query_params: GetResponseHeadersQueryParams = field()
    

@dataclass
class GetResponseHeadersResponse:
    content_type: str = field()
    status_code: int = field()
    
