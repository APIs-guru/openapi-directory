package shared




type ChartDataAggregateTypeEnum string

const (
    ChartDataAggregateTypeEnumChartAggregateTypeUnspecified ChartDataAggregateTypeEnum = "CHART_AGGREGATE_TYPE_UNSPECIFIED"
ChartDataAggregateTypeEnumAverage ChartDataAggregateTypeEnum = "AVERAGE"
ChartDataAggregateTypeEnumCount ChartDataAggregateTypeEnum = "COUNT"
ChartDataAggregateTypeEnumMax ChartDataAggregateTypeEnum = "MAX"
ChartDataAggregateTypeEnumMedian ChartDataAggregateTypeEnum = "MEDIAN"
ChartDataAggregateTypeEnumMin ChartDataAggregateTypeEnum = "MIN"
ChartDataAggregateTypeEnumSum ChartDataAggregateTypeEnum = "SUM"
)


type ChartData struct {
    AggregateType *ChartDataAggregateTypeEnum `json:"aggregateType,omitempty"`
    ColumnReference *DataSourceColumnReference `json:"columnReference,omitempty"`
    GroupRule *ChartGroupRule `json:"groupRule,omitempty"`
    SourceRange *ChartSourceRange `json:"sourceRange,omitempty"`
    
}

