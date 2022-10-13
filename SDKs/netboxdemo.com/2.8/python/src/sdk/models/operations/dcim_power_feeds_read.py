from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerFeedsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerFeedsReadRequest:
    path_params: DcimPowerFeedsReadPathParams = field(default=None)
    

@dataclass
class DcimPowerFeedsReadResponse:
    content_type: str = field(default=None)
    power_feed: Optional[shared.PowerFeed] = field(default=None)
    status_code: int = field(default=None)
    
