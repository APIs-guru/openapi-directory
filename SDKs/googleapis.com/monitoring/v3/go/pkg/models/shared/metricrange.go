package shared

type MetricRange struct {
	Range      *GoogleMonitoringV3Range `json:"range"`
	TimeSeries *string                  `json:"timeSeries"`
}
