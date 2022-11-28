import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConditionEvaluationEvaluationValueEnum {
    EvaluationValueUnspecified = "EVALUATION_VALUE_UNSPECIFIED",
    True = "TRUE",
    False = "FALSE",
    Conditional = "CONDITIONAL"
}


// ConditionEvaluation
/** 
 * The Condition evaluation.
**/
export class ConditionEvaluation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evaluationValue" })
  evaluationValue?: ConditionEvaluationEvaluationValueEnum;
}
