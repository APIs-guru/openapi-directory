package shared

// MetricValue
// Represents a single metric value.
type MetricValue struct {
	BoolValue         *bool             `json:"boolValue,omitempty"`
	DistributionValue *Distribution     `json:"distributionValue,omitempty"`
	DoubleValue       *float64          `json:"doubleValue,omitempty"`
	EndTime           *string           `json:"endTime,omitempty"`
	Int64Value        *string           `json:"int64Value,omitempty"`
	Labels            map[string]string `json:"labels,omitempty"`
	MoneyValue        *Money            `json:"moneyValue,omitempty"`
	StartTime         *string           `json:"startTime,omitempty"`
	StringValue       *string           `json:"stringValue,omitempty"`
}
