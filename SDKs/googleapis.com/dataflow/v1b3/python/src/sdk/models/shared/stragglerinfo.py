from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StragglerInfo:
    r"""StragglerInfo
    Information useful for straggler identification and debugging.
    """
    
    causes: Optional[dict[str, StragglerDebuggingInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('causes') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
