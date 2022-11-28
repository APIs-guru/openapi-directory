from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Progress:
    r"""Progress
    Estimated fractional progress for each step, from `0` to `1`.
    """
    
    analyzed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyzed') }})
    encoded: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoded') }})
    notified: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notified') }})
    uploaded: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploaded') }})
    
