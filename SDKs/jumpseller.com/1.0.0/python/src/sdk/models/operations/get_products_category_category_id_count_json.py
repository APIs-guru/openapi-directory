from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetProductsCategoryCategoryIDCountJSONPathParams:
    category_id: int = field(default=None, metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsCategoryCategoryIDCountJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsCategoryCategoryIDCountJSONRequest:
    path_params: GetProductsCategoryCategoryIDCountJSONPathParams = field(default=None)
    query_params: GetProductsCategoryCategoryIDCountJSONQueryParams = field(default=None)
    

@dataclass
class GetProductsCategoryCategoryIDCountJSONResponse:
    content_type: str = field(default=None)
    count: Optional[Any] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
