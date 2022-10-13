package shared

type PointData struct {
	TimeInterval *TimeInterval `json:"timeInterval"`
	Values       []TypedValue  `json:"values"`
}
