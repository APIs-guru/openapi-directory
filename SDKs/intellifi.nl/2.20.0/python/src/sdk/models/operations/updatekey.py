from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateKeyPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateKeySecurity:
    cookie_sid: shared.SchemeCookieSid = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclass
class UpdateKeyRequest:
    path_params: UpdateKeyPathParams = field()
    request: shared.KeyInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateKeySecurity = field()
    

@dataclass
class UpdateKeyResponse:
    content_type: str = field()
    status_code: int = field()
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    
