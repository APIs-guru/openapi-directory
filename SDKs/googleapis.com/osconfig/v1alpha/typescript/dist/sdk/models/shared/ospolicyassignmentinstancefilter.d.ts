import { SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyAssignmentLabelSet } from "./ospolicyassignmentlabelset";
import { OsPolicyAssignmentInstanceFilterInventory } from "./ospolicyassignmentinstancefilterinventory";
/**
 * Filters to select target VMs for an assignment. If more than one filter criteria is specified below, a VM will be selected if and only if it satisfies all of them.
**/
export declare class OsPolicyAssignmentInstanceFilter extends SpeakeasyBase {
    all?: boolean;
    exclusionLabels?: OsPolicyAssignmentLabelSet[];
    inclusionLabels?: OsPolicyAssignmentLabelSet[];
    inventories?: OsPolicyAssignmentInstanceFilterInventory[];
    osShortNames?: string[];
}
