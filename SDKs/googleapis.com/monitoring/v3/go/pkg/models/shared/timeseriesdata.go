package shared



type TimeSeriesData struct {
    LabelValues []LabelValue `json:"labelValues,omitempty"`
    PointData []PointData `json:"pointData,omitempty"`
    
}

