import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FixedOrPercent } from "./fixedorpercent";



// OsPolicyAssignmentRollout
/** 
 * Message to configure the rollout at the zonal level for the OS policy assignment.
**/
export class OsPolicyAssignmentRollout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disruptionBudget" })
  disruptionBudget?: FixedOrPercent;

  @SpeakeasyMetadata({ data: "json, name=minWaitDuration" })
  minWaitDuration?: string;
}
