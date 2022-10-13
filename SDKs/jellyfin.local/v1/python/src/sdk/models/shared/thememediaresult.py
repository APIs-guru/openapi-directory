from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import baseitemdto


@dataclass_json
@dataclass
class ThemeMediaResult:
    items: Optional[List[baseitemdto.BaseItemDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerId' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartIndex' }})
    total_record_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalRecordCount' }})
    
