from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamServicesCreateRequest:
    request: shared.WritableService = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamServicesCreateResponse:
    content_type: str = field(default=None)
    service: Optional[shared.Service] = field(default=None)
    status_code: int = field(default=None)
    
