from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetCustomFieldsIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomFieldsIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCustomFieldsIDJSONRequest:
    path_params: GetCustomFieldsIDJSONPathParams = field(default=None)
    query_params: GetCustomFieldsIDJSONQueryParams = field(default=None)
    

@dataclass
class GetCustomFieldsIDJSONResponse:
    content_type: str = field(default=None)
    custom_field: Optional[shared.CustomField] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
