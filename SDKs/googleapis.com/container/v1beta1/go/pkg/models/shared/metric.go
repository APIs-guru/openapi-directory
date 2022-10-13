package shared

type Metric struct {
	DoubleValue *float64 `json:"doubleValue"`
	IntValue    *string  `json:"intValue"`
	Name        *string  `json:"name"`
	StringValue *string  `json:"stringValue"`
}
