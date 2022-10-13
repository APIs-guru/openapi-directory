from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostCustomFieldsIDSelectOptionsJSONPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostCustomFieldsIDSelectOptionsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCustomFieldsIDSelectOptionsJSONRequest:
    path_params: PostCustomFieldsIDSelectOptionsJSONPathParams = field(default=None)
    query_params: PostCustomFieldsIDSelectOptionsJSONQueryParams = field(default=None)
    request: shared.CustomFieldSelectOptionEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCustomFieldsIDSelectOptionsJSONResponse:
    content_type: str = field(default=None)
    custom_field_select_option: Optional[shared.CustomFieldSelectOption] = field(default=None)
    status_code: int = field(default=None)
    
