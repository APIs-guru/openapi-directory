from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCustomFieldsIDSelectOptionsJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomFieldsIDSelectOptionsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCustomFieldsIDSelectOptionsJSONRequest:
    path_params: GetCustomFieldsIDSelectOptionsJSONPathParams = field()
    query_params: GetCustomFieldsIDSelectOptionsJSONQueryParams = field()
    

@dataclass
class GetCustomFieldsIDSelectOptionsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    custom_field_select_options: Optional[List[shared.CustomFieldSelectOption]] = field(default=None)
    
