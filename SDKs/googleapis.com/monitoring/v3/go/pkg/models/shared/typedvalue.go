package shared

type TypedValue struct {
	BoolValue         *bool         `json:"boolValue"`
	DistributionValue *Distribution `json:"distributionValue"`
	DoubleValue       *float64      `json:"doubleValue"`
	Int64Value        *string       `json:"int64Value"`
	StringValue       *string       `json:"stringValue"`
}
