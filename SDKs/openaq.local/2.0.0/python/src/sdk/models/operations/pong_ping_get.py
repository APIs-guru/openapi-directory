from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PongPingGetResponse:
    content_type: str = field()
    status_code: int = field()
    pong_ping_get_200_application_json_any: Optional[Any] = field(default=None)
    
