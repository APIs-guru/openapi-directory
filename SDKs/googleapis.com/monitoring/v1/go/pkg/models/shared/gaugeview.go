package shared

type GaugeView struct {
	LowerBound *float64 `json:"lowerBound"`
	UpperBound *float64 `json:"upperBound"`
}
