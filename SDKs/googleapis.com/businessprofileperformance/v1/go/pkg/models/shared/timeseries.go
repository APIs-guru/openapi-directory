package shared

// TimeSeries
// Represents a timeseries.
type TimeSeries struct {
	DatedValues []DatedValue `json:"datedValues,omitempty"`
}
