package shared

import (
	"time"
)

// VideoRecordingDetails
// Recording information associated with the video.
type VideoRecordingDetails struct {
	Location            *GeoPoint  `json:"location,omitempty"`
	LocationDescription *string    `json:"locationDescription,omitempty"`
	RecordingDate       *time.Time `json:"recordingDate,omitempty"`
}
