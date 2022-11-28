package shared

// DatedValue
// Represents a single datapoint in the timeseries, where each datapoint is a date-value pair.
type DatedValue struct {
	Date  *Date   `json:"date,omitempty"`
	Value *string `json:"value,omitempty"`
}
