from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteCheckoutCustomFieldsIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCheckoutCustomFieldsIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteCheckoutCustomFieldsIDJSONRequest:
    path_params: DeleteCheckoutCustomFieldsIDJSONPathParams = field()
    query_params: DeleteCheckoutCustomFieldsIDJSONQueryParams = field()
    

@dataclass
class DeleteCheckoutCustomFieldsIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    delete_checkout_custom_fields_id_json_200_application_json_string: Optional[str] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
