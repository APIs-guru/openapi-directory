import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OsPolicyAssignmentLabelSet
/** 
 * Message representing label set. * A label is a key value pair set for a VM. * A LabelSet is a set of labels. * Labels within a LabelSet are ANDed. In other words, a LabelSet is applicable for a VM only if it matches all the labels in the LabelSet. * Example: A LabelSet with 2 labels: `env=prod` and `type=webserver` will only be applicable for those VMs with both labels present.
**/
export class OsPolicyAssignmentLabelSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
