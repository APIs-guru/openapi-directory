import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConsentEvaluationEvaluationResultEnum {
    EvaluationResultUnspecified = "EVALUATION_RESULT_UNSPECIFIED",
    NotApplicable = "NOT_APPLICABLE",
    NoMatchingPolicy = "NO_MATCHING_POLICY",
    NoSatisfiedPolicy = "NO_SATISFIED_POLICY",
    HasSatisfiedPolicy = "HAS_SATISFIED_POLICY"
}
/**
 * The detailed evaluation of a particular Consent.
**/
export declare class ConsentEvaluation extends SpeakeasyBase {
    evaluationResult?: ConsentEvaluationEvaluationResultEnum;
}
