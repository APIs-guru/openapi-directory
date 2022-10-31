package shared




type BubbleChartSpecLegendPositionEnum string

const (
    BubbleChartSpecLegendPositionEnumBubbleChartLegendPositionUnspecified BubbleChartSpecLegendPositionEnum = "BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED"
BubbleChartSpecLegendPositionEnumBottomLegend BubbleChartSpecLegendPositionEnum = "BOTTOM_LEGEND"
BubbleChartSpecLegendPositionEnumLeftLegend BubbleChartSpecLegendPositionEnum = "LEFT_LEGEND"
BubbleChartSpecLegendPositionEnumRightLegend BubbleChartSpecLegendPositionEnum = "RIGHT_LEGEND"
BubbleChartSpecLegendPositionEnumTopLegend BubbleChartSpecLegendPositionEnum = "TOP_LEGEND"
BubbleChartSpecLegendPositionEnumNoLegend BubbleChartSpecLegendPositionEnum = "NO_LEGEND"
BubbleChartSpecLegendPositionEnumInsideLegend BubbleChartSpecLegendPositionEnum = "INSIDE_LEGEND"
)


type BubbleChartSpec struct {
    BubbleBorderColor *Color `json:"bubbleBorderColor,omitempty"`
    BubbleBorderColorStyle *ColorStyle `json:"bubbleBorderColorStyle,omitempty"`
    BubbleLabels *ChartData `json:"bubbleLabels,omitempty"`
    BubbleMaxRadiusSize *int32 `json:"bubbleMaxRadiusSize,omitempty"`
    BubbleMinRadiusSize *int32 `json:"bubbleMinRadiusSize,omitempty"`
    BubbleOpacity *float32 `json:"bubbleOpacity,omitempty"`
    BubbleSizes *ChartData `json:"bubbleSizes,omitempty"`
    BubbleTextStyle *TextFormat `json:"bubbleTextStyle,omitempty"`
    Domain *ChartData `json:"domain,omitempty"`
    GroupIds *ChartData `json:"groupIds,omitempty"`
    LegendPosition *BubbleChartSpecLegendPositionEnum `json:"legendPosition,omitempty"`
    Series *ChartData `json:"series,omitempty"`
    
}

