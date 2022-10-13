from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPlatformsCreateRequest:
    request: shared.WritablePlatform = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPlatformsCreateResponse:
    content_type: str = field(default=None)
    platform: Optional[shared.Platform] = field(default=None)
    status_code: int = field(default=None)
    
