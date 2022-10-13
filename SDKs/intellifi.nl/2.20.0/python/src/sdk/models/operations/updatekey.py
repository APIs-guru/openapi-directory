from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateKeyPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateKeySecurity:
    cookie_sid: shared.SchemeCookieSid = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclass
class UpdateKeyRequest:
    path_params: UpdateKeyPathParams = field(default=None)
    request: shared.Key = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateKeySecurity = field(default=None)
    

@dataclass
class UpdateKeyResponse:
    content_type: str = field(default=None)
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    status_code: int = field(default=None)
    
