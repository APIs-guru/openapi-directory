from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PongPingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    pong_ping_get_200_application_json_any: Optional[Any] = field(default=None)
    
