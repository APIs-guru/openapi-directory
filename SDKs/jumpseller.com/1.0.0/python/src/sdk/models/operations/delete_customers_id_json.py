from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteCustomersIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomersIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteCustomersIDJSONRequest:
    path_params: DeleteCustomersIDJSONPathParams = field(default=None)
    query_params: DeleteCustomersIDJSONQueryParams = field(default=None)
    

@dataclass
class DeleteCustomersIDJSONResponse:
    content_type: str = field(default=None)
    delete_customers_id_json_200_application_json_string: Optional[str] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
