from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostStatsIncrementFieldPathParams:
    field: str = field(default=None, metadata={'path_param': { 'field_name': 'field', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostStatsIncrementFieldQueryParams:
    app_id: str = field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    date: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    value: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'value', 'style': 'form', 'explode': True }})
    

@dataclass
class PostStatsIncrementFieldRequest:
    path_params: PostStatsIncrementFieldPathParams = field(default=None)
    query_params: PostStatsIncrementFieldQueryParams = field(default=None)
    

@dataclass
class PostStatsIncrementFieldResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
