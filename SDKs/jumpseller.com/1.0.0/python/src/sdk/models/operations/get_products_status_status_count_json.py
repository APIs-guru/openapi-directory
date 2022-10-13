from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class GetProductsStatusStatusCountJSONStatusEnum(str, Enum):
    AVAILABLE = "available"
    NOT_AVAILABLE = "not-available"
    DISABLED = "disabled"


@dataclass
class GetProductsStatusStatusCountJSONPathParams:
    status: GetProductsStatusStatusCountJSONStatusEnum = field(default=None, metadata={'path_param': { 'field_name': 'status', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsStatusStatusCountJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsStatusStatusCountJSONRequest:
    path_params: GetProductsStatusStatusCountJSONPathParams = field(default=None)
    query_params: GetProductsStatusStatusCountJSONQueryParams = field(default=None)
    

@dataclass
class GetProductsStatusStatusCountJSONResponse:
    content_type: str = field(default=None)
    count: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    status_invalid: Optional[Any] = field(default=None)
    
