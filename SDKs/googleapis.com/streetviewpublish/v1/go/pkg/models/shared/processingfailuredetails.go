package shared

type ProcessingFailureDetails struct {
	GpsDataGapDetails      *GpsDataGapFailureDetails      `json:"gpsDataGapDetails"`
	ImuDataGapDetails      *ImuDataGapFailureDetails      `json:"imuDataGapDetails"`
	InsufficientGpsDetails *InsufficientGpsFailureDetails `json:"insufficientGpsDetails"`
	NotOutdoorsDetails     *NotOutdoorsFailureDetails     `json:"notOutdoorsDetails"`
}
