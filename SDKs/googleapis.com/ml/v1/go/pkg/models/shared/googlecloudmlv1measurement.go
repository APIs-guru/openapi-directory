package shared

// GoogleCloudMlV1Measurement
// A message representing a measurement.
type GoogleCloudMlV1Measurement struct {
	ElapsedTime *string                            `json:"elapsedTime,omitempty"`
	Metrics     []GoogleCloudMlV1MeasurementMetric `json:"metrics,omitempty"`
	StepCount   *string                            `json:"stepCount,omitempty"`
}
