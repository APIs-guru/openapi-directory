from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class APIUsageHistoryOut:
    detailed_usage: Optional[List[APICounterV2Out]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailedUsage') }})
    
