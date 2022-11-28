from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PhotoSequenceGpsSourceEnum(str, Enum):
    PHOTO_SEQUENCE = "PHOTO_SEQUENCE"
    CAMERA_MOTION_METADATA_TRACK = "CAMERA_MOTION_METADATA_TRACK"


@dataclass_json
@dataclass
class PhotoSequenceInput:
    r"""PhotoSequenceInput
    A sequence of 360 photos along with metadata.
    """
    
    capture_time_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('captureTimeOverride') }})
    failure_details: Optional[ProcessingFailureDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureDetails') }})
    gps_source: Optional[PhotoSequenceGpsSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gpsSource') }})
    imu: Optional[Imu] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imu') }})
    raw_gps_timeline: Optional[List[Pose]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawGpsTimeline') }})
    sequence_bounds: Optional[LatLngBounds] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequenceBounds') }})
    upload_reference: Optional[UploadRef] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadReference') }})
    
