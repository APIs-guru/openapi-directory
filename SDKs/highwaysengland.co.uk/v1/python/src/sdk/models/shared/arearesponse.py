from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AreaResponse:
    areas: Optional[List[Area]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('areas') }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_count') }})
    
