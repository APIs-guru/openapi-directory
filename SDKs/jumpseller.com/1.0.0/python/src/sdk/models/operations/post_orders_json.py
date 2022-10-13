from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostOrdersJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostOrdersJSONRequest:
    query_params: PostOrdersJSONQueryParams = field(default=None)
    request: shared.OrderCreate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostOrdersJSONResponse:
    content_type: str = field(default=None)
    order: Optional[shared.Order] = field(default=None)
    status_code: int = field(default=None)
    
