from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerOutletsUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerOutletsUpdateRequest:
    path_params: DcimPowerOutletsUpdatePathParams = field(default=None)
    request: shared.WritablePowerOutlet = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerOutletsUpdateResponse:
    content_type: str = field(default=None)
    power_outlet: Optional[shared.PowerOutlet] = field(default=None)
    status_code: int = field(default=None)
    
