from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerPortsUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerPortsUpdateRequest:
    path_params: DcimPowerPortsUpdatePathParams = field(default=None)
    request: shared.WritablePowerPort = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerPortsUpdateResponse:
    content_type: str = field(default=None)
    power_port: Optional[shared.PowerPort] = field(default=None)
    status_code: int = field(default=None)
    
