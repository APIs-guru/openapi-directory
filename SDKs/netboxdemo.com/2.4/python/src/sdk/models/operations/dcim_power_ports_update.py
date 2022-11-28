from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerPortsUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerPortsUpdateRequest:
    path_params: DcimPowerPortsUpdatePathParams = field()
    request: shared.WritablePowerPortInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerPortsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    power_port: Optional[shared.PowerPort] = field(default=None)
    
