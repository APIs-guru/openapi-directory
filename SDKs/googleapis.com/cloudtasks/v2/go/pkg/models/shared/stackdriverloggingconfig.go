package shared

// StackdriverLoggingConfig
// Configuration options for writing logs to [Stackdriver Logging](https://cloud.google.com/logging/docs/).
type StackdriverLoggingConfig struct {
	SamplingRatio *float64 `json:"samplingRatio,omitempty"`
}
