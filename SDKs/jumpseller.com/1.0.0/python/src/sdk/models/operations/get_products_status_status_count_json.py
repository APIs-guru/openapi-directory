from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class GetProductsStatusStatusCountJSONStatusEnum(str, Enum):
    AVAILABLE = "available"
    NOT_AVAILABLE = "not-available"
    DISABLED = "disabled"


@dataclass
class GetProductsStatusStatusCountJSONPathParams:
    status: GetProductsStatusStatusCountJSONStatusEnum = field(metadata={'path_param': { 'field_name': 'status', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsStatusStatusCountJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsStatusStatusCountJSONRequest:
    path_params: GetProductsStatusStatusCountJSONPathParams = field()
    query_params: GetProductsStatusStatusCountJSONQueryParams = field()
    

@dataclass
class GetProductsStatusStatusCountJSONResponse:
    content_type: str = field()
    status_code: int = field()
    count: Optional[Any] = field(default=None)
    status_invalid: Optional[Any] = field(default=None)
    
