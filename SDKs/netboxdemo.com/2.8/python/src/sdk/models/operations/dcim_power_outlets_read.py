from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerOutletsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerOutletsReadRequest:
    path_params: DcimPowerOutletsReadPathParams = field(default=None)
    

@dataclass
class DcimPowerOutletsReadResponse:
    content_type: str = field(default=None)
    power_outlet: Optional[shared.PowerOutlet] = field(default=None)
    status_code: int = field(default=None)
    
