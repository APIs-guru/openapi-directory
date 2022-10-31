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
	AggregateType       *ScorecardChartSpecAggregateTypeEnum      `json:"aggregateType,omitempty"`
	BaselineValueData   *ChartData                                `json:"baselineValueData,omitempty"`
	BaselineValueFormat *BaselineValueFormat                      `json:"baselineValueFormat,omitempty"`
	CustomFormatOptions *ChartCustomNumberFormatOptions           `json:"customFormatOptions,omitempty"`
	KeyValueData        *ChartData                                `json:"keyValueData,omitempty"`
	KeyValueFormat      *KeyValueFormat                           `json:"keyValueFormat,omitempty"`
	NumberFormatSource  *ScorecardChartSpecNumberFormatSourceEnum `json:"numberFormatSource,omitempty"`
	ScaleFactor         *float64                                  `json:"scaleFactor,omitempty"`
}
