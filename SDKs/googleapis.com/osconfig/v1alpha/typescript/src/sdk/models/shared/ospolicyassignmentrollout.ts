import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FixedOrPercent } from "./fixedorpercent";


// OsPolicyAssignmentRollout
/** 
 * Message to configure the rollout at the zonal level for the OS policy assignment.
**/
export class OsPolicyAssignmentRollout extends SpeakeasyBase {
  @Metadata({ data: "json, name=disruptionBudget" })
  disruptionBudget?: FixedOrPercent;

  @Metadata({ data: "json, name=minWaitDuration" })
  minWaitDuration?: string;
}
