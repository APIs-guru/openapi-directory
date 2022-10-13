from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metaline


@dataclass_json
@dataclass
class ObjectDisplayOptions:
    metalines: Optional[List[metaline.Metaline]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metalines' }})
    object_display_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectDisplayLabel' }})
    
