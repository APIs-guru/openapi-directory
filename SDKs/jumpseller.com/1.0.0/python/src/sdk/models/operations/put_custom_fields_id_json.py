from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutCustomFieldsIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCustomFieldsIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutCustomFieldsIDJSONRequest:
    path_params: PutCustomFieldsIDJSONPathParams = field()
    query_params: PutCustomFieldsIDJSONQueryParams = field()
    request: shared.CustomFieldEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCustomFieldsIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    custom_field: Optional[shared.CustomField] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
