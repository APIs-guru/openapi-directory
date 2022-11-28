package shared

// ProcessingFailureDetails
// Additional details to accompany the ProcessingFailureReason enum. This message is always expected to be used in conjunction with ProcessingFailureReason, and the oneof value set in this message should match the FailureReason.
type ProcessingFailureDetails struct {
	GpsDataGapDetails      *GpsDataGapFailureDetails      `json:"gpsDataGapDetails,omitempty"`
	ImuDataGapDetails      *ImuDataGapFailureDetails      `json:"imuDataGapDetails,omitempty"`
	InsufficientGpsDetails *InsufficientGpsFailureDetails `json:"insufficientGpsDetails,omitempty"`
	NotOutdoorsDetails     *NotOutdoorsFailureDetails     `json:"notOutdoorsDetails,omitempty"`
}
