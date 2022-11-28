package shared

type SparkChartViewSparkChartTypeEnum string

const (
	SparkChartViewSparkChartTypeEnumSparkChartTypeUnspecified SparkChartViewSparkChartTypeEnum = "SPARK_CHART_TYPE_UNSPECIFIED"
	SparkChartViewSparkChartTypeEnumSparkLine                 SparkChartViewSparkChartTypeEnum = "SPARK_LINE"
	SparkChartViewSparkChartTypeEnumSparkBar                  SparkChartViewSparkChartTypeEnum = "SPARK_BAR"
)

// SparkChartView
// A sparkChart is a small chart suitable for inclusion in a table-cell or inline in text. This message contains the configuration for a sparkChart to show up on a Scorecard, showing recent trends of the scorecard's timeseries.
type SparkChartView struct {
	MinAlignmentPeriod *string                           `json:"minAlignmentPeriod,omitempty"`
	SparkChartType     *SparkChartViewSparkChartTypeEnum `json:"sparkChartType,omitempty"`
}
