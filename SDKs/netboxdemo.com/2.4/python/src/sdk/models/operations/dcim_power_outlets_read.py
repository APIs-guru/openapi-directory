from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerOutletsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerOutletsReadRequest:
    path_params: DcimPowerOutletsReadPathParams = field()
    

@dataclass
class DcimPowerOutletsReadResponse:
    content_type: str = field()
    status_code: int = field()
    power_outlet: Optional[shared.PowerOutlet] = field(default=None)
    
