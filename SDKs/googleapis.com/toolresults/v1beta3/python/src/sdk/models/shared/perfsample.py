from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PerfSample:
    r"""PerfSample
    Resource representing a single performance measure or data point
    """
    
    sample_time: Optional[Timestamp] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleTime') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
