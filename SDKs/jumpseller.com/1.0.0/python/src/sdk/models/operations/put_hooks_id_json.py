from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutHooksIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutHooksIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutHooksIDJSONRequest:
    path_params: PutHooksIDJSONPathParams = field()
    query_params: PutHooksIDJSONQueryParams = field()
    request: shared.HookEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutHooksIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    hook: Optional[shared.Hook] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
