from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostCustomFieldsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCustomFieldsJSONRequest:
    query_params: PostCustomFieldsJSONQueryParams = field(default=None)
    request: shared.CustomFieldEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCustomFieldsJSONResponse:
    content_type: str = field(default=None)
    custom_field: Optional[shared.CustomField] = field(default=None)
    status_code: int = field(default=None)
    
