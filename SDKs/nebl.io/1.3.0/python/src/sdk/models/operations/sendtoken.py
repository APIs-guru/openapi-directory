from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SendTokenRequest:
    request: shared.SendTokenRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendTokenResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    send_token_response: Optional[shared.SendTokenResponse] = field(default=None)
    
