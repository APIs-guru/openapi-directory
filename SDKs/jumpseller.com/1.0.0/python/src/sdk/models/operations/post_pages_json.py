from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostPagesJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostPagesJSONRequest:
    query_params: PostPagesJSONQueryParams = field()
    request: shared.PageModify = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPagesJSONResponse:
    content_type: str = field()
    status_code: int = field()
    page: Optional[shared.Page] = field(default=None)
    
