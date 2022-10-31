package shared



type Widget struct {
    AlertChart *AlertChart `json:"alertChart,omitempty"`
    Blank map[string]interface{} `json:"blank,omitempty"`
    CollapsibleGroup *CollapsibleGroup `json:"collapsibleGroup,omitempty"`
    LogsPanel *LogsPanel `json:"logsPanel,omitempty"`
    Scorecard *Scorecard `json:"scorecard,omitempty"`
    Text *Text `json:"text,omitempty"`
    TimeSeriesTable *TimeSeriesTable `json:"timeSeriesTable,omitempty"`
    Title *string `json:"title,omitempty"`
    XyChart *XyChart `json:"xyChart,omitempty"`
    
}

