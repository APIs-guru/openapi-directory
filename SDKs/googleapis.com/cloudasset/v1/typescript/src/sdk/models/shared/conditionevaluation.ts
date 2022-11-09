import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ConditionEvaluationEvaluationValueEnum {
    EvaluationValueUnspecified = "EVALUATION_VALUE_UNSPECIFIED"
,    True = "TRUE"
,    False = "FALSE"
,    Conditional = "CONDITIONAL"
}


// ConditionEvaluation
/** 
 * The Condition evaluation.
**/
export class ConditionEvaluation extends SpeakeasyBase {
  @Metadata({ data: "json, name=evaluationValue" })
  evaluationValue?: ConditionEvaluationEvaluationValueEnum;
}
