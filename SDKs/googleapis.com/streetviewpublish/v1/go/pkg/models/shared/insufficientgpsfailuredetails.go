package shared

// InsufficientGpsFailureDetails
// Details related to ProcessingFailureReason#INSUFFICIENT_GPS.
type InsufficientGpsFailureDetails struct {
	GpsPointsFound *int32 `json:"gpsPointsFound,omitempty"`
}
