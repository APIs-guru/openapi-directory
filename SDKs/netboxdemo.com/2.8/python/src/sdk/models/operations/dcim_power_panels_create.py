from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerPanelsCreateRequest:
    request: shared.WritablePowerPanel = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerPanelsCreateResponse:
    content_type: str = field(default=None)
    power_panel: Optional[shared.PowerPanel] = field(default=None)
    status_code: int = field(default=None)
    
