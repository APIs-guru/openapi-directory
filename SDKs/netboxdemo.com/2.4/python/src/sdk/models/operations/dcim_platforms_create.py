from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPlatformsCreateRequest:
    request: shared.WritablePlatformInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPlatformsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    platform: Optional[shared.Platform] = field(default=None)
    
