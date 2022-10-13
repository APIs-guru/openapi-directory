from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class FirewallRuleConfigActionEnum(str, Enum):
    ACCEPT = "ACCEPT"
    DROP = "DROP"


@dataclass_json
@dataclass
class FirewallRuleConfigAddresses:
    ipv4: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv4' }})
    ipv6: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv6' }})
    
class FirewallRuleConfigProtocolEnum(str, Enum):
    TCP = "TCP"
    UDP = "UDP"
    ICMP = "ICMP"


@dataclass_json
@dataclass
class FirewallRuleConfig:
    action: Optional[FirewallRuleConfigActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    addresses: Optional[FirewallRuleConfigAddresses] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addresses' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    ports: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ports' }})
    protocol: FirewallRuleConfigProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    
