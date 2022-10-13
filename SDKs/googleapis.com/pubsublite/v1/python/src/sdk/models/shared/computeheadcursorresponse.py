from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cursor


@dataclass_json
@dataclass
class ComputeHeadCursorResponse:
    head_cursor: Optional[cursor.Cursor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headCursor' }})
    
