from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerPortsCreateRequest:
    request: shared.WritablePowerPortInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerPortsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    power_port: Optional[shared.PowerPort] = field(default=None)
    
