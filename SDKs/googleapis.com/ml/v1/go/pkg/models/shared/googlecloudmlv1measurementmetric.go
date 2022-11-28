package shared

// GoogleCloudMlV1MeasurementMetric
// A message representing a metric in the measurement.
type GoogleCloudMlV1MeasurementMetric struct {
	Metric *string  `json:"metric,omitempty"`
	Value  *float64 `json:"value,omitempty"`
}
