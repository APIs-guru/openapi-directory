from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerOutletTemplatesCreateRequest:
    request: shared.WritablePowerOutletTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerOutletTemplatesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    power_outlet_template: Optional[shared.PowerOutletTemplate] = field(default=None)
    
