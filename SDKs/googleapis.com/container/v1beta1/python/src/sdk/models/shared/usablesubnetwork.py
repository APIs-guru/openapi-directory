from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UsableSubnetwork:
    r"""UsableSubnetwork
    UsableSubnetwork resource returns the subnetwork name, its associated network and the primary CIDR range.
    """
    
    ip_cidr_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipCidrRange') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    secondary_ip_ranges: Optional[List[UsableSubnetworkSecondaryRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryIpRanges') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetwork') }})
    
