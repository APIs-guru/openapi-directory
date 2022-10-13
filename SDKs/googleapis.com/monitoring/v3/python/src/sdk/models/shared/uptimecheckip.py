from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class UptimeCheckIPRegionEnum(str, Enum):
    REGION_UNSPECIFIED = "REGION_UNSPECIFIED"
    USA = "USA"
    EUROPE = "EUROPE"
    SOUTH_AMERICA = "SOUTH_AMERICA"
    ASIA_PACIFIC = "ASIA_PACIFIC"


@dataclass_json
@dataclass
class UptimeCheckIP:
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddress' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    region: Optional[UptimeCheckIPRegionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    
