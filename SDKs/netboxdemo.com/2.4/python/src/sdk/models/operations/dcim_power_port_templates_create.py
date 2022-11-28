from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerPortTemplatesCreateRequest:
    request: shared.WritablePowerPortTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerPortTemplatesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    power_port_template: Optional[shared.PowerPortTemplate] = field(default=None)
    
