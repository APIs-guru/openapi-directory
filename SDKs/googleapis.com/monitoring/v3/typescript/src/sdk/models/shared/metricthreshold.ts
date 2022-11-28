import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Aggregation } from "./aggregation";
import { Trigger } from "./trigger";


export enum MetricThresholdComparisonEnum {
    ComparisonUnspecified = "COMPARISON_UNSPECIFIED",
    ComparisonGt = "COMPARISON_GT",
    ComparisonGe = "COMPARISON_GE",
    ComparisonLt = "COMPARISON_LT",
    ComparisonLe = "COMPARISON_LE",
    ComparisonEq = "COMPARISON_EQ",
    ComparisonNe = "COMPARISON_NE"
}

export enum MetricThresholdEvaluationMissingDataEnum {
    EvaluationMissingDataUnspecified = "EVALUATION_MISSING_DATA_UNSPECIFIED",
    EvaluationMissingDataInactive = "EVALUATION_MISSING_DATA_INACTIVE",
    EvaluationMissingDataActive = "EVALUATION_MISSING_DATA_ACTIVE",
    EvaluationMissingDataNoOp = "EVALUATION_MISSING_DATA_NO_OP"
}


// MetricThreshold
/** 
 * A condition type that compares a collection of time series against a threshold.
**/
export class MetricThreshold extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregations", elemType: Aggregation })
  aggregations?: Aggregation[];

  @SpeakeasyMetadata({ data: "json, name=comparison" })
  comparison?: MetricThresholdComparisonEnum;

  @SpeakeasyMetadata({ data: "json, name=denominatorAggregations", elemType: Aggregation })
  denominatorAggregations?: Aggregation[];

  @SpeakeasyMetadata({ data: "json, name=denominatorFilter" })
  denominatorFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=evaluationMissingData" })
  evaluationMissingData?: MetricThresholdEvaluationMissingDataEnum;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=thresholdValue" })
  thresholdValue?: number;

  @SpeakeasyMetadata({ data: "json, name=trigger" })
  trigger?: Trigger;
}
