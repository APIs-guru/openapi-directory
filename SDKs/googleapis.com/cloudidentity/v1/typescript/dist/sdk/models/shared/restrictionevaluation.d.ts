import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum RestrictionEvaluationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Evaluating = "EVALUATING",
    Compliant = "COMPLIANT",
    ForwardCompliant = "FORWARD_COMPLIANT",
    NonCompliant = "NON_COMPLIANT"
}
/**
 * The evaluated state of this restriction.
**/
export declare class RestrictionEvaluation extends SpeakeasyBase {
    state?: RestrictionEvaluationStateEnum;
}
