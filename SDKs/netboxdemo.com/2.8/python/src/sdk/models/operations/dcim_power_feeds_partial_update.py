from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerFeedsPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerFeedsPartialUpdateRequest:
    path_params: DcimPowerFeedsPartialUpdatePathParams = field()
    request: shared.WritablePowerFeedInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerFeedsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    power_feed: Optional[shared.PowerFeed] = field(default=None)
    
