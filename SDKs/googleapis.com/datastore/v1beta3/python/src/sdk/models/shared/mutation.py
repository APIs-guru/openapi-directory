from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import key
from . import entity
from . import entity
from . import entity


@dataclass_json
@dataclass
class Mutation:
    base_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseVersion' }})
    delete: Optional[key.Key] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    insert: Optional[entity.Entity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insert' }})
    update: Optional[entity.Entity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    upsert: Optional[entity.Entity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upsert' }})
    
