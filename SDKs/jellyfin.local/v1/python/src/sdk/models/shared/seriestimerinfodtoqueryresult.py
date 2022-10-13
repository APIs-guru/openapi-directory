from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import seriestimerinfodto


@dataclass_json
@dataclass
class SeriesTimerInfoDtoQueryResult:
    items: Optional[List[seriestimerinfodto.SeriesTimerInfoDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartIndex' }})
    total_record_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalRecordCount' }})
    
