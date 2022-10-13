from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum(str, Enum):
    DEFAULT = "default"
    PRIVATE = "private"


@dataclass_json
@dataclass
class PolicyAlternativeNameServerConfigTargetNameServer:
    forwarding_path: Optional[PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forwardingPath' }})
    ipv4_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv4Address' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
