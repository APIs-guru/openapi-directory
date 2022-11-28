from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerPanelsCreateRequest:
    request: shared.WritablePowerPanelInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerPanelsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    power_panel: Optional[shared.PowerPanel] = field(default=None)
    
