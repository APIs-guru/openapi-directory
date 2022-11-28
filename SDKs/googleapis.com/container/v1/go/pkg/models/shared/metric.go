package shared

// Metric
// Progress metric is (string, int|float|string) pair.
type Metric struct {
	DoubleValue *float64 `json:"doubleValue,omitempty"`
	IntValue    *string  `json:"intValue,omitempty"`
	Name        *string  `json:"name,omitempty"`
	StringValue *string  `json:"stringValue,omitempty"`
}
