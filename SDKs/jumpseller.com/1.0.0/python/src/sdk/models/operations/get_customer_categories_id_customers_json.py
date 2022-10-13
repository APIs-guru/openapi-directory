from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetCustomerCategoriesIDCustomersJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomerCategoriesIDCustomersJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCustomerCategoriesIDCustomersJSONRequest:
    path_params: GetCustomerCategoriesIDCustomersJSONPathParams = field(default=None)
    query_params: GetCustomerCategoriesIDCustomersJSONQueryParams = field(default=None)
    

@dataclass
class GetCustomerCategoriesIDCustomersJSONResponse:
    content_type: str = field(default=None)
    customers: Optional[List[shared.Customer]] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
