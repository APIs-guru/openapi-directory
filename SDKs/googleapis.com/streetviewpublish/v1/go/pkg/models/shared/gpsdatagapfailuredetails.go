package shared

// GpsDataGapFailureDetails
// Details related to ProcessingFailureReason#GPS_DATA_GAP. If there are multiple GPS data gaps, only the one with the largest duration is reported here.
type GpsDataGapFailureDetails struct {
	GapDuration  *string `json:"gapDuration,omitempty"`
	GapStartTime *string `json:"gapStartTime,omitempty"`
}
