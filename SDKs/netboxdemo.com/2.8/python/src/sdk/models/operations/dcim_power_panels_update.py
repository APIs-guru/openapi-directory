from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerPanelsUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerPanelsUpdateRequest:
    path_params: DcimPowerPanelsUpdatePathParams = field(default=None)
    request: shared.WritablePowerPanel = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerPanelsUpdateResponse:
    content_type: str = field(default=None)
    power_panel: Optional[shared.PowerPanel] = field(default=None)
    status_code: int = field(default=None)
    
