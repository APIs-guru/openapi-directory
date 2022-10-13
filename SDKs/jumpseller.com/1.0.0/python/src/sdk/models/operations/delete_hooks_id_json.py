from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteHooksIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteHooksIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteHooksIDJSONRequest:
    path_params: DeleteHooksIDJSONPathParams = field(default=None)
    query_params: DeleteHooksIDJSONQueryParams = field(default=None)
    

@dataclass
class DeleteHooksIDJSONResponse:
    content_type: str = field(default=None)
    delete_hooks_id_json_200_application_json_string: Optional[str] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
