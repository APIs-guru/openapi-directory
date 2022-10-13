from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class GetProductsStatusStatusJSONStatusEnum(str, Enum):
    AVAILABLE = "available"
    NOT_AVAILABLE = "not-available"
    DISABLED = "disabled"


@dataclass
class GetProductsStatusStatusJSONPathParams:
    status: GetProductsStatusStatusJSONStatusEnum = field(default=None, metadata={'path_param': { 'field_name': 'status', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsStatusStatusJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsStatusStatusJSONRequest:
    path_params: GetProductsStatusStatusJSONPathParams = field(default=None)
    query_params: GetProductsStatusStatusJSONQueryParams = field(default=None)
    

@dataclass
class GetProductsStatusStatusJSONResponse:
    content_type: str = field(default=None)
    products: Optional[List[shared.Product]] = field(default=None)
    status_code: int = field(default=None)
    status_invalid: Optional[Any] = field(default=None)
    
