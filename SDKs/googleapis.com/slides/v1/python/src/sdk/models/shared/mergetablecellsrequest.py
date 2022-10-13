from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tablerange


@dataclass_json
@dataclass
class MergeTableCellsRequest:
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    table_range: Optional[tablerange.TableRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableRange' }})
    
