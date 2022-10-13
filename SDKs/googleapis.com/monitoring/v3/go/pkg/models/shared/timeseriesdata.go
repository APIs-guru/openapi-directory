package shared

type TimeSeriesData struct {
	LabelValues []LabelValue `json:"labelValues"`
	PointData   []PointData  `json:"pointData"`
}
