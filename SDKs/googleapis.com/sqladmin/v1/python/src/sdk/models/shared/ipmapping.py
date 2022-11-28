from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class IPMappingTypeEnum(str, Enum):
    SQL_IP_ADDRESS_TYPE_UNSPECIFIED = "SQL_IP_ADDRESS_TYPE_UNSPECIFIED"
    PRIMARY = "PRIMARY"
    OUTGOING = "OUTGOING"
    PRIVATE = "PRIVATE"
    MIGRATED_1_ST_GEN = "MIGRATED_1ST_GEN"


@dataclass_json
@dataclass
class IPMapping:
    r"""IPMapping
    Database instance IP Mapping.
    """
    
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    time_to_retire: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeToRetire') }})
    type: Optional[IPMappingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
