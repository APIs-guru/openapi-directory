from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddKeySecurity:
    cookie_sid: shared.SchemeCookieSid = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclass
class AddKeyRequest:
    request: shared.KeyInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddKeySecurity = field()
    

@dataclass
class AddKeyResponse:
    content_type: str = field()
    status_code: int = field()
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    
