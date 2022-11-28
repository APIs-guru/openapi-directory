from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetProductsCategoryCategoryIDCountJSONPathParams:
    category_id: int = field(metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsCategoryCategoryIDCountJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsCategoryCategoryIDCountJSONRequest:
    path_params: GetProductsCategoryCategoryIDCountJSONPathParams = field()
    query_params: GetProductsCategoryCategoryIDCountJSONQueryParams = field()
    

@dataclass
class GetProductsCategoryCategoryIDCountJSONResponse:
    content_type: str = field()
    status_code: int = field()
    count: Optional[Any] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
