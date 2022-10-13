from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutCustomFieldsIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCustomFieldsIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutCustomFieldsIDJSONRequest:
    path_params: PutCustomFieldsIDJSONPathParams = field(default=None)
    query_params: PutCustomFieldsIDJSONQueryParams = field(default=None)
    request: shared.CustomFieldEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCustomFieldsIDJSONResponse:
    content_type: str = field(default=None)
    custom_field: Optional[shared.CustomField] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
