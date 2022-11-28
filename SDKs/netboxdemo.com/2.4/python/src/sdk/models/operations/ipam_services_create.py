from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamServicesCreateRequest:
    request: shared.WritableServiceInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamServicesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    service: Optional[shared.Service] = field(default=None)
    
