from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NetworkConfig:
    ip_allocation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAllocation' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    
