from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class UsableSubnetworkSecondaryRangeStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    UNUSED = "UNUSED"
    IN_USE_SERVICE = "IN_USE_SERVICE"
    IN_USE_SHAREABLE_POD = "IN_USE_SHAREABLE_POD"
    IN_USE_MANAGED_POD = "IN_USE_MANAGED_POD"


@dataclass_json
@dataclass
class UsableSubnetworkSecondaryRange:
    ip_cidr_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipCidrRange' }})
    range_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rangeName' }})
    status: Optional[UsableSubnetworkSecondaryRangeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
