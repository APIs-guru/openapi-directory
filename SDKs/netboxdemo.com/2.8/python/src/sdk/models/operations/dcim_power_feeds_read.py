from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerFeedsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerFeedsReadRequest:
    path_params: DcimPowerFeedsReadPathParams = field()
    

@dataclass
class DcimPowerFeedsReadResponse:
    content_type: str = field()
    status_code: int = field()
    power_feed: Optional[shared.PowerFeed] = field(default=None)
    
