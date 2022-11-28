from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnimationStatic:
    r"""AnimationStatic
    Display static overlay object.
    """
    
    start_time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeOffset') }})
    xy: Optional[NormalizedCoordinate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xy') }})
    
