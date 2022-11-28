from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MergeCellsRequestMergeTypeEnum(str, Enum):
    MERGE_ALL = "MERGE_ALL"
    MERGE_COLUMNS = "MERGE_COLUMNS"
    MERGE_ROWS = "MERGE_ROWS"


@dataclass_json
@dataclass
class MergeCellsRequest:
    r"""MergeCellsRequest
    Merges all cells in the range.
    """
    
    merge_type: Optional[MergeCellsRequestMergeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeType') }})
    range: Optional[GridRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
