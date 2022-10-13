from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InitiateAPIKeySecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class InitiateAPIKeyRequest:
    security: InitiateAPIKeySecurity = field(default=None)
    

@dataclass
class InitiateAPIKeyResponse:
    api_key: Optional[shared.APIKey] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
