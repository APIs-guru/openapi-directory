from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ConnectionProtocolEnum(str, Enum):
    PROTOCOL_UNSPECIFIED = "PROTOCOL_UNSPECIFIED"
    ICMP = "ICMP"
    TCP = "TCP"
    UDP = "UDP"
    GRE = "GRE"
    ESP = "ESP"


@dataclass_json
@dataclass
class Connection:
    destination_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationIp' }})
    destination_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationPort' }})
    protocol: Optional[ConnectionProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    source_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceIp' }})
    source_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourcePort' }})
    
