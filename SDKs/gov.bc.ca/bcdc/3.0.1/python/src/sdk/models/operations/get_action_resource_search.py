from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetActionResourceSearchQueryParams:
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'order_by', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionResourceSearchRequest:
    query_params: GetActionResourceSearchQueryParams = field(default=None)
    

@dataclass
class GetActionResourceSearchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
