from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerPanelsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerPanelsReadRequest:
    path_params: DcimPowerPanelsReadPathParams = field(default=None)
    

@dataclass
class DcimPowerPanelsReadResponse:
    content_type: str = field(default=None)
    power_panel: Optional[shared.PowerPanel] = field(default=None)
    status_code: int = field(default=None)
    
