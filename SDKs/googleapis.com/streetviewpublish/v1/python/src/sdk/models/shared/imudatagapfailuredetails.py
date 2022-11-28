from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImuDataGapFailureDetails:
    r"""ImuDataGapFailureDetails
    Details related to ProcessingFailureReason#IMU_DATA_GAP. If there are multiple IMU data gaps, only the one with the largest duration is reported here.
    """
    
    gap_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gapDuration') }})
    gap_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gapStartTime') }})
    
