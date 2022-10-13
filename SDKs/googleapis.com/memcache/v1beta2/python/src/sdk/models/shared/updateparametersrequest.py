from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import memcacheparameters


@dataclass_json
@dataclass
class UpdateParametersRequest:
    parameters: Optional[memcacheparameters.MemcacheParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
