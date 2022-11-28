package shared

// HistogramSeries
// A histogram series containing the series color and data.
type HistogramSeries struct {
	BarColor      *Color      `json:"barColor,omitempty"`
	BarColorStyle *ColorStyle `json:"barColorStyle,omitempty"`
	Data          *ChartData  `json:"data,omitempty"`
}
