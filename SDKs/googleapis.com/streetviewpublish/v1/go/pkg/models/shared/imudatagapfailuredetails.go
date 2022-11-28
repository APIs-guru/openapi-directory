package shared

// ImuDataGapFailureDetails
// Details related to ProcessingFailureReason#IMU_DATA_GAP. If there are multiple IMU data gaps, only the one with the largest duration is reported here.
type ImuDataGapFailureDetails struct {
	GapDuration  *string `json:"gapDuration,omitempty"`
	GapStartTime *string `json:"gapStartTime,omitempty"`
}
