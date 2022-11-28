package shared

type PhotoSequenceGpsSourceEnum string

const (
	PhotoSequenceGpsSourceEnumPhotoSequence             PhotoSequenceGpsSourceEnum = "PHOTO_SEQUENCE"
	PhotoSequenceGpsSourceEnumCameraMotionMetadataTrack PhotoSequenceGpsSourceEnum = "CAMERA_MOTION_METADATA_TRACK"
)

// PhotoSequenceInput
// A sequence of 360 photos along with metadata.
type PhotoSequenceInput struct {
	CaptureTimeOverride *string                     `json:"captureTimeOverride,omitempty"`
	FailureDetails      *ProcessingFailureDetails   `json:"failureDetails,omitempty"`
	GpsSource           *PhotoSequenceGpsSourceEnum `json:"gpsSource,omitempty"`
	Imu                 *Imu                        `json:"imu,omitempty"`
	RawGpsTimeline      []Pose                      `json:"rawGpsTimeline,omitempty"`
	SequenceBounds      *LatLngBounds               `json:"sequenceBounds,omitempty"`
	UploadReference     *UploadRef                  `json:"uploadReference,omitempty"`
}
