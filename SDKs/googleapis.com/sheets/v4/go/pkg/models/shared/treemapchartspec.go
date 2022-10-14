package shared

type TreemapChartSpec struct {
	ColorData        *ChartData              `json:"colorData,omitempty"`
	ColorScale       *TreemapChartColorScale `json:"colorScale,omitempty"`
	HeaderColor      *Color                  `json:"headerColor,omitempty"`
	HeaderColorStyle *ColorStyle             `json:"headerColorStyle,omitempty"`
	HideTooltips     *bool                   `json:"hideTooltips,omitempty"`
	HintedLevels     *int32                  `json:"hintedLevels,omitempty"`
	Labels           *ChartData              `json:"labels,omitempty"`
	Levels           *int32                  `json:"levels,omitempty"`
	MaxValue         *float64                `json:"maxValue,omitempty"`
	MinValue         *float64                `json:"minValue,omitempty"`
	ParentLabels     *ChartData              `json:"parentLabels,omitempty"`
	SizeData         *ChartData              `json:"sizeData,omitempty"`
	TextFormat       *TextFormat             `json:"textFormat,omitempty"`
}
