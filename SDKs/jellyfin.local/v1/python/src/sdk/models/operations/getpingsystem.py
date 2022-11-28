from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPingSystemResponse:
    content_type: str = field()
    status_code: int = field()
    get_ping_system_200_application_json_string: Optional[str] = field(default=None)
    
