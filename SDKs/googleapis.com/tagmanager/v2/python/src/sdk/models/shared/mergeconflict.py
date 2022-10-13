from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import entity
from . import entity


@dataclass_json
@dataclass
class MergeConflict:
    entity_in_base_version: Optional[entity.Entity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityInBaseVersion' }})
    entity_in_workspace: Optional[entity.Entity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityInWorkspace' }})
    
