from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerOutletsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerOutletsPartialUpdateRequest:
    path_params: DcimPowerOutletsPartialUpdatePathParams = field(default=None)
    request: shared.WritablePowerOutlet = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerOutletsPartialUpdateResponse:
    content_type: str = field(default=None)
    power_outlet: Optional[shared.PowerOutlet] = field(default=None)
    status_code: int = field(default=None)
    
