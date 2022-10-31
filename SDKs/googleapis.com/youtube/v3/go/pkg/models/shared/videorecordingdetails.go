package shared

import (
"time")

type VideoRecordingDetails struct {
    Location *GeoPoint `json:"location,omitempty"`
    LocationDescription *string `json:"locationDescription,omitempty"`
    RecordingDate *time.Time `json:"recordingDate,omitempty"`
    
}

