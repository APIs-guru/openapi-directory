package shared

type MetricRange struct {
	Range      *GoogleMonitoringV3Range `json:"range,omitempty"`
	TimeSeries *string                  `json:"timeSeries,omitempty"`
}
