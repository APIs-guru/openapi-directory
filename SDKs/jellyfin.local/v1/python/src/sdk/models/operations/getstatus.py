from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetStatusResponse:
    content_type: str = field(default=None)
    quick_connect_state: Optional[shared.QuickConnectStateEnum] = field(default=None)
    status_code: int = field(default=None)
    
