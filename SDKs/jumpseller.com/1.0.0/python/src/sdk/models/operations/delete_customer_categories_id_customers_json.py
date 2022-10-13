from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeleteCustomerCategoriesIDCustomersJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomerCategoriesIDCustomersJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteCustomerCategoriesIDCustomersJSONRequest:
    path_params: DeleteCustomerCategoriesIDCustomersJSONPathParams = field(default=None)
    query_params: DeleteCustomerCategoriesIDCustomersJSONQueryParams = field(default=None)
    request: shared.CustomersToCustomerCategory = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteCustomerCategoriesIDCustomersJSONResponse:
    content_type: str = field(default=None)
    delete_customer_categories_id_customers_json_200_application_json_string: Optional[str] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
