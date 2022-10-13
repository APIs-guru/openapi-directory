from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutCustomerCategoriesIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCustomerCategoriesIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutCustomerCategoriesIDJSONRequest:
    path_params: PutCustomerCategoriesIDJSONPathParams = field(default=None)
    query_params: PutCustomerCategoriesIDJSONQueryParams = field(default=None)
    request: shared.CustomerCategoryEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCustomerCategoriesIDJSONResponse:
    content_type: str = field(default=None)
    customer_category: Optional[shared.CustomerCategory] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
