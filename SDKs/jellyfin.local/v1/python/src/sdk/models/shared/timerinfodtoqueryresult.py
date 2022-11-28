from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TimerInfoDtoQueryResult:
    items: Optional[List[TimerInfoDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartIndex') }})
    total_record_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalRecordCount') }})
    
