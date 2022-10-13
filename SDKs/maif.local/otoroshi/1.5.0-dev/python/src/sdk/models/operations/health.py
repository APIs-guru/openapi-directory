from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class HealthResponse:
    content_type: str = field(default=None)
    otoroshi_health: Optional[shared.OtoroshiHealth] = field(default=None)
    status_code: int = field(default=None)
    
