from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutCategoriesIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCategoriesIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutCategoriesIDJSONRequest:
    path_params: PutCategoriesIDJSONPathParams = field(default=None)
    query_params: PutCategoriesIDJSONQueryParams = field(default=None)
    request: shared.CategoryEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCategoriesIDJSONResponse:
    category: Optional[shared.Category] = field(default=None)
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
