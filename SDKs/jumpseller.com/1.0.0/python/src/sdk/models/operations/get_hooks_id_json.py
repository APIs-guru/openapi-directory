from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetHooksIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHooksIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetHooksIDJSONRequest:
    path_params: GetHooksIDJSONPathParams = field()
    query_params: GetHooksIDJSONQueryParams = field()
    

@dataclass
class GetHooksIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    hook: Optional[shared.Hook] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    
