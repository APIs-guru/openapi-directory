import { SpeakeasyBase } from "../../../internal/utils";
import { Aggregation } from "./aggregation";
import { Trigger } from "./trigger";
export declare enum MetricThresholdComparisonEnum {
    ComparisonUnspecified = "COMPARISON_UNSPECIFIED",
    ComparisonGt = "COMPARISON_GT",
    ComparisonGe = "COMPARISON_GE",
    ComparisonLt = "COMPARISON_LT",
    ComparisonLe = "COMPARISON_LE",
    ComparisonEq = "COMPARISON_EQ",
    ComparisonNe = "COMPARISON_NE"
}
export declare enum MetricThresholdEvaluationMissingDataEnum {
    EvaluationMissingDataUnspecified = "EVALUATION_MISSING_DATA_UNSPECIFIED",
    EvaluationMissingDataInactive = "EVALUATION_MISSING_DATA_INACTIVE",
    EvaluationMissingDataActive = "EVALUATION_MISSING_DATA_ACTIVE",
    EvaluationMissingDataNoOp = "EVALUATION_MISSING_DATA_NO_OP"
}
/**
 * A condition type that compares a collection of time series against a threshold.
**/
export declare class MetricThreshold extends SpeakeasyBase {
    aggregations?: Aggregation[];
    comparison?: MetricThresholdComparisonEnum;
    denominatorAggregations?: Aggregation[];
    denominatorFilter?: string;
    duration?: string;
    evaluationMissingData?: MetricThresholdEvaluationMissingDataEnum;
    filter?: string;
    thresholdValue?: number;
    trigger?: Trigger;
}
