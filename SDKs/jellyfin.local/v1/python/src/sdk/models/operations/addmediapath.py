from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddMediaPathQueryParams:
    refresh_library: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'refreshLibrary', 'style': 'form', 'explode': True }})
    

@dataclass
class AddMediaPathRequests:
    media_path_dto: Optional[shared.MediaPathDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    media_path_dto1: Optional[shared.MediaPathDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    media_path_dto2: Optional[shared.MediaPathDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AddMediaPathSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddMediaPathRequest:
    query_params: AddMediaPathQueryParams = field()
    request: AddMediaPathRequests = field()
    security: AddMediaPathSecurity = field()
    

@dataclass
class AddMediaPathResponse:
    content_type: str = field()
    status_code: int = field()
    
