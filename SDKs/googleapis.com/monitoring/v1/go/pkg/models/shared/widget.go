package shared

// Widget
// Widget contains a single dashboard component and configuration of how to present the component in the dashboard.
type Widget struct {
	AlertChart       *AlertChart            `json:"alertChart,omitempty"`
	Blank            map[string]interface{} `json:"blank,omitempty"`
	CollapsibleGroup *CollapsibleGroup      `json:"collapsibleGroup,omitempty"`
	LogsPanel        *LogsPanel             `json:"logsPanel,omitempty"`
	Scorecard        *Scorecard             `json:"scorecard,omitempty"`
	Text             *Text                  `json:"text,omitempty"`
	TimeSeriesTable  *TimeSeriesTable       `json:"timeSeriesTable,omitempty"`
	Title            *string                `json:"title,omitempty"`
	XyChart          *XyChart               `json:"xyChart,omitempty"`
}
