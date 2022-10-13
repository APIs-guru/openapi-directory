from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import info


@dataclass_json
@dataclass
class UpdateFormInfoRequest:
    info: Optional[info.Info] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
