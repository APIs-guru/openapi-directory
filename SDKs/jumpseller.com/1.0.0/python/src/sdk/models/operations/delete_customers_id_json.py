from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteCustomersIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomersIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteCustomersIDJSONRequest:
    path_params: DeleteCustomersIDJSONPathParams = field()
    query_params: DeleteCustomersIDJSONQueryParams = field()
    

@dataclass
class DeleteCustomersIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    delete_customers_id_json_200_application_json_string: Optional[str] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
