from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class IPMappingTypeEnum(str, Enum):
    SQL_IP_ADDRESS_TYPE_UNSPECIFIED = "SQL_IP_ADDRESS_TYPE_UNSPECIFIED"
    PRIMARY = "PRIMARY"
    OUTGOING = "OUTGOING"
    PRIVATE = "PRIVATE"
    MIGRATED_1_ST_GEN = "MIGRATED_1ST_GEN"


@dataclass_json
@dataclass
class IPMapping:
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddress' }})
    time_to_retire: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeToRetire' }})
    type: Optional[IPMappingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
