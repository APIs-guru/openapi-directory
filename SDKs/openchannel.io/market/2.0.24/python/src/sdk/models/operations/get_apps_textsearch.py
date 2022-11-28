from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAppsTextSearchQueryParams:
    fields: str = field(metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    text: str = field(metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    is_owned: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isOwned', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page_number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageNumber', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAppsTextSearchRequest:
    query_params: GetAppsTextSearchQueryParams = field()
    

@dataclass
class GetAppsTextSearchResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
