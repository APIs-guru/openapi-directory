from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class NetworkConfigEgressOptionEnum(str, Enum):
    EGRESS_OPTION_UNSPECIFIED = "EGRESS_OPTION_UNSPECIFIED"
    NO_PUBLIC_EGRESS = "NO_PUBLIC_EGRESS"
    PUBLIC_EGRESS = "PUBLIC_EGRESS"


@dataclass_json
@dataclass
class NetworkConfig:
    egress_option: Optional[NetworkConfigEgressOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'egressOption' }})
    peered_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peeredNetwork' }})
    
