from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import menuvalue


@dataclass_json
@dataclass
class MenuItem:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    contextual_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contextual_command' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    remove_when_selected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removeWhenSelected' }})
    values: Optional[List[menuvalue.MenuValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
