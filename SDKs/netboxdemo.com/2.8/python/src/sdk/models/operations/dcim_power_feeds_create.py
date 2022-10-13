from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerFeedsCreateRequest:
    request: shared.WritablePowerFeed = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerFeedsCreateResponse:
    content_type: str = field(default=None)
    power_feed: Optional[shared.PowerFeed] = field(default=None)
    status_code: int = field(default=None)
    
