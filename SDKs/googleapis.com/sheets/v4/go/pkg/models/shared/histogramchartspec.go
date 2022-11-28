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

// HistogramChartSpec
// A histogram chart. A histogram chart groups data items into bins, displaying each bin as a column of stacked items. Histograms are used to display the distribution of a dataset. Each column of items represents a range into which those items fall. The number of bins can be chosen automatically or specified explicitly.
type HistogramChartSpec struct {
	BucketSize        *float64                              `json:"bucketSize,omitempty"`
	LegendPosition    *HistogramChartSpecLegendPositionEnum `json:"legendPosition,omitempty"`
	OutlierPercentile *float64                              `json:"outlierPercentile,omitempty"`
	Series            []HistogramSeries                     `json:"series,omitempty"`
	ShowItemDividers  *bool                                 `json:"showItemDividers,omitempty"`
}
