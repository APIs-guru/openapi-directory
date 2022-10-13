from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerPortTemplatesCreateRequest:
    request: shared.WritablePowerPortTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerPortTemplatesCreateResponse:
    content_type: str = field(default=None)
    power_port_template: Optional[shared.PowerPortTemplate] = field(default=None)
    status_code: int = field(default=None)
    
