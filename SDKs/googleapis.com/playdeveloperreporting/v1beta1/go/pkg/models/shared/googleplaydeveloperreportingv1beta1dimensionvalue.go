package shared

// GooglePlayDeveloperReportingV1beta1DimensionValue
// Represents the value of a single dimension.
type GooglePlayDeveloperReportingV1beta1DimensionValue struct {
	Dimension   *string `json:"dimension,omitempty"`
	Int64Value  *string `json:"int64Value,omitempty"`
	StringValue *string `json:"stringValue,omitempty"`
	ValueLabel  *string `json:"valueLabel,omitempty"`
}
