from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddKeySecurity:
    cookie_sid: shared.SchemeCookieSid = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclass
class AddKeyRequest:
    request: shared.Key = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddKeySecurity = field(default=None)
    

@dataclass
class AddKeyResponse:
    content_type: str = field(default=None)
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    status_code: int = field(default=None)
    
