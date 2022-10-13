from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import lodging


@dataclass_json
@dataclass
class GetGoogleUpdatedLodgingResponse:
    diff_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diffMask' }})
    lodging: Optional[lodging.Lodging] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lodging' }})
    
