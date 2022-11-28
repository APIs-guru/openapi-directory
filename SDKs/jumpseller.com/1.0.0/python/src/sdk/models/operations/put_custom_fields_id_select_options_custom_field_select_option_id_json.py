from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONPathParams:
    custom_field_select_option_id: int = field(metadata={'path_param': { 'field_name': 'custom_field_select_option_id', 'style': 'simple', 'explode': False }})
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONRequest:
    path_params: PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONPathParams = field()
    query_params: PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONQueryParams = field()
    request: shared.CustomFieldSelectOptionEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    custom_field_select_option: Optional[shared.CustomFieldSelectOption] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
