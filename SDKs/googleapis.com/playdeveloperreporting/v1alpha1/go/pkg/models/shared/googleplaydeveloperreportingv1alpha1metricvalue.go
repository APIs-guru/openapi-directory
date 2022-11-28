package shared

// GooglePlayDeveloperReportingV1alpha1MetricValue
// Represents the value of a metric.
type GooglePlayDeveloperReportingV1alpha1MetricValue struct {
	DecimalValue *GoogleTypeDecimal `json:"decimalValue,omitempty"`
	Metric       *string            `json:"metric,omitempty"`
}
