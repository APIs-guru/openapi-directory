from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PostCustomerCategoriesIDCustomersJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostCustomerCategoriesIDCustomersJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCustomerCategoriesIDCustomersJSONRequest:
    path_params: PostCustomerCategoriesIDCustomersJSONPathParams = field()
    query_params: PostCustomerCategoriesIDCustomersJSONQueryParams = field()
    request: shared.CustomersToCustomerCategory = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCustomerCategoriesIDCustomersJSONResponse:
    content_type: str = field()
    status_code: int = field()
    customers: Optional[List[shared.Customer]] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
