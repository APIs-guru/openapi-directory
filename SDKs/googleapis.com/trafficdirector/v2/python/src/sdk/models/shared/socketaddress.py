from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SocketAddressProtocolEnum(str, Enum):
    TCP = "TCP"
    UDP = "UDP"


@dataclass_json
@dataclass
class SocketAddress:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    ipv4_compat: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv4Compat' }})
    named_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namedPort' }})
    port_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portValue' }})
    protocol: Optional[SocketAddressProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    resolver_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolverName' }})
    
