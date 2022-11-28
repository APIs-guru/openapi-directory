from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Subnetwork:
    r"""Subnetwork
    Represents a subnet that was created or discovered by a private access management service.
    """
    
    ip_cidr_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipCidrRange') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    outside_allocation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outsideAllocation') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    secondary_ip_ranges: Optional[List[SecondaryIPRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryIpRanges') }})
    
