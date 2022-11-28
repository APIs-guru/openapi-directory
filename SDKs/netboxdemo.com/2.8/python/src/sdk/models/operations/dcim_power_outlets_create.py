from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerOutletsCreateRequest:
    request: shared.WritablePowerOutletInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerOutletsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    power_outlet: Optional[shared.PowerOutlet] = field(default=None)
    
