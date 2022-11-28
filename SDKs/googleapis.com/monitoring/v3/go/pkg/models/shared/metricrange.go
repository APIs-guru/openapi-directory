package shared

// MetricRange
// A MetricRange is used when each window is good when the value x of a single TimeSeries satisfies range.min <= x <= range.max. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE.
type MetricRange struct {
	Range      *GoogleMonitoringV3Range `json:"range,omitempty"`
	TimeSeries *string                  `json:"timeSeries,omitempty"`
}
