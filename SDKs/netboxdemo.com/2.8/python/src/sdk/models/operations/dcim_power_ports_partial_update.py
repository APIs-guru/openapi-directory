from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerPortsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerPortsPartialUpdateRequest:
    path_params: DcimPowerPortsPartialUpdatePathParams = field(default=None)
    request: shared.WritablePowerPort = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerPortsPartialUpdateResponse:
    content_type: str = field(default=None)
    power_port: Optional[shared.PowerPort] = field(default=None)
    status_code: int = field(default=None)
    
