from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EstimationTimePoint:
    r"""EstimationTimePoint
    Represents a point in time.
    """
    
    estimation_time_frame_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimationTimeFrameOffset') }})
    
