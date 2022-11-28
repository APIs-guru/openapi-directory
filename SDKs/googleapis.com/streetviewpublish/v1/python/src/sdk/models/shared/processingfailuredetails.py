from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProcessingFailureDetails:
    r"""ProcessingFailureDetails
    Additional details to accompany the ProcessingFailureReason enum. This message is always expected to be used in conjunction with ProcessingFailureReason, and the oneof value set in this message should match the FailureReason.
    """
    
    gps_data_gap_details: Optional[GpsDataGapFailureDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gpsDataGapDetails') }})
    imu_data_gap_details: Optional[ImuDataGapFailureDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imuDataGapDetails') }})
    insufficient_gps_details: Optional[InsufficientGpsFailureDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insufficientGpsDetails') }})
    not_outdoors_details: Optional[NotOutdoorsFailureDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notOutdoorsDetails') }})
    
