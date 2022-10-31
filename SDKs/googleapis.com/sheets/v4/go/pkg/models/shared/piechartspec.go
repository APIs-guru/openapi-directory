package shared




type PieChartSpecLegendPositionEnum string

const (
    PieChartSpecLegendPositionEnumPieChartLegendPositionUnspecified PieChartSpecLegendPositionEnum = "PIE_CHART_LEGEND_POSITION_UNSPECIFIED"
PieChartSpecLegendPositionEnumBottomLegend PieChartSpecLegendPositionEnum = "BOTTOM_LEGEND"
PieChartSpecLegendPositionEnumLeftLegend PieChartSpecLegendPositionEnum = "LEFT_LEGEND"
PieChartSpecLegendPositionEnumRightLegend PieChartSpecLegendPositionEnum = "RIGHT_LEGEND"
PieChartSpecLegendPositionEnumTopLegend PieChartSpecLegendPositionEnum = "TOP_LEGEND"
PieChartSpecLegendPositionEnumNoLegend PieChartSpecLegendPositionEnum = "NO_LEGEND"
PieChartSpecLegendPositionEnumLabeledLegend PieChartSpecLegendPositionEnum = "LABELED_LEGEND"
)


type PieChartSpec struct {
    Domain *ChartData `json:"domain,omitempty"`
    LegendPosition *PieChartSpecLegendPositionEnum `json:"legendPosition,omitempty"`
    PieHole *float64 `json:"pieHole,omitempty"`
    Series *ChartData `json:"series,omitempty"`
    ThreeDimensional *bool `json:"threeDimensional,omitempty"`
    
}

