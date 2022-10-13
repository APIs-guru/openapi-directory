from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostHooksJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostHooksJSONRequest:
    query_params: PostHooksJSONQueryParams = field(default=None)
    request: shared.HookEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostHooksJSONResponse:
    content_type: str = field(default=None)
    hook: Optional[shared.Hook] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
