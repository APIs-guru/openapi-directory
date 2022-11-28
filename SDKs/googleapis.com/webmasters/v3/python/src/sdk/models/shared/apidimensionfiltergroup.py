from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class APIDimensionFilterGroup:
    filters: Optional[List[APIDimensionFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    group_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupType') }})
    
