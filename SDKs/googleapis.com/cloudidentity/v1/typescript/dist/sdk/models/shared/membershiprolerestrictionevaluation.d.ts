import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum MembershipRoleRestrictionEvaluationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Compliant = "COMPLIANT",
    ForwardCompliant = "FORWARD_COMPLIANT",
    NonCompliant = "NON_COMPLIANT",
    Evaluating = "EVALUATING"
}
/**
 * The evaluated state of this restriction.
**/
export declare class MembershipRoleRestrictionEvaluation extends SpeakeasyBase {
    state?: MembershipRoleRestrictionEvaluationStateEnum;
}
