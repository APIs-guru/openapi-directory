package shared

type PivotGroupRule struct {
	DateTimeRule  *DateTimeRule  `json:"dateTimeRule,omitempty"`
	HistogramRule *HistogramRule `json:"histogramRule,omitempty"`
	ManualRule    *ManualRule    `json:"manualRule,omitempty"`
}
