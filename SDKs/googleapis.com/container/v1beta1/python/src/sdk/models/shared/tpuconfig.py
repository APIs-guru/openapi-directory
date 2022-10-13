from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TpuConfig:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv4CidrBlock' }})
    use_service_networking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useServiceNetworking' }})
    
