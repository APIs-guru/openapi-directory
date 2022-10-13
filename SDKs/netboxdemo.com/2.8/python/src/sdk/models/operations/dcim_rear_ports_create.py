from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRearPortsCreateRequest:
    request: shared.WritableRearPort = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRearPortsCreateResponse:
    content_type: str = field(default=None)
    rear_port: Optional[shared.RearPort] = field(default=None)
    status_code: int = field(default=None)
    
