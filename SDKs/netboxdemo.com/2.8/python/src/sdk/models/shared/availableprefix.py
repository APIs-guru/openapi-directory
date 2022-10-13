from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import nestedvrf


@dataclass_json
@dataclass
class AvailablePrefix:
    family: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'family' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    vrf: Optional[nestedvrf.NestedVrf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vrf' }})
    
