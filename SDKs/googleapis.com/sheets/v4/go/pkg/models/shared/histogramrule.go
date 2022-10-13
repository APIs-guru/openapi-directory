package shared

type HistogramRule struct {
	End      *float64 `json:"end"`
	Interval *float64 `json:"interval"`
	Start    *float64 `json:"start"`
}
