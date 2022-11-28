package shared

// GoogleCloudDataplexV1DataScanExecutionSpec
// DataScan execution settings.
type GoogleCloudDataplexV1DataScanExecutionSpec struct {
	Field   *string                       `json:"field,omitempty"`
	Trigger *GoogleCloudDataplexV1Trigger `json:"trigger,omitempty"`
}
