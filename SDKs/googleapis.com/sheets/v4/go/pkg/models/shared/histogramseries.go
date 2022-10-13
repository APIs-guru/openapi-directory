package shared

type HistogramSeries struct {
	BarColor      *Color      `json:"barColor"`
	BarColorStyle *ColorStyle `json:"barColorStyle"`
	Data          *ChartData  `json:"data"`
}
