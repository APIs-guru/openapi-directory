from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV05HeartbeatResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    heartbeat_response: Optional[shared.HeartbeatResponse] = field(default=None)
    status_code: int = field(default=None)
    
