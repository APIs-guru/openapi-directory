from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestnetBurnTokenRequest:
    request: shared.BurnTokenRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TestnetBurnTokenResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    burn_token_response: Optional[shared.BurnTokenResponse] = field(default=None)
    
