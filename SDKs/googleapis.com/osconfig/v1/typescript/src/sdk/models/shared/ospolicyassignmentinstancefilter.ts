import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyAssignmentLabelSet } from "./ospolicyassignmentlabelset";
import { OsPolicyAssignmentInstanceFilterInventory } from "./ospolicyassignmentinstancefilterinventory";



// OsPolicyAssignmentInstanceFilter
/** 
 * Filters to select target VMs for an assignment. If more than one filter criteria is specified below, a VM will be selected if and only if it satisfies all of them.
**/
export class OsPolicyAssignmentInstanceFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=all" })
  all?: boolean;

  @SpeakeasyMetadata({ data: "json, name=exclusionLabels", elemType: OsPolicyAssignmentLabelSet })
  exclusionLabels?: OsPolicyAssignmentLabelSet[];

  @SpeakeasyMetadata({ data: "json, name=inclusionLabels", elemType: OsPolicyAssignmentLabelSet })
  inclusionLabels?: OsPolicyAssignmentLabelSet[];

  @SpeakeasyMetadata({ data: "json, name=inventories", elemType: OsPolicyAssignmentInstanceFilterInventory })
  inventories?: OsPolicyAssignmentInstanceFilterInventory[];
}
