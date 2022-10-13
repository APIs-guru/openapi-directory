from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DuplicateSheetRequest:
    insert_sheet_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertSheetIndex' }})
    new_sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newSheetId' }})
    new_sheet_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newSheetName' }})
    source_sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceSheetId' }})
    
