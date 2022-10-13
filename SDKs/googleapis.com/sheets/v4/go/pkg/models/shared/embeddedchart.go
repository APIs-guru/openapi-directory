package shared

type EmbeddedChart struct {
	Border   *EmbeddedObjectBorder   `json:"border"`
	ChartID  *int32                  `json:"chartId"`
	Position *EmbeddedObjectPosition `json:"position"`
	Spec     *ChartSpec              `json:"spec"`
}
