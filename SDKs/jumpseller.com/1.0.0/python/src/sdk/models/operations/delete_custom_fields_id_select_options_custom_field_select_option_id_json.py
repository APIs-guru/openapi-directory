from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONPathParams:
    custom_field_select_option_id: int = field(metadata={'path_param': { 'field_name': 'custom_field_select_option_id', 'style': 'simple', 'explode': False }})
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONRequest:
    path_params: DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONPathParams = field()
    query_params: DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONQueryParams = field()
    

@dataclass
class DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    delete_custom_fields_id_select_options_custom_field_select_option_id_json_200_application_json_string: Optional[str] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
