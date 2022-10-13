from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import release


@dataclass_json
@dataclass
class UpdateReleaseRequest:
    release: Optional[release.Release] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'release' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
