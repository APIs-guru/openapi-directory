from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UsableSubnetworkSecondaryRangeStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    UNUSED = "UNUSED"
    IN_USE_SERVICE = "IN_USE_SERVICE"
    IN_USE_SHAREABLE_POD = "IN_USE_SHAREABLE_POD"
    IN_USE_MANAGED_POD = "IN_USE_MANAGED_POD"


@dataclass_json
@dataclass
class UsableSubnetworkSecondaryRange:
    r"""UsableSubnetworkSecondaryRange
    Secondary IP range of a usable subnetwork.
    """
    
    ip_cidr_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipCidrRange') }})
    range_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rangeName') }})
    status: Optional[UsableSubnetworkSecondaryRangeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
