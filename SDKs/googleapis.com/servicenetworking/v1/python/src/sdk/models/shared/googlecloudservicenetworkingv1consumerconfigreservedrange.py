from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudServicenetworkingV1ConsumerConfigReservedRange:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    ip_prefix_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipPrefixLength' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
