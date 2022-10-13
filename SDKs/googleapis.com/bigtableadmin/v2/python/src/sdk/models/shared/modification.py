from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import columnfamily
from . import columnfamily


@dataclass_json
@dataclass
class Modification:
    create: Optional[columnfamily.ColumnFamily] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'create' }})
    drop: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drop' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    update: Optional[columnfamily.ColumnFamily] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update' }})
    
