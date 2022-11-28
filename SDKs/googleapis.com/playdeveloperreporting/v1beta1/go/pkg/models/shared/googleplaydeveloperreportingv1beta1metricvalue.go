package shared

// GooglePlayDeveloperReportingV1beta1MetricValue
// Represents the value of a metric.
type GooglePlayDeveloperReportingV1beta1MetricValue struct {
	DecimalValue *GoogleTypeDecimal `json:"decimalValue,omitempty"`
	Metric       *string            `json:"metric,omitempty"`
}
