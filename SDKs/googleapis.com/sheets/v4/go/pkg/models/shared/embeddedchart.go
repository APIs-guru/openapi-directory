package shared

// EmbeddedChart
// A chart embedded in a sheet.
type EmbeddedChart struct {
	Border   *EmbeddedObjectBorder   `json:"border,omitempty"`
	ChartID  *int32                  `json:"chartId,omitempty"`
	Position *EmbeddedObjectPosition `json:"position,omitempty"`
	Spec     *ChartSpec              `json:"spec,omitempty"`
}
