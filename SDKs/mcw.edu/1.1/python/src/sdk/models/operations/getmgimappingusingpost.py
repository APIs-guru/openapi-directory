from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMgiMappingUsingPostRequest:
    request: Optional[shared.RgdidListRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetMgiMappingUsingPostResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
