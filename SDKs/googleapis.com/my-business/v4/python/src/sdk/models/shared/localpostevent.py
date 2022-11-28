from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LocalPostEvent:
    r"""LocalPostEvent
    All the information pertaining to an event featured in a local post.
    """
    
    schedule: Optional[TimeInterval] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
