from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProgressTimeseries:
    r"""ProgressTimeseries
    Information about the progress of some component of job execution.
    """
    
    current_progress: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentProgress') }})
    data_points: Optional[List[Point]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataPoints') }})
    
