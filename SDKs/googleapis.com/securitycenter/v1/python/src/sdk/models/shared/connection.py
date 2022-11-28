from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""Connection
    Contains information about the IP connection associated with the finding.
    """
    
    destination_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationIp') }})
    destination_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationPort') }})
    protocol: Optional[ConnectionProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    source_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceIp') }})
    source_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourcePort') }})
    
