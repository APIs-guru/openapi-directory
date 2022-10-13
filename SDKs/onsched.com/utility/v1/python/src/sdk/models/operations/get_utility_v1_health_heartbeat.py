from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetUtilityV1HealthHeartbeatResponse:
    content_type: str = field(default=None)
    get_utility_v1_health_heartbeat_200_application_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
