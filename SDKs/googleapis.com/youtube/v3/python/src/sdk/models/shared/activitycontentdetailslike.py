from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourceid


@dataclass_json
@dataclass
class ActivityContentDetailsLike:
    resource_id: Optional[resourceid.ResourceID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    
