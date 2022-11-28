import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MembershipRoleRestrictionEvaluationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Compliant = "COMPLIANT",
    ForwardCompliant = "FORWARD_COMPLIANT",
    NonCompliant = "NON_COMPLIANT",
    Evaluating = "EVALUATING"
}


// MembershipRoleRestrictionEvaluation
/** 
 * The evaluated state of this restriction.
**/
export class MembershipRoleRestrictionEvaluation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: MembershipRoleRestrictionEvaluationStateEnum;
}
