package shared

type Widget struct {
	AlertChart       *AlertChart            `json:"alertChart"`
	Blank            map[string]interface{} `json:"blank"`
	CollapsibleGroup *CollapsibleGroup      `json:"collapsibleGroup"`
	LogsPanel        *LogsPanel             `json:"logsPanel"`
	Scorecard        *Scorecard             `json:"scorecard"`
	Text             *Text                  `json:"text"`
	TimeSeriesTable  *TimeSeriesTable       `json:"timeSeriesTable"`
	Title            *string                `json:"title"`
	XyChart          *XyChart               `json:"xyChart"`
}
