from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerOutletsUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerOutletsUpdateRequest:
    path_params: DcimPowerOutletsUpdatePathParams = field()
    request: shared.WritablePowerOutletInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerOutletsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    power_outlet: Optional[shared.PowerOutlet] = field(default=None)
    
