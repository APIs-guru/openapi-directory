package shared

// DistributionCut
// A DistributionCut defines a TimeSeries and thresholds used for measuring good service and total service. The TimeSeries must have ValueType = DISTRIBUTION and MetricKind = DELTA or MetricKind = CUMULATIVE. The computed good_service will be the estimated count of values in the Distribution that fall within the specified min and max.
type DistributionCut struct {
	DistributionFilter *string                  `json:"distributionFilter,omitempty"`
	Range              *GoogleMonitoringV3Range `json:"range,omitempty"`
}
