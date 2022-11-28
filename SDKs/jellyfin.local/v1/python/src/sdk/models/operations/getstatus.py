from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetStatusResponse:
    content_type: str = field()
    status_code: int = field()
    quick_connect_state: Optional[shared.QuickConnectStateEnum] = field(default=None)
    
