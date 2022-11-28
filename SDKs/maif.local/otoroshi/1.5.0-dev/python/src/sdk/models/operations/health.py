from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class HealthResponse:
    content_type: str = field()
    status_code: int = field()
    otoroshi_health: Optional[shared.OtoroshiHealth] = field(default=None)
    
