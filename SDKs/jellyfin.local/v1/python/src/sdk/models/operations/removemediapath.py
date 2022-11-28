from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveMediaPathQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    path: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    refresh_library: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'refreshLibrary', 'style': 'form', 'explode': True }})
    

@dataclass
class RemoveMediaPathSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class RemoveMediaPathRequest:
    query_params: RemoveMediaPathQueryParams = field()
    security: RemoveMediaPathSecurity = field()
    

@dataclass
class RemoveMediaPathResponse:
    content_type: str = field()
    status_code: int = field()
    
