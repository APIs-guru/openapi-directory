from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRegionsCreateRequest:
    request: shared.WritableRegion = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRegionsCreateResponse:
    content_type: str = field(default=None)
    region: Optional[shared.Region] = field(default=None)
    status_code: int = field(default=None)
    
