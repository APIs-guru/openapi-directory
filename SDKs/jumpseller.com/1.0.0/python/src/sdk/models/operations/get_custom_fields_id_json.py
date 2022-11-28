from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetCustomFieldsIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomFieldsIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCustomFieldsIDJSONRequest:
    path_params: GetCustomFieldsIDJSONPathParams = field()
    query_params: GetCustomFieldsIDJSONQueryParams = field()
    

@dataclass
class GetCustomFieldsIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    custom_field: Optional[shared.CustomField] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
