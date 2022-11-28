from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteCustomersIDFieldsFieldIDPathParams:
    field_id: int = field(metadata={'path_param': { 'field_name': 'field_id', 'style': 'simple', 'explode': False }})
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomersIDFieldsFieldIDQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteCustomersIDFieldsFieldIDRequest:
    path_params: DeleteCustomersIDFieldsFieldIDPathParams = field()
    query_params: DeleteCustomersIDFieldsFieldIDQueryParams = field()
    

@dataclass
class DeleteCustomersIDFieldsFieldIDResponse:
    content_type: str = field()
    status_code: int = field()
    delete_customers_id_fields_field_id_200_application_json_string: Optional[str] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
