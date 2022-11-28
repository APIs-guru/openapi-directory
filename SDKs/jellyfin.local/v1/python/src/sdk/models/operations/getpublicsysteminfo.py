from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPublicSystemInfoResponse:
    content_type: str = field()
    status_code: int = field()
    public_system_info: Optional[shared.PublicSystemInfo] = field(default=None)
    
