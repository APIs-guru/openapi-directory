from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimeWindowBreak:
    duration: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    earliest: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('earliest') }})
    latest: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest') }})
    
