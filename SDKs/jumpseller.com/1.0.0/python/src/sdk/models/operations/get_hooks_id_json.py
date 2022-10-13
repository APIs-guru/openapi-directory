from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetHooksIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHooksIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetHooksIDJSONRequest:
    path_params: GetHooksIDJSONPathParams = field(default=None)
    query_params: GetHooksIDJSONQueryParams = field(default=None)
    

@dataclass
class GetHooksIDJSONResponse:
    content_type: str = field(default=None)
    hook: Optional[shared.Hook] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
