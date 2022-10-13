from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerPortsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerPortsReadRequest:
    path_params: DcimPowerPortsReadPathParams = field(default=None)
    

@dataclass
class DcimPowerPortsReadResponse:
    content_type: str = field(default=None)
    power_port: Optional[shared.PowerPort] = field(default=None)
    status_code: int = field(default=None)
    
