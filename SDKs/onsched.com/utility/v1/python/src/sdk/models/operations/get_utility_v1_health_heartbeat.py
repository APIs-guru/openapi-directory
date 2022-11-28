from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetUtilityV1HealthHeartbeatResponse:
    content_type: str = field()
    status_code: int = field()
    get_utility_v1_health_heartbeat_200_application_json_string: Optional[str] = field(default=None)
    
