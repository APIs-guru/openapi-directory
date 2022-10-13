from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GlueRecord:
    host_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostName' }})
    ipv4_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv4Addresses' }})
    ipv6_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv6Addresses' }})
    
