import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConditionEvaluationEvaluationValueEnum {
    EvaluationValueUnspecified = "EVALUATION_VALUE_UNSPECIFIED",
    True = "TRUE",
    False = "FALSE",
    Conditional = "CONDITIONAL"
}
/**
 * The Condition evaluation.
**/
export declare class ConditionEvaluation extends SpeakeasyBase {
    evaluationValue?: ConditionEvaluationEvaluationValueEnum;
}
