from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestTiming:
    r"""TestTiming
    Testing timing break down to know phases.
    """
    
    test_process_duration: Optional[Duration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testProcessDuration') }})
    
