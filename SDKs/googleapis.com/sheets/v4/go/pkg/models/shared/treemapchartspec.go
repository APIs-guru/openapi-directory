package shared

type TreemapChartSpec struct {
	ColorData        *ChartData              `json:"colorData"`
	ColorScale       *TreemapChartColorScale `json:"colorScale"`
	HeaderColor      *Color                  `json:"headerColor"`
	HeaderColorStyle *ColorStyle             `json:"headerColorStyle"`
	HideTooltips     *bool                   `json:"hideTooltips"`
	HintedLevels     *int32                  `json:"hintedLevels"`
	Labels           *ChartData              `json:"labels"`
	Levels           *int32                  `json:"levels"`
	MaxValue         *float64                `json:"maxValue"`
	MinValue         *float64                `json:"minValue"`
	ParentLabels     *ChartData              `json:"parentLabels"`
	SizeData         *ChartData              `json:"sizeData"`
	TextFormat       *TextFormat             `json:"textFormat"`
}
