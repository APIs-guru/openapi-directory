from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimeWindow:
    earliest: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('earliest') }})
    latest: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest') }})
    
