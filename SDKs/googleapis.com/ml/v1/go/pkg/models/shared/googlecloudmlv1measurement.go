package shared



type GoogleCloudMlV1Measurement struct {
    ElapsedTime *string `json:"elapsedTime,omitempty"`
    Metrics []GoogleCloudMlV1MeasurementMetric `json:"metrics,omitempty"`
    StepCount *string `json:"stepCount,omitempty"`
    
}

