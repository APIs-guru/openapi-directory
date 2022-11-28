from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetSearchQueryParams:
    q: str = field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    from_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchRequest:
    query_params: GetSearchQueryParams = field()
    

@dataclass
class GetSearchResponse:
    content_type: str = field()
    status_code: int = field()
    
