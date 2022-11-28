from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeleteCustomerCategoriesIDCustomersJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomerCategoriesIDCustomersJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteCustomerCategoriesIDCustomersJSONRequest:
    path_params: DeleteCustomerCategoriesIDCustomersJSONPathParams = field()
    query_params: DeleteCustomerCategoriesIDCustomersJSONQueryParams = field()
    request: shared.CustomersToCustomerCategory = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteCustomerCategoriesIDCustomersJSONResponse:
    content_type: str = field()
    status_code: int = field()
    delete_customer_categories_id_customers_json_200_application_json_string: Optional[str] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
