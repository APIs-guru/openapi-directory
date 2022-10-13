package shared

type AggregationCrossSeriesReducerEnum string

const (
	AggregationCrossSeriesReducerEnumReduceNone         AggregationCrossSeriesReducerEnum = "REDUCE_NONE"
	AggregationCrossSeriesReducerEnumReduceMean         AggregationCrossSeriesReducerEnum = "REDUCE_MEAN"
	AggregationCrossSeriesReducerEnumReduceMin          AggregationCrossSeriesReducerEnum = "REDUCE_MIN"
	AggregationCrossSeriesReducerEnumReduceMax          AggregationCrossSeriesReducerEnum = "REDUCE_MAX"
	AggregationCrossSeriesReducerEnumReduceSum          AggregationCrossSeriesReducerEnum = "REDUCE_SUM"
	AggregationCrossSeriesReducerEnumReduceStddev       AggregationCrossSeriesReducerEnum = "REDUCE_STDDEV"
	AggregationCrossSeriesReducerEnumReduceCount        AggregationCrossSeriesReducerEnum = "REDUCE_COUNT"
	AggregationCrossSeriesReducerEnumReduceCountTrue    AggregationCrossSeriesReducerEnum = "REDUCE_COUNT_TRUE"
	AggregationCrossSeriesReducerEnumReduceCountFalse   AggregationCrossSeriesReducerEnum = "REDUCE_COUNT_FALSE"
	AggregationCrossSeriesReducerEnumReduceFractionTrue AggregationCrossSeriesReducerEnum = "REDUCE_FRACTION_TRUE"
	AggregationCrossSeriesReducerEnumReducePercentile99 AggregationCrossSeriesReducerEnum = "REDUCE_PERCENTILE_99"
	AggregationCrossSeriesReducerEnumReducePercentile95 AggregationCrossSeriesReducerEnum = "REDUCE_PERCENTILE_95"
	AggregationCrossSeriesReducerEnumReducePercentile50 AggregationCrossSeriesReducerEnum = "REDUCE_PERCENTILE_50"
	AggregationCrossSeriesReducerEnumReducePercentile05 AggregationCrossSeriesReducerEnum = "REDUCE_PERCENTILE_05"
)

type AggregationPerSeriesAlignerEnum string

const (
	AggregationPerSeriesAlignerEnumAlignNone          AggregationPerSeriesAlignerEnum = "ALIGN_NONE"
	AggregationPerSeriesAlignerEnumAlignDelta         AggregationPerSeriesAlignerEnum = "ALIGN_DELTA"
	AggregationPerSeriesAlignerEnumAlignRate          AggregationPerSeriesAlignerEnum = "ALIGN_RATE"
	AggregationPerSeriesAlignerEnumAlignInterpolate   AggregationPerSeriesAlignerEnum = "ALIGN_INTERPOLATE"
	AggregationPerSeriesAlignerEnumAlignNextOlder     AggregationPerSeriesAlignerEnum = "ALIGN_NEXT_OLDER"
	AggregationPerSeriesAlignerEnumAlignMin           AggregationPerSeriesAlignerEnum = "ALIGN_MIN"
	AggregationPerSeriesAlignerEnumAlignMax           AggregationPerSeriesAlignerEnum = "ALIGN_MAX"
	AggregationPerSeriesAlignerEnumAlignMean          AggregationPerSeriesAlignerEnum = "ALIGN_MEAN"
	AggregationPerSeriesAlignerEnumAlignCount         AggregationPerSeriesAlignerEnum = "ALIGN_COUNT"
	AggregationPerSeriesAlignerEnumAlignSum           AggregationPerSeriesAlignerEnum = "ALIGN_SUM"
	AggregationPerSeriesAlignerEnumAlignStddev        AggregationPerSeriesAlignerEnum = "ALIGN_STDDEV"
	AggregationPerSeriesAlignerEnumAlignCountTrue     AggregationPerSeriesAlignerEnum = "ALIGN_COUNT_TRUE"
	AggregationPerSeriesAlignerEnumAlignCountFalse    AggregationPerSeriesAlignerEnum = "ALIGN_COUNT_FALSE"
	AggregationPerSeriesAlignerEnumAlignFractionTrue  AggregationPerSeriesAlignerEnum = "ALIGN_FRACTION_TRUE"
	AggregationPerSeriesAlignerEnumAlignPercentile99  AggregationPerSeriesAlignerEnum = "ALIGN_PERCENTILE_99"
	AggregationPerSeriesAlignerEnumAlignPercentile95  AggregationPerSeriesAlignerEnum = "ALIGN_PERCENTILE_95"
	AggregationPerSeriesAlignerEnumAlignPercentile50  AggregationPerSeriesAlignerEnum = "ALIGN_PERCENTILE_50"
	AggregationPerSeriesAlignerEnumAlignPercentile05  AggregationPerSeriesAlignerEnum = "ALIGN_PERCENTILE_05"
	AggregationPerSeriesAlignerEnumAlignPercentChange AggregationPerSeriesAlignerEnum = "ALIGN_PERCENT_CHANGE"
)

type Aggregation struct {
	AlignmentPeriod    *string                            `json:"alignmentPeriod"`
	CrossSeriesReducer *AggregationCrossSeriesReducerEnum `json:"crossSeriesReducer"`
	GroupByFields      []string                           `json:"groupByFields"`
	PerSeriesAligner   *AggregationPerSeriesAlignerEnum   `json:"perSeriesAligner"`
}
