from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetOwnershipQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page_number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageNumber', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOwnershipRequest:
    query_params: GetOwnershipQueryParams = field()
    

@dataclass
class GetOwnershipResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
