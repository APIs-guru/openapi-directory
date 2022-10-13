from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerOutletTemplatesCreateRequest:
    request: shared.WritablePowerOutletTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerOutletTemplatesCreateResponse:
    content_type: str = field(default=None)
    power_outlet_template: Optional[shared.PowerOutletTemplate] = field(default=None)
    status_code: int = field(default=None)
    
