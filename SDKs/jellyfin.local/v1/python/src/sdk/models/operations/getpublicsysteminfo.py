from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPublicSystemInfoResponse:
    content_type: str = field(default=None)
    public_system_info: Optional[shared.PublicSystemInfo] = field(default=None)
    status_code: int = field(default=None)
    
