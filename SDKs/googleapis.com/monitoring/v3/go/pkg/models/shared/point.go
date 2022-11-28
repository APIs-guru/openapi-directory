package shared

// Point
// A single data point in a time series.
type Point struct {
	Interval *TimeInterval `json:"interval,omitempty"`
	Value    *TypedValue   `json:"value,omitempty"`
}
