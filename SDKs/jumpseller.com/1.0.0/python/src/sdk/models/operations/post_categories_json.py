from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostCategoriesJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCategoriesJSONRequest:
    query_params: PostCategoriesJSONQueryParams = field()
    request: shared.CategoryEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCategoriesJSONResponse:
    content_type: str = field()
    status_code: int = field()
    category: Optional[shared.Category] = field(default=None)
    
