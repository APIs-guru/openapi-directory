package shared

// GaugeView
// A gauge chart shows where the current value sits within a pre-defined range. The upper and lower bounds should define the possible range of values for the scorecard's query (inclusive).
type GaugeView struct {
	LowerBound *float64 `json:"lowerBound,omitempty"`
	UpperBound *float64 `json:"upperBound,omitempty"`
}
