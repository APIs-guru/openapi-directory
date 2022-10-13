from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import entity


@dataclass_json
@dataclass
class EntityResult:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    entity: Optional[entity.Entity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
