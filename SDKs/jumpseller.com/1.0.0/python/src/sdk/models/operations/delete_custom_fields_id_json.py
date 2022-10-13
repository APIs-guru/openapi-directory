from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteCustomFieldsIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomFieldsIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteCustomFieldsIDJSONRequest:
    path_params: DeleteCustomFieldsIDJSONPathParams = field(default=None)
    query_params: DeleteCustomFieldsIDJSONQueryParams = field(default=None)
    

@dataclass
class DeleteCustomFieldsIDJSONResponse:
    content_type: str = field(default=None)
    delete_custom_fields_id_json_200_application_json_string: Optional[str] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
