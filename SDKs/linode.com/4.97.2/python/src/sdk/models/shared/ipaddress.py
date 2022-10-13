from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class IPAddressTypeEnum(str, Enum):
    IPV4 = "ipv4"
    IPV6 = "ipv6"
    IPV6_POOL = "ipv6/pool"
    IPV6_RANGE = "ipv6/range"


@dataclass_json
@dataclass
class IPAddress:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    gateway: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateway' }})
    linode_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linode_id' }})
    prefix: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    rdns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rdns' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    subnet_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnet_mask' }})
    type: Optional[IPAddressTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
