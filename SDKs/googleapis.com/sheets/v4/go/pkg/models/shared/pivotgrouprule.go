package shared

type PivotGroupRule struct {
	DateTimeRule  *DateTimeRule  `json:"dateTimeRule"`
	HistogramRule *HistogramRule `json:"histogramRule"`
	ManualRule    *ManualRule    `json:"manualRule"`
}
