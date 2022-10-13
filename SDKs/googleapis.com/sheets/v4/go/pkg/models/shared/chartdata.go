package shared

type ChartDataAggregateTypeEnum string

const (
	ChartDataAggregateTypeEnumChartAggregateTypeUnspecified ChartDataAggregateTypeEnum = "CHART_AGGREGATE_TYPE_UNSPECIFIED"
	ChartDataAggregateTypeEnumAverage                       ChartDataAggregateTypeEnum = "AVERAGE"
	ChartDataAggregateTypeEnumCount                         ChartDataAggregateTypeEnum = "COUNT"
	ChartDataAggregateTypeEnumMax                           ChartDataAggregateTypeEnum = "MAX"
	ChartDataAggregateTypeEnumMedian                        ChartDataAggregateTypeEnum = "MEDIAN"
	ChartDataAggregateTypeEnumMin                           ChartDataAggregateTypeEnum = "MIN"
	ChartDataAggregateTypeEnumSum                           ChartDataAggregateTypeEnum = "SUM"
)

type ChartData struct {
	AggregateType   *ChartDataAggregateTypeEnum `json:"aggregateType"`
	ColumnReference *DataSourceColumnReference  `json:"columnReference"`
	GroupRule       *ChartGroupRule             `json:"groupRule"`
	SourceRange     *ChartSourceRange           `json:"sourceRange"`
}
