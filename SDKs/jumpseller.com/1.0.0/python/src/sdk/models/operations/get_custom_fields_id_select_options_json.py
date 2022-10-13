from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCustomFieldsIDSelectOptionsJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomFieldsIDSelectOptionsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCustomFieldsIDSelectOptionsJSONRequest:
    path_params: GetCustomFieldsIDSelectOptionsJSONPathParams = field(default=None)
    query_params: GetCustomFieldsIDSelectOptionsJSONQueryParams = field(default=None)
    

@dataclass
class GetCustomFieldsIDSelectOptionsJSONResponse:
    content_type: str = field(default=None)
    custom_field_select_options: Optional[List[shared.CustomFieldSelectOption]] = field(default=None)
    status_code: int = field(default=None)
    
