package shared

type WaterfallChartColumnStyle struct {
	Color      *Color      `json:"color,omitempty"`
	ColorStyle *ColorStyle `json:"colorStyle,omitempty"`
	Label      *string     `json:"label,omitempty"`
}
