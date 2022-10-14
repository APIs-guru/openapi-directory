package shared

type SparkChartViewSparkChartTypeEnum string

const (
	SparkChartViewSparkChartTypeEnumSparkChartTypeUnspecified SparkChartViewSparkChartTypeEnum = "SPARK_CHART_TYPE_UNSPECIFIED"
	SparkChartViewSparkChartTypeEnumSparkLine                 SparkChartViewSparkChartTypeEnum = "SPARK_LINE"
	SparkChartViewSparkChartTypeEnumSparkBar                  SparkChartViewSparkChartTypeEnum = "SPARK_BAR"
)

type SparkChartView struct {
	MinAlignmentPeriod *string                           `json:"minAlignmentPeriod,omitempty"`
	SparkChartType     *SparkChartViewSparkChartTypeEnum `json:"sparkChartType,omitempty"`
}
