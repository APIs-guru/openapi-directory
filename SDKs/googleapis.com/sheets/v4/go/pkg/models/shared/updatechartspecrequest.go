package shared

// UpdateChartSpecRequest
// Updates a chart's specifications. (This does not move or resize a chart. To move or resize a chart, use UpdateEmbeddedObjectPositionRequest.)
type UpdateChartSpecRequest struct {
	ChartID *int32     `json:"chartId,omitempty"`
	Spec    *ChartSpec `json:"spec,omitempty"`
}
