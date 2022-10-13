from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerOutletsTracePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerOutletsTraceRequest:
    path_params: DcimPowerOutletsTracePathParams = field(default=None)
    

@dataclass
class DcimPowerOutletsTraceResponse:
    content_type: str = field(default=None)
    power_outlet: Optional[shared.PowerOutlet] = field(default=None)
    status_code: int = field(default=None)
    
