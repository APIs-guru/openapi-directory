from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostCustomFieldsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCustomFieldsJSONRequest:
    query_params: PostCustomFieldsJSONQueryParams = field()
    request: shared.CustomFieldEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCustomFieldsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    custom_field: Optional[shared.CustomField] = field(default=None)
    
