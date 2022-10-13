package shared

type GoogleCloudMlV1RequestLoggingConfig struct {
	BigqueryTableName  *string  `json:"bigqueryTableName"`
	SamplingPercentage *float64 `json:"samplingPercentage"`
}
