from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRearPortsCreateRequest:
    request: shared.WritableRearPortInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRearPortsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    rear_port: Optional[shared.RearPort] = field(default=None)
    
