from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import timerinfodto


@dataclass_json
@dataclass
class TimerInfoDtoQueryResult:
    items: Optional[List[timerinfodto.TimerInfoDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartIndex' }})
    total_record_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalRecordCount' }})
    
