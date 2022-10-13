from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostPagesJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostPagesJSONRequest:
    query_params: PostPagesJSONQueryParams = field(default=None)
    request: shared.PageModify = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPagesJSONResponse:
    content_type: str = field(default=None)
    page: Optional[shared.Page] = field(default=None)
    status_code: int = field(default=None)
    
