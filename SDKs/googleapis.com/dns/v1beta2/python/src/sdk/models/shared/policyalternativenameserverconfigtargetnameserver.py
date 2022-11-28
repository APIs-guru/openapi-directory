from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum(str, Enum):
    DEFAULT = "default"
    PRIVATE = "private"


@dataclass_json
@dataclass
class PolicyAlternativeNameServerConfigTargetNameServer:
    forwarding_path: Optional[PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwardingPath') }})
    ipv4_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4Address') }})
    ipv6_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6Address') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
