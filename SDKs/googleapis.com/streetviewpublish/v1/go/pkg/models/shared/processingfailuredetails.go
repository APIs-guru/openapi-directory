package shared

type ProcessingFailureDetails struct {
	GpsDataGapDetails      *GpsDataGapFailureDetails      `json:"gpsDataGapDetails,omitempty"`
	ImuDataGapDetails      *ImuDataGapFailureDetails      `json:"imuDataGapDetails,omitempty"`
	InsufficientGpsDetails *InsufficientGpsFailureDetails `json:"insufficientGpsDetails,omitempty"`
	NotOutdoorsDetails     *NotOutdoorsFailureDetails     `json:"notOutdoorsDetails,omitempty"`
}
