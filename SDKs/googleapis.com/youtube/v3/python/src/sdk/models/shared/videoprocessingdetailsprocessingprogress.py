from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VideoProcessingDetailsProcessingProgress:
    r"""VideoProcessingDetailsProcessingProgress
    Video processing progress and completion time estimate.
    """
    
    parts_processed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partsProcessed') }})
    parts_total: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partsTotal') }})
    time_left_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeLeftMs') }})
    
