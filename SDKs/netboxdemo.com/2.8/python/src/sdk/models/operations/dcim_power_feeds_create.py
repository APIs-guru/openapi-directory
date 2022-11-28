from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerFeedsCreateRequest:
    request: shared.WritablePowerFeedInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerFeedsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    power_feed: Optional[shared.PowerFeed] = field(default=None)
    
