from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import filteraction
from . import filtercriteria


@dataclass_json
@dataclass
class Filter:
    action: Optional[filteraction.FilterAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    criteria: Optional[filtercriteria.FilterCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'criteria' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
