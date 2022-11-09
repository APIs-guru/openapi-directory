import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Aggregation } from "./aggregation";
import { Aggregation } from "./aggregation";
import { Trigger } from "./trigger";

export enum MetricThresholdComparisonEnum {
    ComparisonUnspecified = "COMPARISON_UNSPECIFIED"
,    ComparisonGt = "COMPARISON_GT"
,    ComparisonGe = "COMPARISON_GE"
,    ComparisonLt = "COMPARISON_LT"
,    ComparisonLe = "COMPARISON_LE"
,    ComparisonEq = "COMPARISON_EQ"
,    ComparisonNe = "COMPARISON_NE"
}

export enum MetricThresholdEvaluationMissingDataEnum {
    EvaluationMissingDataUnspecified = "EVALUATION_MISSING_DATA_UNSPECIFIED"
,    EvaluationMissingDataInactive = "EVALUATION_MISSING_DATA_INACTIVE"
,    EvaluationMissingDataActive = "EVALUATION_MISSING_DATA_ACTIVE"
,    EvaluationMissingDataNoOp = "EVALUATION_MISSING_DATA_NO_OP"
}


// MetricThreshold
/** 
 * A condition type that compares a collection of time series against a threshold.
**/
export class MetricThreshold extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregations", elemType: shared.Aggregation })
  aggregations?: Aggregation[];

  @Metadata({ data: "json, name=comparison" })
  comparison?: MetricThresholdComparisonEnum;

  @Metadata({ data: "json, name=denominatorAggregations", elemType: shared.Aggregation })
  denominatorAggregations?: Aggregation[];

  @Metadata({ data: "json, name=denominatorFilter" })
  denominatorFilter?: string;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=evaluationMissingData" })
  evaluationMissingData?: MetricThresholdEvaluationMissingDataEnum;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=thresholdValue" })
  thresholdValue?: number;

  @Metadata({ data: "json, name=trigger" })
  trigger?: Trigger;
}
