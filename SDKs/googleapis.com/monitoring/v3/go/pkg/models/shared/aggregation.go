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

// Aggregation
// Describes how to combine multiple time series to provide a different view of the data. Aggregation of time series is done in two steps. First, each time series in the set is aligned to the same time interval boundaries, then the set of time series is optionally reduced in number.Alignment consists of applying the per_series_aligner operation to each time series after its data has been divided into regular alignment_period time intervals. This process takes all of the data points in an alignment period, applies a mathematical transformation such as averaging, minimum, maximum, delta, etc., and converts them into a single data point per period.Reduction is when the aligned and transformed time series can optionally be combined, reducing the number of time series through similar mathematical transformations. Reduction involves applying a cross_series_reducer to all the time series, optionally sorting the time series into subsets with group_by_fields, and applying the reducer to each subset.The raw time series data can contain a huge amount of information from multiple sources. Alignment and reduction transforms this mass of data into a more manageable and representative collection of data, for example "the 95% latency across the average of all tasks in a cluster". This representative data can be more easily graphed and comprehended, and the individual time series data is still available for later drilldown. For more details, see Filtering and aggregation (https://cloud.google.com/monitoring/api/v3/aggregation).
type Aggregation struct {
	AlignmentPeriod    *string                            `json:"alignmentPeriod,omitempty"`
	CrossSeriesReducer *AggregationCrossSeriesReducerEnum `json:"crossSeriesReducer,omitempty"`
	GroupByFields      []string                           `json:"groupByFields,omitempty"`
	PerSeriesAligner   *AggregationPerSeriesAlignerEnum   `json:"perSeriesAligner,omitempty"`
}
