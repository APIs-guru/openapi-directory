import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MembershipRoleRestrictionEvaluation } from "./membershiprolerestrictionevaluation";


// RestrictionEvaluations
/** 
 * Evaluations of restrictions applied to parent group on this membership.
**/
export class RestrictionEvaluations extends SpeakeasyBase {
  @Metadata({ data: "json, name=memberRestrictionEvaluation" })
  memberRestrictionEvaluation?: MembershipRoleRestrictionEvaluation;
}
