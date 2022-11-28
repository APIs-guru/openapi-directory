from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DailyQualityResponse:
    qualities: Optional[List[Qualities]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Qualities') }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_count') }})
    
