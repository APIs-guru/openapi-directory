from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class PostStatsIncrementFieldPathParams:
    field: str = field(metadata={'path_param': { 'field_name': 'field', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostStatsIncrementFieldQueryParams:
    app_id: str = field(metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    date_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    value: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'value', 'style': 'form', 'explode': True }})
    

@dataclass
class PostStatsIncrementFieldRequest:
    path_params: PostStatsIncrementFieldPathParams = field()
    query_params: PostStatsIncrementFieldQueryParams = field()
    

@dataclass
class PostStatsIncrementFieldResponse:
    content_type: str = field()
    status_code: int = field()
    
