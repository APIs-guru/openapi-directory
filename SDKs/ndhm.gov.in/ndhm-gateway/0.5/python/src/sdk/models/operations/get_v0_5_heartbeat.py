from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV05HeartbeatResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    heartbeat_response: Optional[shared.HeartbeatResponse] = field(default=None)
    
