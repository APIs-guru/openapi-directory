package shared

// IntegerGauge
// A metric value representing temporal values of a variable.
type IntegerGauge struct {
	Timestamp *string     `json:"timestamp,omitempty"`
	Value     *SplitInt64 `json:"value,omitempty"`
}
