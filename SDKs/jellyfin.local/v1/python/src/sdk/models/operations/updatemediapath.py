from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateMediaPathQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateMediaPathRequests:
    media_path_info: Optional[shared.MediaPathInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    media_path_info1: Optional[shared.MediaPathInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    media_path_info2: Optional[shared.MediaPathInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateMediaPathSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateMediaPathRequest:
    query_params: UpdateMediaPathQueryParams = field()
    security: UpdateMediaPathSecurity = field()
    request: Optional[UpdateMediaPathRequests] = field(default=None)
    

@dataclass
class UpdateMediaPathResponse:
    content_type: str = field()
    status_code: int = field()
    
