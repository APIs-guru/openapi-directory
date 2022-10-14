package shared

type GoogleCloudMlV1RequestLoggingConfig struct {
	BigqueryTableName  *string  `json:"bigqueryTableName,omitempty"`
	SamplingPercentage *float64 `json:"samplingPercentage,omitempty"`
}
