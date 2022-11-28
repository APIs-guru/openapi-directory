from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InitiateResponse:
    content_type: str = field()
    status_code: int = field()
    quick_connect_result: Optional[shared.QuickConnectResult] = field(default=None)
    
