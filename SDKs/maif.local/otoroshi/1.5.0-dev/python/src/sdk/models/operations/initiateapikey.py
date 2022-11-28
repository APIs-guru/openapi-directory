from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InitiateAPIKeySecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class InitiateAPIKeyRequest:
    security: InitiateAPIKeySecurity = field()
    

@dataclass
class InitiateAPIKeyResponse:
    content_type: str = field()
    status_code: int = field()
    api_key: Optional[shared.APIKey] = field(default=None)
    
