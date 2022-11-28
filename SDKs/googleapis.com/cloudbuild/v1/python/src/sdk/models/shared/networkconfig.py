from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NetworkConfigEgressOptionEnum(str, Enum):
    EGRESS_OPTION_UNSPECIFIED = "EGRESS_OPTION_UNSPECIFIED"
    NO_PUBLIC_EGRESS = "NO_PUBLIC_EGRESS"
    PUBLIC_EGRESS = "PUBLIC_EGRESS"


@dataclass_json
@dataclass
class NetworkConfig:
    r"""NetworkConfig
    Defines the network configuration for the pool.
    """
    
    egress_option: Optional[NetworkConfigEgressOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('egressOption') }})
    peered_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peeredNetwork') }})
    
