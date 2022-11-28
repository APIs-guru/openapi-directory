package shared

// PointData
// A point's value columns and time interval. Each point has one or more point values corresponding to the entries in point_descriptors field in the TimeSeriesDescriptor associated with this object.
type PointData struct {
	TimeInterval *TimeInterval `json:"timeInterval,omitempty"`
	Values       []TypedValue  `json:"values,omitempty"`
}
