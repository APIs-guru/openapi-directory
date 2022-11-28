import { SpeakeasyBase } from "../../../internal/utils";
import { FixedOrPercent } from "./fixedorpercent";
/**
 * Message to configure the rollout at the zonal level for the OS policy assignment.
**/
export declare class OsPolicyAssignmentRollout extends SpeakeasyBase {
    disruptionBudget?: FixedOrPercent;
    minWaitDuration?: string;
}
