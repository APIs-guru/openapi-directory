from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerPortsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerPortsReadRequest:
    path_params: DcimPowerPortsReadPathParams = field()
    

@dataclass
class DcimPowerPortsReadResponse:
    content_type: str = field()
    status_code: int = field()
    power_port: Optional[shared.PowerPort] = field(default=None)
    
