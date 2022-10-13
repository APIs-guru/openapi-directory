from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerFeedsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerFeedsPartialUpdateRequest:
    path_params: DcimPowerFeedsPartialUpdatePathParams = field(default=None)
    request: shared.WritablePowerFeed = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerFeedsPartialUpdateResponse:
    content_type: str = field(default=None)
    power_feed: Optional[shared.PowerFeed] = field(default=None)
    status_code: int = field(default=None)
    
