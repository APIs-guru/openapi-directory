from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteCustomersIDFieldsFieldIDPathParams:
    field_id: int = field(default=None, metadata={'path_param': { 'field_name': 'field_id', 'style': 'simple', 'explode': False }})
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomersIDFieldsFieldIDQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteCustomersIDFieldsFieldIDRequest:
    path_params: DeleteCustomersIDFieldsFieldIDPathParams = field(default=None)
    query_params: DeleteCustomersIDFieldsFieldIDQueryParams = field(default=None)
    

@dataclass
class DeleteCustomersIDFieldsFieldIDResponse:
    content_type: str = field(default=None)
    delete_customers_id_fields_field_id_200_application_json_string: Optional[str] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
