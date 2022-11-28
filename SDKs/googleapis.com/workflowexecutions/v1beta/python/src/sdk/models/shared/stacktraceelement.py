from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StackTraceElement:
    r"""StackTraceElement
    A single stack element (frame) where an error occurred.
    """
    
    position: Optional[Position] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    routine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routine') }})
    step: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('step') }})
    
