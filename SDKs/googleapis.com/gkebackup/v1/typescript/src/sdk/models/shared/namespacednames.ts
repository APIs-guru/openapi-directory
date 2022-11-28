import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NamespacedName } from "./namespacedname";



// NamespacedNames
/** 
 * A list of namespaced Kubernetes resources.
**/
export class NamespacedNames extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namespacedNames", elemType: NamespacedName })
  namespacedNames?: NamespacedName[];
}
