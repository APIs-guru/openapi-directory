from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetHealthResponse:
    content_type: str = field()
    status_code: int = field()
    api_health_status: Optional[shared.APIHealthStatus] = field(default=None)
    
