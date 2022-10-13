from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetPagesIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPagesIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPagesIDJSONRequest:
    path_params: GetPagesIDJSONPathParams = field(default=None)
    query_params: GetPagesIDJSONQueryParams = field(default=None)
    

@dataclass
class GetPagesIDJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    page: Optional[shared.Page] = field(default=None)
    status_code: int = field(default=None)
    
