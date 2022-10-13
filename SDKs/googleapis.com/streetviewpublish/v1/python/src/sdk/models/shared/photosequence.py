from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import processingfailuredetails
from . import imu
from . import photo
from . import pose
from . import latlngbounds
from . import uploadref

class PhotoSequenceFailureReasonEnum(str, Enum):
    PROCESSING_FAILURE_REASON_UNSPECIFIED = "PROCESSING_FAILURE_REASON_UNSPECIFIED"
    LOW_RESOLUTION = "LOW_RESOLUTION"
    DUPLICATE = "DUPLICATE"
    INSUFFICIENT_GPS = "INSUFFICIENT_GPS"
    NO_OVERLAP_GPS = "NO_OVERLAP_GPS"
    INVALID_GPS = "INVALID_GPS"
    FAILED_TO_REFINE_POSITIONS = "FAILED_TO_REFINE_POSITIONS"
    TAKEDOWN = "TAKEDOWN"
    CORRUPT_VIDEO = "CORRUPT_VIDEO"
    INTERNAL = "INTERNAL"
    INVALID_VIDEO_FORMAT = "INVALID_VIDEO_FORMAT"
    INVALID_VIDEO_DIMENSIONS = "INVALID_VIDEO_DIMENSIONS"
    INVALID_CAPTURE_TIME = "INVALID_CAPTURE_TIME"
    GPS_DATA_GAP = "GPS_DATA_GAP"
    JUMPY_GPS = "JUMPY_GPS"
    INVALID_IMU = "INVALID_IMU"
    INSUFFICIENT_IMU = "INSUFFICIENT_IMU"
    INSUFFICIENT_OVERLAP_TIME_SERIES = "INSUFFICIENT_OVERLAP_TIME_SERIES"
    IMU_DATA_GAP = "IMU_DATA_GAP"
    UNSUPPORTED_CAMERA = "UNSUPPORTED_CAMERA"
    NOT_OUTDOORS = "NOT_OUTDOORS"
    INSUFFICIENT_VIDEO_FRAMES = "INSUFFICIENT_VIDEO_FRAMES"
    INSUFFICIENT_MOVEMENT = "INSUFFICIENT_MOVEMENT"

class PhotoSequenceGpsSourceEnum(str, Enum):
    PHOTO_SEQUENCE = "PHOTO_SEQUENCE"
    CAMERA_MOTION_METADATA_TRACK = "CAMERA_MOTION_METADATA_TRACK"

class PhotoSequenceProcessingStateEnum(str, Enum):
    PROCESSING_STATE_UNSPECIFIED = "PROCESSING_STATE_UNSPECIFIED"
    PENDING = "PENDING"
    PROCESSING = "PROCESSING"
    PROCESSED = "PROCESSED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class PhotoSequence:
    capture_time_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'captureTimeOverride' }})
    distance_meters: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distanceMeters' }})
    failure_details: Optional[processingfailuredetails.ProcessingFailureDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureDetails' }})
    failure_reason: Optional[PhotoSequenceFailureReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    gps_source: Optional[PhotoSequenceGpsSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gpsSource' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    imu: Optional[imu.Imu] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imu' }})
    photos: Optional[List[photo.Photo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photos' }})
    processing_state: Optional[PhotoSequenceProcessingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processingState' }})
    raw_gps_timeline: Optional[List[pose.Pose]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawGpsTimeline' }})
    sequence_bounds: Optional[latlngbounds.LatLngBounds] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequenceBounds' }})
    upload_reference: Optional[uploadref.UploadRef] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadReference' }})
    upload_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadTime' }})
    view_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewCount' }})
    
