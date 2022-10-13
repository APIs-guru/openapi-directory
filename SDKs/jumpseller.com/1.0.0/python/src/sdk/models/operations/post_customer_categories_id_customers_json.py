from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PostCustomerCategoriesIDCustomersJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostCustomerCategoriesIDCustomersJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCustomerCategoriesIDCustomersJSONRequest:
    path_params: PostCustomerCategoriesIDCustomersJSONPathParams = field(default=None)
    query_params: PostCustomerCategoriesIDCustomersJSONQueryParams = field(default=None)
    request: shared.CustomersToCustomerCategory = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCustomerCategoriesIDCustomersJSONResponse:
    content_type: str = field(default=None)
    customers: Optional[List[shared.Customer]] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
