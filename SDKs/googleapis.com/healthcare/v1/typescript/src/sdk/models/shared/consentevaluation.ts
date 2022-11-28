import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConsentEvaluationEvaluationResultEnum {
    EvaluationResultUnspecified = "EVALUATION_RESULT_UNSPECIFIED",
    NotApplicable = "NOT_APPLICABLE",
    NoMatchingPolicy = "NO_MATCHING_POLICY",
    NoSatisfiedPolicy = "NO_SATISFIED_POLICY",
    HasSatisfiedPolicy = "HAS_SATISFIED_POLICY"
}


// ConsentEvaluation
/** 
 * The detailed evaluation of a particular Consent.
**/
export class ConsentEvaluation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evaluationResult" })
  evaluationResult?: ConsentEvaluationEvaluationResultEnum;
}
