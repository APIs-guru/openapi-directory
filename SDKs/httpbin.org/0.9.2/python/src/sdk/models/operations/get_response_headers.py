from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetResponseHeadersQueryParams:
    freeform: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'freeform', 'style': 'form', 'explode': True }})
    

@dataclass
class GetResponseHeadersRequest:
    query_params: GetResponseHeadersQueryParams = field(default=None)
    

@dataclass
class GetResponseHeadersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
