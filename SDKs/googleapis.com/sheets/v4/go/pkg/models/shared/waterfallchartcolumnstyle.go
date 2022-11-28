package shared

// WaterfallChartColumnStyle
// Styles for a waterfall chart column.
type WaterfallChartColumnStyle struct {
	Color      *Color      `json:"color,omitempty"`
	ColorStyle *ColorStyle `json:"colorStyle,omitempty"`
	Label      *string     `json:"label,omitempty"`
}
