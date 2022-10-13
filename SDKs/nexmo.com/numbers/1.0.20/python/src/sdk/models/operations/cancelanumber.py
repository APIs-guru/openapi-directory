from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CancelANumberRequest:
    request: shared.NumberDetails = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class CancelANumberResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    response: Optional[shared.Response] = field(default=None)
    unauthorized: Optional[shared.Unauthorized] = field(default=None)
    
