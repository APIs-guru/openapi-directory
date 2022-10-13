from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import entityout


@dataclass_json
@dataclass
class EntitiesOut:
    entities: List[entityout.EntityOut] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    
