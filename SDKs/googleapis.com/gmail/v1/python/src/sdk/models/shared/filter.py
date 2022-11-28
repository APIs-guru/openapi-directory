from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Filter:
    r"""Filter
    Resource definition for Gmail filters. Filters apply to specific messages instead of an entire email thread.
    """
    
    action: Optional[FilterAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    criteria: Optional[FilterCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criteria') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
