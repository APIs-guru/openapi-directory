import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OsPolicyAssignmentLabelSet } from "./ospolicyassignmentlabelset";
import { OsPolicyAssignmentLabelSet } from "./ospolicyassignmentlabelset";
import { OsPolicyAssignmentInstanceFilterInventory } from "./ospolicyassignmentinstancefilterinventory";


// OsPolicyAssignmentInstanceFilter
/** 
 * Filters to select target VMs for an assignment. If more than one filter criteria is specified below, a VM will be selected if and only if it satisfies all of them.
**/
export class OsPolicyAssignmentInstanceFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=all" })
  all?: boolean;

  @Metadata({ data: "json, name=exclusionLabels", elemType: shared.OsPolicyAssignmentLabelSet })
  exclusionLabels?: OsPolicyAssignmentLabelSet[];

  @Metadata({ data: "json, name=inclusionLabels", elemType: shared.OsPolicyAssignmentLabelSet })
  inclusionLabels?: OsPolicyAssignmentLabelSet[];

  @Metadata({ data: "json, name=inventories", elemType: shared.OsPolicyAssignmentInstanceFilterInventory })
  inventories?: OsPolicyAssignmentInstanceFilterInventory[];

  @Metadata({ data: "json, name=osShortNames" })
  osShortNames?: string[];
}
