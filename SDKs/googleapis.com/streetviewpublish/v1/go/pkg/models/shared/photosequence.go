package shared




type PhotoSequenceFailureReasonEnum string

const (
    PhotoSequenceFailureReasonEnumProcessingFailureReasonUnspecified PhotoSequenceFailureReasonEnum = "PROCESSING_FAILURE_REASON_UNSPECIFIED"
PhotoSequenceFailureReasonEnumLowResolution PhotoSequenceFailureReasonEnum = "LOW_RESOLUTION"
PhotoSequenceFailureReasonEnumDuplicate PhotoSequenceFailureReasonEnum = "DUPLICATE"
PhotoSequenceFailureReasonEnumInsufficientGps PhotoSequenceFailureReasonEnum = "INSUFFICIENT_GPS"
PhotoSequenceFailureReasonEnumNoOverlapGps PhotoSequenceFailureReasonEnum = "NO_OVERLAP_GPS"
PhotoSequenceFailureReasonEnumInvalidGps PhotoSequenceFailureReasonEnum = "INVALID_GPS"
PhotoSequenceFailureReasonEnumFailedToRefinePositions PhotoSequenceFailureReasonEnum = "FAILED_TO_REFINE_POSITIONS"
PhotoSequenceFailureReasonEnumTakedown PhotoSequenceFailureReasonEnum = "TAKEDOWN"
PhotoSequenceFailureReasonEnumCorruptVideo PhotoSequenceFailureReasonEnum = "CORRUPT_VIDEO"
PhotoSequenceFailureReasonEnumInternal PhotoSequenceFailureReasonEnum = "INTERNAL"
PhotoSequenceFailureReasonEnumInvalidVideoFormat PhotoSequenceFailureReasonEnum = "INVALID_VIDEO_FORMAT"
PhotoSequenceFailureReasonEnumInvalidVideoDimensions PhotoSequenceFailureReasonEnum = "INVALID_VIDEO_DIMENSIONS"
PhotoSequenceFailureReasonEnumInvalidCaptureTime PhotoSequenceFailureReasonEnum = "INVALID_CAPTURE_TIME"
PhotoSequenceFailureReasonEnumGpsDataGap PhotoSequenceFailureReasonEnum = "GPS_DATA_GAP"
PhotoSequenceFailureReasonEnumJumpyGps PhotoSequenceFailureReasonEnum = "JUMPY_GPS"
PhotoSequenceFailureReasonEnumInvalidImu PhotoSequenceFailureReasonEnum = "INVALID_IMU"
PhotoSequenceFailureReasonEnumInsufficientImu PhotoSequenceFailureReasonEnum = "INSUFFICIENT_IMU"
PhotoSequenceFailureReasonEnumInsufficientOverlapTimeSeries PhotoSequenceFailureReasonEnum = "INSUFFICIENT_OVERLAP_TIME_SERIES"
PhotoSequenceFailureReasonEnumImuDataGap PhotoSequenceFailureReasonEnum = "IMU_DATA_GAP"
PhotoSequenceFailureReasonEnumUnsupportedCamera PhotoSequenceFailureReasonEnum = "UNSUPPORTED_CAMERA"
PhotoSequenceFailureReasonEnumNotOutdoors PhotoSequenceFailureReasonEnum = "NOT_OUTDOORS"
PhotoSequenceFailureReasonEnumInsufficientVideoFrames PhotoSequenceFailureReasonEnum = "INSUFFICIENT_VIDEO_FRAMES"
PhotoSequenceFailureReasonEnumInsufficientMovement PhotoSequenceFailureReasonEnum = "INSUFFICIENT_MOVEMENT"
)



type PhotoSequenceGpsSourceEnum string

const (
    PhotoSequenceGpsSourceEnumPhotoSequence PhotoSequenceGpsSourceEnum = "PHOTO_SEQUENCE"
PhotoSequenceGpsSourceEnumCameraMotionMetadataTrack PhotoSequenceGpsSourceEnum = "CAMERA_MOTION_METADATA_TRACK"
)



type PhotoSequenceProcessingStateEnum string

const (
    PhotoSequenceProcessingStateEnumProcessingStateUnspecified PhotoSequenceProcessingStateEnum = "PROCESSING_STATE_UNSPECIFIED"
PhotoSequenceProcessingStateEnumPending PhotoSequenceProcessingStateEnum = "PENDING"
PhotoSequenceProcessingStateEnumProcessing PhotoSequenceProcessingStateEnum = "PROCESSING"
PhotoSequenceProcessingStateEnumProcessed PhotoSequenceProcessingStateEnum = "PROCESSED"
PhotoSequenceProcessingStateEnumFailed PhotoSequenceProcessingStateEnum = "FAILED"
)


type PhotoSequence struct {
    CaptureTimeOverride *string `json:"captureTimeOverride,omitempty"`
    DistanceMeters *float64 `json:"distanceMeters,omitempty"`
    FailureDetails *ProcessingFailureDetails `json:"failureDetails,omitempty"`
    FailureReason *PhotoSequenceFailureReasonEnum `json:"failureReason,omitempty"`
    Filename *string `json:"filename,omitempty"`
    GpsSource *PhotoSequenceGpsSourceEnum `json:"gpsSource,omitempty"`
    ID *string `json:"id,omitempty"`
    Imu *Imu `json:"imu,omitempty"`
    Photos []Photo `json:"photos,omitempty"`
    ProcessingState *PhotoSequenceProcessingStateEnum `json:"processingState,omitempty"`
    RawGpsTimeline []Pose `json:"rawGpsTimeline,omitempty"`
    SequenceBounds *LatLngBounds `json:"sequenceBounds,omitempty"`
    UploadReference *UploadRef `json:"uploadReference,omitempty"`
    UploadTime *string `json:"uploadTime,omitempty"`
    ViewCount *string `json:"viewCount,omitempty"`
    
}

