from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared

class GetProductsStatusStatusJSONStatusEnum(str, Enum):
    AVAILABLE = "available"
    NOT_AVAILABLE = "not-available"
    DISABLED = "disabled"


@dataclass
class GetProductsStatusStatusJSONPathParams:
    status: GetProductsStatusStatusJSONStatusEnum = field(metadata={'path_param': { 'field_name': 'status', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsStatusStatusJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsStatusStatusJSONRequest:
    path_params: GetProductsStatusStatusJSONPathParams = field()
    query_params: GetProductsStatusStatusJSONQueryParams = field()
    

@dataclass
class GetProductsStatusStatusJSONResponse:
    content_type: str = field()
    status_code: int = field()
    products: Optional[List[shared.Product]] = field(default=None)
    status_invalid: Optional[Any] = field(default=None)
    
