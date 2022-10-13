from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import nestedvrf


@dataclass_json
@dataclass
class AvailableIP:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    family: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'family' }})
    vrf: Optional[nestedvrf.NestedVrf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vrf' }})
    
