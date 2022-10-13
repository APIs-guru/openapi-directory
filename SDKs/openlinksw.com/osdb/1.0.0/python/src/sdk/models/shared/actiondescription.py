from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import entrypoint


@dataclass_json
@dataclass
class ActionDescription:
    action_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action_id' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    entry_point: entrypoint.EntryPoint = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry_point' }})
    
