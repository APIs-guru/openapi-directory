from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetCustomerCategoriesIDCustomersJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomerCategoriesIDCustomersJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCustomerCategoriesIDCustomersJSONRequest:
    path_params: GetCustomerCategoriesIDCustomersJSONPathParams = field()
    query_params: GetCustomerCategoriesIDCustomersJSONQueryParams = field()
    

@dataclass
class GetCustomerCategoriesIDCustomersJSONResponse:
    content_type: str = field()
    status_code: int = field()
    customers: Optional[List[shared.Customer]] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
