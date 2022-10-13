from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class APIHealthReadResponse:
    content_type: str = field(default=None)
    health_response: Optional[shared.HealthResponse] = field(default=None)
    status_code: int = field(default=None)
    
