from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InitiateResponse:
    content_type: str = field(default=None)
    quick_connect_result: Optional[shared.QuickConnectResult] = field(default=None)
    status_code: int = field(default=None)
    
