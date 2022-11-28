from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BurnTokenRequest:
    request: shared.BurnTokenRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BurnTokenResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    burn_token_response: Optional[shared.BurnTokenResponse] = field(default=None)
    
