package shared

type PhotoSequenceFailureReasonEnum string

const (
	PhotoSequenceFailureReasonEnumProcessingFailureReasonUnspecified PhotoSequenceFailureReasonEnum = "PROCESSING_FAILURE_REASON_UNSPECIFIED"
	PhotoSequenceFailureReasonEnumLowResolution                      PhotoSequenceFailureReasonEnum = "LOW_RESOLUTION"
	PhotoSequenceFailureReasonEnumDuplicate                          PhotoSequenceFailureReasonEnum = "DUPLICATE"
	PhotoSequenceFailureReasonEnumInsufficientGps                    PhotoSequenceFailureReasonEnum = "INSUFFICIENT_GPS"
	PhotoSequenceFailureReasonEnumNoOverlapGps                       PhotoSequenceFailureReasonEnum = "NO_OVERLAP_GPS"
	PhotoSequenceFailureReasonEnumInvalidGps                         PhotoSequenceFailureReasonEnum = "INVALID_GPS"
	PhotoSequenceFailureReasonEnumFailedToRefinePositions            PhotoSequenceFailureReasonEnum = "FAILED_TO_REFINE_POSITIONS"
	PhotoSequenceFailureReasonEnumTakedown                           PhotoSequenceFailureReasonEnum = "TAKEDOWN"
	PhotoSequenceFailureReasonEnumCorruptVideo                       PhotoSequenceFailureReasonEnum = "CORRUPT_VIDEO"
	PhotoSequenceFailureReasonEnumInternal                           PhotoSequenceFailureReasonEnum = "INTERNAL"
	PhotoSequenceFailureReasonEnumInvalidVideoFormat                 PhotoSequenceFailureReasonEnum = "INVALID_VIDEO_FORMAT"
	PhotoSequenceFailureReasonEnumInvalidVideoDimensions             PhotoSequenceFailureReasonEnum = "INVALID_VIDEO_DIMENSIONS"
	PhotoSequenceFailureReasonEnumInvalidCaptureTime                 PhotoSequenceFailureReasonEnum = "INVALID_CAPTURE_TIME"
	PhotoSequenceFailureReasonEnumGpsDataGap                         PhotoSequenceFailureReasonEnum = "GPS_DATA_GAP"
	PhotoSequenceFailureReasonEnumJumpyGps                           PhotoSequenceFailureReasonEnum = "JUMPY_GPS"
	PhotoSequenceFailureReasonEnumInvalidImu                         PhotoSequenceFailureReasonEnum = "INVALID_IMU"
	PhotoSequenceFailureReasonEnumInsufficientImu                    PhotoSequenceFailureReasonEnum = "INSUFFICIENT_IMU"
	PhotoSequenceFailureReasonEnumInsufficientOverlapTimeSeries      PhotoSequenceFailureReasonEnum = "INSUFFICIENT_OVERLAP_TIME_SERIES"
	PhotoSequenceFailureReasonEnumImuDataGap                         PhotoSequenceFailureReasonEnum = "IMU_DATA_GAP"
	PhotoSequenceFailureReasonEnumUnsupportedCamera                  PhotoSequenceFailureReasonEnum = "UNSUPPORTED_CAMERA"
	PhotoSequenceFailureReasonEnumNotOutdoors                        PhotoSequenceFailureReasonEnum = "NOT_OUTDOORS"
	PhotoSequenceFailureReasonEnumInsufficientVideoFrames            PhotoSequenceFailureReasonEnum = "INSUFFICIENT_VIDEO_FRAMES"
	PhotoSequenceFailureReasonEnumInsufficientMovement               PhotoSequenceFailureReasonEnum = "INSUFFICIENT_MOVEMENT"
)

type PhotoSequenceGpsSourceEnum string

const (
	PhotoSequenceGpsSourceEnumPhotoSequence             PhotoSequenceGpsSourceEnum = "PHOTO_SEQUENCE"
	PhotoSequenceGpsSourceEnumCameraMotionMetadataTrack PhotoSequenceGpsSourceEnum = "CAMERA_MOTION_METADATA_TRACK"
)

type PhotoSequenceProcessingStateEnum string

const (
	PhotoSequenceProcessingStateEnumProcessingStateUnspecified PhotoSequenceProcessingStateEnum = "PROCESSING_STATE_UNSPECIFIED"
	PhotoSequenceProcessingStateEnumPending                    PhotoSequenceProcessingStateEnum = "PENDING"
	PhotoSequenceProcessingStateEnumProcessing                 PhotoSequenceProcessingStateEnum = "PROCESSING"
	PhotoSequenceProcessingStateEnumProcessed                  PhotoSequenceProcessingStateEnum = "PROCESSED"
	PhotoSequenceProcessingStateEnumFailed                     PhotoSequenceProcessingStateEnum = "FAILED"
)

type PhotoSequence struct {
	CaptureTimeOverride *string                           `json:"captureTimeOverride"`
	DistanceMeters      *float64                          `json:"distanceMeters"`
	FailureDetails      *ProcessingFailureDetails         `json:"failureDetails"`
	FailureReason       *PhotoSequenceFailureReasonEnum   `json:"failureReason"`
	Filename            *string                           `json:"filename"`
	GpsSource           *PhotoSequenceGpsSourceEnum       `json:"gpsSource"`
	ID                  *string                           `json:"id"`
	Imu                 *Imu                              `json:"imu"`
	Photos              []Photo                           `json:"photos"`
	ProcessingState     *PhotoSequenceProcessingStateEnum `json:"processingState"`
	RawGpsTimeline      []Pose                            `json:"rawGpsTimeline"`
	SequenceBounds      *LatLngBounds                     `json:"sequenceBounds"`
	UploadReference     *UploadRef                        `json:"uploadReference"`
	UploadTime          *string                           `json:"uploadTime"`
	ViewCount           *string                           `json:"viewCount"`
}
