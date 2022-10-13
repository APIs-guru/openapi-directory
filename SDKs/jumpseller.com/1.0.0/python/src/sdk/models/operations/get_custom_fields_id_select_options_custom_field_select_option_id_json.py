from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONPathParams:
    custom_field_select_option_id: int = field(default=None, metadata={'path_param': { 'field_name': 'custom_field_select_option_id', 'style': 'simple', 'explode': False }})
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONRequest:
    path_params: GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONPathParams = field(default=None)
    query_params: GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONQueryParams = field(default=None)
    

@dataclass
class GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONResponse:
    content_type: str = field(default=None)
    custom_field_select_option: Optional[shared.CustomFieldSelectOption] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
