import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MembershipRoleRestrictionEvaluationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Compliant = "COMPLIANT"
,    ForwardCompliant = "FORWARD_COMPLIANT"
,    NonCompliant = "NON_COMPLIANT"
,    Evaluating = "EVALUATING"
}


// MembershipRoleRestrictionEvaluation
/** 
 * The evaluated state of this restriction.
**/
export class MembershipRoleRestrictionEvaluation extends SpeakeasyBase {
  @Metadata({ data: "json, name=state" })
  state?: MembershipRoleRestrictionEvaluationStateEnum;
}
