import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AggregationCrossSeriesReducerEnum {
    ReduceNone = "REDUCE_NONE",
    ReduceMean = "REDUCE_MEAN",
    ReduceMin = "REDUCE_MIN",
    ReduceMax = "REDUCE_MAX",
    ReduceSum = "REDUCE_SUM",
    ReduceStddev = "REDUCE_STDDEV",
    ReduceCount = "REDUCE_COUNT",
    ReduceCountTrue = "REDUCE_COUNT_TRUE",
    ReduceCountFalse = "REDUCE_COUNT_FALSE",
    ReduceFractionTrue = "REDUCE_FRACTION_TRUE",
    ReducePercentile99 = "REDUCE_PERCENTILE_99",
    ReducePercentile95 = "REDUCE_PERCENTILE_95",
    ReducePercentile50 = "REDUCE_PERCENTILE_50",
    ReducePercentile05 = "REDUCE_PERCENTILE_05"
}

export enum AggregationPerSeriesAlignerEnum {
    AlignNone = "ALIGN_NONE",
    AlignDelta = "ALIGN_DELTA",
    AlignRate = "ALIGN_RATE",
    AlignInterpolate = "ALIGN_INTERPOLATE",
    AlignNextOlder = "ALIGN_NEXT_OLDER",
    AlignMin = "ALIGN_MIN",
    AlignMax = "ALIGN_MAX",
    AlignMean = "ALIGN_MEAN",
    AlignCount = "ALIGN_COUNT",
    AlignSum = "ALIGN_SUM",
    AlignStddev = "ALIGN_STDDEV",
    AlignCountTrue = "ALIGN_COUNT_TRUE",
    AlignCountFalse = "ALIGN_COUNT_FALSE",
    AlignFractionTrue = "ALIGN_FRACTION_TRUE",
    AlignPercentile99 = "ALIGN_PERCENTILE_99",
    AlignPercentile95 = "ALIGN_PERCENTILE_95",
    AlignPercentile50 = "ALIGN_PERCENTILE_50",
    AlignPercentile05 = "ALIGN_PERCENTILE_05",
    AlignPercentChange = "ALIGN_PERCENT_CHANGE"
}


// Aggregation
/** 
 * Describes how to combine multiple time series to provide a different view of the data. Aggregation of time series is done in two steps. First, each time series in the set is aligned to the same time interval boundaries, then the set of time series is optionally reduced in number.Alignment consists of applying the per_series_aligner operation to each time series after its data has been divided into regular alignment_period time intervals. This process takes all of the data points in an alignment period, applies a mathematical transformation such as averaging, minimum, maximum, delta, etc., and converts them into a single data point per period.Reduction is when the aligned and transformed time series can optionally be combined, reducing the number of time series through similar mathematical transformations. Reduction involves applying a cross_series_reducer to all the time series, optionally sorting the time series into subsets with group_by_fields, and applying the reducer to each subset.The raw time series data can contain a huge amount of information from multiple sources. Alignment and reduction transforms this mass of data into a more manageable and representative collection of data, for example "the 95% latency across the average of all tasks in a cluster". This representative data can be more easily graphed and comprehended, and the individual time series data is still available for later drilldown. For more details, see Filtering and aggregation (https://cloud.google.com/monitoring/api/v3/aggregation).
**/
export class Aggregation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alignmentPeriod" })
  alignmentPeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=crossSeriesReducer" })
  crossSeriesReducer?: AggregationCrossSeriesReducerEnum;

  @SpeakeasyMetadata({ data: "json, name=groupByFields" })
  groupByFields?: string[];

  @SpeakeasyMetadata({ data: "json, name=perSeriesAligner" })
  perSeriesAligner?: AggregationPerSeriesAlignerEnum;
}
