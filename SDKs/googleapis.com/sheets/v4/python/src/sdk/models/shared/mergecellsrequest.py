from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import gridrange

class MergeCellsRequestMergeTypeEnum(str, Enum):
    MERGE_ALL = "MERGE_ALL"
    MERGE_COLUMNS = "MERGE_COLUMNS"
    MERGE_ROWS = "MERGE_ROWS"


@dataclass_json
@dataclass
class MergeCellsRequest:
    merge_type: Optional[MergeCellsRequestMergeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeType' }})
    range: Optional[gridrange.GridRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    
