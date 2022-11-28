from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutPagesIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPagesIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutPagesIDJSONRequest:
    path_params: PutPagesIDJSONPathParams = field()
    query_params: PutPagesIDJSONQueryParams = field()
    request: shared.PageModify = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutPagesIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    page: Optional[shared.Page] = field(default=None)
    
