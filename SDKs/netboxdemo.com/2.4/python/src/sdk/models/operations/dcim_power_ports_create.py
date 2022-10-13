from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerPortsCreateRequest:
    request: shared.WritablePowerPort = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerPortsCreateResponse:
    content_type: str = field(default=None)
    power_port: Optional[shared.PowerPort] = field(default=None)
    status_code: int = field(default=None)
    
