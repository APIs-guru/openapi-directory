package shared

type HistogramChartSpecLegendPositionEnum string

const (
	HistogramChartSpecLegendPositionEnumHistogramChartLegendPositionUnspecified HistogramChartSpecLegendPositionEnum = "HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED"
	HistogramChartSpecLegendPositionEnumBottomLegend                            HistogramChartSpecLegendPositionEnum = "BOTTOM_LEGEND"
	HistogramChartSpecLegendPositionEnumLeftLegend                              HistogramChartSpecLegendPositionEnum = "LEFT_LEGEND"
	HistogramChartSpecLegendPositionEnumRightLegend                             HistogramChartSpecLegendPositionEnum = "RIGHT_LEGEND"
	HistogramChartSpecLegendPositionEnumTopLegend                               HistogramChartSpecLegendPositionEnum = "TOP_LEGEND"
	HistogramChartSpecLegendPositionEnumNoLegend                                HistogramChartSpecLegendPositionEnum = "NO_LEGEND"
	HistogramChartSpecLegendPositionEnumInsideLegend                            HistogramChartSpecLegendPositionEnum = "INSIDE_LEGEND"
)

type HistogramChartSpec struct {
	BucketSize        *float64                              `json:"bucketSize"`
	LegendPosition    *HistogramChartSpecLegendPositionEnum `json:"legendPosition"`
	OutlierPercentile *float64                              `json:"outlierPercentile"`
	Series            []HistogramSeries                     `json:"series"`
	ShowItemDividers  *bool                                 `json:"showItemDividers"`
}
