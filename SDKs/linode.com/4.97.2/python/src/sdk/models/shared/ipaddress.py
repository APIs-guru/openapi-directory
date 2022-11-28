from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class IPAddressTypeEnum(str, Enum):
    IPV4 = "ipv4"
    IPV6 = "ipv6"
    IPV6_POOL = "ipv6/pool"
    IPV6_RANGE = "ipv6/range"


@dataclass_json
@dataclass
class IPAddress:
    r"""IPAddress
    An IP address that exists in Linode's system, either IPv4 or IPv6.
    
    """
    
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    gateway: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    linode_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linode_id') }})
    prefix: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    rdns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rdns') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    subnet_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet_mask') }})
    type: Optional[IPAddressTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class IPAddressInput:
    r"""IPAddressInput
    An IP address that exists in Linode's system, either IPv4 or IPv6.
    
    """
    
    rdns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rdns') }})
    
