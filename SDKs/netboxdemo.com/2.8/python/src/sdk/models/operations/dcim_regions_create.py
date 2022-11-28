from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRegionsCreateRequest:
    request: shared.WritableRegionInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRegionsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    region: Optional[shared.Region] = field(default=None)
    
