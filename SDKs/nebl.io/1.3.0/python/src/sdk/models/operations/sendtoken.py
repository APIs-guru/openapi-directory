from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SendTokenRequest:
    request: shared.SendTokenRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendTokenResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    send_token_response: Optional[shared.SendTokenResponse] = field(default=None)
    
