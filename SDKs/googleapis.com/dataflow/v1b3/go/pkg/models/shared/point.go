package shared

// Point
// A point in the timeseries.
type Point struct {
	Time  *string  `json:"time,omitempty"`
	Value *float64 `json:"value,omitempty"`
}
