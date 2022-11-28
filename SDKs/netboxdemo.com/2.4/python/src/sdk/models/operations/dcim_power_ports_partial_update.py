from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerPortsPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerPortsPartialUpdateRequest:
    path_params: DcimPowerPortsPartialUpdatePathParams = field()
    request: shared.WritablePowerPortInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerPortsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    power_port: Optional[shared.PowerPort] = field(default=None)
    
