import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NamespacedName } from "./namespacedname";


// NamespacedNames
/** 
 * A list of namespaced Kubernetes resources.
**/
export class NamespacedNames extends SpeakeasyBase {
  @Metadata({ data: "json, name=namespacedNames", elemType: shared.NamespacedName })
  namespacedNames?: NamespacedName[];
}
