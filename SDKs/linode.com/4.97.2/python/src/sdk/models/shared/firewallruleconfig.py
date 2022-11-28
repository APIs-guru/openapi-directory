from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FirewallRuleConfigActionEnum(str, Enum):
    ACCEPT = "ACCEPT"
    DROP = "DROP"


@dataclass_json
@dataclass
class FirewallRuleConfigAddresses:
    r"""FirewallRuleConfigAddresses
    Allowed IPv4 or IPv6 addresses. A Rule can have up to 255 addresses or networks listed across its IPv4 and IPv6 arrays. A network and a single IP are treated as equivalent when accounting for this limit.
    
    """
    
    ipv4: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4') }})
    ipv6: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6') }})
    
class FirewallRuleConfigProtocolEnum(str, Enum):
    TCP = "TCP"
    UDP = "UDP"
    ICMP = "ICMP"


@dataclass_json
@dataclass
class FirewallRuleConfig:
    r"""FirewallRuleConfig
    One of a Firewall's inbound or outbound access rules. The `ports` property can be used to allow traffic on a comma-separated list of different ports.
    
    """
    
    protocol: FirewallRuleConfigProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    action: Optional[FirewallRuleConfigActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    addresses: Optional[FirewallRuleConfigAddresses] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    ports: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    
