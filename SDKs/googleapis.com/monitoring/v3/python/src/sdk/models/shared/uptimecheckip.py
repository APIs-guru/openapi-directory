from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UptimeCheckIPRegionEnum(str, Enum):
    REGION_UNSPECIFIED = "REGION_UNSPECIFIED"
    USA = "USA"
    EUROPE = "EUROPE"
    SOUTH_AMERICA = "SOUTH_AMERICA"
    ASIA_PACIFIC = "ASIA_PACIFIC"


@dataclass_json
@dataclass
class UptimeCheckIP:
    r"""UptimeCheckIP
    Contains the region, location, and list of IP addresses where checkers in the location run from.
    """
    
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    region: Optional[UptimeCheckIPRegionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    
