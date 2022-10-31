package shared

type PointData struct {
	TimeInterval *TimeInterval `json:"timeInterval,omitempty"`
	Values       []TypedValue  `json:"values,omitempty"`
}
