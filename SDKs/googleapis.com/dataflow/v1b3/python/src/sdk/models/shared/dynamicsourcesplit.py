from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DynamicSourceSplit:
    r"""DynamicSourceSplit
    When a task splits using WorkItemStatus.dynamic_source_split, this message describes the two parts of the split relative to the description of the current task's input.
    """
    
    primary: Optional[DerivedSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    residual: Optional[DerivedSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('residual') }})
    
