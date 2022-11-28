from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


GET_V0_5_HEARTBEAT_SERVERS = [
	"https://your-hrp-server.com",
]


@dataclass
class GetV05HeartbeatRequest:
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetV05HeartbeatResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    heartbeat_response: Optional[shared.HeartbeatResponse] = field(default=None)
    
