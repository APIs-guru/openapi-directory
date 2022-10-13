package shared

type Point struct {
	Interval *TimeInterval `json:"interval"`
	Value    *TypedValue   `json:"value"`
}
