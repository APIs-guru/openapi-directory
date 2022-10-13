from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class NiRoamingStatusEnum(str, Enum):
    ROAMING = "roaming"
    NOT_ROAMING = "not_roaming"


@dataclass_json
@dataclass
class NiRoaming:
    roaming_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roaming_country_code' }})
    roaming_network_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roaming_network_code' }})
    roaming_network_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roaming_network_name' }})
    status: Optional[NiRoamingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
