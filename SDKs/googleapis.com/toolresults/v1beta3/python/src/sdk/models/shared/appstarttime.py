from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AppStartTime:
    fully_drawn_time: Optional[Duration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullyDrawnTime') }})
    initial_display_time: Optional[Duration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialDisplayTime') }})
    
