from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PerformanceThreshold:
    r"""PerformanceThreshold
    A PerformanceThreshold is used when each window is good when that window has a sufficiently high performance.
    """
    
    basic_sli_performance: Optional[BasicSli] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicSliPerformance') }})
    performance: Optional[RequestBasedSli] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performance') }})
    threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    
