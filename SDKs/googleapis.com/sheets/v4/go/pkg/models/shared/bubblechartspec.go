package shared

type BubbleChartSpecLegendPositionEnum string

const (
	BubbleChartSpecLegendPositionEnumBubbleChartLegendPositionUnspecified BubbleChartSpecLegendPositionEnum = "BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED"
	BubbleChartSpecLegendPositionEnumBottomLegend                         BubbleChartSpecLegendPositionEnum = "BOTTOM_LEGEND"
	BubbleChartSpecLegendPositionEnumLeftLegend                           BubbleChartSpecLegendPositionEnum = "LEFT_LEGEND"
	BubbleChartSpecLegendPositionEnumRightLegend                          BubbleChartSpecLegendPositionEnum = "RIGHT_LEGEND"
	BubbleChartSpecLegendPositionEnumTopLegend                            BubbleChartSpecLegendPositionEnum = "TOP_LEGEND"
	BubbleChartSpecLegendPositionEnumNoLegend                             BubbleChartSpecLegendPositionEnum = "NO_LEGEND"
	BubbleChartSpecLegendPositionEnumInsideLegend                         BubbleChartSpecLegendPositionEnum = "INSIDE_LEGEND"
)

type BubbleChartSpec struct {
	BubbleBorderColor      *Color                             `json:"bubbleBorderColor"`
	BubbleBorderColorStyle *ColorStyle                        `json:"bubbleBorderColorStyle"`
	BubbleLabels           *ChartData                         `json:"bubbleLabels"`
	BubbleMaxRadiusSize    *int32                             `json:"bubbleMaxRadiusSize"`
	BubbleMinRadiusSize    *int32                             `json:"bubbleMinRadiusSize"`
	BubbleOpacity          *float32                           `json:"bubbleOpacity"`
	BubbleSizes            *ChartData                         `json:"bubbleSizes"`
	BubbleTextStyle        *TextFormat                        `json:"bubbleTextStyle"`
	Domain                 *ChartData                         `json:"domain"`
	GroupIds               *ChartData                         `json:"groupIds"`
	LegendPosition         *BubbleChartSpecLegendPositionEnum `json:"legendPosition"`
	Series                 *ChartData                         `json:"series"`
}
