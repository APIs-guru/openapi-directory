package shared



type ChartGroupRule struct {
    DateTimeRule *ChartDateTimeRule `json:"dateTimeRule,omitempty"`
    HistogramRule *ChartHistogramRule `json:"histogramRule,omitempty"`
    
}

