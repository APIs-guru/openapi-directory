import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MembershipRoleRestrictionEvaluation } from "./membershiprolerestrictionevaluation";



// RestrictionEvaluations
/** 
 * Evaluations of restrictions applied to parent group on this membership.
**/
export class RestrictionEvaluations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=memberRestrictionEvaluation" })
  memberRestrictionEvaluation?: MembershipRoleRestrictionEvaluation;
}
