from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NetworkConfig:
    r"""NetworkConfig
    Network related configurations.
    """
    
    can_ip_forward: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canIpForward') }})
    enable_external_ips: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableExternalIps') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetwork') }})
    
