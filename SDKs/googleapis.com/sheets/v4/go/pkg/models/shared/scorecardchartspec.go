package shared

type ScorecardChartSpecAggregateTypeEnum string

const (
	ScorecardChartSpecAggregateTypeEnumChartAggregateTypeUnspecified ScorecardChartSpecAggregateTypeEnum = "CHART_AGGREGATE_TYPE_UNSPECIFIED"
	ScorecardChartSpecAggregateTypeEnumAverage                       ScorecardChartSpecAggregateTypeEnum = "AVERAGE"
	ScorecardChartSpecAggregateTypeEnumCount                         ScorecardChartSpecAggregateTypeEnum = "COUNT"
	ScorecardChartSpecAggregateTypeEnumMax                           ScorecardChartSpecAggregateTypeEnum = "MAX"
	ScorecardChartSpecAggregateTypeEnumMedian                        ScorecardChartSpecAggregateTypeEnum = "MEDIAN"
	ScorecardChartSpecAggregateTypeEnumMin                           ScorecardChartSpecAggregateTypeEnum = "MIN"
	ScorecardChartSpecAggregateTypeEnumSum                           ScorecardChartSpecAggregateTypeEnum = "SUM"
)

type ScorecardChartSpecNumberFormatSourceEnum string

const (
	ScorecardChartSpecNumberFormatSourceEnumChartNumberFormatSourceUndefined ScorecardChartSpecNumberFormatSourceEnum = "CHART_NUMBER_FORMAT_SOURCE_UNDEFINED"
	ScorecardChartSpecNumberFormatSourceEnumFromData                         ScorecardChartSpecNumberFormatSourceEnum = "FROM_DATA"
	ScorecardChartSpecNumberFormatSourceEnumCustom                           ScorecardChartSpecNumberFormatSourceEnum = "CUSTOM"
)

type ScorecardChartSpec struct {
	AggregateType       *ScorecardChartSpecAggregateTypeEnum      `json:"aggregateType"`
	BaselineValueData   *ChartData                                `json:"baselineValueData"`
	BaselineValueFormat *BaselineValueFormat                      `json:"baselineValueFormat"`
	CustomFormatOptions *ChartCustomNumberFormatOptions           `json:"customFormatOptions"`
	KeyValueData        *ChartData                                `json:"keyValueData"`
	KeyValueFormat      *KeyValueFormat                           `json:"keyValueFormat"`
	NumberFormatSource  *ScorecardChartSpecNumberFormatSourceEnum `json:"numberFormatSource"`
	ScaleFactor         *float64                                  `json:"scaleFactor"`
}
