from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IPConfiguration:
    r"""IPConfiguration
    IP Management configuration.
    """
    
    allocated_ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocatedIpRange') }})
    authorized_networks: Optional[List[ACLEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedNetworks') }})
    ipv4_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4Enabled') }})
    private_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateNetwork') }})
    require_ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireSsl') }})
    
