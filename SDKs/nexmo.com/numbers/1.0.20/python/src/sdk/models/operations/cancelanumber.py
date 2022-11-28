from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CancelANumberRequest:
    request: shared.NumberDetails = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class CancelANumberResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    response: Optional[shared.Response] = field(default=None)
    unauthorized: Optional[shared.Unauthorized] = field(default=None)
    
