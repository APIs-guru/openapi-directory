package shared

type GoogleCloudMlV1Measurement struct {
	ElapsedTime *string                            `json:"elapsedTime"`
	Metrics     []GoogleCloudMlV1MeasurementMetric `json:"metrics"`
	StepCount   *string                            `json:"stepCount"`
}
