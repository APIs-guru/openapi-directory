from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetActionRelatedListQueryParams:
    dataset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dataset', 'style': 'form', 'explode': True }})
    featured: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'featured', 'style': 'form', 'explode': True }})
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type_filter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionRelatedListRequest:
    query_params: GetActionRelatedListQueryParams = field()
    

@dataclass
class GetActionRelatedListResponse:
    content_type: str = field()
    status_code: int = field()
    
