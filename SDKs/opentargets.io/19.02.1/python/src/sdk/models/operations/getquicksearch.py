from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetQuickSearchQueryParams:
    q: str = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetQuickSearchRequest:
    query_params: GetQuickSearchQueryParams = field(default=None)
    

@dataclass
class GetQuickSearchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
