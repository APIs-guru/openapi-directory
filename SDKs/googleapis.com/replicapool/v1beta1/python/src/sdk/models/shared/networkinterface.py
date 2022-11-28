from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NetworkInterface:
    r"""NetworkInterface
    A Compute Engine NetworkInterface resource. Identical to the NetworkInterface on the corresponding Compute Engine resource.
    """
    
    access_configs: Optional[List[AccessConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessConfigs') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    network_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkIp') }})
    
