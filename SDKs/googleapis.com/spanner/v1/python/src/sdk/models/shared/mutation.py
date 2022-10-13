from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import delete
from . import write
from . import write
from . import write
from . import write


@dataclass_json
@dataclass
class Mutation:
    delete: Optional[delete.Delete] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    insert: Optional[write.Write] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insert' }})
    insert_or_update: Optional[write.Write] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertOrUpdate' }})
    replace: Optional[write.Write] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replace' }})
    update: Optional[write.Write] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update' }})
    
