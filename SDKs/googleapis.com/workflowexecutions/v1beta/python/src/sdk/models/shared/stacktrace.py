from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StackTrace:
    r"""StackTrace
    A collection of stack elements (frames) where an error occurred.
    """
    
    elements: Optional[List[StackTraceElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elements') }})
    
