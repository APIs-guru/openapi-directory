package shared

type ChartGroupRule struct {
	DateTimeRule  *ChartDateTimeRule  `json:"dateTimeRule"`
	HistogramRule *ChartHistogramRule `json:"histogramRule"`
}
