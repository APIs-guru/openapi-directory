package shared



type HistogramSeries struct {
    BarColor *Color `json:"barColor,omitempty"`
    BarColorStyle *ColorStyle `json:"barColorStyle,omitempty"`
    Data *ChartData `json:"data,omitempty"`
    
}

