package shared

import (
	"time"
)

type VideoRecordingDetails struct {
	Location            *GeoPoint  `json:"location"`
	LocationDescription *string    `json:"locationDescription"`
	RecordingDate       *time.Time `json:"recordingDate"`
}
