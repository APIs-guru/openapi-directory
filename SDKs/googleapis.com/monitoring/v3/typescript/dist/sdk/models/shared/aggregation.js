var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var AggregationCrossSeriesReducerEnum;
(function (AggregationCrossSeriesReducerEnum) {
    AggregationCrossSeriesReducerEnum["ReduceNone"] = "REDUCE_NONE";
    AggregationCrossSeriesReducerEnum["ReduceMean"] = "REDUCE_MEAN";
    AggregationCrossSeriesReducerEnum["ReduceMin"] = "REDUCE_MIN";
    AggregationCrossSeriesReducerEnum["ReduceMax"] = "REDUCE_MAX";
    AggregationCrossSeriesReducerEnum["ReduceSum"] = "REDUCE_SUM";
    AggregationCrossSeriesReducerEnum["ReduceStddev"] = "REDUCE_STDDEV";
    AggregationCrossSeriesReducerEnum["ReduceCount"] = "REDUCE_COUNT";
    AggregationCrossSeriesReducerEnum["ReduceCountTrue"] = "REDUCE_COUNT_TRUE";
    AggregationCrossSeriesReducerEnum["ReduceCountFalse"] = "REDUCE_COUNT_FALSE";
    AggregationCrossSeriesReducerEnum["ReduceFractionTrue"] = "REDUCE_FRACTION_TRUE";
    AggregationCrossSeriesReducerEnum["ReducePercentile99"] = "REDUCE_PERCENTILE_99";
    AggregationCrossSeriesReducerEnum["ReducePercentile95"] = "REDUCE_PERCENTILE_95";
    AggregationCrossSeriesReducerEnum["ReducePercentile50"] = "REDUCE_PERCENTILE_50";
    AggregationCrossSeriesReducerEnum["ReducePercentile05"] = "REDUCE_PERCENTILE_05";
})(AggregationCrossSeriesReducerEnum || (AggregationCrossSeriesReducerEnum = {}));
export var AggregationPerSeriesAlignerEnum;
(function (AggregationPerSeriesAlignerEnum) {
    AggregationPerSeriesAlignerEnum["AlignNone"] = "ALIGN_NONE";
    AggregationPerSeriesAlignerEnum["AlignDelta"] = "ALIGN_DELTA";
    AggregationPerSeriesAlignerEnum["AlignRate"] = "ALIGN_RATE";
    AggregationPerSeriesAlignerEnum["AlignInterpolate"] = "ALIGN_INTERPOLATE";
    AggregationPerSeriesAlignerEnum["AlignNextOlder"] = "ALIGN_NEXT_OLDER";
    AggregationPerSeriesAlignerEnum["AlignMin"] = "ALIGN_MIN";
    AggregationPerSeriesAlignerEnum["AlignMax"] = "ALIGN_MAX";
    AggregationPerSeriesAlignerEnum["AlignMean"] = "ALIGN_MEAN";
    AggregationPerSeriesAlignerEnum["AlignCount"] = "ALIGN_COUNT";
    AggregationPerSeriesAlignerEnum["AlignSum"] = "ALIGN_SUM";
    AggregationPerSeriesAlignerEnum["AlignStddev"] = "ALIGN_STDDEV";
    AggregationPerSeriesAlignerEnum["AlignCountTrue"] = "ALIGN_COUNT_TRUE";
    AggregationPerSeriesAlignerEnum["AlignCountFalse"] = "ALIGN_COUNT_FALSE";
    AggregationPerSeriesAlignerEnum["AlignFractionTrue"] = "ALIGN_FRACTION_TRUE";
    AggregationPerSeriesAlignerEnum["AlignPercentile99"] = "ALIGN_PERCENTILE_99";
    AggregationPerSeriesAlignerEnum["AlignPercentile95"] = "ALIGN_PERCENTILE_95";
    AggregationPerSeriesAlignerEnum["AlignPercentile50"] = "ALIGN_PERCENTILE_50";
    AggregationPerSeriesAlignerEnum["AlignPercentile05"] = "ALIGN_PERCENTILE_05";
    AggregationPerSeriesAlignerEnum["AlignPercentChange"] = "ALIGN_PERCENT_CHANGE";
})(AggregationPerSeriesAlignerEnum || (AggregationPerSeriesAlignerEnum = {}));
// Aggregation
/**
 * Describes how to combine multiple time series to provide a different view of the data. Aggregation of time series is done in two steps. First, each time series in the set is aligned to the same time interval boundaries, then the set of time series is optionally reduced in number.Alignment consists of applying the per_series_aligner operation to each time series after its data has been divided into regular alignment_period time intervals. This process takes all of the data points in an alignment period, applies a mathematical transformation such as averaging, minimum, maximum, delta, etc., and converts them into a single data point per period.Reduction is when the aligned and transformed time series can optionally be combined, reducing the number of time series through similar mathematical transformations. Reduction involves applying a cross_series_reducer to all the time series, optionally sorting the time series into subsets with group_by_fields, and applying the reducer to each subset.The raw time series data can contain a huge amount of information from multiple sources. Alignment and reduction transforms this mass of data into a more manageable and representative collection of data, for example "the 95% latency across the average of all tasks in a cluster". This representative data can be more easily graphed and comprehended, and the individual time series data is still available for later drilldown. For more details, see Filtering and aggregation (https://cloud.google.com/monitoring/api/v3/aggregation).
**/
var Aggregation = /** @class */ (function (_super) {
    __extends(Aggregation, _super);
    function Aggregation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alignmentPeriod" }),
        __metadata("design:type", String)
    ], Aggregation.prototype, "alignmentPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crossSeriesReducer" }),
        __metadata("design:type", String)
    ], Aggregation.prototype, "crossSeriesReducer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupByFields" }),
        __metadata("design:type", Array)
    ], Aggregation.prototype, "groupByFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perSeriesAligner" }),
        __metadata("design:type", String)
    ], Aggregation.prototype, "perSeriesAligner", void 0);
    return Aggregation;
}(SpeakeasyBase));
export { Aggregation };
