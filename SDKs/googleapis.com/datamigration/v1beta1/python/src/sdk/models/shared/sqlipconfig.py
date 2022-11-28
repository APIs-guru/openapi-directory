from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SQLIPConfig:
    r"""SQLIPConfig
    IP Management configuration.
    """
    
    authorized_networks: Optional[List[SQLACLEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedNetworks') }})
    enable_ipv4: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableIpv4') }})
    private_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateNetwork') }})
    require_ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireSsl') }})
    
