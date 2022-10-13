from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteCustomerCategoriesIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomerCategoriesIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteCustomerCategoriesIDJSONRequest:
    path_params: DeleteCustomerCategoriesIDJSONPathParams = field(default=None)
    query_params: DeleteCustomerCategoriesIDJSONQueryParams = field(default=None)
    

@dataclass
class DeleteCustomerCategoriesIDJSONResponse:
    content_type: str = field(default=None)
    delete_customer_categories_id_json_200_application_json_string: Optional[str] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
